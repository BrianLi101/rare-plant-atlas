import type { PlantPriceRange, PlantVariant } from "../types";
import {
  lechuzaClassicoLs21CharcoalMetallic,
  lechuzaPonSubstrate3L,
  lechuzaPonSubstrate18L,
  nurtureSystemNo1PowerGrow,
  xactoKnifeSet16Pc,
} from "../products";
import { formatPlantPriceRangeForGlance } from "../price";

export const monsteraDeliciosaAlboVariegataPlantPriceRange: PlantPriceRange = {
  currency: "USD",
  min: 50,
  max: 500,
  lastObserved: new Date("2026-03-21"),
  note: "Pricing spans node cuttings to mature plants; top-end examples can exceed this range.",
};

export const monsteraDeliciosaAlboVariegata: PlantVariant = {
  identity: {
    id: "monstera_deliciosa_albo_variegata",
    slug: "monstera-deliciosa-albo-variegata",
    genus: "Monstera",
    species: "deliciosa",
    tradeName: "Monstera Albo", 
    aliases: ["Monstera Albo", "Albo Monstera", "Variegated Monstera deliciosa"],
  },
  tagline: "The white whale climber.",
  heroDescription:
    "A highly sought variegated Monstera with white marbling and sectoring on deep green leaves. Stunning when balanced, but slower and less forgiving than standard deliciosa.",
  origin: "Cultivated variegated mutation of Monstera deliciosa",
  family: "Araceae",
  rarity: "Rare",
  priceRange: monsteraDeliciosaAlboVariegataPlantPriceRange,
  images: {},
  photos: [],
  colors: {
    primary: "#0f1a12",
    accent: "#d8d7cf",
    gradient: ["#0b130d", "#1c2a1f"],
  },
  traits: [
    "White variegation",
    "Slow growth",
    "Node propagation",
    "Climbing habit",
    "Collector favorite",
    "Light sensitive tissue",
  ],
  fitWeights: { light: 0.35, humidity: 0.25, space: 0.15, experience: 0.25 },

  panels: [
    {
      id: "hero",
      eyebrow: "Rare - Araceae - Variegated cultivar",
      lines: ["Monstera", "Albo", "Variegata"],
      italicLine: 1,
      earthLine: 2,
      sub: "White sectors, marbling, and dramatic fenestration make this one of the most recognizable collector houseplants in the world.",
    },
    {
      id: "variegation",
      eyebrow: "Why it is difficult",
      lines: ["White tissue", "means", "no chlorophyll."],
      italicLine: 1,
      sub: "The white areas cannot photosynthesize, so the green portions must carry the plant. Balanced variegation is beautiful and functional.",
      fact: "All-white growth looks spectacular but usually declines because it cannot support itself long-term.",
    },
    {
      id: "origin",
      eyebrow: "Collector market",
      lines: ["High demand,", "slow supply,", "volatile pricing."],
      italicLine: 1,
      sub: "Albo supply is constrained by slower growth, unstable expression, and the fact that propagation depends on node cuttings from existing stock.",
    },
  ],

  glance: [
    { label: "Price range", value: formatPlantPriceRangeForGlance(monsteraDeliciosaAlboVariegataPlantPriceRange), note: "Node cuttings to mature plants" },
    { label: "Difficulty", value: "Intermediate", note: "Sensitive but manageable with consistency" },
    { label: "Humidity", value: "60-80%", note: "White tissue browns faster in dry air" },
    { label: "Light", value: "Bright indirect", note: "Needs more light than green deliciosa" },
    { label: "Growth habit", value: "Climber", note: "Benefits from moss pole support" },
    { label: "Propagation", value: "Node cuttings", note: "Each cutting must include a viable node" },
  ],

  verdict:
    "A high-impact collector plant that rewards consistent light, careful watering, and disciplined pruning to maintain balanced variegation.",
  recommendedProducts: [
    {
      product: lechuzaClassicoLs21CharcoalMetallic,
      reason:
        "A stable self-watering pot option for established plants that need consistent moisture without prolonged saturation.",
    },
    {
      product: lechuzaPonSubstrate3L,
      reason:
        "Good for smaller plants or cuttings transitioning into a more aerated, predictable root zone.",
    },
    {
      product: lechuzaPonSubstrate18L,
      reason:
        "Useful for larger setups and long-term consistency when running multiple Monstera in similar media.",
    },
    {
      product: nurtureSystemNo1PowerGrow,
      reason:
        "Low-dose, regular feeding helps maintain steady growth and supports greener tissue production in active seasons.",
    },
    {
      product: xactoKnifeSet16Pc,
      reason:
        "Clean node cuts are essential during propagation and correction pruning; a sharp sterile blade reduces tissue damage.",
    },
  ],

  variegation: {
    intro:
      "Monstera Albo expression varies by node and plant vigor. The best specimens keep enough green tissue to fuel growth while maintaining strong white patterning.",
    types: [
      {
        name: "Sectoral / Half-Moon",
        color: "#f1efe7",
        pattern:
          "Large white sectors, including half-moons and full blocks across one side of the leaf.",
        stability:
          "Visually dramatic but can be unstable when white coverage becomes too dominant.",
        market:
          "Usually commands higher prices because the contrast is bold and highly photogenic.",
        note: "Prioritize balanced nodes when propagating to avoid long runs of all-white or all-green growth.",
      },
      {
        name: "Marbled / Mottled",
        color: "#dcd9cf",
        pattern:
          "Fine white flecking and marbling spread across the leaf, often with softer transitions.",
        stability:
          "Often more balanced for growth because green tissue is distributed throughout the blade.",
        market:
          "Generally more available than heavy sectoral forms, with wider pricing by pattern quality.",
        note: "A practical expression for long-term vigor if you want steady growth and consistent aesthetics.",
      },
    ],
    closing:
      "No two leaves are identical. Light, node selection, and pruning strategy all influence how variegation presents over time.",
  },

  care: [
    {
      label: "Light",
      value: "Bright indirect",
      detail:
        "Give stronger indirect light than standard Monstera. White tissue burns in direct sun, but low light increases reversion risk.",
    },
    {
      label: "Watering",
      value: "Top 1-2 in dry",
      detail:
        "Water deeply, then let the top layer dry before watering again. Keep drainage high to reduce root rot risk.",
    },
    {
      label: "Humidity",
      value: "60-80%",
      detail:
        "Higher humidity protects delicate white sections from browning and helps clean unfurling.",
    },
    {
      label: "Temperature",
      value: "65-85F",
      detail:
        "Maintain stable warmth. Cold drafts and sudden swings can stall growth and stress new leaves.",
    },
    {
      label: "Fertilizing",
      value: "Every 2-4 weeks",
      detail:
        "Use balanced liquid fertilizer in active growth seasons. Reduce or pause in winter to avoid stress buildup.",
    },
    {
      label: "Support",
      value: "Moss pole or trellis",
      detail:
        "Vertical support improves leaf size, fenestration, and overall vigor compared with unsupported trailing stems.",
    },
    {
      label: "Difficulty",
      value: "Intermediate",
      detail:
        "More demanding than green deliciosa due to variegation instability and lower stress tolerance in white tissue.",
    },
  ],

  substrate: {
    intro:
      "Albo roots perform best in airy, chunky media that hold some moisture while preserving oxygen around roots.",
    options: [
      {
        name: "Chunky Aroid Mix",
        components: [
          "Potting soil 40%",
          "Orchid bark 30%",
          "Perlite 20%",
          "Coco coir or chips 10%",
        ],
        body:
          "A balanced organic mix retains enough water for steady growth while avoiding the compaction that often triggers rot.",
        verdict: "Best default option for most indoor growers.",
        recommended: true,
      },
      {
        name: "Pon / Semi-Hydro",
        components: [
          "Pon substrate",
          "Reservoir planter",
          "Diluted nutrients",
          "Regular flushes",
        ],
        body:
          "A mineral setup can improve consistency once established, but transitions must be gradual to prevent root shock.",
        verdict: "Strong long-term option for growers who can monitor feeding and root health closely.",
        recommended: false,
      },
    ],
    note:
      "Avoid oversized pots. Repot only 1-2 inches wider than the current root mass to keep moisture levels predictable.",
  },

  provenance: {
    body: "Monstera deliciosa is native to tropical Central America. Albo forms are variegated mutations maintained through clonal propagation. Unlike more uniform commercial variegated lines, Albo expression remains variable from node to node, which keeps demand high and supply inconsistent.",
    timeline: [
      {
        year: "Pre-2010s",
        event:
          "Variegated Monstera circulate primarily through niche collectors and small specialty nurseries.",
      },
      {
        year: "2018-2021",
        event:
          "Social media drives major global demand spikes, pushing prices for rooted plants and single-node cuttings sharply upward.",
      },
      {
        year: "Recent years",
        event:
          "Availability expands through private propagation, but premium pricing remains for balanced, established specimens.",
      },
    ],
  },

  propagation: {
    method: "Stem cuttings with at least one node",
    timing: "Spring through early fall during active growth",
    successRate: "Moderate with healthy nodes and stable humidity",
    steps: [
      "Choose a healthy stem segment with one viable node and, ideally, one leaf with some green tissue.",
      "Make a clean cut below the node using a sterile blade to reduce infection risk.",
      "Root in water, sphagnum moss, or an airy propagation mix under bright indirect light.",
      "Keep warmth and humidity stable while monitoring for new root growth and signs of rot.",
      "Pot up only after roots are established and switch to a chunky long-term substrate.",
    ],
    warnings: [
      "All-white cuttings usually fail because they cannot photosynthesize enough to establish.",
      "Node-less stem sections cannot root into a new plant.",
      "Overwatering fresh cuttings is the most common cause of failure.",
    ],
  },

  downsides: [
    {
      title: "Variegation instability",
      body: "Plants can push extended all-green or all-white runs, requiring pruning decisions and patience.",
    },
    {
      title: "Slower growth than green deliciosa",
      body: "White tissue contributes no photosynthesis, so overall growth is slower and recovery takes longer.",
    },
    {
      title: "Browning on white sectors",
      body: "Low humidity and direct sun quickly show as crisping on variegated sections.",
    },
    {
      title: "Rot risk in dense media",
      body: "Poor drainage and oversized pots can keep roots wet too long and trigger rapid decline.",
    },
    {
      title: "High cost of mistakes",
      body: "Pricing can still be significant, so propagation or care errors carry meaningful financial downside.",
    },
  ],
};
