"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { GrowthStage } from "@/data/prices/types";
import type {
  PricesPagePlant,
  PricesPageMarket,
} from "@/lib/pricesPageData";
import {
  getPlantPlaceholderVariant,
  PlantPlaceholder,
} from "@/components/PlantPlaceholder";

const fmtUsd = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-US");
const fmtRange = (lo: number, hi: number) => `${fmtUsd(lo)} – ${fmtUsd(hi)}`;
const fmtPct = (n: number) =>
  (n >= 0 ? "+" : "") + n.toFixed(1) + "%";

const TC_LABELS: Record<string, string> = {
  widespread: "TC · Widespread",
  limited: "TC · Limited",
  none: "Not in TC",
};

const SORTS = [
  { id: "default", label: "Default" },
  { id: "price-desc", label: "↓ Price" },
  { id: "price-asc", label: "↑ Price" },
  { id: "falling", label: "Dropping fastest" },
  { id: "tc-gap", label: "Biggest TC gap" },
] as const;

const TC_FILTERS = [
  { id: "any", label: "Any" },
  { id: "in-tc", label: "In TC" },
  { id: "not-in-tc", label: "Not in TC" },
] as const;

type SortId = (typeof SORTS)[number]["id"];
type TcFilter = (typeof TC_FILTERS)[number]["id"];

type TcInfo = {
  min: number;
  typical: number;
  max: number;
  gapPct: number;
};

function getTc(plant: PricesPagePlant): TcInfo | null {
  if (plant.tc === "none") return null;
  const tcStage = plant.stages.find((s) => s.stage === "tc");
  if (!tcStage) return null;
  const plantTyp = plant.current.typical;
  const gapPct =
    plantTyp > 0
      ? Math.round(((plantTyp - tcStage.typical) / plantTyp) * 100)
      : 0;
  return {
    min: tcStage.min,
    typical: tcStage.typical,
    max: tcStage.max,
    gapPct,
  };
}

