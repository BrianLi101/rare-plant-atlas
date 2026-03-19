"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Plant, CinematicPanel as PanelData } from "@/data/plants";

// ---------------------------------------------------------------------------
// Background compositions per panel id
// ---------------------------------------------------------------------------
const BGSRC: Record<string, { base: string; glow1: string; glow2: string }> = {
  hero: {
    base: "linear-gradient(162deg,#010604 0%,#050f08 18%,#0c1e12 42%,#081507 68%,#030806 100%)",
    glow1: "radial-gradient(ellipse 68% 52% at 36% 26%,rgba(55,120,68,0.42) 0%,transparent 65%)",
    glow2: "radial-gradient(ellipse 38% 32% at 74% 70%,rgba(155,120,52,0.14) 0%,transparent 55%)",
  },
  variegation: {
    base: "linear-gradient(148deg,#010503 0%,#061009 20%,#0e1e12 46%,#09160c 72%,#030706 100%)",
    glow1: "radial-gradient(ellipse 52% 60% at 58% 38%,rgba(50,108,60,0.36) 0%,transparent 62%)",
    glow2: "radial-gradient(ellipse 48% 38% at 22% 62%,rgba(190,175,140,0.10) 0%,transparent 52%)",
  },
  origin: {
    base: "linear-gradient(155deg,#020705 0%,#071408 22%,#111f0e 50%,#0b190c 76%,#040a05 100%)",
    glow1: "radial-gradient(ellipse 72% 48% at 60% 42%,rgba(62,118,68,0.30) 0%,transparent 64%)",
    glow2: "radial-gradient(ellipse 42% 42% at 16% 72%,rgba(165,130,58,0.12) 0%,transparent 54%)",
  },
};

// ---------------------------------------------------------------------------
// Tab definitions
// ---------------------------------------------------------------------------
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "variegation", label: "Variegation" },
  { id: "care", label: "Care" },
  { id: "substrate", label: "Substrate" },
  { id: "provenance", label: "Provenance" },
  { id: "propagation", label: "Propagation" },
  { id: "fit", label: "Fit Check" },
  { id: "downsides", label: "Downsides" },
] as const;

type TabId = (typeof TABS)[number]["id"];

// ---------------------------------------------------------------------------
// Fit engine options (embedded for the tab)
// ---------------------------------------------------------------------------
const FIT_OPTIONS = {
  light: [
    { label: "Low", v: 0.1 },
    { label: "Medium indirect", v: 0.5 },
    { label: "Bright indirect", v: 1.0 },
    { label: "Direct sun", v: 0.55 },
  ],
  humidity: [
    { label: "Dry \u2014 below 30%", v: 0.15 },
    { label: "Moderate \u2014 30\u201350%", v: 0.5 },
    { label: "High \u2014 50\u201370%", v: 0.85 },
    { label: "Very high \u2014 70%+", v: 1.0 },
  ],
  space: [
    { label: "Compact \u2014 shelf only", v: 0.3 },
    { label: "Moderate \u2014 tabletop", v: 0.65 },
    { label: "Generous \u2014 floor/wide", v: 1.0 },
  ],
  experience: [
    { label: "Beginner", v: 0.2 },
    { label: "Intermediate", v: 0.5 },
    { label: "Advanced", v: 0.8 },
    { label: "Expert", v: 1.0 },
  ],
};

function getFitVerdict(score: number) {
  if (score >= 85)
    return { label: "Excellent fit", color: "text-forest-300", note: "Your environment is well-matched. Go for it." };
  if (score >= 68)
    return { label: "Good fit", color: "text-forest-400", note: "Mostly aligned. Small adjustments could push this higher." };
  if (score >= 48)
    return { label: "Moderate fit", color: "text-earth-300", note: "Some gaps to address before committing." };
  return { label: "Challenging fit", color: "text-red-400/70", note: "Significant mismatches \u2014 the plant will likely struggle." };
}

