import type { PlantPhoto, PlantPriceRange, PlantFile, PlantToxicity, SourceReference } from "../types";
import { PropagationMethodType } from "../types";
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

export const alocasiaBlackVelvetVariegatedPink: PlantFile = {
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
    "A compact jewel Alocasia with near-black, velvet foliage and pink-to-cream sectoral variegation. The species name reginula means \u2018little queen\u2019 in Latin \u2014 an apt title for a plant that dominates any shelf it occupies despite its compact size. High contrast and slow growth make each leaf feel earned.",

  // -- SEO/GEO fields --
  seoDescription:
    "Alocasia Black Velvet Variegated Pink is a compact jewel alocasia with pink variegation, medium-bright indirect light needs, and a typical price range of $50-$300.",
  quickAnswer:
    "Alocasia Black Velvet Variegated Pink is a compact jewel Alocasia with near-black velvet leaves and pink sectoral variegation. Native to Borneo (cultivated form). Requires 65%+ humidity, medium to bright indirect light, and well-draining substrate. Propagates via corms. Price: $50–$300 USD. Difficulty: intermediate. Toxic to pets.",
  lastReviewed: new Date("2026-03-27"),
  toxicity: {
    toxic: true,
    summary:
      "Toxic to cats, dogs, and humans. Contains calcium oxalate crystals throughout all plant tissue.",
    compounds: ["calcium oxalate crystals"],
    symptoms: [
      "oral pain and swelling",
      "drooling",
      "gastrointestinal distress",
    ],
  },
  commonMistakes: [
    "Overwatering in soil — the corm and fine roots rot quickly in waterlogged conditions. Semi-hydro setups largely eliminate this risk.",
    "Panicking during dormancy — jewel Alocasias routinely drop all leaves and appear dead. The corm survives and reshoots with warmth and time.",
    "Buying unsprouted corms to save money — sprouted corms ($50–$70) let you see variegation before committing, unsprouted ($30–$40) are a gamble.",
    "Expecting consistent variegation on every leaf — pink expression is inherently unstable and varies leaf to leaf.",
    "Placing in direct sunlight — as a natural underbrush plant, it burns in direct light.",
  ],
  relatedPlants: [
    "anthurium-delta-force",
    "philodendron-gloriosum-variegated-type-1",
  ],
  priceHistory:
    "Variegated Black Velvet prices have compressed roughly 40% since 2023 as tissue culture production expanded in Thailand and Taiwan. Sprouted corms with visible variegation now start around $50–$70, down from $100+ in 2022. Mature specimens with strong pink expression still command $200–$300. Gold forms occasionally exceed the pink price range when saturation is strong.",
  tissueCultureInfo: {
    status: "widespread",
    note: "The pink variegated form emerged from tissue culture labs in Thailand and Taiwan — it has never existed in the wild. All legitimate stock traces to TC origins. The straight species (Alocasia reginula) is endemic to Sabah, Malaysian Borneo, but wild collection is not the source of variegated plants in the collector market. TC plants are generally healthy and viable, making this a good entry point for new collectors.",
    priceRange: {
      currency: "USD",
      min: 19.99,
      max: 19.99,
      lastObserved: new Date("2026-04-25"),
    },
  },
  availabilityNotes:
    "Widely available year-round from Southeast Asian TC suppliers and domestic corm propagators. Spring/summer see higher inventory as growers divide actively producing mother plants. Sprouted corms with visible variegation are the recommended purchase format — available from most Alocasia specialists.",
  sourceReferences: [
    {
      label: "A. Hay — Alocasia reginula formal description (1998)",
      url: "https://www.biodiversitylibrary.org/page/43639518",
      description: "Original botanical description published in the Singapore Gardens' Bulletin, volume 50.",
    },
    {
      label: "ASPCA Toxic Plant Database — Alocasia",
      url: "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/alocasia",
      description: "Toxicity information for pets regarding Alocasia species.",
    },
    {
      label: "Tabin Wildlife Reserve — Habitat confirmation (2021)",
      url: "https://en.wikipedia.org/wiki/Tabin_Wildlife_Reserve",
      description: "Location where researchers confirmed the species' natural habitat on limestone karst cliffs.",
    },
  ],

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
    // {
    //   id: "variegation",
    //   eyebrow: "Expression profile",
    //   lines: ["Dark velvet", "with", "blush sectors."],
    //   italicLine: 2,
    //   sub: "Black Velvet variegation is usually grouped by color form: pink, white, or gold. Pattern intensity still shifts leaf-to-leaf by node expression and vigor.",
    //   fact: "Care requirements are largely the same across color forms; differences are visual and market-driven more than horticultural.",
    //   image: heavilyVariegatedLeafPhoto.image,
    // },
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
      value: "Medium to bright indirect",
      detail:
        "Tolerates lower light better than most aroids \u2014 a reflection of its limestone cliff habitat in deep shade. Medium indirect is sufficient for steady growth; brighter filtered light supports variegation quality. Avoid direct sun.",
    },
    {
      label: "Humidity",
      value: "60\u201375%",
      detail:
        "More forgiving than many aroids \u2014 the thick velvet leaves retain moisture better than thin-leafed species. Standard home humidity (50\u201360%) is workable for the green form; variegated forms with reduced chlorophyll benefit from staying above 60%. Low humidity shows first as crispy margins and failed unfurls.",
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
        year: "Pre-1990s",
        event:
          "Alocasia reginula is believed native to Sabah, Malaysian Borneo, though its wild habitat remained unknown for decades. Plants entered the hobbyist trade through a Hawaiian arboretum before formal botanical description.",
      },
      {
        year: "1990s",
        event:
          "Scott Hyndman propagates the plant commercially via stock obtained from the Lyon Arboretum, Hawaii. The species is sold as \u2018Alocasia Black Velvet\u2019 before receiving a formal botanical name.",
      },
      {
        year: "1998",
        event:
          "Formally described as Alocasia reginula by botanist A. Hay in the Singapore Gardens\u2019 Bulletin. Distribution listed as \u2018?Borneo\u2019 \u2014 the exact wild origin remained unconfirmed.",
      },
      {
        year: "2010s",
        event:
          "Variegated reginula lines gain visibility in collector circles as social media and boutique imports expand demand.",
      },
      {
        year: "2021",
        event:
          "Researchers confirm the species is endemic to heavily shaded limestone karst cliffs in Tabin Wildlife Reserve, Sabah, Malaysian Borneo \u2014 one of the most specific and unusual native habitats of any collector Alocasia.",
      },
      {
        year: "2020-now",
        event:
          "Pink, white, and gold forms are all established in collector trade; pink and gold often command stronger premiums when color is saturated and stable.",
      },
    ],
  },

  propagation: {
    intro:
      "Alocasia Black Velvet produces corms reliably once mature, making corm division the primary propagation route. This is the safest way to multiply the plant while preserving pink variegation.",
    methods: [
      {
        type: PropagationMethodType.CormDivision,
        name: "Corm & Offset Division",
        badge: "Most common",
        timing: "Spring to midsummer",
        successRate: "Medium",
        difficulty: "Moderate",
        overview:
          "Corms are dormant propagules that form at the rhizome base. Separating them at repot time is the safest way to multiply the plant without stressing the parent.",
        steps: [
          {
            title: "Unpot and expose the rhizome",
            body: "Remove the mother plant from its substrate. Gently shake away growing media to expose the base of the rhizome.",
            tip: "Do this in spring when the plant is pushing new growth — corms are most viable then.",
          },
          {
            title: "Identify mature corms",
            body: "Look for small, round, beige to pale-brown structures attached to the rhizome. They range from 3–15mm across and often cluster together.",
          },
          {
            title: "Separate with a sterile blade",
            body: "Separate cleanly with a sterile blade, preserving roots when possible. Do not tear — torn edges invite rot.",
            tip: "Sterilize with 70% isopropyl between each cut. Rot travels fast in aroid tissue.",
          },
          {
            title: "Root in high humidity",
            body: "Root in high humidity using lightly moist sphagnum or a fine mineral medium. Keep warm, bright, and stable while new roots and first leaves establish.",
          },
          {
            title: "Transition to final substrate",
            body: "Transition gradually into the final substrate once growth is active. The first leaf typically emerges in 4–10 weeks at 22–26°C.",
          },
        ],
        warnings: [
          "Overwatering newly separated corms is the most common failure point. Wait for the first leaf before resuming normal watering.",
          "Heavily variegated offsets may root and grow slower than greener counterparts.",
          "Do not divide weak plants; recovery time can be long.",
        ],
      },
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
    {
      title: "Toxic to pets and children",
      body: "Calcium oxalate crystals throughout all tissue. Ingestion causes oral irritation and GI distress. Not suitable on low shelves in pet or child households.",
    },
    {
      title: "Dormancy cycles",
      body: "Jewel Alocasias drop leaves and go dormant \u2014 commonly mistaken for death. The corm survives and reshoots given warmth and time. Do not overwater during dormancy.",
    },
  ],

  // ─── FAQ ────────────────────────────────────────────────────────────────
  faq: {
    categories: [
      {
        category: "Corms & Propagation",
        items: [
          {
            question: "Can I grow a variegated Black Velvet Alocasia from corms, and how long does it take?",
            answer:
              "Yes — corm propagation is one of the most common ways to acquire this plant. From removing a corm to seeing its first leaf, expect around three months under the right light and temperature conditions. However, variegation is not guaranteed — expression varies from corm to corm, which is why buying sprouted corms with visible variegation is generally advisable.",
          },
          {
            question: "When does a variegated Black Velvet Alocasia start producing corms?",
            answer:
              "Corm production typically begins once the plant has developed four to five leaves, which generally happens somewhere between four and eight months after it was itself grown from a corm. Plants in LECA tend to show corm development very visibly, making it easy to track.",
          },
          {
            question: "How do I root Black Velvet Alocasia corms successfully?",
            answer:
              "Use a moisture-retaining medium like Fluval Stratum or Lechuza Pon — both keep corms consistently moist without waterlogging, which is critical for the fine root systems on young plants. Keep conditions warm, humid, and in bright indirect light.",
          },
        ],
      },
      {
        category: "Variegation",
        items: [
          {
            question: "Why is my variegated Black Velvet Alocasia losing its pink variegation and producing all-green leaves?",
            answer:
              "This is normal behaviour for this cultivar. The pink variegation in the Black Velvet Alocasia is inherently unstable — expression varies from plant to plant and even leaf to leaf. Most plants do carry the variegation forward, but it can be inconsistent. Variegation in the stem is a positive indicator, but doesn't guarantee every leaf will express it strongly.",
          },
          {
            question: "Will corms from a variegated Black Velvet Alocasia also produce variegated offspring?",
            answer:
              "Most likely, yes — but not guaranteed. The majority of corms from a variegated parent do go on to produce variegated plants, but the expression varies. Some will show strong pink variegation, others may be more subdued or lean green. This instability is part of what makes the cultivar interesting, and also why buying sprouted corms is advisable when sourcing new plants.",
          },
        ],
      },
      {
        category: "Watering & Feeding",
        items: [
          {
            question: "How often should I water a variegated Black Velvet Alocasia?",
            answer:
              "This depends heavily on your setup. In a semi-hydro or LECA system, the plant regulates its own moisture uptake, and the main concern shifts to nutrient delivery rather than a watering schedule. In soil, allow the top portion to dry between waterings — this plant does not want to sit in wet conditions. Overwatering is a common cause of decline.",
          },
          {
            question: "Is overwatering the main reason Black Velvet Alocasia plants die?",
            answer:
              "In traditional soil setups, yes — overwatering and poor drainage are among the leading causes of failure with this plant. Root rot sets in quickly in waterlogged conditions. This is one reason semi-hydro and LECA setups suit it well — the risk of overwatering is largely eliminated when the plant can access water on its own terms.",
          },
          {
            question: "How often should I fertilize a Black Velvet Alocasia?",
            answer:
              "This is a reasonably heavy feeder. In a semi-hydro setup, feeding every one to two weeks is appropriate and supports both healthy leaf development and prolific corm production. In soil, feeding frequency will vary with season and growth rate — reduce during slower periods.",
          },
        ],
      },
      {
        category: "Light, Humidity & Environment",
        items: [
          {
            question: "What light conditions does a Black Velvet Alocasia need?",
            answer:
              "As a natural underbrush plant, the Black Velvet Alocasia does not require strong or direct light. Medium indirect light is sufficient for steady growth, though brighter filtered light supports variegation quality in variegated forms where photosynthetic capacity is reduced. Avoid direct sun, which can stress the foliage.",
          },
          {
            question: "Does a Black Velvet Alocasia need high humidity?",
            answer:
              "Less so than many other aroids. The thick, velvety leaves offer some insulation and moisture retention, meaning this plant handles lower humidity more gracefully than thinner-leafed aroids. Standard home humidity (50\u201360%) is workable, but variegated forms with reduced chlorophyll benefit from staying above 60%. Crispy margins and failed unfurls are the first signs of insufficient humidity.",
          },
        ],
      },
      {
        category: "Sourcing & Pricing",
        items: [
          {
            question: "Should I buy an unsprouted or sprouted Black Velvet Alocasia corm?",
            answer:
              "Sprouted, every time. Unsprouted corms typically sell for $30–$40, but offer no indication of what the variegation will look like — or whether it will express meaningfully at all. Sprouted corms, which run $50–$70, allow you to assess leaf colour before committing. Given how variable the variegation can be, the premium is well worth paying.",
          },
          {
            question: "Is tissue culture a good option for Black Velvet Alocasia?",
            answer:
              "Yes — unlike Monstera tissue culture plantlets, which can be finicky, the Black Velvet Alocasia performs reasonably well from tissue culture. Availability has increased considerably, which is gradually bringing prices down. It's a viable entry point, particularly if you're not concerned with selecting for specific variegation at the outset.",
          },
        ],
      },
      {
        category: "Care",
        items: [
          {
            question: "My Black Velvet Alocasia is dropping all its leaves \u2014 is it dying?",
            answer:
              "Almost certainly not. Jewel Alocasias including Black Velvet routinely go through dormancy cycles where they drop all above-ground leaves and appear dead. The corm survives underground and will reshoot when conditions improve \u2014 usually warmth, spring light, and consistent moisture. Do not overwater a dormant plant in an attempt to revive it. Keep the substrate barely moist, maintain warmth above 18\u00b0C (65\u00b0F), and wait. New growth typically emerges within 4\u201310 weeks. If the corm is firm when gently squeezed, the plant is alive.",
          },
        ],
      },
      {
        category: "Safety",
        items: [
          {
            question: "Is Alocasia Black Velvet toxic to pets or humans?",
            answer:
              "Yes. Like all Alocasias, Black Velvet contains calcium oxalate crystals throughout its tissue. Ingestion causes oral pain, swelling, drooling, and gastrointestinal distress in cats, dogs, and humans. Handle with gloves when dividing or repotting, and keep out of reach of pets and children.",
          },
        ],
      },
    ],
  },

  conservation: {
    iucn: "NE",
    cites: null,
    wildCollectionRisk:
      "Alocasia reginula is endemic to the rainforests of Sabah, Malaysian Borneo, where habitat loss from palm oil expansion is the primary threat \u2014 not direct collection. The pink variegated form has never existed in the wild; it emerged from tissue culture labs in Thailand and Taiwan. Wild collection risk for this variant specifically is zero.",
    ethicalSourcingTips: [
      "All legitimate pink variegated stock originates from TC labs \u2014 ask which lab or TC line the plant descends from.",
      "Corm propagation from established TC plants is common and legitimate \u2014 verify the parent plant is nursery-grown.",
      "Malaysian and Indonesian hobbyist growers who export through legal channels are trustworthy sources.",
    ],
    redFlags: [
      "Sellers who conflate the straight species and variegated pink as interchangeable \u2014 they have completely different supply chains.",
      "Claims of \u2018limited wild-collected stock\u2019 for any variegated Alocasia \u2014 this is either fraudulent or a misrepresentation.",
      "Corms sold without clear TC or nursery lineage.",
    ],
  },
};