function MiniSpark({
  history,
  falling,
  width = 200,
  height = 32,
}: {
  history: number[];
  falling: boolean;
  width?: number;
  height?: number;
}) {
  if (!history || history.length < 2) {
    return <div style={{ height }} />;
  }
  const data = history.slice(-30);
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const stepX = width / (data.length - 1);
  const points = data
    .map(
      (v, i) =>
        `${i * stepX},${
          height - ((v - min) / range) * (height - 4) - 2
        }`,
    )
    .join(" ");

  const stroke = falling ? "var(--earth-300)" : "var(--forest-300)";
  const gradId = `pp-spark-fill-${falling ? "d" : "u"}`;

  return (
    <svg
      className="pp-spark"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.22" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${points} ${width},${height}`}
        fill={`url(#${gradId})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type PricesPageClientProps = {
  plants: PricesPagePlant[];
  market: PricesPageMarket;
};

export function PricesPageClient({ plants, market }: PricesPageClientProps) {
  const [genus, setGenus] = useState<string>("All");
  const [sort, setSort] = useState<SortId>("default");
  const [tcFilter, setTcFilter] = useState<TcFilter>("any");

  const genera = useMemo(() => {
    const counts = new Map<string, number>();
    plants.forEach((p) => counts.set(p.genus, (counts.get(p.genus) || 0) + 1));
    const arr = Array.from(counts.entries()).sort((a, b) =>
      a[0].localeCompare(b[0]),
    );
    return [["All", plants.length] as [string, number], ...arr];
  }, [plants]);

  const visible = useMemo(() => {
    let xs = plants.slice();
    if (genus !== "All") xs = xs.filter((p) => p.genus === genus);
    if (tcFilter === "in-tc") xs = xs.filter((p) => p.tc !== "none");
    if (tcFilter === "not-in-tc") xs = xs.filter((p) => p.tc === "none");
    switch (sort) {
      case "price-desc":
        xs.sort((a, b) => b.current.typical - a.current.typical);
        break;
      case "price-asc":
        xs.sort((a, b) => a.current.typical - b.current.typical);
        break;
      case "falling":
        xs.sort((a, b) => a.change30d - b.change30d);
        break;
      case "tc-gap":
        xs.sort((a, b) => {
          const ga = getTc(a)?.gapPct ?? -1;
          const gb = getTc(b)?.gapPct ?? -1;
          return gb - ga;
        });
        break;
    }
    return xs;
  }, [plants, genus, sort, tcFilter]);

  return (
    <div className="pp-wrap">
      {/* Hero */}
      <section className="pp-hero">
        <div className="pp-hero-inner">
          <div className="pp-eyebrow">Price Index · Updated weekly</div>
          <h1>
            What rare plants <em>actually</em> cost,
            <br />
            from sellers we trust.
          </h1>
          <p className="pp-hero-lede">
            Reference pricing for {market.total} rare and collectible plants,
            observed from a short list of reputable specialty sellers. Both{" "}
            <em className="mature">mature plants</em> and{" "}
            <em className="tc">tissue culture</em> where available — the gap
            between them is often the whole story.
          </p>

          <div className="pp-hero-meta">
            <div className="pp-hero-meta-cell">
              <div className="pp-hero-meta-num">
                {market.total}
                <span className="pp-meta-suffix">cultivars</span>
              </div>
              <div className="pp-hero-meta-label">Tracked</div>
            </div>
            <div className="pp-hero-meta-cell">
              <div className="pp-hero-meta-num">
                {market.totalListings}
                <span className="pp-meta-suffix">listings</span>
              </div>
              <div className="pp-hero-meta-label">This snapshot</div>
            </div>
            <div className="pp-hero-meta-cell">
              <div className="pp-hero-meta-num">
                {market.inTcCount}
                <span className="pp-meta-suffix">of {market.total}</span>
              </div>
              <div className="pp-hero-meta-label">In tissue culture</div>
            </div>
            <div className="pp-hero-meta-cell">
              <div
                className="pp-hero-meta-num"
                style={{
                  color:
                    market.avg30 < 0
                      ? "var(--earth-300)"
                      : "var(--forest-300)",
                }}
              >
                {fmtPct(market.avg30)}
              </div>
              <div className="pp-hero-meta-label">30-day mean</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="pp-filter">
        <div className="pp-filter-left">
          <span className="pp-filter-title">Tracked cultivars</span>
          <span className="pp-filter-count">
            · {visible.length} of {plants.length}
          </span>
        </div>
        <div className="pp-chips">
          {genera.map(([g, count]) => (
            <button
              key={g}
              className={`pp-chip pp-chip-genus ${genus === g ? "active" : ""}`}
              onClick={() => setGenus(g)}
              type="button"
            >
              {g !== "All" && <span className="pp-chip-dot" />}
              {g} <span className="pp-chip-count">{count}</span>
            </button>
          ))}
          <span className="pp-chip-sep" />
          {TC_FILTERS.map((f) => (
            <button
              key={f.id}
              className={`pp-chip ${tcFilter === f.id ? "active" : ""}`}
              onClick={() => setTcFilter(f.id)}
              type="button"
              title={
                f.id === "in-tc"
                  ? "Show only plants available via tissue culture"
                  : f.id === "not-in-tc"
                    ? "Show only plants not yet in tissue culture"
                    : "Show all"
              }
            >
              {f.label}
            </button>
          ))}
          <span className="pp-chip-sep" />
          {SORTS.map((s) => (
            <button
              key={s.id}
              className={`pp-chip ${sort === s.id ? "active" : ""}`}
              onClick={() => setSort(s.id)}
              type="button"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="pp-grid-wrap">
        <div className="pp-grid">
          {visible.length === 0 && (
            <div className="pp-empty">No cultivars match this filter.</div>
          )}
          {visible.map((p) => {
            const falling = p.change30d < 0;
            const tc = getTc(p);
            const tcStatus = p.tc;
            return (
              <Link key={p.slug} href={p.href} className="pp-card">
                <div className="pp-card-img">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.label}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 820px) 50vw, (max-width: 1100px) 33vw, 25vw"
                      className="object-cover"
                    />
                  ) : (
                    <PlantPlaceholder
                      accent={p.accent}
                      variant={getPlantPlaceholderVariant(p.genus)}
                      label={`${p.label} placeholder image`}
                      className="pp-card-placeholder"
                    />
                  )}
                  <span className={`pp-card-rarity ${p.rarityClass}`}>
                    {p.rarity}
                  </span>
                  <span className={`pp-card-tc ${tcStatus}`}>
                    <span className="pp-card-tc-dot" />
                    {TC_LABELS[tcStatus] ?? "Not in TC"}
                  </span>
                </div>

                <div className="pp-card-body">
                  <div className="pp-card-genus">
                    <span className="pp-card-genus-dot" />
                    {p.genus} · {p.family}
                  </div>
                  <h3 className="pp-card-name">{p.label}</h3>
                  {p.variant ? (
                    <div className="pp-card-variant">{p.variant}</div>
                  ) : (
                    <div className="pp-card-no-variant" />
                  )}

                  <div className="pp-prices">
                    <div className="pp-price-row mature">
                      <span className="pp-price-label">Plant</span>
                      <span className="pp-price-typ">
                        {fmtUsd(p.current.typical)}
                      </span>
                      <span className="pp-price-range">
                        {fmtRange(p.current.min, p.current.max)}
                      </span>
                    </div>
                    <div className="pp-price-divider" />
                    {tc ? (
                      <div className="pp-price-row tc">
                        <span className="pp-price-label">TC</span>
                        <span className="pp-price-typ">
                          {fmtUsd(tc.typical)}
                        </span>
                        <span className="pp-price-range">
                          −{tc.gapPct}% gap
                        </span>
                      </div>
                    ) : tcStatus === "none" ? (
                      <div className="pp-price-row tc none">
                        <span className="pp-price-label">TC</span>
                        <span className="pp-price-typ">
                          Not in tissue culture
                        </span>
                        <span className="pp-price-range">—</span>
                      </div>
                    ) : (
                      <div className="pp-price-row tc unknown">
                        <span className="pp-price-label">TC</span>
                        <span className="pp-price-typ">
                          Price not yet tracked
                        </span>
                        <span className="pp-price-range">—</span>
                      </div>
                    )}
                  </div>

                  <MiniSpark history={p.history} falling={falling} />

                  <div className="pp-card-foot">
                    <span
                      className={`pp-card-delta ${falling ? "down" : "up"}`}
                    >
                      {falling ? "↓" : "↑"} {Math.abs(p.change30d).toFixed(1)}%
                      · 30d
                    </span>
                    <span className="pp-card-listings">
                      {p.listingsCount} listings
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="pp-foot">
        <div className="pp-foot-meta">
          Rare Plant Atlas © 2026 · Cultivate with intention
        </div>
        <div className="pp-foot-note">
          Prices are observational, not appraisals. Plants are not investments
          — we publish this so you walk into a purchase with context, not a
          thesis.
        </div>
      </footer>
    </div>
  );
}

// Re-export the type so callers don't need to thread it through.
export type { GrowthStage };