// ---------------------------------------------------------------------------
// Cinematic Panel
// ---------------------------------------------------------------------------
function CinematicPanel({ panel, isHero }: { panel: PanelData; isHero?: boolean }) {
  const bg = BGSRC[panel.id] ?? BGSRC.hero;

  return (
    <section className="relative overflow-hidden flex flex-col justify-end h-[100svh] snap-start snap-always">
      {/* Background layers */}
      <div className="absolute inset-0">
        {panel.image ? (
          <>
            <Image
              src={panel.image}
              alt=""
              fill
              priority={isHero}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/45" />
          </>
        ) : (
          <>
            <div className="absolute inset-0" style={{ background: bg.base }} />
            <div className="absolute inset-0" style={{ background: bg.glow1 }} />
            <div className="absolute inset-0" style={{ background: bg.glow2 }} />
          </>
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top,#111 0%,rgba(17,17,17,0.55) 28%,rgba(17,17,17,0.1) 58%,transparent 78%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(17,17,17,0.45) 0%,transparent 28%)" }} />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 pb-12 md:px-14 md:pb-[72px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {panel.eyebrow && (
          <p className="text-[9px] tracking-[0.42em] uppercase text-cream/25 mb-[18px]">
            {panel.eyebrow}
          </p>
        )}

        <h1 className="font-serif text-display-xl leading-[0.92] tracking-[-0.022em] mb-5 lg:text-[clamp(3rem,5vw,4.5rem)]">
          {panel.lines.map((line, i) => (
            <span
              key={i}
              className={`block ${panel.earthLine === i ? "text-earth-300" : "text-cream"} ${
                panel.italicLine === i ? "italic" : ""
              }`}
            >
              {line}
            </span>
          ))}
        </h1>

        {panel.sub && (
          <p className="text-[13px] lg:text-[14.5px] text-cream/40 leading-[1.78] max-w-[320px] lg:max-w-[520px] mb-[18px]">
            {panel.sub}
          </p>
        )}

        {panel.fact && (
          <div className="pt-4 border-t border-cream/[0.08]">
            <p className="text-[11.5px] lg:text-[13px] text-forest-300/75 leading-[1.6] italic">
              {panel.fact}
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// At a Glance
// ---------------------------------------------------------------------------
function AtAGlance({ plant }: { plant: Plant }) {
  return (
    <section className="relative bg-deep border-t border-cream/[0.08] min-h-[100svh] snap-start snap-always flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_50%,rgba(25,65,32,0.18)_0%,transparent_70%)]" />
      <div className="relative z-10 py-[52px] px-6 lg:py-20 lg:px-14 max-w-[860px] lg:mx-auto">
        <p className="text-[9px] tracking-[0.42em] uppercase text-earth-300/50 mb-3.5">
          At a glance
        </p>
        <h2 className="font-serif text-display leading-[0.97] tracking-[-0.02em] text-cream mb-10">
          At a glance.
        </h2>

        {/* Fact grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3">
          {plant.glance.map((s, i) => {
            const cols2 = i % 2 !== 0;
            const cols3 = i % 3 !== 0;
            const total = plant.glance.length;
            const lastRowStart2 = total - (total % 2 || 2);
            const lastRowStart3 = total - (total % 3 || 3);

            return (
              <div
                key={i}
                className={`py-[18px] px-3.5 lg:py-6 lg:px-7 ${
                  cols2 ? "border-l border-cream/[0.08] lg:border-l-0" : ""
                } ${cols3 ? "lg:border-l lg:border-cream/[0.08]" : ""} ${
                  i < lastRowStart2 ? "border-b border-cream/[0.08] lg:border-b-0" : ""
                } ${i < lastRowStart3 ? "lg:border-b lg:border-cream/[0.08]" : ""}`}
              >
                <p className="text-[8px] tracking-[0.42em] uppercase text-cream/15 mb-2 lg:mb-2.5">
                  {s.label}
                </p>
                <p className="font-serif text-base lg:text-[1.1rem] text-cream/80 leading-[1.1] mb-1">
                  {s.value}
                </p>
                {s.note && (
                  <p className="text-[11px] lg:text-xs text-cream/25 leading-[1.4]">
                    {s.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Verdict */}
        <div className="mt-9 lg:mt-12 p-[18px] lg:p-[24px_28px] border border-cream/[0.08] rounded-[10px] bg-cream/[0.04]">
          <p className="font-serif text-[0.95rem] lg:text-[1.05rem] italic leading-[1.55] text-cream/40">
            &ldquo;{plant.verdict}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Tab Bar (mobile — horizontal scroll)
// ---------------------------------------------------------------------------
function TabBar({ active, onSelect }: { active: TabId; onSelect: (id: TabId) => void }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const btn = bar.querySelector(`[data-id="${active}"]`) as HTMLElement | null;
    if (btn) btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }, [active]);

  return (
    <div
      ref={barRef}
      className="bg-[rgba(15,15,15,0.98)] border-b border-cream/[0.08] overflow-x-auto flex"
      style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
    >
      <div className="flex px-3 min-w-max">
        {TABS.map((t) => (
          <button
            key={t.id}
            data-id={t.id}
            onClick={() => onSelect(t.id)}
            className={`bg-transparent border-b-2 px-[11px] pt-[13px] pb-[11px] cursor-pointer whitespace-nowrap text-[11px] tracking-[0.03em] font-sans transition-all duration-150 ${
              active === t.id
                ? "border-forest-300 text-forest-300"
                : "border-transparent text-cream/25 hover:text-cream/40"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sidebar (desktop — vertical list)
// ---------------------------------------------------------------------------
function Sidebar({ active, onSelect, plant }: { active: TabId; onSelect: (id: TabId) => void; plant: Plant }) {
  return (
    <div className="w-[200px] flex-shrink-0 border-r border-cream/[0.08] bg-deep sticky top-0 self-start min-h-[500px]">
      <div className="p-[28px_24px_20px]">
        <p className="text-[9px] tracking-[0.42em] uppercase text-cream/15 mb-1.5">
          Plant file
        </p>
        <p className="font-serif text-xs italic text-cream/25 leading-[1.4]">
          {plant.binomial}
        </p>
      </div>
      <div className="border-t border-cream/[0.08] pt-1.5 pb-5">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => onSelect(t.id)}
            className={`block w-full text-left bg-transparent border-l-2 py-[9px] px-6 cursor-pointer text-xs tracking-[0.03em] font-sans transition-all duration-150 ${
              active === t.id
                ? "border-forest-300 text-forest-300"
                : "border-transparent text-cream/30 hover:text-cream/50"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Shared tab primitives
// ---------------------------------------------------------------------------
function TabWrap({ children }: { children: React.ReactNode }) {
  return <div className="p-6 pb-11 lg:p-[36px_40px_56px]">{children}</div>;
}

function TabHead({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="text-[9px] tracking-[0.42em] uppercase text-earth-300/50 mb-2.5">
        {label}
      </p>
      <h2 className="font-serif text-heading leading-[1.05] tracking-[-0.01em] text-cream mb-3">
        {title}
      </h2>
      <div className="w-8 h-px bg-gradient-to-r from-forest-300/50 to-transparent" />
    </div>
  );
}

function DataRow({ label, value, detail, last }: { label: string; value: string; detail?: string; last?: boolean }) {
  return (
    <div className={last ? "" : "pb-4 mb-4 border-b border-cream/[0.08]"}>
      <div className="flex gap-4 items-baseline mb-1.5">
        <span className="text-[8px] tracking-[0.42em] uppercase text-cream/15 w-[82px] flex-shrink-0">
          {label}
        </span>
        <span className="font-serif text-[0.9rem] lg:text-base text-cream/80">
          {value}
        </span>
      </div>
      {detail && (
        <p className="text-[11.5px] lg:text-[13px] text-cream/25 leading-[1.75] ml-[98px]">
          {detail}
        </p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Tab: Overview
// ---------------------------------------------------------------------------
function OverviewTab({ plant }: { plant: Plant }) {
  return (
    <TabWrap>
      <TabHead label="Plant overview" title={plant.name} />
      <p className="text-[13px] text-cream/40 leading-[1.78] mb-7">
        {plant.verdict}
      </p>
      <div className="grid grid-cols-2 gap-1 mb-7">
        {plant.glance.slice(0, 4).map((s, i) => (
          <div key={i} className="p-3.5 border border-cream/[0.08] rounded-[7px] bg-cream/[0.04]">
            <p className="text-[7px] tracking-[0.42em] uppercase text-cream/15 mb-2">
              {s.label}
            </p>
            <p className="font-serif text-[0.9rem] text-cream/75">{s.value}</p>
          </div>
        ))}
      </div>
      <p className="text-[8px] tracking-[0.42em] uppercase text-cream/15 mb-2.5">
        Traits
      </p>
      <div className="flex flex-wrap gap-1.5">
        {plant.traits.map((t) => (
          <span
            key={t}
            className="text-[11px] text-cream/35 px-2.5 py-1 border border-cream/[0.08] rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </TabWrap>
  );
}

// ---------------------------------------------------------------------------
// Tab: Variegation
// ---------------------------------------------------------------------------
function VarTab({ plant }: { plant: Plant }) {
  const { variegation } = plant;
  return (
    <TabWrap>
      <TabHead label="Variegation types" title="Type I vs Type II" />
      <p className="text-[13px] text-cream/35 leading-[1.78] mb-6">{variegation.intro}</p>
      {variegation.types.map((t, i) => (
        <div key={i} className="p-5 border border-cream/[0.08] rounded-[10px] bg-cream/[0.04] mb-2.5">
          <div className="w-7 h-[2.5px] rounded-full mb-3.5" style={{ background: t.color }} />
          <h3 className="font-serif text-base text-cream mb-2.5">{t.name}</h3>
          <p className="text-xs text-cream/35 leading-[1.75] mb-3.5">{t.pattern}</p>
          <div className="flex flex-col gap-1.5 pt-3 border-t border-cream/[0.08]">
            {([["Stability", t.stability], ["Market", t.market]] as const).map(([k, v]) => (
              <div key={k} className="flex gap-2.5">
                <span className="text-[7px] tracking-[0.42em] uppercase text-cream/15 w-14 flex-shrink-0 pt-px">
                  {k}
                </span>
                <span className="text-[11px] text-cream/35 leading-[1.55]">{v}</span>
              </div>
            ))}
          </div>
          <p className="text-xs italic leading-[1.6] mt-3" style={{ color: t.color, opacity: 0.75 }}>
            {t.note}
          </p>
        </div>
      ))}
      <p className="text-xs italic text-cream/25 leading-[1.65] mt-3.5">{variegation.closing}</p>
    </TabWrap>
  );
}

// ---------------------------------------------------------------------------
// Tab: Care
// ---------------------------------------------------------------------------
function CareTab({ plant }: { plant: Plant }) {
  return (
    <TabWrap>
      <TabHead label="Care conditions" title="What it needs" />
      {plant.care.map((row, i) => (
        <DataRow
          key={i}
          label={row.label}
          value={row.value}
          detail={row.detail}
          last={i === plant.care.length - 1}
        />
      ))}
    </TabWrap>
  );
}

// ---------------------------------------------------------------------------
// Tab: Substrate
// ---------------------------------------------------------------------------
function SubstrateTab({ plant }: { plant: Plant }) {
  const { substrate } = plant;
  return (
    <TabWrap>
      <TabHead label="Substrate" title="What it grows in" />
      <p className="text-[13px] text-cream/35 leading-[1.78] mb-6">{substrate.intro}</p>
      {substrate.options.map((o, i) => (
        <div
          key={i}
          className={`relative p-5 rounded-[10px] mb-2.5 border ${
            o.recommended
              ? "border-forest-300/50 bg-forest-300/[0.04]"
              : "border-cream/[0.08] bg-cream/[0.04]"
          }`}
        >
          {o.recommended && (
            <span className="absolute top-3.5 right-3.5 text-[9px] text-forest-300 px-2 py-0.5 border border-forest-300/50 rounded-lg tracking-[0.1em]">
              RECOMMENDED
            </span>
          )}
          <h4 className={`font-serif text-base text-cream mb-3 ${o.recommended ? "pr-[100px]" : ""}`}>
            {o.name}
          </h4>
          <div className="flex flex-wrap gap-1 mb-3.5">
            {o.components.map((c) => (
              <span
                key={c}
                className="text-[10px] text-cream/20 px-2 py-0.5 border border-cream/[0.08] rounded-[10px]"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-xs text-cream/35 leading-[1.72] mb-3">{o.body}</p>
          <p className="text-xs text-forest-300/75 italic leading-[1.55] pt-3 border-t border-cream/[0.08]">
            {o.verdict}
          </p>
        </div>
      ))}
      <p className="text-xs italic text-cream/20 leading-[1.65] mt-3.5">{substrate.note}</p>
    </TabWrap>
  );
}

// ---------------------------------------------------------------------------
// Tab: Provenance
// ---------------------------------------------------------------------------
function ProvenanceTab({ plant }: { plant: Plant }) {
  const { provenance } = plant;
  return (
    <TabWrap>
      <TabHead label="Provenance" title="Origin & lineage" />
      <p className="text-[13px] text-cream/35 leading-[1.78] mb-7">{provenance.body}</p>
      <p className="text-[8px] tracking-[0.42em] uppercase text-cream/15 mb-4">
        Timeline
      </p>
      <div className="relative pl-[18px]">
        <div className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-cream/[0.08]" />
        {provenance.timeline.map((e, i) => (
          <div
            key={i}
            className={`relative ${i < provenance.timeline.length - 1 ? "pb-5" : ""}`}
          >
            <div className="absolute -left-[14.5px] top-[5px] w-2 h-2 rounded-full bg-earth-300/50" />
            <p className="text-[10px] text-earth-300/50 tracking-[0.06em] mb-1">{e.year}</p>
            <p className="text-[12.5px] text-cream/35 leading-[1.65]">{e.event}</p>
          </div>
        ))}
      </div>
    </TabWrap>
  );
}

// ---------------------------------------------------------------------------
// Tab: Propagation
// ---------------------------------------------------------------------------
function PropagationTab({ plant }: { plant: Plant }) {
  const { propagation } = plant;
  return (
    <TabWrap>
      <TabHead label="Propagation" title="How to multiply" />

      <div className="grid grid-cols-2 gap-1 mb-6">
        {([
          ["Method", propagation.method],
          ["Timing", propagation.timing],
          ["Success rate", propagation.successRate],
        ] as const).map(([l, v], i) => (
          <div
            key={l}
            className={`p-[12px_14px] border border-cream/[0.08] rounded-[7px] bg-cream/[0.04] ${
              i === 2 ? "col-span-2" : ""
            }`}
          >
            <p className="text-[7px] tracking-[0.42em] uppercase text-cream/15 mb-1.5">{l}</p>
            <p className="text-xs text-cream/55">{v}</p>
          </div>
        ))}
      </div>

      <p className="text-[8px] tracking-[0.42em] uppercase text-cream/15 mb-3.5">
        Steps
      </p>
      {propagation.steps.map((s, i) => (
        <div
          key={i}
          className={`flex gap-3 ${
            i < propagation.steps.length - 1
              ? "pb-3.5 mb-3.5 border-b border-cream/[0.08]"
              : ""
          }`}
        >
          <span className="text-[10px] text-cream/15 w-4 flex-shrink-0 text-right pt-px">
            {i + 1}.
          </span>
          <p className="text-[12.5px] text-cream/35 leading-[1.7]">{s}</p>
        </div>
      ))}

      <div className="mt-5 p-[16px_18px] border border-earth-300/[0.18] rounded-lg bg-earth-300/[0.03]">
        <p className="text-[7px] tracking-[0.42em] uppercase text-earth-300/50 mb-3">
          Warnings
        </p>
        {propagation.warnings.map((w, i) => (
          <p
            key={i}
            className={`text-xs text-earth-300/[0.55] leading-[1.65] ${
              i < propagation.warnings.length - 1 ? "mb-2" : ""
            }`}
          >
            {w}
          </p>
        ))}
      </div>
    </TabWrap>
  );
}

// ---------------------------------------------------------------------------
// Tab: Fit Check
// ---------------------------------------------------------------------------
function FitCheckTab({ plant }: { plant: Plant }) {
  const [sel, setSel] = useState<Record<string, number | null>>({
    light: null,
    humidity: null,
    space: null,
    experience: null,
  });

  const allDone = Object.values(sel).every((v) => v !== null);
  const score = allDone
    ? Math.round(
        (sel.light! * plant.fitWeights.light +
          sel.humidity! * plant.fitWeights.humidity +
          sel.space! * plant.fitWeights.space +
          sel.experience! * plant.fitWeights.experience) *
          100
      )
    : null;
  const verdict = score !== null ? getFitVerdict(score) : null;

  return (
    <TabWrap>
      <TabHead label="Fit assessment" title="Is this plant for you?" />

      {(Object.entries(FIT_OPTIONS) as [string, { label: string; v: number }[]][]).map(
        ([key, opts]) => (
          <div key={key} className="mb-5">
            <p className="text-[8px] tracking-[0.42em] uppercase text-cream/15 mb-2.5 capitalize">
              Your {key}
            </p>
            {opts.map((o) => (
              <button
                key={o.label}
                onClick={() => setSel((s) => ({ ...s, [key]: o.v }))}
                className={`block w-full text-left p-[9px_12px] mb-[3px] rounded-[7px] border transition-all duration-150 ${
                  sel[key] === o.v
                    ? "border-forest-300/50 bg-forest-300/[0.07]"
                    : "border-cream/[0.08] bg-transparent hover:border-cream/15"
                }`}
              >
                <span
                  className={`text-xs ${
                    sel[key] === o.v ? "text-forest-300" : "text-cream/35"
                  }`}
                >
                  {o.label}
                </span>
              </button>
            ))}
          </div>
        )
      )}

      {allDone && verdict && score !== null && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-2 p-5 rounded-[10px] flex gap-[18px] items-center"
          style={{
            border: `0.5px solid ${verdict.color.includes("forest") ? "rgba(133,185,142,0.25)" : verdict.color.includes("earth") ? "rgba(205,171,121,0.25)" : "rgba(192,112,112,0.25)"}`,
            background: verdict.color.includes("forest")
              ? "rgba(133,185,142,0.04)"
              : verdict.color.includes("earth")
                ? "rgba(205,171,121,0.04)"
                : "rgba(192,112,112,0.04)",
          }}
        >
          <div className="w-[54px] h-[54px] rounded-full border-[1.5px] border-cream/15 flex items-center justify-center flex-shrink-0">
            <span className="font-serif text-xl text-cream">{score}</span>
          </div>
          <div>
            <p className={`font-serif text-base ${verdict.color} mb-1`}>{verdict.label}</p>
            <p className="text-xs text-cream/30 leading-[1.6]">{verdict.note}</p>
          </div>
        </motion.div>
      )}

      {!allDone && (
        <p className="text-xs italic text-cream/20 mt-1">
          Select all options above to see your score.
        </p>
      )}
    </TabWrap>
  );
}

// ---------------------------------------------------------------------------
// Tab: Downsides
// ---------------------------------------------------------------------------
function DownsidesTab({ plant }: { plant: Plant }) {
  return (
    <TabWrap>
      <TabHead label="Honest take" title="The downsides" />
      <p className="text-[13px] text-cream/35 leading-[1.78] mb-6">
        No honest assessment of this plant is complete without the parts that aren&apos;t photogenic.
      </p>
      {plant.downsides.map((d, i) => (
        <div
          key={i}
          className="p-[14px_16px] mb-1.5 border border-cream/[0.08] rounded-lg"
        >
          <p className="font-serif text-[0.9rem] text-cream/60 mb-1">{d.title}</p>
          <p className="text-xs text-cream/25 leading-[1.72]">{d.body}</p>
        </div>
      ))}
    </TabWrap>
  );
}

// ---------------------------------------------------------------------------
// Details Section (tabbed — mobile: horizontal bar, desktop: sidebar)
// ---------------------------------------------------------------------------
function DetailsSection({ plant }: { plant: Plant }) {
  const [active, setActive] = useState<TabId>("overview");

  const tabContent: Record<TabId, React.ReactNode> = {
    overview: <OverviewTab plant={plant} />,
    variegation: <VarTab plant={plant} />,
    care: <CareTab plant={plant} />,
    substrate: <SubstrateTab plant={plant} />,
    provenance: <ProvenanceTab plant={plant} />,
    propagation: <PropagationTab plant={plant} />,
    fit: <FitCheckTab plant={plant} />,
    downsides: <DownsidesTab plant={plant} />,
  };

  return (
    <section className="min-h-[100svh] snap-start snap-always border-t border-cream/[0.08] flex flex-col">
      {/* Mobile header + tab bar */}
      <div className="lg:hidden">
        <div className="px-5 pt-[18px] bg-[#0f0f0f]">
          <p className="text-[9px] tracking-[0.42em] uppercase text-cream/20 mb-1">
            Plant file
          </p>
          <p className="font-serif text-[13px] italic text-cream/35 mb-3.5">
            {plant.binomial}
          </p>
        </div>
        <div className="sticky top-0 z-10">
          <TabBar active={active} onSelect={setActive} />
        </div>
      </div>

      {/* Layout: sidebar + content on desktop, content only on mobile */}
      <div className="lg:flex flex-1">
        <div className="hidden lg:block">
          <Sidebar active={active} onSelect={setActive} plant={plant} />
        </div>
        <div className="flex-1 bg-charcoal overflow-y-auto">
          {tabContent[active]}
        </div>
      </div>

      {/* Footer inline */}
      <div className="py-7 px-6 border-t border-cream/[0.08] flex justify-between items-center flex-shrink-0">
        <p className="text-[9px] tracking-[0.42em] uppercase text-cream/15">
          Rare Plant Atlas
        </p>
        <p className="font-serif text-[11px] italic text-cream/15">
          Cultivate with intention.
        </p>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Composition
// ---------------------------------------------------------------------------
export function PlantDetailClient({ plant }: { plant: Plant }) {
  return (
    <main className="h-[100svh] overflow-y-auto snap-y snap-mandatory hide-scrollbar">
      {plant.panels.map((panel, i) => (
        <CinematicPanel key={panel.id} panel={panel} isHero={i === 0} />
      ))}
      <AtAGlance plant={plant} />
      <DetailsSection plant={plant} />
    </main>
  );
}
