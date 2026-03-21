import type { PlantPhoto, PlantPriceRange, PlantVariant } from "../types";
import {
  lechuzaPonSubstrate3L,
  lechuzaPonSubstrate18L,
  ikeaOdlaLeca,
  lechuzaClassicoLs21CharcoalMetallic,
  nurtureSystemNo1PowerGrow,
} from "../products";
import { formatPlantPriceRangeForGlance } from "../price";

const IMG = "/plants/anthurium-delta-force";

const heroPhoto: PlantPhoto = {
  id: "anthurium-delta-force-hero",
  image: `${IMG}/hero.jpg`,
  caption: "Anthurium Delta Force hero foliage",
  description:
    "Mature deltoid leaf with bright white venation and a narrow arrow-point tip.",
};

const roundedEmergencePhoto: PlantPhoto = {
  id: "anthurium-delta-force-rounded-emergence",
  image: `${IMG}/rounded-emergence.jpg`,
  caption: "Rounded juvenile emergence",
  description:
    "New growth can emerge softer and rounder before hardening into the signature triangular form.",
};

const tissueCulturePhoto: PlantPhoto = {
  id: "anthurium-delta-force-tissue-culture-plantlet",
  image: `${IMG}/tissue-culture-plantlet.jpeg`,
  caption: "Tissue culture plantlet",
  description:
    "Commercial tissue culture is the main route for true-to-type Delta Force availability today.",
};

export const anthuriumDeltaForcePlantPriceRange: PlantPriceRange = {
  currency: "USD",
  min: 50,
  max: 300,
  lastObserved: new Date("2026-03-21"),
  note: "Size and maturity dependent. Premium specimens can exceed this range.",
};

