"use client";

import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { PriceSummary, GrowthStage } from "@/data/prices/types";
import { TabContainer, TabHeader } from "./TabContainer";
import { formatUsd } from "@/data/price";

const GROWTH_STAGE_LABELS: Record<GrowthStage, string> = {
  tc: "Tissue Culture",
  cutting: "Cutting",
  corm: "Corm",
  plant: "Plant",
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
);

// ─── Helpers ──────────────────────────────────────────────────────────────

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// ─── Seller Row ───────────────────────────────────────────────────────────

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
    <tr className="group">
      <td className="py-3 pr-4">
        <span className="text-[13px] text-cream/60 font-medium">
          {listing.sellerName}
        </span>
      </td>
      <td className="py-3 pr-4 font-mono text-sm text-cream/70">
        {priceDisplay}
      </td>
      <td className="py-3 pr-4 text-[11px] text-cream/30">
        {GROWTH_STAGE_LABELS[listing.growthStage] ?? listing.growthStage}
      </td>
      <td className="py-3 pr-4">
        {listing.available ? (
          <span className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded bg-forest-950/60 text-forest-300 border border-forest-800/40">
            In Stock
          </span>
        ) : (
          <span className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded bg-cream/[0.04] text-cream/25 border border-cream/[0.06]">
            Sold Out
          </span>
        )}
      </td>
      <td className="py-3 text-right">
        {listing.productUrl && (
          <a
            href={listing.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-forest-400 hover:text-forest-300 transition-colors opacity-0 group-hover:opacity-100"
          >
            ↗
          </a>
        )}
      </td>
    </tr>
  );
}

// ─── Price Trend Chart ────────────────────────────────────────────────────

const CHART_COLORS = ["#85b98e", "#cdab79", "#7F77DD", "#D4537E", "#5DA5B8", "#C4A03C"];

