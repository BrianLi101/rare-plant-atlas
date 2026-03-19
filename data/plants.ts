export interface CinematicPanel {
  id: string;
  eyebrow: string;
  lines: string[];
  italicLine?: number;
  earthLine?: number;
  sub: string;
  fact?: string;
  image?: string;
}

export interface GlanceFact {
  label: string;
  value: string;
  note?: string;
}

export interface VariegationType {
  name: string;
  color: string;
  pattern: string;
  stability: string;
  market: string;
  note: string;
}

export interface CareItem {
  label: string;
  value: string;
  detail: string;
}

export interface SubstrateOption {
  name: string;
  components: string[];
  body: string;
  verdict: string;
  recommended: boolean;
}

export interface PlantFitWeights {
  light: number;
  humidity: number;
  space: number;
  experience: number;
}

export interface Plant {
  slug: string;
  name: string;
  binomial: string;
  tagline: string;
  heroDescription: string;
  origin: string;
  family: string;
  rarity: string;
  priceRange: string;
  colors: {
    primary: string;
    accent: string;
    gradient: [string, string];
  };
  traits: string[];
  fitWeights: PlantFitWeights;

  panels: CinematicPanel[];
  glance: GlanceFact[];
  verdict: string;

  variegation: {
    intro: string;
    types: VariegationType[];
    closing: string;
  };
  care: CareItem[];
  substrate: {
    intro: string;
    options: SubstrateOption[];
    note: string;
  };
  provenance: {
    body: string;
    timeline: { year: string; event: string }[];
  };
  propagation: {
    method: string;
    timing: string;
    successRate: string;
    steps: string[];
    warnings: string[];
  };
  downsides: { title: string; body: string }[];
}

export const plants: Plant[] = [
  {
    slug: "philodendron-gloriosum-variegated",
    name: "Philodendron Gloriosum Variegated",
    binomial: "Philodendron gloriosum (Variegated Type I)",
    tagline: "Velvet meets light.",
    heroDescription:
      "A terrestrial creeper with heart-shaped leaves of deep emerald velvet, interrupted by strokes of cream and white variegation. Each leaf is a living canvas — no two patterns alike.",
    origin: "Colombia",
    family: "Araceae",
    rarity: "Ultra-rare",
    priceRange: "$300 – $2,500+",
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

    panels: [
      {
        id: "hero",
        eyebrow: "Ultra-rare \u00b7 Araceae \u00b7 Colombia",
        lines: ["Philodendron", "Gloriosum", "Variegated"],
        italicLine: 2,
        earthLine: 2,
        sub: "A terrestrial creeper with heart-shaped leaves of deep emerald velvet, interrupted by strokes of cream and white. Each leaf is a living canvas.",
        image: "/plants/philodendron-gloriosum-variegated/hero.jpg",
      },
      {
        id: "variegation",
        eyebrow: "The variegation",
        lines: ["Velvet", "meets", "light."],
        italicLine: 2,
        sub: "Sectoral cream against deep green. The pattern never repeats. Type I variegation \u2014 defined blocks, not scattered speckles. Each new leaf is a reveal.",
        fact: "Type I commands premium prices. You see it across the room.",
        image: "/plants/philodendron-gloriosum-variegated/variegation-detail.jpg",
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

    variegation: {
      intro:
        "Not all Gloriosum variegation is equal. The distinction affects stability, price, and what you can realistically expect from future growth.",
      types: [
        {
          name: "Type I \u2014 Sectoral",
          color: "#85b98e",
          pattern:
            "Large, defined blocks of cream or white alongside deep green. Half-moon leaves are common. Clean boundaries between pigmented and unpigmented tissue.",
          stability:
            "Relatively stable. Tends to persist across new growth, though exact patterns are never predictable.",
          market: "Premium pricing \u2014 drama visible across the room.",
          note: "The collector\u2019s form. Each unfurl is a reveal \u2014 will it be a half-moon or a subtle wash?",
        },
        {
          name: "Type II \u2014 Speckled",
          color: "#cdab79",
          pattern:
            "Fine flecks, dots, and irregular patches scattered across the surface. Less dramatic contrast, more of a textured shimmer.",
          stability:
            "Less stable than Type I. More prone to reverting to all-green.",
          market: "More accessible pricing \u2014 beauty you appreciate up close.",
          note: "A different aesthetic \u2014 reads as texture rather than pattern. Closer to frosted than painted.",
        },
      ],
      closing: "Neither is objectively better. Know which you\u2019re buying.",
    },

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
            "Variegated forms surface in Southeast Asian markets. Tissue culture increases supply.",
        },
        {
          year: "2020\u2013Now",
          event:
            "Global demand drives Type I prices to $500\u2013$2,500+ depending on pattern and size.",
        },
      ],
    },

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
        title: "Variegation is a gamble",
        body: "Even stable Type I can shift. A half-moon mother doesn\u2019t guarantee half-moon babies. Some leaves come nearly all green.",
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
  },
];

export function getPlantBySlug(slug: string): Plant | undefined {
  return plants.find((p) => p.slug === slug);
}
