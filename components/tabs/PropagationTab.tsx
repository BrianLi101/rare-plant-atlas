"use client";

import { useState } from "react";
import Image from "next/image";
import type { PlantFile, PropagationMethod, SuccessRateLevel } from "@/data/types";
import { TabContainer, TabHeader } from "./TabContainer";

/* ── Success-rate pip colors ─────────────────────────────────────────── */
const LEVEL_CONFIG: Record<SuccessRateLevel, { pips: number; color: string }> =
  {
    High: { pips: 3, color: "rgb(133,185,142)" },
    Medium: { pips: 2, color: "rgb(205,171,121)" },
    Low: { pips: 1, color: "rgb(192,112,112)" },
  };

function SuccessPips({ level }: { level: SuccessRateLevel }) {
  const cfg = LEVEL_CONFIG[level];
  return (
    <div className="flex items-center gap-[3px] mt-1.5">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-[18px] h-[3px] rounded-sm"
          style={{
            background: i <= cfg.pips ? cfg.color : "rgba(250,247,242,0.1)",
          }}
        />
      ))}
      <span className="text-[10px] text-cream/35 ml-1">{level}</span>
    </div>
  );
}

/* ── Difficulty badge colors ─────────────────────────────────────────── */
const DIFF_STYLES: Record<string, string> = {
  Easy: "text-forest-300 border-forest-300/30 bg-forest-300/[0.05]",
  Moderate: "text-earth-300 border-earth-300/30 bg-earth-300/[0.05]",
  Challenging:
    "text-[rgba(251,191,98,0.8)] border-[rgba(251,191,98,0.2)] bg-[rgba(251,191,98,0.04)]",
  Expert:
    "text-[rgba(192,112,112,0.8)] border-[rgba(192,112,112,0.3)] bg-[rgba(192,112,112,0.04)]",
};