function PriceTrendChart({
  summary,
}: {
  summary: PriceSummary;
}) {
  // Group recent listings by date to build a time series
  const byDate = useMemo(() => {
    const map = new Map<string, { min: number; max: number }>();
    for (const l of summary.recentListings) {
      const existing = map.get(l.date);
      if (existing) {
        existing.min = Math.min(existing.min, l.price);
        existing.max = Math.max(existing.max, l.priceHigh);
      } else {
        map.set(l.date, { min: l.price, max: l.priceHigh });
      }
    }
    return Array.from(map.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, range]) => ({ date, ...range }));
  }, [summary]);

  if (byDate.length < 2) return null;

  const labels = byDate.map((d) => {
    const date = new Date(d.date);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Low",
        data: byDate.map((d) => d.min),
        borderColor: CHART_COLORS[0],
        backgroundColor: "rgba(133,185,142,0.1)",
        borderWidth: 1.5,
        pointRadius: 2,
        fill: "+1",
        tension: 0.4,
      },
      {
        label: "High",
        data: byDate.map((d) => d.max),
        borderColor: CHART_COLORS[1],
        backgroundColor: "transparent",
        borderWidth: 1.5,
        pointRadius: 2,
        fill: false,
        tension: 0.4,
        borderDash: [4, 3] as number[],
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) =>
            `${ctx.dataset.label}: ${formatUsd(ctx.raw as number)}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "rgba(250,247,242,0.2)", font: { size: 11 } },
      },
      y: {
        grid: { color: "rgba(250,247,242,0.04)" },
        ticks: {
          color: "rgba(250,247,242,0.2)",
          font: { size: 11 },
          callback: (v) => `$${v}`,
        },
      },
    },
  };

  return (
    <div>
      <div className="flex gap-4 mb-3">
        <div className="flex items-center gap-1.5 text-[11px] text-cream/40">
          <span
            className="inline-block w-5 h-0.5 rounded"
            style={{ background: CHART_COLORS[0] }}
          />
          Low
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-cream/40">
          <span
            className="inline-block w-5 h-0.5 rounded"
            style={{ background: CHART_COLORS[1] }}
          />
          High
        </div>
      </div>
      <div className="relative h-52">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

// ─── Main PricingTab ──────────────────────────────────────────────────────

export function PricingTab({
  summary,
  priceNote,
}: {
  summary: PriceSummary;
  priceNote?: string;
}) {
  const availableListings = summary.recentListings.filter((l) => l.available);
  const soldOutListings = summary.recentListings.filter((l) => !l.available);
  const allListings = [...availableListings, ...soldOutListings];

  // Deduplicate by seller (show most recent per seller)
  const bySeller = new Map<string, (typeof allListings)[number]>();
  for (const l of allListings) {
    const existing = bySeller.get(l.sellerId);
    if (!existing || l.date > existing.date) {
      bySeller.set(l.sellerId, l);
    }
  }
  const uniqueListings = Array.from(bySeller.values());

  return (
    <TabContainer>
      <TabHeader label="Market data" title="Pricing" />

      <div className="space-y-5">
        {/* Summary cards */}
        <div className="grid grid-cols-2 gap-3">
          {summary.currentMin !== null && (
            <div className="bg-cream/[0.03] border border-cream/[0.08] rounded-xl p-4">
              <p className="text-[10px] tracking-[0.3em] uppercase text-cream/25 mb-2">
                Current range
              </p>
              <p className="font-mono text-lg text-cream/80 leading-none">
                {formatUsd(summary.currentMin)}–{formatUsd(summary.currentMax!)}
              </p>
              <p className="text-[11px] text-cream/15 mt-1.5">
                Last 30 days · {summary.sellerCount} seller
                {summary.sellerCount !== 1 ? "s" : ""}
              </p>
            </div>
          )}
          {summary.allTimeMin !== null && (
            <div className="bg-cream/[0.03] border border-cream/[0.08] rounded-xl p-4">
              <p className="text-[10px] tracking-[0.3em] uppercase text-cream/25 mb-2">
                All-time range
              </p>
              <p className="font-mono text-lg text-cream/80 leading-none">
                {formatUsd(summary.allTimeMin)}–{formatUsd(summary.allTimeMax!)}
              </p>
              {summary.lastSeen && (
                <p className="text-[11px] text-cream/15 mt-1.5">
                  Since {fmtDate(summary.lastSeen)}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Seller comparison grid */}
        {uniqueListings.length > 0 && (
          <div className="bg-cream/[0.02] border border-cream/[0.08] rounded-xl p-5">
            <h3 className="text-sm font-medium text-cream/60 mb-4">
              Where to buy
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-[11px] font-medium tracking-wider text-cream/30 text-left pb-3">
                      Seller
                    </th>
                    <th className="text-[11px] font-medium tracking-wider text-cream/30 text-left pb-3">
                      Price
                    </th>
                    <th className="text-[11px] font-medium tracking-wider text-cream/30 text-left pb-3">
                      Stage
                    </th>
                    <th className="text-[11px] font-medium tracking-wider text-cream/30 text-left pb-3">
                      Status
                    </th>
                    <th className="pb-3 w-8" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream/[0.05]">
                  {uniqueListings.map((listing) => (
                    <SellerRow key={listing.sellerId} listing={listing} />
                  ))}
                </tbody>
              </table>
            </div>
            {summary.lastSeen && (
              <p className="mt-3 pt-3 border-t border-cream/[0.05] text-[11px] text-cream/15">
                Last checked {fmtDate(summary.lastSeen)}
              </p>
            )}
          </div>
        )}

        {/* Price trend chart */}
        {summary.recentListings.length >= 2 && (
          <div className="bg-cream/[0.02] border border-cream/[0.08] rounded-xl p-5">
            <h3 className="text-sm font-medium text-cream/60 mb-5">
              Price trend
            </h3>
            <PriceTrendChart summary={summary} />
          </div>
        )}

        {/* Pricing note */}
        {priceNote && (
          <p className="text-xs text-cream/25 italic border-l-2 border-cream/[0.1] pl-3 leading-relaxed">
            {priceNote}
          </p>
        )}
      </div>
    </TabContainer>
  );
}
