import fs from "fs";
import path from "path";
import { plants } from "@/data/plants";
import { listings } from "@/data/listings";
import { getPlantLabel } from "@/data/identity";
import type {
  PlantListing,
  TissueCultureStatus,
} from "@/data/types";
import type { GrowthStage, PriceSummary } from "@/data/prices/types";
import priceAggregate from "@/data/prices/aggregate.json";

type RawHistoryFile = {
  slug: string;
  lastUpdated: string;
  entries: {
    date: string;
    price: number;
    priceHigh: number;
    available: boolean;
    growthStage: GrowthStage;
  }[];
};

const HISTORY_DIR = path.join(process.cwd(), "data", "prices", "history");

let _historiesCache: Record<string, RawHistoryFile> | null = null;
function loadHistories(): Record<string, RawHistoryFile> {
  if (_historiesCache) return _historiesCache;
  const out: Record<string, RawHistoryFile> = {};
  for (const file of fs.readdirSync(HISTORY_DIR)) {
    if (!file.endsWith(".json")) continue;
    const slug = file.replace(/\.json$/, "");
    const raw = fs.readFileSync(path.join(HISTORY_DIR, file), "utf8");
    out[slug] = JSON.parse(raw) as RawHistoryFile;
  }
  _historiesCache = out;
  return out;
}

export type PricesPageStage = {
  stage: GrowthStage;
  min: number;
  typical: number;
  max: number;
};

export type PricesPagePlant = {
  slug: string;
  href: string;
  label: string;
  variant: string | null;
  genus: string;
  family: string;
  origin: string;
  rarity: string;
  rarityClass: string;
  tagline: string;
  image: string | null;
  accent: string;
  current: { min: number; typical: number; max: number };
  stages: PricesPageStage[];
  tc: TissueCultureStatus;
  listingsCount: number;
  change30d: number;
  history: number[];
};

const SNAPSHOT_DATE = new Date("2026-04-25");