/* ── Method detail renderer ──────────────────────────────────────────── */
function MethodDetail({ method }: { method: PropagationMethod }) {
  return (
    <div className="animate-fade-in">
      {/* Hero image */}
      {method.heroImage && (
        <div className="relative w-full aspect-[16/9] rounded-[10px] overflow-hidden border border-cream/[0.08] mb-6">
          <Image
            src={method.heroImage}
            alt={method.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
      )}

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-1 mb-6">
        <div className="p-[10px_12px] border border-cream/[0.08] rounded-[7px] bg-cream/[0.03]">
          <p className="text-[7px] tracking-[0.42em] uppercase text-cream/15 mb-1.5">
            Timing
          </p>
          <p className="text-[11px] text-cream/55 leading-[1.3]">
            {method.timing}
          </p>
        </div>
        <div className="p-[10px_12px] border border-cream/[0.08] rounded-[7px] bg-cream/[0.03]">
          <p className="text-[7px] tracking-[0.42em] uppercase text-cream/15 mb-1.5">
            Success rate
          </p>
          <SuccessPips level={method.successRate} />
        </div>
        <div className="p-[10px_12px] border border-cream/[0.08] rounded-[7px] bg-cream/[0.03]">
          <p className="text-[7px] tracking-[0.42em] uppercase text-cream/15 mb-1.5">
            Difficulty
          </p>
          <p className="text-[11px] text-cream/55 leading-[1.3]">
            {method.difficulty}
          </p>
        </div>
      </div>

      {/* Overview */}
      <p className="text-[13px] text-cream/35 leading-[1.78] mb-6">
        {method.overview}
      </p>

      {/* Steps */}
      <p className="text-[8px] tracking-[0.42em] uppercase text-cream/15 mb-5">
        Step by step
      </p>
      {method.steps.map((step, i) => {
        const isLast = i === method.steps.length - 1;
        return (
          <div key={i} className="flex gap-4">
            {/* Left: number + line */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-9 h-9 rounded-full border border-cream/12 bg-[#111111] flex items-center justify-center flex-shrink-0 z-[1]">
                <span className="font-serif text-[11px] text-cream/40">
                  {i + 1}
                </span>
              </div>
              {!isLast && (
                <div className="w-px flex-1 min-h-[16px] mt-1 bg-gradient-to-b from-cream/12 to-transparent" />
              )}
            </div>

            {/* Right: content */}
            <div className={`flex-1 ${isLast ? "" : "pb-6"}`}>
              <p className="font-serif text-[14px] text-cream/75 leading-[1.3] mb-2.5">
                {step.title}
              </p>
              {step.image && (
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-cream/[0.08] mb-2.5">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              )}
              <p className="text-[12px] text-cream/30 leading-[1.75] mb-2">
                {step.body}
              </p>
              {step.tip && (
                <div className="flex gap-2 p-[9px_12px] rounded-[7px] bg-[rgba(14,31,19,0.6)] border border-forest-300/15 mt-1.5">
                  <span className="text-[9px] text-forest-300/70 flex-shrink-0 mt-0.5">
                    ✦
                  </span>
                  <p className="text-[11px] text-forest-300/60 leading-[1.65] italic">
                    {step.tip}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Warnings */}
      {method.warnings.length > 0 && (
        <div className="mt-6 p-[16px_18px] border border-earth-300/20 rounded-lg bg-earth-300/[0.04]">
          <p className="text-[7px] tracking-[0.42em] uppercase text-earth-300/50 mb-3.5">
            Common mistakes
          </p>
          {method.warnings.map((w, i) => (
            <div
              key={i}
              className={`flex gap-2.5 ${
                i < method.warnings.length - 1
                  ? "pb-2.5 mb-2.5 border-b border-earth-300/[0.08]"
                  : ""
              }`}
            >
              <span className="text-[10px] text-earth-300/55 flex-shrink-0 mt-px">
                —
              </span>
              <p className="text-xs text-earth-300/55 leading-[1.65]">{w}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main tab ────────────────────────────────────────────────────────── */
export function PropagationTab({ plant }: { plant: PlantFile }) {
  const propagation = plant.propagation;
  const [activeIdx, setActiveIdx] = useState(0);

  if (!propagation) return null;

  const methods = propagation.methods;
  const active = methods[activeIdx] ?? methods[0];

  return (
    <TabContainer>
      <TabHeader label="Propagation" title="How to multiply" />

      {/* Intro */}
      {propagation.intro && (
        <p className="text-[13px] text-cream/35 leading-[1.78] mb-6">
          {propagation.intro}
        </p>
      )}

      {/* Method selector — only when multiple methods */}
      {methods.length > 1 && (
        <>
          <p className="text-[8px] tracking-[0.42em] uppercase text-cream/20 mb-2.5">
            Methods
          </p>
          <div className="mb-6 flex flex-col gap-2">
            {methods.map((m, i) => {
              const isActive = i === activeIdx;
              return (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`relative flex items-center gap-3.5 p-[14px_16px] rounded-[10px] border text-left w-full overflow-hidden transition-[border-color,background] duration-200
                    ${
                      isActive
                        ? "border-forest-300/30 bg-forest-300/[0.06]"
                        : "border-cream/[0.08] bg-transparent hover:border-cream/15 hover:bg-cream/[0.02]"
                    }`}
                >
                  {/* Green accent bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[3px] bg-forest-300 rounded-r-sm origin-center transition-transform duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isActive ? "scale-y-100" : "scale-y-0"}`}
                  />

                  {/* Thumbnail placeholder */}
                  {m.heroImage ? (
                    <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={m.heroImage}
                        alt={m.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-md flex-shrink-0 bg-gradient-to-br from-cream/[0.06] to-cream/[0.02]" />
                  )}

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`font-serif text-[14px] leading-[1.2] transition-colors duration-200 ${
                          isActive ? "text-cream" : "text-cream/40"
                        }`}
                      >
                        {m.name}
                      </span>
                      {m.badge && (
                        <span className="text-[8px] tracking-[0.12em] uppercase text-forest-300/60 px-[7px] py-[2px] border border-forest-300/20 rounded-full">
                          {m.badge}
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-[10px] px-[7px] py-[2px] rounded border ${DIFF_STYLES[m.difficulty] ?? DIFF_STYLES.Moderate}`}
                    >
                      {m.difficulty}
                    </span>
                  </div>

                  {/* "Viewing" chip */}
                  <div className="flex flex-col items-end gap-1.5 ml-auto flex-shrink-0">
                    <span
                      className={`text-[8px] tracking-[0.14em] uppercase text-forest-300 bg-forest-300/12 border border-forest-300/25 px-2 py-[2px] rounded-full whitespace-nowrap transition-[opacity,transform] duration-200
                        ${
                          isActive
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-[0.85]"
                        }`}
                    >
                      Viewing
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* Active method detail */}
      <MethodDetail key={activeIdx} method={active} />
    </TabContainer>
  );
}
