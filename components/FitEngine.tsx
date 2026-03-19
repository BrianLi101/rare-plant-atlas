"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PlantVariant } from "@/data/plants";

interface UserProfile {
  light: number;
  humidity: number;
  space: number;
  experience: number;
}

const lightOptions = [
  { value: 0, label: "Low", description: "North-facing, few windows" },
  { value: 0.5, label: "Medium", description: "East/west-facing, filtered" },
  {
    value: 1,
    label: "Bright Indirect",
    description: "South-facing, sheer curtains",
  },
  { value: 0.6, label: "Direct Sun", description: "Unfiltered, intense" },
];

const humidityOptions = [
  { value: 0.2, label: "Dry", description: "Below 30%, typical heated home" },
  {
    value: 0.5,
    label: "Moderate",
    description: "30–50%, average indoor",
  },
  {
    value: 0.85,
    label: "High",
    description: "50–70%, humidifier or bathroom",
  },
  {
    value: 1,
    label: "Very High",
    description: "70%+, greenhouse or cabinet",
  },
];

const spaceOptions = [
  { value: 0.4, label: "Compact", description: "Shelf or windowsill only" },
  {
    value: 0.7,
    label: "Moderate",
    description: "Tabletop or plant stand",
  },
  {
    value: 1,
    label: "Generous",
    description: "Dedicated floor space or wide surface",
  },
];

const experienceOptions = [
  { value: 0.2, label: "Beginner", description: "New to houseplants" },
  {
    value: 0.5,
    label: "Intermediate",
    description: "A few years of care experience",
  },
  {
    value: 0.8,
    label: "Advanced",
    description: "Comfortable with demanding plants",
  },
  {
    value: 1,
    label: "Expert",
    description: "Aroid specialist, greenhouse owner",
  },
];

function computeScore(profile: UserProfile, plant: PlantVariant): number {
  const w = plant.fitWeights;
  const raw =
    profile.light * w.light +
    profile.humidity * w.humidity +
    profile.space * w.space +
    profile.experience * w.experience;
  return Math.round(raw * 100);
}

function getVerdict(score: number): { label: string; color: string; description: string } {
  if (score >= 85)
    return {
      label: "Excellent Fit",
      color: "text-forest-300",
      description: "Your environment and experience are well-suited for this plant. Go for it.",
    };
  if (score >= 65)
    return {
      label: "Good Fit",
      color: "text-forest-400",
      description: "Mostly aligned. A small adjustment — humidity or light — could push this into ideal territory.",
    };
  if (score >= 45)
    return {
      label: "Moderate Fit",
      color: "text-earth-400",
      description: "Some gaps to address. Consider whether you can realistically modify your setup before committing.",
    };
  return {
    label: "Challenging Fit",
    color: "text-earth-500",
    description: "Significant mismatches. This plant may struggle in your current environment without major changes.",
  };
}

function OptionGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: number; label: string; description: string }[];
  value: number | null;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-3">
      <h4 className="text-xs tracking-[0.25em] uppercase text-cream/40">
        {label}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => onChange(opt.value)}
            className={`group text-left px-4 py-3 rounded-xl border transition-all duration-300 ${
              value === opt.value
                ? "border-forest-400/60 bg-forest-900/30"
                : "border-cream/8 bg-cream/[0.02] hover:border-cream/15 hover:bg-cream/[0.04]"
            }`}
          >
            <p
              className={`text-sm font-medium transition-colors ${
                value === opt.value ? "text-forest-300" : "text-cream/70"
              }`}
            >
              {opt.label}
            </p>
            <p className="text-xs text-cream/30 mt-0.5">{opt.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export function FitEngine({ plant }: { plant: PlantVariant }) {
  const [light, setLight] = useState<number | null>(null);
  const [humidity, setHumidity] = useState<number | null>(null);
  const [space, setSpace] = useState<number | null>(null);
  const [experience, setExperience] = useState<number | null>(null);

  const allSelected =
    light !== null &&
    humidity !== null &&
    space !== null &&
    experience !== null;

  const score = useMemo(() => {
    if (!allSelected) return null;
    return computeScore(
      {
        light: light!,
        humidity: humidity!,
        space: space!,
        experience: experience!,
      },
      plant
    );
  }, [light, humidity, space, experience, plant, allSelected]);

  const verdict = score !== null ? getVerdict(score) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-10"
    >
      {/* Plant context */}
      <div className="text-center pb-6 border-b border-cream/5">
        <p className="text-xs tracking-[0.3em] uppercase text-earth-400/50 mb-2">
          Evaluating
        </p>
        <p className="font-serif text-heading text-cream">{plant.name}</p>
        <p className="text-sm text-cream/30 italic mt-1">{plant.binomial}</p>
      </div>

      {/* Questions */}
      <div className="space-y-8">
        <OptionGroup
          label="Your Light Conditions"
          options={lightOptions}
          value={light}
          onChange={setLight}
        />
        <OptionGroup
          label="Your Humidity"
          options={humidityOptions}
          value={humidity}
          onChange={setHumidity}
        />
        <OptionGroup
          label="Available Space"
          options={spaceOptions}
          value={space}
          onChange={setSpace}
        />
        <OptionGroup
          label="Your Experience Level"
          options={experienceOptions}
          value={experience}
          onChange={setExperience}
        />
      </div>

      {/* Score result */}
      <AnimatePresence mode="wait">
        {score !== null && verdict && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.02] p-8 md:p-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-forest-950/40 to-transparent" />
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              {/* Score circle */}
              <div className="relative flex-shrink-0">
                <svg
                  viewBox="0 0 120 120"
                  className="w-28 h-28 -rotate-90"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="rgba(250,247,242,0.05)"
                    strokeWidth="6"
                  />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="url(#scoreGradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 52}
                    initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                    animate={{
                      strokeDashoffset:
                        2 * Math.PI * 52 * (1 - score / 100),
                    }}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.2,
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="scoreGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#85b98e" />
                      <stop offset="100%" stopColor="#cdab79" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="font-serif text-3xl text-cream"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {score}
                  </motion.span>
                </div>
              </div>

              {/* Verdict */}
              <div className="text-center md:text-left space-y-2">
                <h3
                  className={`font-serif text-xl md:text-2xl ${verdict.color}`}
                >
                  {verdict.label}
                </h3>
                <p className="text-sm text-cream/40 leading-relaxed max-w-md">
                  {verdict.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
