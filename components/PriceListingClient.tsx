"use client";

import Link from "next/link";
import Image from "next/image";
import type { PlantListing } from "@/data/types";
import type { PriceSummary, GrowthStage } from "@/data/prices/types";
import { formatUsd } from "@/data/price";
import {
  getPlantLabel,
  getPlantFullName,
  getPlantVariantLabel,
  formatScientificName,
} from "@/data/identity";
import { Navigation } from "@/components/Navigation";

// ---------------------------------------------------------------------------
// Growth stage labels
// ---------------------------------------------------------------------------
const GROWTH_STAGE_LABELS: Record<GrowthStage, string> = {
  tc: "Tissue Culture",
  cutting: "Rooted Cutting",
  corm: "Corm",
  plant: "Established Plant",
};

const GROWTH_STAGE_ORDER: GrowthStage[] = ["tc", "cutting", "corm", "plant"];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function fmtMonthYear(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

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
      typical: Math.round(
        prices.reduce((a, b) => a + b, 0) / prices.length,
      ),
      count: listings.length,
    };
  });
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function VariantCard({ group }: { group: StageGroup }) {
  return (
    <div className="relative overflow-hidden rounded-[10px] bg-cream/[0.02] border border-cream/[0.07] p-5 transition-colors hover:border-cream/[0.12]">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cream/[0.15] to-transparent" />

      <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-cream/30 mb-3">
        {GROWTH_STAGE_LABELS[group.stage]}
      </p>
      <p className="font-mono text-[28px] text-cream leading-none mb-1">
        {formatUsd(group.typical)}
      </p>
      <p className="font-mono text-[10px] text-cream/30 mb-3.5">
        typical &middot; {group.count} sale{group.count !== 1 ? "s" : ""}{" "}
        tracked
      </p>
      <p className="font-mono text-[11px] text-cream/50">
        <span className="text-cream/30 text-[9px]">Range </span>
        {formatUsd(group.min)} &ndash; {formatUsd(group.max)}
      </p>
    </div>
  );
}

