import fs from "fs";
import path from "path";
import { normalizeListings } from "./match-listings";
import { runAggregation } from "./aggregate-history";
import type {
  DailySnapshot,
  NormalizedListing,
  PlantPriceHistory,
  PriceEntry,
} from "../data/prices/types";

const SNAPSHOTS_DIR = path.join(process.cwd(), "data/prices/snapshots");
const HISTORY_DIR = path.join(process.cwd(), "data/prices/history");

interface CliOptions {
  from?: string;
  to?: string;
  dryRun: boolean;
  slugs: Set<string>;
}

function parseArgs(argv: string[]): CliOptions {
  const options: CliOptions = {
    dryRun: false,
    slugs: new Set<string>(),
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }

    if (arg === "--from") {
      options.from = argv[++i];
      continue;
    }

    if (arg === "--to") {
      options.to = argv[++i];
      continue;
    }

    if (arg === "--slug") {
      const value = argv[++i];
      for (const slug of value.split(",").map((s) => s.trim()).filter(Boolean)) {
        options.slugs.add(slug);
      }
      continue;
    }

    if (arg.startsWith("--slug=")) {
      for (const slug of arg.slice("--slug=".length).split(",").map((s) => s.trim()).filter(Boolean)) {
        options.slugs.add(slug);
      }
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

function listSnapshotDates(options: CliOptions): string[] {
  if (!fs.existsSync(SNAPSHOTS_DIR)) {
    throw new Error(`No snapshots directory found at ${SNAPSHOTS_DIR}`);
  }

  return fs
    .readdirSync(SNAPSHOTS_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.replace(/\.json$/, ""))
    .filter((date) => {
      if (options.from && date < options.from) return false;
      if (options.to && date > options.to) return false;
      return true;
    })
    .sort();
}

function loadSnapshot(date: string): DailySnapshot {
  const snapshotPath = path.join(SNAPSHOTS_DIR, `${date}.json`);
  return JSON.parse(fs.readFileSync(snapshotPath, "utf8")) as DailySnapshot;
}

function toPriceEntry(listing: NormalizedListing): PriceEntry {
  return {
    date: listing.snapshotDate,
    sellerId: listing.sellerId,
    sellerName: listing.sellerName,
    title: listing.title,
    productUrl: listing.productUrl,
    price: listing.price,
    priceHigh: listing.priceHigh,
    available: listing.available,
    growthStage: listing.growthStage,
    confidence: listing.confidence,
  };
}

function sortEntries(a: PriceEntry, b: PriceEntry): number {
  return (
    a.date.localeCompare(b.date) ||
    a.sellerName.localeCompare(b.sellerName) ||
    a.productUrl.localeCompare(b.productUrl)
  );
}

function readHistory(slug: string): PlantPriceHistory {
  const historyPath = path.join(HISTORY_DIR, `${slug}.json`);
  if (!fs.existsSync(historyPath)) {
    return {
      slug,
      lastUpdated: "",
      entries: [],
    };
  }

  return JSON.parse(fs.readFileSync(historyPath, "utf8")) as PlantPriceHistory;
}

function writeHistory(history: PlantPriceHistory): void {
  const historyPath = path.join(HISTORY_DIR, `${history.slug}.json`);
  fs.writeFileSync(historyPath, `${JSON.stringify(history, null, 2)}\n`);
}

function applySnapshotEntries(
  history: PlantPriceHistory,
  date: string,
  entries: PriceEntry[],
): { replaced: number; added: number } {
  const existingForDate = history.entries.filter((entry) => entry.date === date).length;
  history.entries = history.entries.filter((entry) => entry.date !== date);
  history.entries.push(...entries);
  history.entries.sort(sortEntries);
  return {
    replaced: existingForDate,
    added: entries.length,
  };
}

function run() {
  const options = parseArgs(process.argv.slice(2));

  fs.mkdirSync(HISTORY_DIR, { recursive: true });

  const snapshotDates = listSnapshotDates(options);
  if (snapshotDates.length === 0) {
    console.log("No snapshot dates matched the requested range.");
    return;
  }

  console.log(`Backfilling from ${snapshotDates.length} snapshot(s)`);
  if (options.slugs.size > 0) {
    console.log(`Slug filter: ${Array.from(options.slugs).join(", ")}`);
  }
  if (options.dryRun) {
    console.log("Dry run only. No files will be written.");
  }

  const histories = new Map<string, PlantPriceHistory>();
  const summary = new Map<string, { dates: number; entries: number; replaced: number }>();

  for (const date of snapshotDates) {
    const snapshot = loadSnapshot(date);
    const normalized = normalizeListings(snapshot.listings).filter((listing) =>
      options.slugs.size === 0 ? true : options.slugs.has(listing.slug),
    );

    if (normalized.length === 0) continue;

    const bySlug = new Map<string, PriceEntry[]>();
    for (const listing of normalized) {
      const entries = bySlug.get(listing.slug) ?? [];
      entries.push(toPriceEntry(listing));
      bySlug.set(listing.slug, entries);
    }

    for (const [slug, entries] of Array.from(bySlug.entries())) {
      const history = histories.get(slug) ?? readHistory(slug);
      const stats = applySnapshotEntries(history, date, entries);
      history.lastUpdated = snapshot.date;
      histories.set(slug, history);

      const current = summary.get(slug) ?? { dates: 0, entries: 0, replaced: 0 };
      current.dates += 1;
      current.entries += stats.added;
      current.replaced += stats.replaced;
      summary.set(slug, current);
    }
  }

  if (histories.size === 0) {
    console.log("No matched listings found in the selected snapshots.");
    return;
  }

  for (const [slug, stats] of Array.from(summary.entries()).sort((a, b) =>
    a[0].localeCompare(b[0]),
  )) {
    console.log(
      `${slug}: ${stats.entries} entries across ${stats.dates} date(s)` +
        (stats.replaced > 0 ? `, replaced ${stats.replaced} existing date entries` : ""),
    );
  }

  if (options.dryRun) return;

  for (const history of Array.from(histories.values())) {
    writeHistory(history);
  }

  runAggregation();
}

run();
