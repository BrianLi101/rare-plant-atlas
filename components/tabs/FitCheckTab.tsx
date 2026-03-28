"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { PlantFile } from "@/data/types";
import { TabContainer, TabHeader } from "./TabContainer";

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
    return { label: "Excellent fit", color: "text-forest-300", borderColor: "rgba(133,185,142,0.25)", bg: "rgba(133,185,142,0.04)" };
  if (score >= 68)
    return { label: "Good fit", color: "text-forest-400", borderColor: "rgba(133,185,142,0.25)", bg: "rgba(133,185,142,0.04)" };
  if (score >= 48)
    return { label: "Moderate fit", color: "text-earth-300", borderColor: "rgba(205,171,121,0.25)", bg: "rgba(205,171,121,0.04)" };
  return { label: "Challenging fit", color: "text-red-400/70", borderColor: "rgba(192,112,112,0.25)", bg: "rgba(192,112,112,0.04)" };
}

export function FitCheckTab({ plant }: { plant: PlantFile }) {
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
    <TabContainer>
      <TabHeader label="Fit assessment" title="Is this plant for you?" />

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
                <span className={`text-xs ${sel[key] === o.v ? "text-forest-300" : "text-cream/35"}`}>
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
          style={{ border: `0.5px solid ${verdict.borderColor}`, background: verdict.bg }}
        >
          <div className="w-[54px] h-[54px] rounded-full border-[1.5px] border-cream/15 flex items-center justify-center flex-shrink-0">
            <span className="font-serif text-xl text-cream">{score}</span>
          </div>
          <div>
            <p className={`font-serif text-base ${verdict.color} mb-1`}>{verdict.label}</p>
            <p className="text-xs text-cream/30 leading-[1.6]">
              {score >= 85
                ? "Your environment is well-matched. Go for it."
                : score >= 68
                  ? "Mostly aligned. Small adjustments could push this higher."
                  : score >= 48
                    ? "Some gaps to address before committing."
                    : "Significant mismatches \u2014 the plant will likely struggle."}
            </p>
          </div>
        </motion.div>
      )}

      {!allDone && (
        <p className="text-xs italic text-cream/20 mt-1">
          Select all options above to see your score.
        </p>
      )}
    </TabContainer>
  );
}