export const anthuriumDeltaForce: PlantVariant = {
  identity: {
    id: "anthurium_delta_force",
    slug: "anthurium-delta-force",
    genus: "Anthurium",
    tradeName: "Anthurium 'Delta Force'",
    aliases: ["Delta Force", "Anthurium DF"],
  },
  tagline: "Triangular, veined, iconic.",
  heroDescription:
    "A legendary Anthurium hybrid with sharply deltoid foliage, dark glossy texture, and high-contrast white venation. Architectural but forgiving with stable care.",
  origin: "Ree Gardens, Miami, Florida",
  family: "Araceae",
  rarity: "Rare",
  priceRange: anthuriumDeltaForcePlantPriceRange,
  images: {
    hero: heroPhoto.image,
    detail: [roundedEmergencePhoto.image, tissueCulturePhoto.image],
  },
  photos: [heroPhoto, roundedEmergencePhoto, tissueCulturePhoto],
  colors: {
    primary: "#0f1b14",
    accent: "#d8dccf",
    gradient: ["#07110b", "#1a2b1f"],
  },
  traits: [
    "Deltoid foliage",
    "White venation",
    "Tissue-culture available",
    "Semi-hydro adaptable",
    "Collector favorite",
    "Beginner-friendly rare aroid",
  ],
  fitWeights: { light: 0.3, humidity: 0.3, space: 0.15, experience: 0.25 },

  panels: [
    {
      id: "hero",
      eyebrow: "Rare - Araceae - Cultivar hybrid",
      lines: ["Anthurium", "Delta", "Force"],
      italicLine: 1,
      earthLine: 2,
      sub: "Bold triangular leaves, bright white veins, and a profile that reads sculptural in any indoor setup.",
      image: heroPhoto.image,
    },
    {
      id: "origin",
      eyebrow: "1990s - Miami, Florida",
      lines: ["From a", "single", "standout seedling."],
      italicLine: 1,
      sub: "Created by Steve Nock at Ree Gardens from Anthurium clarinervium x pedatoradiatum, then selected for its unique narrow-tipped delta leaf shape.",
      fact: "Despite repeated crosses from the same parents, this exact form has not been reliably recreated from seed.",
      image: tissueCulturePhoto.image,
    },
  ],

  glance: [
    { label: "Price range", value: formatPlantPriceRangeForGlance(anthuriumDeltaForcePlantPriceRange), note: "Size and maturity dependent" },
    { label: "Difficulty", value: "Intermediate", note: "Hardier than many collector Anthuriums" },
    { label: "Humidity", value: "60-80%", note: "Low humidity often browns leaf tips" },
    { label: "Light", value: "Bright indirect", note: "Avoid direct sun on foliage" },
    { label: "Growth form", value: "Upright compact", note: "Typically 40-60 cm indoors" },
    { label: "Leaf size", value: "20-30 cm", note: "Sharp deltoid shape with narrow tip" },
  ],

  verdict:
    "One of the most recognizable Anthurium hybrids: dramatic, historically significant, and unusually approachable when humidity and watering are kept consistent.",
  recommendedProducts: [
    {
      product: ikeaOdlaLeca,
      reason:
        "Delta Force transitions well to LECA and benefits from the aeration and stable moisture profile of semi-hydro culture.",
    },
    {
      product: lechuzaPonSubstrate3L,
      reason:
        "A practical size for small to medium plants, especially during early transitions from soil to mineral media.",
    },
    {
      product: lechuzaPonSubstrate18L,
      reason:
        "Useful for long-term semi-hydro setups and larger collections needing consistent media behavior.",
    },
    {
      product: lechuzaClassicoLs21CharcoalMetallic,
      reason:
        "A stable self-watering planter that pairs well with Pon or LECA while supporting upright Anthurium growth.",
    },
    {
      product: nurtureSystemNo1PowerGrow,
      reason:
        "Diluted, regular feeding supports leaf size, venation clarity, and consistent growth in both soil and semi-hydro setups.",
    },
  ],

  care: [
    {
      label: "Light",
      value: "Bright indirect",
      detail:
        "Keep 2-3 feet from east or north windows, or use grow lights for 12-14 hours daily when natural light is limited.",
    },
    {
      label: "Watering",
      value: "Even moisture",
      detail:
        "Let the top inch dry before watering again. Keep moist but never waterlogged to reduce root rot risk.",
    },
    {
      label: "Humidity",
      value: "60-80%",
      detail:
        "Tip browning is usually humidity-related. Raise ambient humidity first before changing nutrient or watering routines.",
    },
    {
      label: "Temperature",
      value: "65-77F",
      detail:
        "Protect from drafts, vents, and sudden swings. Stable warmth maintains steady leaf development.",
    },
    {
      label: "Feeding",
      value: "Half-strength routine",
      detail:
        "Use a balanced water-soluble fertilizer every 4-6 weeks in active growth, then reduce or pause in cooler months.",
    },
    {
      label: "Water quality",
      value: "Low mineral preferred",
      detail:
        "Distilled or rainwater helps limit mineral spotting and long-term leaf damage from hard tap water.",
    },
    {
      label: "Difficulty",
      value: "Intermediate",
      detail:
        "Much more resilient than fragile collector Anthuriums, but still benefits from stable humidity and careful watering.",
    },
  ],

  substrate: {
    intro:
      "Delta Force performs well in both airy aroid mixes and semi-hydro systems. The key is oxygen at the roots with consistent, not stagnant, moisture.",
    options: [
      {
        name: "Chunky Aroid Mix",
        components: [
          "Orchid bark 33%",
          "Peat moss or coco coir 33%",
          "Perlite 33%",
          "Optional charcoal",
          "Optional sphagnum",
        ],
        body:
          "A balanced organic mix keeps enough moisture for Anthurium roots while retaining airflow and reducing compaction.",
        verdict:
          "Reliable baseline for most growers. Repot every 2-3 years or when root-bound.",
        recommended: false,
      },
      {
        name: "LECA / Semi-Hydro",
        components: [
          "LECA",
          "Reservoir planter",
          "Diluted balanced nutrients",
          "EC monitoring",
        ],
        body:
          "Delta Force adapts strongly to inert media when humidity and nutrient strength are managed carefully.",
        verdict:
          "Excellent once established. Keep fertilizer dilute and monitor EC to avoid salt stress.",
        recommended: true,
      },
    ],
    note:
      "Use containers with drainage and avoid oversized pots; choose only 1-2 inches wider at repotting time.",
  },

  provenance: {
    body: "Anthurium 'Delta Force' was created in the 1990s by Steve Nock at Ree Gardens in Miami, Florida, from a cross of Anthurium clarinervium and Anthurium pedatoradiatum. From the resulting seedlings, one plant stood out for a uniquely deltoid, narrow-tipped blade and was named Delta Force. Because this exact phenotype has not been reliably recreated from seed, modern distribution depends heavily on tissue culture and clonal propagation.",
    timeline: [
      {
        year: "1990s",
        event:
          "Steve Nock performs clarinervium x pedatoradiatum crosses at Ree Gardens and selects the standout seedling later named Delta Force.",
      },
      {
        year: "2000s-2010s",
        event:
          "Plant circulates mainly through divisions from original stock, remaining scarce and premium-priced.",
      },
      {
        year: "Recent years",
        event:
          "Tissue culture scales availability, lowering entry price while preserving true-to-type morphology.",
      },
    ],
  },

  propagation: {
    method: "Division and tissue culture",
    timing: "Spring through summer during active growth",
    successRate: "Moderate for division, high for commercial tissue culture",
    steps: [
      "Choose a healthy, actively growing plant with multiple growth points before dividing.",
      "Unpot and separate offsets or stem sections with sterile tools, preserving as many roots as possible.",
      "Pot into an airy mix or transition medium and keep warm with elevated humidity during recovery.",
      "Water lightly but consistently until roots re-establish and new growth resumes.",
      "For true-to-type scaling, rely on tissue-cultured stock rather than seed-grown plants.",
    ],
    warnings: [
      "Seed-grown offspring from the parent cross are not guaranteed to reproduce Delta Force morphology.",
      "Fresh divisions are vulnerable to rot if kept too wet or in poorly aerated media.",
      "Do not divide stressed plants; wait for active growth and healthy roots.",
    ],
  },

  downsides: [
    {
      title: "Humidity sensitivity at leaf tips",
      body: "Browning tips are common when ambient humidity drops, even if watering and nutrition are otherwise correct.",
    },
    {
      title: "Not reliably reproducible by seed",
      body: "The defining Delta Force form is difficult to recreate from seed, so sourcing true plants depends on trusted clonal stock.",
    },
    {
      title: "Direct sun damage",
      body: "Leaves can scorch quickly under direct exposure, especially at mid-day window intensity.",
    },
    {
      title: "Toxic if ingested",
      body: "Like other Anthuriums, it contains calcium oxalate crystals and must be kept away from pets and children.",
    },
    {
      title: "Can still be expensive at larger sizes",
      body: "While tissue culture reduced prices, mature plants with strong form still command premium pricing.",
    },
  ],
};
