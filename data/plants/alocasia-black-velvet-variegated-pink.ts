import type { PlantPhoto, PlantPriceRange, PlantVariant } from "../types";
import {
  lechuzaPonSubstrate3L,
  lechuzaPonSubstrate18L,
  ojyuddSelfWateringPlanter8Pack,
  nurtureSystemNo1PowerGrow,
  ikeaOdlaLeca,
} from "../products";
import { formatPlantPriceRangeForGlance } from "../price";

const IMG = "/plants/alocasia-black-velvet-variegated-pink";

const heroPhoto: PlantPhoto = {
  id: "alocasia-black-velvet-pink-hero",
  image: `${IMG}/hero.jpg`,
  caption: "Alocasia Black Velvet Variegated Pink - hero foliage",
  description:
    "Primary specimen view showing dark velvet texture contrasted with pink-toned variegation.",
};

const inflorescencePhoto: PlantPhoto = {
  id: "alocasia-black-velvet-pink-inflorescence",
  image: `${IMG}/inflorescence.jpg`,
  caption: "Influorescence",
  description:
    "Influorescences appear in pairs and open up at different times to avoid self pollination. These have been cut open to show the internals.",
};

const rootsPhoto: PlantPhoto = {
  id: "alocasia-black-velvet-pink-roots",
  image: `${IMG}/roots.jpg`,
  caption: "Root structure",
  description:
    "Black velvets have delicate and extensive root systems. They are well suited for growth in soil, leca, and pon",
};

const cormsPhoto: PlantPhoto = {
  id: "alocasia-black-velvet-pink-corms",
  image: `${IMG}/corms.jpg`,
  caption: "Corms and offsets",
  description:
    "Corm cluster and propagation material for division and staged nursery growth.",
};

const cormsStartingToGrowPhoto: PlantPhoto = {
  id: "alocasia-black-velvet-pink-corms-starting-to-grow",
  image: `${IMG}/corms-starting-to-grow.jpg`,
  caption: "First corms",
  description: "Three white corms starting to grow on a juvenile three leaf plant. It will still be a few more months before they are ready to remove and propagate.",
};

const grownFromCormPhoto: PlantPhoto = {
  id: "alocasia-black-velvet-pink-grown-from-corm",
  image: `${IMG}/grown-from-corm.jpg`,
  caption: "A corm grown alocasia",
  description: "Approximately 3 month old corm-grown plant.",
};

const heavilyVariegatedLeafPhoto: PlantPhoto = {
  id: "alocasia-black-velvet-pink-heavily-variegated-leaf",
  image: `${IMG}/heavily-variegated-leaf.jpg`,
  caption: "Leaf with more variegation",
  description: "Black velvets can produce beautiful block variegation.",
};

export const alocasiaBlackVelvetVariegatedPinkPlantPriceRange: PlantPriceRange = {
  currency: "USD",
  min: 50,
  max: 300,
  lastObserved: new Date("2026-03-21"),
  note: "Maturity and variegation drive price; exceptional pink expression can exceed this range.",
};

