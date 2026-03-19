import type { PlantVariant } from "../types";

const IMG = "/plants/philodendron-gloriosum-variegated";

export const philodendronGloriosumVariegated: PlantVariant = {
  slug: "philodendron-gloriosum-variegated",
  name: "Philodendron Gloriosum Variegated",
  binomial: "Philodendron gloriosum (Variegated Type I)",
  tagline: "Velvet meets light.",
  heroDescription:
    "A terrestrial creeper with heart-shaped leaves of deep emerald velvet, interrupted by strokes of cream and white variegation. Each leaf is a living canvas \u2014 no two patterns alike.",
  origin: "Colombia",
  family: "Araceae",
  rarity: "Ultra-rare",
  priceRange: "$300 \u2013 $2,500+",
  images: {
    hero: `${IMG}/hero.jpg`,
    variegation: `${IMG}/type-1-block.jpg`,
  },
  colors: {
    primary: "#1a3522",
    accent: "#cdab79",
    gradient: ["#0d1f13", "#265031"],
  },
  traits: [
    "Velvet-textured foliage",
    "Terrestrial creeper",
    "Sectoral variegation",
    "Slow grower",
    "Humidity dependent",
    "Statement plant",
  ],
  fitWeights: { light: 0.3, humidity: 0.3, space: 0.15, experience: 0.25 },

  // ─── Cinematic panels ─────────────────────────────────────────────────
  panels: [
    {
      id: "hero",
      eyebrow: "Ultra-rare \u00b7 Araceae \u00b7 Colombia",
      lines: ["Philodendron", "Gloriosum", "Variegated"],
      italicLine: 2,
      earthLine: 2,
      sub: "A terrestrial creeper with heart-shaped leaves of deep emerald velvet, interrupted by strokes of cream and white. Each leaf is a living canvas.",
      image: `${IMG}/hero.jpg`,
    },
    {
      id: "variegation",
      eyebrow: "The variegation",
      lines: ["Velvet", "meets", "light."],
      italicLine: 2,
      sub: "Block variegation against deep green velvet. The pattern never repeats. Each new leaf is a reveal \u2014 emerging yellow, hardening to cream.",
      fact: "The original block-variegated plant traces back to Kaylee Ellen. It is not yet tissue cultured.",
      image: `${IMG}/type-1-block.jpg`,
    },
    {
      id: "origin",
      eyebrow: "Colombia \u00b7 Humid lowland forest",
      lines: ["From the", "forest", "floor."],
      italicLine: 1,
      sub: "Gloriosum carpets premontane forest floors from sea level to 1,500m. It was never meant to climb. It crawls, deliberately, across the earth.",
      fact: "First formally described in 1900. In serious collector hands by 2010.",
    },
  ],

  // ─── At a glance ──────────────────────────────────────────────────────
  glance: [
    { label: "Price range", value: "$300\u2013$2,500+", note: "Size & variegation dependent" },
    { label: "Leaf cycle", value: "4\u20138 weeks", note: "Each leaf is an event" },
    { label: "Difficulty", value: "Advanced", note: "Consistency non-negotiable" },
    { label: "Humidity", value: "60\u201380%", note: "The hard requirement" },
    { label: "Space", value: "Wide, not tall", note: "Terrestrial creeper" },
    { label: "Reward", value: "Unmatched", note: "No other aroid competes" },
  ],

  verdict:
    "A slow, demanding, extraordinarily beautiful plant that rewards patience and punishes neglect. Not a casual purchase.",

  // ─── Variegation ──────────────────────────────────────────────────────
  variegation: {
    intro:
      "Not all Gloriosum variegation is equal. Two distinct forms exist, and they differ in origin, stability, tissue culture status, and price. Think of it like Monstera albo versus Thai Constellation \u2014 same species, fundamentally different variegation.",
    types: [
      {
        name: "Type 1 \u2014 Block Variegation",
        color: "#85b98e",
        pattern:
          "Large, defined blocks of color that emerge yellow on new leaves and harden off to a creamy white. Clean, dramatic sectors \u2014 half-moons, quarter-sectors, and full-coverage leaves are all possible. The variegation is clearly visible in the stem and rhizome as yellow-green striping.",
        stability:
          "Unstable. Can produce several fully green leaves before throwing another variegated one. However, the stem and rhizome tend to hold variegation extremely well \u2014 even when leaves come out green, the growing point typically retains the mutation and will produce variegated leaves over time.",
        market:
          "Significantly more expensive. Not yet in tissue culture. The original plant was purchased by plant influencer Kaylee Ellen and has since been distributed to NSE Tropicals and a handful of other sellers. Supply is extremely limited.",
        note: "This is the collector\u2019s form. Each unfurl is a genuine gamble \u2014 the variegation is not guaranteed on any given leaf, but the rhizome\u2019s commitment to the mutation means patience is usually rewarded.",
        image: `${IMG}/type-1-block.jpg`,
      },
      {
        name: "Type 2 \u2014 Splash Variegation",
        color: "#cdab79",
        pattern:
          "Fine flecks, speckles, and irregular splashes of white, light green, and yellow scattered across the leaf surface. Less dramatic contrast than Type 1 \u2014 the effect reads as texture and shimmer rather than bold graphic pattern.",
        stability:
          "Very stable. The splash pattern persists reliably across new growth with minimal risk of reversion. Comparable to Thai Constellation\u2019s consistency.",
        market:
          "Widely tissue cultured and significantly more accessible. Pricing reflects the higher supply \u2014 far less expensive than Type 1, making it a more practical entry point for collectors who want variegated Gloriosum.",
        note: "A noisier, busier aesthetic compared to the clean elegance of Type 1. Beautiful in its own right, but a fundamentally different visual experience. Some growers prefer the subtlety and reliability.",
        image: `${IMG}/type-2-splash.jpg`,
      },
    ],
    closing:
      "Type 1 is rarer, more dramatic, and less predictable. Type 2 is stable, accessible, and widely available. Neither is objectively better \u2014 but they are different plants in practice. Know which you\u2019re buying.",
  },

  // ─── Care ─────────────────────────────────────────────────────────────
  care: [
    {
      label: "Light",
      value: "Bright indirect",
      detail:
        "East or north-facing. Variegated tissue burns even in brief direct sun \u2014 irreversible browning on white sectors.",
    },
    {
      label: "Humidity",
      value: "60\u201380%",
      detail:
        "The single most critical factor. Below 50%, leaves emerge smaller and less velvety. Misting is insufficient \u2014 use a humidifier.",
    },
    {
      label: "Temperature",
      value: "65\u201385\u00b0F",
      detail:
        "Stable warmth matters more than exact numbers. Below 60\u00b0F, growth stalls. Cold window drafts in winter are a common killer.",
    },
    {
      label: "Watering",
      value: "Let dry 2\u2033 first",
      detail:
        "The rhizome rots if kept constantly wet. Water thoroughly when you do, with complete drainage. Reduce by ~40% in winter.",
    },
    {
      label: "Difficulty",
      value: "Advanced",
      detail:
        "Humidity and consistency are non-negotiable. This is not a plant for casual or intermittent care.",
    },
  ],

  // ─── Substrate ────────────────────────────────────────────────────────
  substrate: {
    intro:
      "The exposed rhizome demands a substrate that balances moisture retention with aggressive drainage. It must never sit in water.",
    options: [
      {
        name: "Chunky Aroid Mix",
        components: [
          "Orchid bark 40%",
          "Perlite 25%",
          "Sphagnum 20%",
          "Charcoal 10%",
          "Worm castings 5%",
        ],
        body: "Traditional approach. Bark provides structure and airflow, perlite prevents compaction, sphagnum retains without waterlogging.",
        verdict:
          "Reliable and forgiving. Refresh every 12\u201318 months as bark decomposes.",
        recommended: false,
      },
      {
        name: "Lechuza Pon",
        components: [
          "Pumice",
          "Zeolite",
          "Lava rock",
          "Slow-release fertilizer",
        ],
        body: "Semi-hydro mineral substrate that never decomposes. Consistent moisture through capillary action when used with a self-watering reservoir.",
        verdict:
          "Excellent if you commit fully. Expect a 2\u20134 week adjustment period from soil.",
        recommended: true,
      },
    ],
    note: "For a plant this valuable, Lechuza Pon\u2019s predictability is worth the transition cost.",
  },

  // ─── Provenance ───────────────────────────────────────────────────────
  provenance: {
    body: "Philodendron gloriosum is native to Colombia, carpeting humid lowland and premontane forests from sea level to ~1,500m. First formally described in 1900 \u2014 variegated forms didn\u2019t enter serious collector markets until tissue culture made them more available in the 2010s.",
    timeline: [
      {
        year: "1900",
        event:
          "N.E. Brown formally describes Philodendron gloriosum from Colombian specimens.",
      },
      {
        year: "1970s\u201380s",
        event:
          "Green-form enters European trade via Dutch nurseries. Niche collector\u2019s plant.",
      },
      {
        year: "2010s",
        event:
          "Type 2 (splash) variegated forms appear via Southeast Asian tissue culture. Type 1 (block) variegation surfaces through private collectors.",
      },
      {
        year: "2020\u2013Now",
        event:
          "Global demand drives prices. Type 1 specimens \u2014 traceable to Kaylee Ellen\u2019s original \u2014 command $1,000\u2013$2,500+. Type 2 is more widely available at $300\u2013$800.",
      },
    ],
  },

  // ─── Propagation ──────────────────────────────────────────────────────
  propagation: {
    method: "Rhizome division",
    timing: "Spring or early summer, during active growth",
    successRate: "High if plant is healthy and mature enough",
    steps: [
      "Wait until at least 4\u20135 leaves with visible growing points on each resulting piece.",
      "Identify a natural division point \u2014 at least 2 leaves and healthy roots per piece.",
      "Use a sterilized blade. Cut cleanly and decisively. Never saw.",
      "Treat cut surfaces with cinnamon or sulfur powder as antifungal.",
      "Keep humidity above 70% and avoid direct light for 2\u20133 weeks post-division.",
      "Light moisture only until new growth resumes \u2014 do not saturate.",
    ],
    warnings: [
      "Dividing a small or stressed plant is the most common way to kill a Gloriosum.",
      "Variegation patterns may shift after division \u2014 the growing point has its own agenda.",
      "Overwatering fresh divisions is the primary cause of post-division rot.",
    ],
  },

  // ─── Downsides ────────────────────────────────────────────────────────
  downsides: [
    {
      title: "Slow growth is really slow",
      body: "4\u20138 weeks per leaf means 6\u20138 leaves per year in ideal conditions. Most homes aren\u2019t ideal. It will not fill a space quickly.",
    },
    {
      title: "Humidity is a hard requirement",
      body: "Below 50%, the plant survives but quality degrades visibly. Running a humidifier year-round is a real lifestyle commitment.",
    },
    {
      title: "Variegation is a gamble (especially Type 1)",
      body: "Type 1 block variegation is unstable \u2014 green leaves happen. Type 2 splash is more reliable, but neither guarantees the leaf you want every time.",
    },
    {
      title: "The horizontal footprint",
      body: "As a creeper it sprawls sideways. That wide, shallow planter takes real surface area a climbing plant wouldn\u2019t.",
    },
    {
      title: "Price makes mistakes expensive",
      body: "At $300\u2013$2,500+, a watering error, cold draft, or pest outbreak carries real financial weight.",
    },
    {
      title: "Pest vulnerability",
      body: "Velvet surfaces attract spider mites and thrips. Variegated tissue is less resilient. Preventive treatment is maintenance, not optional.",
    },
  ],
};