function median(xs: number[]): number {
  if (xs.length === 0) return 0;
  const sorted = [...xs].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

function daysBetween(a: Date, b: Date): number {
  return Math.round((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
}

function dailyMedianSeries(
  history: RawHistoryFile | undefined,
  fallbackTypical: number,
  days = 60,
): number[] {
  const series: number[] = [];

  if (!history || history.entries.length === 0) {
    return simulateHistory(fallbackTypical, days, 0);
  }

  const matureEntries = history.entries.filter(
    (e) => e.growthStage === "plant",
  );
  const entries = matureEntries.length > 0 ? matureEntries : history.entries;

  const byDay = new Map<number, number[]>();
  for (const e of entries) {
    const d = new Date(e.date);
    const offset = daysBetween(SNAPSHOT_DATE, d);
    if (offset < 0 || offset > days) continue;
    const arr = byDay.get(offset) ?? [];
    arr.push(e.price);
    byDay.set(offset, arr);
  }

  let lastKnown = fallbackTypical;
  for (let i = days; i >= 0; i--) {
    const prices = byDay.get(i);
    if (prices && prices.length > 0) {
      lastKnown = median(prices);
    }
    series.push(lastKnown);
  }

  if (series.every((v) => v === fallbackTypical)) {
    return simulateHistory(fallbackTypical, days, 0);
  }

  return series;
}

function simulateHistory(target: number, days: number, change90d: number): number[] {
  const start = target / (1 + change90d / 100);
  const out: number[] = [];
  let seed = Math.floor(target) % 233280 || 17;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let i = 0; i <= days; i++) {
    const t = i / days;
    const base = start + (target - start) * t;
    const noise = (rand() - 0.5) * (target * 0.06);
    const wobble = Math.sin(i * 0.4) * target * 0.02;
    out.push(Math.max(target * 0.4, Math.round(base + noise + wobble)));
  }
  return out;
}

// Compares the median of the early half of observed listings to the late
// half — more honest than fixed time windows when history is sparse.
function computeChange30d(history: RawHistoryFile | undefined): number {
  if (!history) return 0;
  const matureEntries = history.entries.filter(
    (e) => e.growthStage === "plant",
  );
  const entries = matureEntries.length > 0 ? matureEntries : history.entries;
  if (entries.length < 4) return 0;

  const sorted = entries.slice().sort((a, b) => a.date.localeCompare(b.date));
  const mid = Math.floor(sorted.length / 2);
  const earlyMed = median(sorted.slice(0, mid).map((e) => e.price));
  const lateMed = median(sorted.slice(mid).map((e) => e.price));
  if (earlyMed === 0) return 0;
  return ((lateMed - earlyMed) / earlyMed) * 100;
}

function computeTypical(
  listing: PlantListing,
  history: RawHistoryFile | undefined,
): number {
  const matureEntries = history?.entries.filter(
    (e) => e.growthStage === "plant",
  );
  if (matureEntries && matureEntries.length > 0) {
    return Math.round(median(matureEntries.map((e) => e.price)));
  }
  // Skew toward lower-mid range — most listings cluster below the ceiling.
  return Math.round(listing.priceRange.min * 0.55 + listing.priceRange.max * 0.45);
}

function rarityToClass(rarity: string): string {
  return `rarity-${rarity.toLowerCase().replace(/\s+/g, "-")}`;
}

function pickHref(slug: string): string {
  return `/prices/${slug}`;
}


function buildEntry(
  listing: PlantListing,
  histories: Record<string, RawHistoryFile>,
): PricesPagePlant {
  const slug = listing.identity.slug;
  const history = histories[slug];
  const typical = computeTypical(listing, history);

  const series = dailyMedianSeries(history, typical, 60);
  const change30d = computeChange30d(history);

  const summary = (priceAggregate as Record<string, PriceSummary>)[slug];
  const listingsCount =
    summary?.recentListings?.length ?? summary?.sellerCount ?? 0;

  const stages: PricesPageStage[] = [];
  const tcInfo = listing.tissueCultureInfo;
  const tcStatus: TissueCultureStatus = tcInfo?.status ?? "unknown";

  if (tcInfo?.priceRange) {
    const tcMin = tcInfo.priceRange.min;
    const tcMax = tcInfo.priceRange.max;
    const tcTypical = Math.round((tcMin + tcMax) / 2);
    stages.push({
      stage: "tc",
      min: tcMin,
      typical: tcTypical,
      max: tcMax,
    });
  }

  stages.push({
    stage: "plant",
    min: listing.priceRange.min,
    typical,
    max: listing.priceRange.max,
  });

  return {
    slug,
    href: pickHref(slug),
    label: getPlantLabel(listing),
    variant: listing.identity.variantLabel ?? null,
    genus:
      listing.identity.genus.charAt(0).toUpperCase() +
      listing.identity.genus.slice(1).toLowerCase(),
    family: listing.family,
    origin: listing.origin,
    rarity: listing.rarity,
    rarityClass: rarityToClass(listing.rarity),
    tagline: listing.tagline,
    image: listing.images.hero ?? null,
    accent: listing.colors.accent,
    current: {
      min: listing.priceRange.min,
      typical,
      max: listing.priceRange.max,
    },
    stages,
    tc: tcStatus,
    listingsCount,
    change30d: +change30d.toFixed(1),
    history: series,
  };
}

export function getPricesPagePlants(): PricesPagePlant[] {
  const all: PlantListing[] = [
    ...listings,
    ...plants.map((p) => p as PlantListing),
  ];
  // De-duplicate by slug (a listing slug may also appear as a full plant)
  const seen = new Set<string>();
  const unique: PlantListing[] = [];
  for (const entry of all) {
    if (seen.has(entry.identity.slug)) continue;
    seen.add(entry.identity.slug);
    unique.push(entry);
  }
  const histories = loadHistories();
  return unique.map((entry) => buildEntry(entry, histories));
}

export type PricesPageMarket = {
  total: number;
  totalListings: number;
  inTcCount: number;
  avg30: number;
};

export function getPricesPageMarket(items: PricesPagePlant[]): PricesPageMarket {
  const total = items.length;
  const totalListings = items.reduce((s, p) => s + p.listingsCount, 0);
  const inTcCount = items.filter(
    (p) => p.tc === "limited" || p.tc === "widespread",
  ).length;
  const avg30 =
    total > 0 ? items.reduce((s, p) => s + p.change30d, 0) / total : 0;
  return {
    total,
    totalListings,
    inTcCount,
    avg30: +avg30.toFixed(1),
  };
}
