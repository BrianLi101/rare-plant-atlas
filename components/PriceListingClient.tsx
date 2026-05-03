"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { PlantListing, TissueCultureStatus } from "@/data/types";
import type { PriceSummary, GrowthStage } from "@/data/prices/types";
import { formatUsd } from "@/data/price";
import {
  getPlantLabel,
  getPlantFullName,
  getPlantVariantLabel,
} from "@/data/identity";
import { Navigation } from "@/components/Navigation";
import {
  getPlantPlaceholderVariant,
  PlantPlaceholder,
} from "@/components/PlantPlaceholder";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
);

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export type RelatedCard = {
  slug: string;
  href: string;
  label: string;
  displayName: {
    primary: string;
    italic: string | null;
    cultivar: string | null;
  };
  image: string | null;
  rarity: string;
  tagline: string;
  typical: number;
  change30d: number;
  accent: string;
  genus: string;
};

// ---------------------------------------------------------------------------
// Tokens
// ---------------------------------------------------------------------------

const GROWTH_STAGE_LABELS: Record<GrowthStage, string> = {
  tc: "Tissue Culture",
  cutting: "Rooted Cutting",
  corm: "Corm",
  plant: "Established Plant",
};

const GROWTH_STAGE_ORDER: GrowthStage[] = ["tc", "cutting", "corm", "plant"];
const GROWTH_STAGE_COLORS: Record<GrowthStage, string> = {
  tc: "#85b98e",
  cutting: "#cdab79",
  corm: "#7F77DD",
  plant: "#D4537E",
};

const TC_LABEL: Record<TissueCultureStatus, string> = {
  unknown: "Unclear",
  none: "Not in TC",
  limited: "Limited TC",
  widespread: "Widespread TC",
};

// ---------------------------------------------------------------------------
// Format helpers
// ---------------------------------------------------------------------------

function fmtRange(lo: number, hi: number) {
  return `${formatUsd(lo)} – ${formatUsd(hi)}`;
}

function fmtDelta(n: number) {
  const arrow = n > 0 ? "▲" : n < 0 ? "▼" : "◆";
  return `${arrow} ${Math.abs(n).toFixed(1)}%`;
}

function fmtShortDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// ---------------------------------------------------------------------------
// Stage grouping (existing behavior — kept identical)
// ---------------------------------------------------------------------------

interface StageGroup {
  stage: GrowthStage;
  listings: PriceSummary["recentListings"];
  min: number;
  max: number;
  typical: number;
  count: number;
}

function groupByStage(summary: PriceSummary): StageGroup[] {
  const map = new Map<GrowthStage, PriceSummary["recentListings"]>();
  for (const l of summary.recentListings) {
    const list = map.get(l.growthStage) ?? [];
    list.push(l);
    map.set(l.growthStage, list);
  }

  return GROWTH_STAGE_ORDER.filter((s) => map.has(s)).map((stage) => {
    const listings = map.get(stage)!;
    const prices = listings.flatMap((l) => [l.price, l.priceHigh]);
    return {
      stage,
      listings,
      min: Math.min(...prices),
      max: Math.max(...prices),
      typical: Math.round(prices.reduce((a, b) => a + b, 0) / prices.length),
      count: listings.length,
    };
  });
}

// ---------------------------------------------------------------------------
// Display name (italic species)
// ---------------------------------------------------------------------------