function SellerRow({
  listing,
}: {
  listing: PriceSummary["recentListings"][number];
}) {
  const priceDisplay =
    listing.price === listing.priceHigh
      ? formatUsd(listing.price)
      : `${formatUsd(listing.price)}–${formatUsd(listing.priceHigh)}`;

  return (
    <tr className="group border-b border-cream/[0.05] last:border-b-0 transition-colors hover:bg-cream/[0.02]">
      <td className="py-3.5 pr-4 text-[13px] text-cream font-normal">
        {listing.sellerName}
      </td>
      <td className="py-3.5 pr-4">
        <span className="font-mono text-[9px] tracking-[0.06em] bg-cream/[0.04] border border-cream/[0.07] rounded px-2 py-0.5 text-cream/30">
          {GROWTH_STAGE_LABELS[listing.growthStage] ?? listing.growthStage}
        </span>
      </td>
      <td className="py-3.5 pr-4 font-mono text-sm text-cream">
        {priceDisplay}
      </td>
      <td className="py-3.5 pr-4">
        {listing.available ? (
          <span className="font-mono text-[9px] tracking-[0.06em] text-forest-400">
            In Stock
          </span>
        ) : (
          <span className="font-mono text-[9px] tracking-[0.06em] text-cream/25">
            Out of Stock
          </span>
        )}
      </td>
      <td className="py-3.5 text-right">
        {listing.productUrl && (
          <a
            href={listing.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-forest-400 hover:text-forest-300 transition-colors opacity-0 group-hover:opacity-100"
          >
            &#x2197;
          </a>
        )}
      </td>
    </tr>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function PriceListingClient({
  listing,
  priceSummary,
  hasFullProfile,
}: {
  listing: PlantListing;
  priceSummary?: PriceSummary;
  hasFullProfile: boolean;
}) {
  const label = getPlantLabel(listing);
  const fullName = getPlantFullName(listing);
  const variantLabel = getPlantVariantLabel(listing);
  const stageGroups = priceSummary ? groupByStage(priceSummary) : [];

  // Deduplicate sellers (most recent per seller)
  const uniqueListings: PriceSummary["recentListings"] = [];
  if (priceSummary) {
    const available = priceSummary.recentListings.filter((l) => l.available);
    const soldOut = priceSummary.recentListings.filter((l) => !l.available);
    const all = [...available, ...soldOut];
    const bySeller = new Map<string, (typeof all)[number]>();
    for (const l of all) {
      const existing = bySeller.get(l.sellerId);
      if (!existing || l.date > existing.date) {
        bySeller.set(l.sellerId, l);
      }
    }
    uniqueListings.push(...Array.from(bySeller.values()));
  }

  return (
    <div className="min-h-screen bg-deep">
      <Navigation fixed={false} />

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden flex items-end"
        style={{
          height: 340,
          background: `linear-gradient(160deg, ${listing.colors.gradient[0]} 0%, ${listing.colors.primary}80 50%, ${listing.colors.primary} 100%)`,
        }}
      >
        {/* Hero image if available */}
        {listing.images.hero && (
          <Image
            src={listing.images.hero}
            alt={label}
            fill
            className="object-cover opacity-40"
            priority
          />
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 30%, rgba(13,13,13,0.85) 80%, #0d0d0d 100%)",
          }}
        />

        <div className="relative z-10 w-full px-10 pb-9 max-lg:px-5 max-lg:pb-7">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] uppercase text-cream/30 hover:text-cream transition-colors mb-5"
          >
            &larr; All Plants
          </Link>

          <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.14em] uppercase text-forest-400 mb-2.5">
            {listing.identity.genus} &middot; {listing.family}
            <span className="bg-cream/[0.07] border border-cream/[0.12] rounded px-2.5 py-0.5 text-[8px] tracking-[0.12em] text-cream/30">
              Price Reference
            </span>
          </div>

          <h1 className="font-serif text-cream font-light leading-[1.05] mb-2" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
            {fullName}
            {variantLabel && !fullName.includes(variantLabel) && (
              <>
                <br />
                {variantLabel}
              </>
            )}
          </h1>

          <p className="text-sm text-cream/50 max-w-[520px] leading-relaxed">
            {listing.tagline}
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-[860px] mx-auto px-10 pt-12 pb-20 max-lg:px-5 max-lg:pt-8 max-lg:pb-16">
        {/* Meta bar */}
        <div className="flex items-center justify-between flex-wrap gap-2 px-4.5 py-3 rounded-lg bg-cream/[0.02] border border-cream/[0.07] mb-10">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.08em] text-cream/50 font-normal">
              {listing.rarity}
            </span>
            <span className="font-mono text-[10px] tracking-[0.08em] text-cream/30">
              Origin: <span className="text-cream/50">{listing.origin}</span>
            </span>
            {listing.lastReviewed && (
              <span className="font-mono text-[10px] tracking-[0.08em] text-cream/30">
                Updated:{" "}
                <span className="text-cream/50">
                  {fmtMonthYear(listing.lastReviewed)}
                </span>
              </span>
            )}
          </div>
          {listing.fullProfileStatus &&
            listing.fullProfileStatus !== "none" && (
              <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-cream/30 border border-cream/[0.12] rounded px-2.5 py-0.5">
                Full profile {listing.fullProfileStatus}
              </span>
            )}
        </div>

        {/* Variant price cards */}
        {stageGroups.length > 0 && (
          <>
            <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-cream/30 mb-4">
              Current Prices by Stage
            </p>
            <div
              className="grid gap-3 mb-10"
              style={{
                gridTemplateColumns: `repeat(${Math.min(stageGroups.length, 3)}, 1fr)`,
              }}
            >
              {stageGroups.map((g) => (
                <VariantCard key={g.stage} group={g} />
              ))}
            </div>
          </>
        )}

        {/* Market note / trend note */}
        {(listing.marketNote || listing.priceHistory) && (
          <div className="bg-cream/[0.02] border-l-2 border-l-earth-400 rounded-r-lg px-4.5 py-3.5 mb-10">
            <p className="font-mono text-[8px] tracking-[0.14em] uppercase text-earth-400 mb-1.5">
              Market Note
            </p>
            <p className="text-[13px] text-cream/50 leading-relaxed italic">
              {listing.priceRange.note ?? listing.priceHistory ?? listing.marketNote}
            </p>
          </div>
        )}

        {/* Seller availability table */}
        {uniqueListings.length > 0 && (
          <>
            <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-cream/30 mb-4">
              Current Availability
            </p>
            <div className="overflow-x-auto mb-10">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="font-mono text-[9px] tracking-[0.1em] uppercase text-cream/30 font-normal text-left pb-2.5 border-b border-cream/[0.07]">
                      Seller
                    </th>
                    <th className="font-mono text-[9px] tracking-[0.1em] uppercase text-cream/30 font-normal text-left pb-2.5 border-b border-cream/[0.07]">
                      Stage
                    </th>
                    <th className="font-mono text-[9px] tracking-[0.1em] uppercase text-cream/30 font-normal text-left pb-2.5 border-b border-cream/[0.07]">
                      Price
                    </th>
                    <th className="font-mono text-[9px] tracking-[0.1em] uppercase text-cream/30 font-normal text-left pb-2.5 border-b border-cream/[0.07]">
                      Stock
                    </th>
                    <th className="pb-2.5 border-b border-cream/[0.07] w-8" />
                  </tr>
                </thead>
                <tbody>
                  {uniqueListings.map((l) => (
                    <SellerRow key={l.sellerId} listing={l} />
                  ))}
                </tbody>
              </table>
              {priceSummary?.lastSeen && (
                <p className="mt-3 pt-3 border-t border-cream/[0.05] text-[11px] text-cream/[0.15]">
                  Last checked {fmtDate(priceSummary.lastSeen)}
                </p>
              )}
            </div>
          </>
        )}

        {/* Divider */}
        <div className="h-px bg-cream/[0.07] my-8" />

        {/* Context / editorial quote */}
        {listing.marketNote && (
          <div className="mb-12">
            <p className="font-serif text-lg font-light leading-relaxed text-cream/50 italic">
              &ldquo;{listing.marketNote}&rdquo;
            </p>
          </div>
        )}

        {/* Full profile link — only shown when a full profile exists */}
        {hasFullProfile && (
          <div className="rounded-xl border border-cream/[0.07] p-7 flex items-center justify-between gap-5 flex-wrap bg-gradient-to-br from-cream/[0.02] to-cream/[0.04]">
            <div>
              <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-cream/30 mb-2">
                Full Profile Available
              </p>
              <h3 className="font-serif text-[22px] text-cream">
                Full Care Profile
              </h3>
              <p className="text-xs text-cream/30 mt-1">
                Variegation, substrate, propagation, provenance, and fit check.
              </p>
            </div>
            <Link
              href={`/plants/${listing.identity.slug}`}
              className="bg-forest-800 hover:bg-forest-700 text-cream border-none px-6 py-3 rounded-md font-sans text-[11px] tracking-[0.08em] uppercase whitespace-nowrap transition-colors"
            >
              View Full Profile
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