export const alocasiaBlackVelvetVariegatedPink: PlantVariant = {
  identity: {
    id: "alocasia_reginula_black_velvet_variegated_pink",
    slug: "alocasia-black-velvet-variegated-pink",
    genus: "Alocasia",
    species: "reginula",
    tradeName: "Alocasia Black Velvet",
    variantLabel: "Variegated Pink",
    aliases: ["Pink variegated Black Velvet", "Alocasia reginula variegated pink"],
  },
  tagline: "Dark velvet, blush fire.",
  heroDescription:
    "A compact jewel Alocasia with near-black, velvet foliage and pink-to-cream sectoral variegation. High contrast and slow growth make each leaf feel earned.",
  origin: "Cultivated hybrid line (horticultural selection)",
  family: "Araceae",
  rarity: "Rare",
  priceRange: alocasiaBlackVelvetVariegatedPinkPlantPriceRange,
  images: {
    hero: heroPhoto.image,
    detail: [rootsPhoto.image, cormsPhoto.image],
    variegation: heavilyVariegatedLeafPhoto.image,
  },
  photos: [
    heroPhoto,
    inflorescencePhoto,
    rootsPhoto,
    cormsPhoto,
    cormsStartingToGrowPhoto,
    grownFromCormPhoto,
    heavilyVariegatedLeafPhoto,
  ],
  colors: {
    primary: "#121518",
    accent: "#d69aa8",
    gradient: ["#07080a", "#252b31"],
  },
  traits: [
    "Velvet foliage",
    "Compact growth",
    "Pink variegation",
    "Slow grower",
    "Humidity sensitive",
    "Collector plant",
  ],
  fitWeights: { light: 0.3, humidity: 0.35, space: 0.1, experience: 0.25 },
  alocasiaCormData: {
    ageBeforeCormingMonths: 8,
    cormsPerYearRange: [6, 10],
    monthsToCormSproutLeaf: 3,
    cormViabilityRate: "High",
    variegationInheritanceLikelihood: "High",
  },

  panels: [
    {
      id: "hero",
      eyebrow: "Rare - Araceae - Collector cultivar",
      lines: ["Alocasia", "Black Velvet", "Variegated Pink"],
      italicLine: 2,
      earthLine: 2,
      sub: "Near-black velvet blades cut by pink and cream sectors. Compact and dramatic.",
      image: heroPhoto.image,
    },
    {
      id: "variegation",
      eyebrow: "Expression profile",
      lines: ["Dark velvet", "with", "blush sectors."],
      italicLine: 2,
      sub: "Black Velvet variegation is usually grouped by color form: pink, white, or gold. Pattern intensity still shifts leaf-to-leaf by node expression and vigor.",
      fact: "Care requirements are largely the same across color forms; differences are visual and market-driven more than horticultural.",
      image: heavilyVariegatedLeafPhoto.image,
    },
    // {
    //   id: "origin",
    //   eyebrow: "Modern collector line",
    //   lines: ["Selected for", "contrast", "and compact form."],
    //   italicLine: 1,
    //   sub: "Black Velvet is a compact Alocasia valued for texture. Pink-variegated forms are horticultural selections propagated for ornamental expression.",
    //   image: inflorescencePhoto.image,
    // },
  ],

  glance: [
    { label: "Price range", value: formatPlantPriceRangeForGlance(alocasiaBlackVelvetVariegatedPinkPlantPriceRange), note: "Maturity and variegation drive price" },
    { label: "Leaf cycle", value: "4-8+ weeks", note: "Often slower in home conditions" },
    { label: "Difficulty", value: "Intermediate", note: "Standard jewel Alocasia care with consistency" },
    { label: "Humidity", value: "65%+", note: "Leaf quality drops below this" },
    { label: "Space", value: "Compact", note: "Best for small shelves or cabinets" },
    { label: "Growth habit", value: "Upright clumper", note: "Not a crawler or climber" },
  ],

  verdict:
    "A compact, high-contrast collector Alocasia that rewards stable humidity, careful watering, and patience.",
  recommendedProducts: [
    {
      product: lechuzaPonSubstrate3L,
      reason:
        "Useful for small jewel Alocasia repots and staged transitions into semi-hydro conditions.",
    },
    {
      product: lechuzaPonSubstrate18L,
      reason:
        "A stable mineral substrate for growers running multiple Alocasia in a consistent medium.",
    },
    {
      product: ikeaOdlaLeca,
      reason:
        "A practical LECA option for semi-hydro transitions and moisture-buffered root aeration in jewel Alocasia setups.",
    },
    {
      product: ojyuddSelfWateringPlanter8Pack,
      reason:
        "Works great with lechuza pon and great for sprouting corms. Typically plants need to be moved into a larger pot when they have 4 or more leaves.",
    },
    {
      product: nurtureSystemNo1PowerGrow,
      reason:
        "Supports steady growth and color retention when used at light, consistent feed rates.",
    },
  ],

  variegation: {
    title: "Pink, White, and Gold forms",
    intro:
      "Variegated Black Velvet is most useful to classify by color form rather than numbered pattern types. The three forms most growers track are pink, white, and gold.",
    types: [
      {
        name: "Pink form",
        color: "#d69aa8",
        pattern:
          "Blush to rosy sectors, marbling, or mottling over near-black velvet foliage.",
        stability:
          "Moderate and variable by node; expression can soften or intensify across successive leaves.",
        market:
          "Often carries a premium when color is saturated and distributed across multiple mature leaves.",
        note: "Highly collectible for contrast, but still follows standard Black Velvet care.",
      },
      {
        name: "White form",
        color: "#ecebe6",
        pattern:
          "Cream to bright white sectors or marbling that read crisp against dark velvet tissue.",
        stability:
          "Similar to pink and gold forms: variable leaf-to-leaf, driven by genetics and plant vigor.",
        market:
          "Commonly traded and typically priced below top-end pink or gold examples at similar size.",
        note: "Can present cleaner contrast, but husbandry remains the same as other color forms.",
      },
      {
        name: "Gold form",
        color: "#d8b260",
        pattern:
          "Yellow to warm-gold sectors or mottling, sometimes shifting toward cream as leaves harden.",
        stability:
          "Comparable to pink and white forms, with expression shifts expected across growth cycles.",
        market:
          "Usually commands premium pricing when strong gold sectors hold across several mature leaves.",
        note: "Gold is visually distinct but not a separate care category.",
      },
    ],
    closing:
      "Treat color form as a visual phenotype, not a different care protocol: pink, white, and gold all thrive under the same baseline Black Velvet routine.",
  },

  care: [
    {
      label: "Light",
      value: "Bright indirect",
      detail:
        "Strong filtered light supports compact growth and variegation quality. This guidance is the same for pink, white, and gold forms.",
    },
    {
      label: "Humidity",
      value: "65-80%",
      detail:
        "Higher humidity improves leaf expansion and texture. Low humidity increases risk of edge crisping and stalled unfurls.",
    },
    {
      label: "Temperature",
      value: "68-84F",
      detail:
        "Keep warm and stable. Cold stress quickly stalls growth and can trigger root decline.",
    },
    {
      label: "Watering",
      value: "Evenly moist, not wet",
      detail:
        "Allow the top layer to begin drying, then water thoroughly. Prolonged saturation raises corm and root rot risk.",
    },
    {
      label: "Feeding",
      value: "Weakly weekly",
      detail:
        "Light, frequent feeding during active growth is generally safer than heavy infrequent doses.",
    },
    {
      label: "Airflow",
      value: "Gentle circulation",
      detail:
        "Good airflow helps reduce fungal and bacterial pressure, especially in high humidity setups.",
    },
    {
      label: "Difficulty",
      value: "Intermediate",
      detail:
        "Care is fairly standard for variegated Black Velvet forms; consistency matters more than color-form selection.",
    },
  ],

  substrate: {
    intro:
      "Black Velvet forms prefer oxygen-rich media that hold light, even moisture without compaction.",
    options: [
      {
        name: "Chunky Aroid Mix",
        components: [
          "Fine orchid bark 35%",
          "Perlite/pumice 30%",
          "Coco chips or coir 20%",
          "Worm castings 10%",
          "Charcoal 5%",
        ],
        body: "A breathable mix with enough retention for compact root systems that dislike prolonged drought.",
        verdict: "Good baseline for soil-style culture if watering discipline is strong.",
        recommended: false,
      },
      {
        name: "Pon in Semi-Hydro",
        components: [
          "Pumice",
          "Zeolite",
          "Lava rock",
          "Reservoir planter",
        ],
        body: "Stable mineral media can reduce compaction and improve root-zone consistency when transition is managed carefully.",
        verdict: "Excellent once established; transition gradually and watch roots closely.",
        recommended: true,
      },
    ],
    note: "Whichever medium you choose, avoid dense waterlogged conditions around the corm.",
  },

  provenance: {
    body: "Alocasia reginula (Black Velvet) originates from Borneo and became a staple jewel Alocasia in cultivation. Variegated Black Velvet forms now circulate in three commonly referenced color expressions: pink, white, and gold.",
    timeline: [
      {
        year: "Pre-2000s",
        event:
          "Black Velvet enters specialty cultivation as a compact foliage Alocasia valued for dark textured leaves.",
      },
      {
        year: "2010s",
        event:
          "Variegated reginula lines gain visibility in collector circles as social media and boutique imports expand demand.",
      },
      {
        year: "2020-now",
        event:
          "Pink, white, and gold forms are all established in collector trade; pink and gold often command stronger premiums when color is saturated and stable.",
      },
    ],
  },

  propagation: {
    method: "Corm and offset division",
    timing: "Spring to midsummer during active growth",
    successRate: "Moderate to high with healthy parent stock",
    steps: [
      "Unpot and identify mature corms/offsets with visible growth points.",
      "Separate cleanly with a sterile blade, preserving roots when possible.",
      "Root in high humidity using lightly moist sphagnum or a fine mineral medium.",
      "Keep warm, bright, and stable while new roots and first leaves establish.",
      "Transition gradually into the final substrate once growth is active.",
    ],
    warnings: [
      "Overwatering newly separated corms is the most common failure point.",
      "Heavily variegated offsets may root and grow slower than greener counterparts.",
      "Do not divide weak plants; recovery time can be long.",
    ],
  },

  downsides: [
    {
      title: "Slow and variable growth",
      body: "Leaf cadence is slow, and variegation intensity can swing leaf-to-leaf even in stable setups.",
    },
    {
      title: "High humidity dependence",
      body: "Low humidity commonly causes imperfect unfurls, crispy margins, and weaker overall presentation.",
    },
    {
      title: "Rot risk",
      body: "Corm and fine roots are sensitive to overwatering and stagnant media.",
    },
    {
      title: "Price volatility",
      body: "Strongly colored pink and gold plants can be expensive, and market pricing shifts quickly across all color forms.",
    },
  ],
};