function DisplayName({
  name,
}: {
  name: { primary: string; italic: string | null; cultivar: string | null };
}) {
  return (
    <>
      {name.primary}
      {name.italic ? (
        <>
          {" "}
          <em className="font-serif italic font-normal">{name.italic}</em>
        </>
      ) : null}
      {name.cultivar ? ` ${name.cultivar}` : ""}
    </>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

type ChartPoint = {
  x: string;
  y: number;
  sellerName: string;
  date: string;
  priceHigh: number;
};

function StageCard({ group }: { group: StageGroup }) {
  const dot = GROWTH_STAGE_COLORS[group.stage];
  return (
    <div
      className={
        // Desktop: bordered card with vertical layout
        "rounded-xl border border-cream/[0.07] bg-cream/[0.02] p-5 transition-colors hover:border-cream/[0.12] " +
        // Mobile: flat row inside the wrapper, horizontal layout
        "max-sm:rounded-none max-sm:border-0 max-sm:border-b max-sm:border-b-cream/[0.07] max-sm:bg-transparent max-sm:p-4 max-sm:grid max-sm:grid-cols-[1fr_auto_auto] max-sm:gap-3.5 max-sm:items-center max-sm:hover:border-cream/[0.07] max-sm:[&:last-child]:border-b-0"
      }
    >
      <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-cream/50 mb-4 max-sm:mb-0 max-sm:text-[9px] max-sm:tracking-[0.10em] max-sm:gap-1.5">
        <span
          className="inline-block h-2 w-2 rounded-full max-sm:h-[7px] max-sm:w-[7px]"
          style={{ background: dot }}
        />
        {GROWTH_STAGE_LABELS[group.stage]}
      </div>
      <div className="font-mono text-[36px] leading-none text-cream tracking-tight mb-1.5 max-sm:text-[20px] max-sm:mb-0 max-sm:text-right">
        {formatUsd(group.typical)}
      </div>
      <div className="font-mono text-[11px] text-cream/40 mb-3.5 max-sm:hidden">
        typical · {group.count} sale{group.count !== 1 ? "s" : ""} tracked
      </div>
      <div className="font-mono text-[11px] text-cream/50 pt-3.5 border-t border-cream/[0.07] max-sm:pt-0 max-sm:border-t-0 max-sm:text-[10px] max-sm:text-cream/40 max-sm:whitespace-nowrap">
        <span className="text-cream/30 mr-1.5 max-sm:hidden">Range</span>
        {fmtRange(group.min, group.max)}
      </div>
    </div>
  );
}

function PriceTrendChart({ summary }: { summary: PriceSummary }) {
  const chartListings = useMemo(() => {
    return [...summary.recentListings].sort((a, b) => {
      if (a.date !== b.date) return a.date.localeCompare(b.date);
      return a.price - b.price;
    });
  }, [summary]);

  const labels = useMemo(() => {
    return Array.from(new Set(chartListings.map((l) => l.date))).map((date) =>
      new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    );
  }, [chartListings]);

  const datasets = useMemo<ChartData<"line", ChartPoint[], string>["datasets"]>(
    () => {
      return GROWTH_STAGE_ORDER.flatMap((stage) => {
        const ls = chartListings.filter((l) => l.growthStage === stage);
        if (ls.length === 0) return [];
        return [
          {
            label: GROWTH_STAGE_LABELS[stage],
            data: ls.map((l) => ({
              x: new Date(l.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              }),
              y: l.price,
              sellerName: l.sellerName,
              date: l.date,
              priceHigh: l.priceHigh,
            })),
            borderColor: GROWTH_STAGE_COLORS[stage],
            backgroundColor: GROWTH_STAGE_COLORS[stage],
            showLine: false,
            pointRadius: stage === "plant" ? 5 : stage === "cutting" ? 4.5 : 4,
            pointHoverRadius: 6,
            pointHitRadius: 12,
          },
        ];
      });
    },
    [chartListings],
  );

  if (datasets.length === 0) return null;

  const data: ChartData<"line", ChartPoint[], string> = { labels, datasets };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          title: (items) => {
            const first = items[0]?.raw as { date?: string } | undefined;
            return first?.date
              ? new Date(first.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "";
          },
          label: (ctx) => {
            const point = ctx.raw as
              | { y: number; sellerName: string; priceHigh: number }
              | undefined;
            if (!point) return ctx.dataset.label ?? "";
            const priceDisplay =
              point.y === point.priceHigh
                ? formatUsd(point.y)
                : `${formatUsd(point.y)}–${formatUsd(point.priceHigh)}`;
            return `${point.sellerName} (${ctx.dataset.label}): ${priceDisplay}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "rgba(250,247,242,0.2)", font: { size: 11 } },
      },
      y: {
        grid: { color: "rgba(250,247,242,0.07)" },
        ticks: {
          color: "rgba(250,247,242,0.3)",
          font: { size: 11 },
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  const stagesPresent = GROWTH_STAGE_ORDER.filter((s) =>
    chartListings.some((l) => l.growthStage === s),
  );

  return (
    <div className="rounded-xl border border-cream/[0.07] bg-cream/[0.02] px-6 py-5">
      <div className="flex items-end justify-between gap-6 flex-wrap mb-4">
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream/30 mb-1">
            90-day price observations
          </div>
          <div className="font-mono text-xs text-cream/50">
            Each dot is one tracked listing — sized by stage.
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {stagesPresent.map((stage) => (
            <div
              key={stage}
              className="flex items-center gap-2 font-mono text-[11px] text-cream/50"
            >
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ background: GROWTH_STAGE_COLORS[stage] }}
              />
              {GROWTH_STAGE_LABELS[stage]}
            </div>
          ))}
        </div>
      </div>
      <div className="relative h-56">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

function SellerCard({
  listing,
}: {
  listing: PriceSummary["recentListings"][number];
}) {
  const priceDisplay =
    listing.price === listing.priceHigh
      ? formatUsd(listing.price)
      : fmtRange(listing.price, listing.priceHigh);

  return (
    <div className="rounded-[10px] border border-cream/[0.07] bg-cream/[0.02] px-[18px] py-4 flex flex-col gap-2.5 transition-all hover:border-cream/[0.12] hover:-translate-y-px">
      <div className="flex justify-between items-start gap-3">
        <div className="text-sm font-medium text-cream leading-tight">
          {listing.sellerName}
        </div>
        <span className="font-mono text-[9px] tracking-[0.10em] uppercase text-cream/40 px-2 py-0.5 border border-cream/[0.12] rounded whitespace-nowrap">
          {GROWTH_STAGE_LABELS[listing.growthStage] ?? listing.growthStage}
        </span>
      </div>
      <div className="font-mono text-[17px] text-cream tracking-tight">
        {priceDisplay}
      </div>
      <div className="flex justify-between items-center pt-2.5 border-t border-cream/[0.07]">
        <span
          className={
            "font-mono text-[10px] tracking-[0.10em] whitespace-nowrap " +
            (listing.available ? "text-forest-300" : "text-cream/30")
          }
        >
          {listing.available ? "● In Stock" : "○ Out of Stock"}
        </span>
        {listing.available && listing.productUrl && (
          <a
            href={listing.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-cream/50 hover:text-cream transition-colors"
          >
            Visit ↗
          </a>
        )}
      </div>
    </div>
  );
}

function FAQ({
  faq,
}: {
  faq: NonNullable<PlantListing["faq"]>;
}) {
  const [activeCat, setActiveCat] = useState(0);
  const categories = faq.categories;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-7 lg:gap-14 items-start">
      <aside>
        <h2 className="font-serif font-normal text-[22px] leading-tight text-cream tracking-tight mb-4">
          Common Questions
        </h2>
        <p className="font-serif italic text-[14px] text-cream/50 mb-3.5 max-w-[200px] max-lg:max-w-none">
          Browse by topic.
        </p>
        <div className="flex flex-col gap-1 max-lg:flex-row max-lg:overflow-x-auto max-lg:gap-2 max-lg:pb-1 max-lg:[&::-webkit-scrollbar]:hidden">
          {categories.map((c, i) => (
            <button
              key={c.category}
              onClick={() => setActiveCat(i)}
              className={
                "text-left font-mono text-[11px] tracking-[0.08em] uppercase py-2 transition-colors " +
                "max-lg:flex-shrink-0 max-lg:px-3.5 max-lg:py-2 max-lg:rounded-full max-lg:border max-lg:border-cream/[0.12] max-lg:whitespace-nowrap " +
                "lg:border-l-2 lg:pl-3 " +
                (i === activeCat
                  ? "text-cream lg:border-l-earth-300 max-lg:bg-cream max-lg:text-deep max-lg:border-cream"
                  : "text-cream/40 hover:text-cream/60 lg:border-l-transparent")
              }
            >
              {c.category}
            </button>
          ))}
        </div>
      </aside>
      <div>
        {categories.map((c, i) =>
          i === activeCat ? (
            <div key={c.category}>
              {c.items.map((item, j) => (
                <details
                  key={item.question}
                  className="group border-b border-cream/[0.07] first:border-t first:border-t-cream/[0.07] py-4"
                  open={j === 0}
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[15px] text-cream font-normal leading-snug">
                    <span>{item.question}</span>
                    <span className="font-mono text-lg text-cream/30 transition-transform group-open:rotate-45 shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="mt-3 text-[14px] text-cream/50 leading-relaxed max-w-[720px]">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}

function RelatedCardItem({ r }: { r: RelatedCard }) {
  const deltaClass =
    r.change30d > 0
      ? "text-forest-300"
      : r.change30d < -0.1
      ? "text-earth-300"
      : "text-cream/30";

  return (
    <Link
      href={r.href}
      className="block rounded-xl border border-cream/[0.07] bg-cream/[0.02] overflow-hidden transition-all hover:border-cream/[0.12] hover:-translate-y-0.5"
    >
      <div className="relative aspect-[16/10] border-b border-cream/[0.07] overflow-hidden">
        {r.image ? (
          <Image
            src={r.image}
            alt={r.label}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <PlantPlaceholder
            accent={r.accent}
            variant={getPlantPlaceholderVariant(r.genus)}
            glyphOpacity={0.42}
            label={`${r.label} placeholder image`}
          />
        )}
        <span className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.10em] uppercase text-cream bg-deep/65 backdrop-blur-sm border border-cream/[0.12] rounded px-2 py-0.5">
          {r.rarity}
        </span>
      </div>
      <div className="px-[18px] pt-4 pb-[18px]">
        <div className="font-serif font-normal text-[19px] text-cream leading-tight mb-1">
          <DisplayName name={r.displayName} />
        </div>
        <div className="font-mono text-[11px] text-cream/40 leading-snug mb-3.5 line-clamp-2">
          {r.tagline}
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-cream/[0.07]">
          <div className="font-mono text-[13px] text-cream">
            {formatUsd(r.typical)}{" "}
            <small className="text-cream/30">typical</small>
          </div>
          <div className={`font-mono text-[11px] ${deltaClass}`}>
            {fmtDelta(r.change30d)} 30d
          </div>
        </div>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function PriceListingClient({
  listing,
  priceSummary,
  hasFullProfile,
  related,
}: {
  listing: PlantListing;
  priceSummary?: PriceSummary;
  hasFullProfile: boolean;
  related: RelatedCard[];
}) {
  const label = getPlantLabel(listing);
  const fullName = getPlantFullName(listing);
  const variantLabel = getPlantVariantLabel(listing);
  const stageGroups = priceSummary ? groupByStage(priceSummary) : [];

  // Deduplicate sellers (most recent per seller, in-stock first)
  const uniqueListings: PriceSummary["recentListings"] = [];
  if (priceSummary) {
    const available = priceSummary.recentListings.filter((l) => l.available);
    const soldOut = priceSummary.recentListings.filter((l) => !l.available);
    const all = [...available, ...soldOut];
    const bySeller = new Map<string, (typeof all)[number]>();
    for (const l of all) {
      const existing = bySeller.get(l.sellerId);
      if (!existing || l.date > existing.date) bySeller.set(l.sellerId, l);
    }
    uniqueListings.push(...Array.from(bySeller.values()));
  }

  // Hero stats
  const tcInfo = listing.tissueCultureInfo;
  const tcStatus: TissueCultureStatus = tcInfo?.status ?? "unknown";
  const tcFloor = tcInfo?.priceRange?.min ?? null;
  const listingsCount =
    priceSummary?.recentListings.length ?? priceSummary?.sellerCount ?? 0;
  const sellerCount = priceSummary?.sellerCount ?? uniqueListings.length;
  const lastSeenDate = priceSummary?.lastSeen
    ? new Date(priceSummary.lastSeen)
    : listing.priceRange.lastObserved;

  // Typical from summary if available, else mid-point
  const typical =
    stageGroups.find((g) => g.stage === "plant")?.typical ??
    Math.round(
      listing.priceRange.min * 0.55 + listing.priceRange.max * 0.45,
    );

  // 30-day change derived from priceSummary listings (early-half vs late-half median)
  const change30d = useMemo(() => {
    if (!priceSummary) return 0;
    const mature = priceSummary.recentListings.filter(
      (l) => l.growthStage === "plant",
    );
    const entries = mature.length > 0 ? mature : priceSummary.recentListings;
    if (entries.length < 4) return 0;
    const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date));
    const mid = Math.floor(sorted.length / 2);
    const med = (xs: number[]) => {
      const s = [...xs].sort((a, b) => a - b);
      const m = Math.floor(s.length / 2);
      return s.length % 2 === 0 ? (s[m - 1] + s[m]) / 2 : s[m];
    };
    const earlyMed = med(sorted.slice(0, mid).map((e) => e.price));
    const lateMed = med(sorted.slice(mid).map((e) => e.price));
    if (earlyMed === 0) return 0;
    return +(((lateMed - earlyMed) / earlyMed) * 100).toFixed(1);
  }, [priceSummary]);

  const heroDisplayName = (() => {
    const id = listing.identity;
    let cultivar: string | null = id.cultivar ?? id.variantLabel ?? null;
    if (!cultivar && id.tradeName) {
      const stripped = id.tradeName
        .replace(new RegExp(`^${id.genus}\\s+`), "")
        .trim();
      const strippedKey = stripped.toLowerCase().replace(/[^a-z0-9]+/g, "");
      const speciesKey = id.species?.toLowerCase().replace(/[^a-z0-9]+/g, "");
      if (stripped && stripped !== id.tradeName && strippedKey !== speciesKey) {
        cultivar = stripped;
      }
    }
    return { primary: id.genus, italic: id.species ?? null, cultivar };
  })();

  const shell = "max-w-[1240px] mx-auto px-10 max-lg:px-7 max-sm:px-5";

  return (
    <div className="min-h-screen bg-deep">
      <Navigation fixed={false} />

      {/* ─────────────── Hero — Variant B (Split) ─────────────── */}
      <section className="border-b border-cream/[0.07] py-14 max-sm:pt-20 max-sm:pb-8">
        <div className={shell}>
          <nav className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] tracking-[0.10em] uppercase text-cream/30 mb-6">
            <Link href="/" className="hover:text-cream transition-colors">
              Atlas
            </Link>
            <span className="text-cream/20">/</span>
            <Link
              href="/prices"
              className="hover:text-cream transition-colors"
            >
              Prices
            </Link>
            <span className="text-cream/20">/</span>
            <span className="text-cream">{label}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Photo */}
            <div className="relative h-[480px] max-lg:h-80 max-sm:h-60 rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
              {listing.images.hero ? (
                <Image
                  src={listing.images.hero}
                  alt={label}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <PlantPlaceholder
                  accent={listing.colors.accent}
                  variant={getPlantPlaceholderVariant(listing.identity.genus)}
                  glyphOpacity={0.42}
                  label={`${label} placeholder image`}
                />
              )}
            </div>

            {/* Data */}
            <div>
              <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.14em] uppercase text-forest-300 mb-3.5 flex-wrap">
                <span>
                  {listing.identity.genus} · {listing.family}
                </span>
                <span className="text-cream/30">·</span>
                <span className="text-earth-300">{listing.rarity}</span>
                {tcStatus !== "unknown" && (
                  <>
                    <span className="text-cream/30">·</span>
                    <span className="text-forest-300">
                      {TC_LABEL[tcStatus]}
                    </span>
                  </>
                )}
              </div>

              <h1
                className="font-serif font-light text-cream leading-none tracking-tight mb-4"
                style={{ fontSize: "clamp(38px, 5vw, 56px)" }}
              >
                <DisplayName name={heroDisplayName} />
                {variantLabel &&
                  variantLabel !== heroDisplayName.cultivar &&
                  !fullName.includes(variantLabel) && (
                    <>
                      <br />
                      {variantLabel}
                    </>
                  )}
              </h1>

              <p className="font-serif italic text-lg text-cream/50 leading-snug max-w-[480px] mb-7">
                {listing.tagline}
              </p>

              {hasFullProfile && (
                <Link
                  href={`/plants/${listing.identity.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] uppercase text-forest-300 border-b border-forest-300/30 pb-0.5 -mt-4 mb-7 hover:text-cream hover:border-cream/50 transition-colors"
                >
                  View full plant profile <span aria-hidden>→</span>
                </Link>
              )}

              <div className="grid grid-cols-2 gap-4 border-t border-cream/[0.12] pt-6">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-cream/30 mb-1.5">
                    Typical · this week
                  </div>
                  <div className="font-mono text-[22px] text-cream leading-tight">
                    {formatUsd(typical)}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-cream/30 mb-1.5">
                    Range
                  </div>
                  <div className="font-serif text-[22px] font-normal text-cream leading-tight">
                    {fmtRange(listing.priceRange.min, listing.priceRange.max)}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-cream/30 mb-1.5">
                    30-day movement
                  </div>
                  <div
                    className={
                      "font-mono text-[22px] leading-tight " +
                      (change30d > 0
                        ? "text-forest-300"
                        : change30d < 0
                        ? "text-earth-300"
                        : "text-cream/50")
                    }
                  >
                    {fmtDelta(change30d)}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-cream/30 mb-1.5">
                    Listings tracked
                  </div>
                  <div className="font-mono text-[22px] text-cream leading-tight">
                    {listingsCount}
                    {sellerCount > 0 && (
                      <small className="block font-mono text-[11px] text-cream/50 mt-1">
                        across {sellerCount} seller
                        {sellerCount !== 1 ? "s" : ""}
                      </small>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── QuickStrip ─────────────── */}
      <div className="border-b border-cream/[0.07] bg-white/[0.015]">
        <div className={shell}>
          <div className="grid grid-cols-5 max-lg:grid-cols-3 max-sm:grid-cols-2">
            {[
              {
                k: "Typical Price",
                v: formatUsd(typical),
                small: "plant",
                vClass: "text-cream",
              },
              {
                k: "Tissue Culture",
                v: TC_LABEL[tcStatus],
                small: tcFloor != null ? `from ${formatUsd(tcFloor)}` : null,
                vClass:
                  tcStatus === "widespread"
                    ? "text-forest-300"
                    : tcStatus === "limited"
                    ? "text-earth-300"
                    : "text-cream/50",
              },
              {
                k: "Rarity",
                v: listing.rarity,
                small: "collector tier",
                vClass: "text-cream",
              },
              {
                k: "Listings Tracked",
                v: String(listingsCount),
                small: sellerCount > 0 ? `${sellerCount} sellers` : null,
                vClass: "text-cream",
              },
              {
                k: "Last Updated",
                v: fmtShortDate(lastSeenDate),
                small: null,
                vClass: "text-cream/50",
              },
            ].map((cell, i, arr) => (
              <div
                key={cell.k}
                className={
                  "px-5 py-4 border-r border-cream/[0.07] last:border-r-0 " +
                  // wrap-row borders
                  "max-lg:[&:nth-child(3n)]:border-r-0 max-lg:[&:nth-child(n+4)]:border-t max-lg:[&:nth-child(n+4)]:border-t-cream/[0.07] " +
                  "max-sm:[&:nth-child(3n)]:border-r " +
                  "max-sm:[&:nth-child(2n)]:border-r-0 " +
                  "max-sm:[&:nth-child(n+3)]:border-t max-sm:[&:nth-child(n+3)]:border-t-cream/[0.07] " +
                  (i === arr.length - 1
                    ? " max-sm:col-span-2 max-sm:border-t max-sm:border-t-cream/[0.07]"
                    : "")
                }
              >
                <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-cream/30 mb-1.5">
                  {cell.k}
                </div>
                <div
                  className={`font-mono text-sm leading-snug ${cell.vClass}`}
                >
                  {cell.v}
                  {cell.small && (
                    <small className="block font-mono text-[10px] text-cream/40 mt-0.5">
                      {cell.small}
                    </small>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─────────────── Stage cards ─────────────── */}
      {stageGroups.length > 0 && (
        <section className="border-b border-cream/[0.07] py-16 max-sm:py-10">
          <div className={shell}>
            <h2 className="font-serif font-normal text-[28px] text-cream tracking-tight mb-6">
              Current Prices
            </h2>
            <div
              className={
                "grid gap-4 " +
                "max-sm:grid-cols-1 max-sm:gap-0 max-sm:rounded-[10px] max-sm:overflow-hidden max-sm:border max-sm:border-cream/[0.07] " +
                (stageGroups.length === 1
                  ? "grid-cols-1"
                  : stageGroups.length === 2
                  ? "grid-cols-2 max-md:grid-cols-1"
                  : "grid-cols-3 max-md:grid-cols-2")
              }
            >
              {stageGroups.map((g) => (
                <StageCard key={g.stage} group={g} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────── Trend chart ─────────────── */}
      {priceSummary?.recentListings.length ? (
        <section className="border-b border-cream/[0.07] py-12 max-sm:py-8">
          <div className={shell}>
            <h2 className="font-serif font-normal text-[28px] text-cream tracking-tight mb-6">
              Price Trend
            </h2>
            <PriceTrendChart summary={priceSummary} />
          </div>
        </section>
      ) : null}

      {/* ─────────────── Sellers ─────────────── */}
      {uniqueListings.length > 0 && (
        <section className="border-b border-cream/[0.07] py-16 max-sm:py-10">
          <div className={shell}>
            <div className="flex items-end justify-between gap-6 flex-wrap mb-7">
              <h2 className="font-serif font-normal text-[28px] text-cream tracking-tight">
                Availability
              </h2>
              {priceSummary?.lastSeen && (
                <p className="font-mono text-[11px] tracking-[0.10em] uppercase text-cream/30">
                  Last checked {fmtShortDate(new Date(priceSummary.lastSeen))}
                </p>
              )}
            </div>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-3">
              {uniqueListings.map((l) => (
                <SellerCard key={l.sellerId} listing={l} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────── FAQ ─────────────── */}
      {listing.faq && listing.faq.categories.length > 0 && (
        <section className="border-b border-cream/[0.07] py-16 max-sm:py-10">
          <div className={shell}>
            <FAQ faq={listing.faq} />
          </div>
        </section>
      )}

      {/* ─────────────── Related plants — Variant A (Card grid) ─────────────── */}
      {related.length > 0 && (
        <section className="border-b border-cream/[0.07] py-16 max-sm:py-10">
          <div className={shell}>
            <div className="flex items-end justify-between gap-6 flex-wrap mb-7">
              <h2 className="font-serif font-normal text-[28px] text-cream tracking-tight">
                Keep Exploring
              </h2>
            </div>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[18px]">
              {related.map((r) => (
                <RelatedCardItem key={r.slug} r={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────── Footer ─────────────── */}
      <footer className="py-10 pb-14 text-center">
        <div className="font-serif text-[18px] text-cream mb-2">
          Rare Plant <em className="font-serif italic text-earth-300">Atlas</em>
        </div>
        <div className="flex justify-center gap-6 max-sm:gap-3.5 max-sm:flex-wrap font-mono text-[10px] tracking-[0.12em] uppercase text-cream/40">
          <Link href="/" className="hover:text-cream transition-colors">
            Plants
          </Link>
          <Link href="/prices" className="hover:text-cream transition-colors">
            Prices
          </Link>
        </div>
        {sellerCount > 0 && (
          <div className="font-mono text-[10px] text-cream/30 mt-6">
            Tracked across {sellerCount} sellers · Updated{" "}
            {fmtShortDate(lastSeenDate)}
          </div>
        )}
      </footer>
    </div>
  );
}
