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
  description: "Three white corms starting to grow on a juvenile three leaf plant.",
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
      sub: "Pink expression shifts by leaf age and light: fresh leaves can open brighter, then settle toward softer blush or cream.",
      fact: "Variegated tissue has lower chlorophyll and grows slower; stability depends on node genetics and plant vigor.",
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
    { label: "Difficulty", value: "Advanced", note: "Consistency matters" },
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
    intro:
      "Pink-variegated Black Velvet expression can range from soft blush sectors to cream and pale mint over dark velvet tissue. Pattern and intensity vary by node and leaf.",
    types: [
      {
        name: "Sectoral Pink",
        color: "#d69aa8",
        pattern:
          "Larger blocks, arcs, or half-sectors of pink-to-cream variegation against dark green-black velvet.",
        stability:
          "Moderate. Can alternate between high-color and greener leaves depending on vigor and node expression.",
        market:
          "Higher premium due to dramatic contrast and lower frequency of strongly pink sectors.",
        note: "Most collectible look; also carries the highest risk of weak growth on heavily variegated leaves.",
      },
      {
        name: "Mottled / Marbled Pink",
        color: "#c9a0ad",
        pattern:
          "Fine flecks and mottling across the leaf blade with softer, more diffuse pink expression.",
        stability:
          "Usually more consistent than large-sector forms, but still variable leaf to leaf.",
        market:
          "More commonly available than bold sectoral specimens; pricing is generally lower.",
        note: "A steadier expression for growers prioritizing continuity over dramatic single-leaf outcomes.",
      },
    ],
    closing:
      "Treat this as a variable-expression cultivar: even strong plants can swing between greener and higher-color leaves.",
  },

  care: [
    {
      label: "Light",
      value: "Bright indirect",
      detail:
        "Strong filtered light supports compact growth and variegation quality. Avoid harsh direct sun on variegated tissue.",
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
      value: "Advanced",
      detail:
        "Best results come from stable environment control, careful moisture management, and close monitoring.",
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
    body: "Alocasia reginula (Black Velvet) originates from Borneo and became a staple jewel Alocasia in cultivation. Pink-variegated Black Velvet forms are modern horticultural selections distributed through specialist growers.",
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
          "Pink-expression forms command premiums, with pricing tied to sector size, color intensity, and plant stability.",
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
      body: "Strong pink sectoring and established plants can be expensive, and market pricing shifts quickly.",
    },
    {
      title: "Pest pressure",
      body: "Spider mites and thrips can escalate quickly on stressed foliage; frequent checks are required.",
    },
  ],
};
