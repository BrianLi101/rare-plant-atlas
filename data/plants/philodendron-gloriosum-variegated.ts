import type { PlantPhoto, PlantPriceRange, PlantVariant } from "../types";
import { PropagationMethodType } from "../types";
import {
  lechuzaPlanterHorizontalSmall,
  lechuzaBalconeraColor40Slate,
  lechuzaPonSubstrate3L,
  lechuzaPonSubstrate18L,
  nurtureSystemNo1PowerGrow,
  xactoKnifeSet16Pc,
} from "../products";
import { formatPlantPriceRangeForGlance } from "../price";

const IMG = "/plants/philodendron-gloriosum-variegated";

const heroPhoto: PlantPhoto = {
  id: "gloriosum-hero",
  image: `${IMG}/hero.jpg`,
  caption: "Philodendron gloriosum variegated - hero foliage",
  description:
    "Wide heart-shaped velvet leaf with high-contrast cream variegation, showing the plant's terrestrial crawler growth habit.",
};

const type1BlockPhoto: PlantPhoto = {
  id: "gloriosum-type-1-block",
  image: `${IMG}/type-1-block.jpg`,
  caption: "Type 1 block variegation",
  description:
    "Defined sectoral cream blocks across deep green velvet tissue; bold contrast and collectible Type 1 expression.",
};

const type1UnstablePhoto: PlantPhoto = {
  id: "gloriosum-type-1-unstable",
  image: `${IMG}/type-1-unstable-vareigation.jpg`,
  caption: "Unstable variegation expression",
  description:
    "Variegated gloriosums can put out many green leaves before throwing out another variegated one. Unlike many other albos, green leaves do not mean the plant has reverted.",
};

const type1RhizomeVariegationPhoto: PlantPhoto = {
  id: "gloriosum-type-1-rhizome-variegation",
  image: `${IMG}/type-1-rhizome-variegation.jpg`,
  caption: "Rhizome variegation",
  description:
    "You can tell a gloriosum is variegated by the white coloring it carries in its rhizome. Sometimes this can fade away to green but because gloriosums tend to have thick rhizomes, they can hold variegation well even when it isn't visible.",
};
const type1Roots: PlantPhoto = {
  id: "gloriosum-type-1-roots",
  image: `${IMG}/type-1-roots.jpg`,
  caption: "A view of the roots",
  description:"The roots of a gloriosum tend to have a thicker root surrounded by smaller roots. This makes it more suited for growing in lechuza pon over leca where the roots can really grasp the growing medium.",
};

const type1ColorsCloseupPhoto: PlantPhoto = {
  id: "gloriosum-type-1-colors-closeup",
  image: `${IMG}/type-1-colors-closeup.jpg`,
  caption: "Type 1 colors close-up",
  description:
    "Close-up of color transition and contrast across velvet tissue in Type 1 variegation.",
};


const type1UglyEmergencePhoto: PlantPhoto = {
  id: "gloriosum-type-1-ugly-emergence",
  image: `${IMG}/type-1-ugly-emergence.jpg`,
  caption: "Ugly emergence after a propagation",
  description:
    "The first emergent leaf after a propagation can be ugly or not unfurl properly after having to push through the casing of the rhizome. The second leaf is usually much better.",
};

const type2SplashPhoto: PlantPhoto = {
  id: "gloriosum-type-2-splash",
  image: `${IMG}/type-2-splash.jpg`,
  caption: "Type 2 splash variegation",
  description:
    "Fine splash-style variegation distributed as speckles and flecks rather than large sectoral blocks.",
};

export const philodendronGloriosumVariegatedPlantPriceRange: PlantPriceRange = {
  currency: "USD",
  min: 300,
  max: 2500,
  lastObserved: new Date("2026-03-21"),
  note: "Size and variegation dependent. Exceptional Type 1 specimens can exceed this range.",
};

export const philodendronGloriosumVariegated: PlantVariant = {
  identity: {
    id: "philodendron_gloriosum_variegated_type_1",
    slug: "philodendron-gloriosum-variegated-type-1",
    genus: "Philodendron",
    species: "gloriosum",
    tradeName: "Philodendron gloriosum",
    variantLabel: "Variegated Type 1",
    aliases: ["Type 1 Block Variegation"],
  },
  tagline: "Velvet meets light.",
  heroDescription:
    "A terrestrial creeper with heart-shaped leaves of deep emerald velvet, interrupted by strokes of cream and white variegation. Each leaf is a living canvas \u2014 no two patterns alike.",
  origin: "Colombia",
  family: "Araceae",
  rarity: "Ultra-rare",
  priceRange: philodendronGloriosumVariegatedPlantPriceRange,
  images: {
    hero: heroPhoto.image,
    detail: [type1UnstablePhoto.image, type2SplashPhoto.image,],
    variegation: type1BlockPhoto.image,
  },
  photos: [
    type1UnstablePhoto,
    type1RhizomeVariegationPhoto,
    type1BlockPhoto,
    type1ColorsCloseupPhoto,
    type1UglyEmergencePhoto,
    type1Roots
  ],
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
    "Pink-red new growth",
  ],
  fitWeights: { light: 0.3, humidity: 0.3, space: 0.15, experience: 0.25 },

  // ─── Cinematic panels ─────────────────────────────────────────────────
  panels: [
    {
      id: "hero",
      eyebrow: "Ultra-rare \u00b7 Araceae \u00b7 Colombia",
      lines: ["Philodendron", "Gloriosum", "Variegated Type 1"],
      italicLine: 2,
      earthLine: 2,
      sub: "A terrestrial creeper with heart-shaped leaves of deep emerald velvet, interrupted by strokes of cream and white. Each leaf is a living canvas.",
      image: heroPhoto.image,
    },
    {
      id: "variegation",
      eyebrow: "The variegation",
      lines: ["Velvet", "meets", "light."],
      italicLine: 2,
      sub: "Block variegation against deep green velvet. The pattern never repeats. Each new leaf is a reveal \u2014 emerging yellow, hardening to cream.",
      fact: "The original block-variegated plant traces back to Kaylee Ellen. It is not yet tissue cultured.",
      image: type1ColorsCloseupPhoto.image,
    },
    // {
    //   id: "origin",
    //   eyebrow: "Colombia \u00b7 Humid lowland forest",
    //   lines: ["From the", "forest", "floor."],
    //   italicLine: 1,
    //   sub: "Gloriosum carpets premontane forest floors from sea level to 1,500m. It was never meant to climb. It crawls, deliberately, across the earth.",
    //   fact: "First formally described in 1900. In serious collector hands by 2010.",
    //   image: type1UnstablePhoto.image,
    // },
  ],

  // ─── At a glance ──────────────────────────────────────────────────────
  glance: [
    { label: "Price range", value: formatPlantPriceRangeForGlance(philodendronGloriosumVariegatedPlantPriceRange), note: "Size & variegation dependent" },
    { label: "Leaf cycle", value: "~1 per month (ideal)", note: "Often 2-5 leaves/year in home conditions" },
    { label: "Difficulty", value: "Advanced", note: "Consistency non-negotiable" },
    { label: "Humidity", value: "60%+ (higher is better)", note: "More humidity generally improves performance" },
    { label: "Space", value: "Wide, not tall", note: "Terrestrial creeper" },
    { label: "Annual growth", value: "~1 ft/year", note: "Varies by setup and consistency" },
  ],

  verdict:
    "A slow, demanding, extraordinarily beautiful plant that rewards patience and punishes neglect. Not a casual purchase.",
  recommendedProducts: [
    {
      product: lechuzaPlanterHorizontalSmall,
      reason:
        "Gloriosums are crawlers and need to grow horizontally. This planter is best when leaves are under 1 foot long; beyond that, stability drops and it cannot hold enough water.",
    },
    {
      product: lechuzaBalconeraColor40Slate,
      reason:
        "Switch to a larger rectangular self watering pot after leaves reach 1-2 ft in length.",
    },
    {
      product: lechuzaPonSubstrate3L,
      reason:
        "The 3L size is useful for smaller Gloriosum repots and top-offs while keeping the same stable, root-friendly Pon medium.",
    },
    {
      product: xactoKnifeSet16Pc,
      reason:
        "Mature rhizomes can reach around 1 inch in diameter and require deep, clean cuts; multiple blade options help match blade size to rhizome thickness.",
    },
    {
      product: nurtureSystemNo1PowerGrow,
      reason:
        "Gloriosums can push large leaves quickly and need balanced nutrients to maintain leaf size and overall growth quality.",
    },
    {
      product: lechuzaPonSubstrate18L,
      reason:
        "Lechuza Pon works well for the thin roots of Gloriosum and provides a stable medium as the plant gets heavier.",
    },
  ],

  // ─── Variegation ──────────────────────────────────────────────────────
  variegation: {
    title: "Type 1 vs Type 2",
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
        image: type1BlockPhoto.image,
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
        image: type2SplashPhoto.image,
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
      value: "60%+",
      detail:
        "More humidity is generally better. Below ~50%, leaves often emerge smaller and less velvety. Misting is usually insufficient \u2014 use a humidifier.",
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
      label: "Feeding",
      value: "Every 1-2 weeks",
      detail:
        "Feed consistently during active growth. Reliable nutrition supports faster leaf production and stronger foliage.",
    },
    {
      label: "Repotting",
      value: "About yearly",
      detail:
        "With roughly a foot of annual crawl, a yearly repot/upsize is common to keep the plant stable and properly hydrated.",
    },
    {
      label: "Difficulty",
      value: "Advanced",
      detail:
        "Humidity and consistency are non-negotiable. This is not a plant for casual or intermittent care.",
    },
    {
      label: "New growth",
      value: "Pinkish-red emergence",
      detail:
        "New leaves emerge pinkish-red and harden to deep green \u2014 normal and not a sign of stress.",
    },
  ],

  // ─── Substrate ────────────────────────────────────────────────────────
  substrate: {
    intro:
      "Gloriosum is best in a dense, anchoring substrate rather than straight LECA. As roots and foliage gain weight, the medium needs to physically support the plant while keeping moisture consistent.",
    options: [
      // {
      //   name: "Dense Aroid Mix",
      //   components: [
      //     "Orchid bark 40%",
      //     "Perlite 25%",
      //     "Sphagnum 20%",
      //     "Charcoal 10%",
      //     "Worm castings 5%",
      //   ],
      //   body: "A denser aroid blend gives thin roots better anchoring and long-term support than lightweight media while still keeping airflow.",
      //   verdict:
      //     "Reliable and forgiving. Refresh every 12\u201318 months as bark decomposes.",
      //   recommended: false,
      // },
      {
        name: "Lechuza Pon + Self-Watering Planter",
        components: [
          "Pumice",
          "Zeolite",
          "Lava rock",
          "Slow-release fertilizer",
        ],
        body: "A stable mineral option that supports fine roots and stays structurally consistent. Self-watering planters can work very well when configured correctly.",
        verdict:
          "Excellent if you commit fully. Expect a 2\u20134 week adjustment period from soil.",
        recommended: true,
      },
    ],
    note: "Choose a planter with enough horizontal room and water capacity as the plant matures and gains weight.",
  },

  // ─── Provenance ───────────────────────────────────────────────────────
  provenance: {
    body: "Philodendron gloriosum is native to Colombia, carpeting humid lowland and premontane forests from sea level to ~1,500m. First formally described in 1876 by \u00c9douard Andr\u00e9 \u2014 variegated forms didn\u2019t enter serious collector markets until tissue culture made them more available in the 2010s. Philodendron gloriosum is listed as Vulnerable on the IUCN Red List of Threatened Species.",
    timeline: [
      {
        year: "1876",
        event:
          "\u00c9douard Andr\u00e9 formally describes Philodendron gloriosum from Colombian specimens, published in L'Illustration Horticole, volume 23, page 194.",
      },
      {
        year: "Conservation status",
        event:
          "Philodendron gloriosum is listed as Vulnerable on the IUCN Red List of Threatened Species. As of 2021, only approximately 7 locations worldwide have confirmed wild populations, all in Colombia. The cultivated collector market operates entirely on propagated stock \u2014 wild collection is not the source of traded plants.",
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
    intro:
      "Philodendron gloriosum propagates by rhizome sectioning — cutting between nodes on the creeping stem. Each section needs at least one node with healthy roots to establish independently.",
    methods: [
      {
        type: PropagationMethodType.Cutting,
        name: "Rhizome Sectioning",
        timing: "Spring or early summer",
        successRate: "High",
        difficulty: "Moderate",
        overview:
          "The creeping rhizome can be divided at nodes, giving each section a viable growth point and root system. This is the only practical home propagation method for gloriosum.",
        steps: [
          {
            title: "Identify the nodes",
            body: "Nodes are visible as white strips along the stem/rhizome. Each node is a potential new growth point.",
          },
          {
            title: "Cut between nodes",
            body: "Cut cleanly between nodes with a sterilized blade. Avoid crushing or sawing through tissue.",
            tip: "A sharp, single-motion cut heals much faster than a jagged one.",
          },
          {
            title: "Preserve roots on each division",
            body: "Keep at least one viable growth point and healthy roots on each division.",
          },
          {
            title: "Treat cut surfaces",
            body: "Treat cut surfaces with cinnamon or sulfur powder as antifungal.",
          },
          {
            title: "High-humidity recovery",
            body: "Keep humidity above 70% and avoid direct light for 2–3 weeks post-division.",
          },
          {
            title: "Light watering only",
            body: "Light moisture only until new growth resumes — do not saturate.",
          },
        ],
        warnings: [
          "The stem can show yellow-and-green variegation; expression is unstable and leaf output can alternate between green and variegated.",
          "Even sections that look mostly green can still throw variegated growth later.",
          "Overwatering fresh divisions is the primary cause of post-division rot.",
        ],
      },
    ],
  },

  // ─── Downsides ────────────────────────────────────────────────────────
  downsides: [
    {
      title: "Slow growth is really slow",
      body: "4\u20138 weeks per leaf means 6\u20138 leaves per year in ideal conditions. Most homes aren\u2019t ideal. It will not fill a space quickly.",
    },
    // {
    //   title: "Humidity is a hard requirement",
    //   body: "Below 50%, the plant survives but quality degrades visibly. Running a humidifier year-round is a real lifestyle commitment.",
    // },
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
      body: "Velvety foliage is highly attractive to spider mites and similar pests. Preventive monitoring and treatment are part of normal care. Growing in semi-hydro (leca or pon) can help reduce risks.",
    },
    {
      title: "Toxic to pets and children",
      body: "Calcium oxalate crystals throughout all tissue \u2014 ingestion causes oral pain and GI distress in cats, dogs, and humans. Not a shelf plant in households with curious pets or young children.",
    },
    {
      title: "Not a quick chop-and-prop flip",
      body: "From cutting a node to rooted, verified resale-ready growth is often 6+ months: around 2 months to push new growth, 3-4 months to root after chopping, then extra time to verify stability.",
    },
  ],

  // ─── FAQ ────────────────────────────────────────────────────────────────
  faq: {
    categories: [
      {
        category: "Pricing & Value",
        items: [
          {
            question: "How much does a variegated Philodendron gloriosum cost?",
            answer:
              "Type 1 variegated gloriosum typically ranges from $600\u2013$2,500+, reflecting its unstable variegation, limited supply from the original Kaylee Ellen lineage, and absence from tissue culture. Smaller or less-variegated specimens occasionally appear at the lower end of this range. Type 2 variegated gloriosum is more affordable, especially in tissue culture form, where specimens go for $100\u2013$300. Regular, non-variegated gloriosum costs $20\u2013$30 by comparison.",
          },
          {
            question: "Is variegated gloriosum worth the price?",
            answer:
              "Not if you're attempting to flip the plant for profit. The propagation timeline is extremely long, and the variegation is unstable — often requiring multiple green leaves before producing a consistently well-variegated leaf. However, if you're collecting for personal enjoyment, the rarity justifies the investment for many collectors.",
          },
        ],
      },
      {
        category: "Variegation Types & Classification",
        items: [
          {
            question: "What is the difference between Type 1 and Type 2 variegation on Philodendron gloriosum?",
            answer:
              "Type 1 features block variegation similar to Monstera albo, with rich white sections that appear in distinct patches. Type 2, often called splash variegation, displays a softer, more diffuse marbled pattern. Type 1 is less stable and more prone to reverting.",
          },
          {
            question: "What does albo variegated mean for gloriosum?",
            answer:
              "Albo variegated typically refers to Type 1 variegation — the block variegation style. This is distinctly different from Type 2 splash variegation.",
          },
          {
            question: "Is gloriosum variegation stable, or will it revert?",
            answer:
              "Variegation in gloriosum is naturally unstable. Even a fully green stem can throw variegated leaves if variegation exists elsewhere in the stem structure, since stems can grow over an inch in diameter and carry hidden variegation. Reversion to solid green is part of the plant's natural pattern.",
          },
        ],
      },
      {
        category: "Propagation Timeline",
        items: [
          {
            question: "How long does it take to propagate a variegated gloriosum?",
            answer:
              "From cutting a node to obtaining one or two consistently variegated leaves, expect four to six months. This lengthy timeline makes the plant unsuitable for quick resale.",
          },
          {
            question: "How do you identify nodes on Philodendron gloriosum?",
            answer:
              "Nodes are extremely visible and appear as small white bumps or sections that protrude from the stem, distinctly colored from the rest of the stem material. They're easy to spot once you know what to look for.",
          },
          {
            question: "Can a green-stemmed gloriosum throw variegated leaves?",
            answer:
              "Yes — if variegation exists elsewhere in the stem. Since stems can reach over one inch in diameter, variegation may be present internally even if it's not visually apparent on the surface.",
          },
          {
            question: "Is gloriosum worth buying for propagation and resale?",
            answer:
              "Only if you acquire it at a reasonable price. Unless Type 1 enters tissue culture production, prices are unlikely to drop significantly below $300, making profitable resale difficult to achieve.",
          },
        ],
      },
      {
        category: "Care for Variegated Forms",
        items: [
          {
            question: "Does variegated gloriosum need more light than the standard form?",
            answer:
              "Yes — variegated specimens generally need more light to maintain their patterns. However, be cautious with direct light, as it can burn the leaves. Bright, indirect light with added warmth is ideal.",
          },
          {
            question: "What substrate works best for variegated gloriosum?",
            answer:
              "Lechuza Pon is the best option. It provides consistent humidity, excellent stability, and is particularly suited to the plant's thin root system.",
          },
          {
            question: "Why are my gloriosum's variegated leaves reverting to green?",
            answer:
              "This is the natural pattern of the plant. If reversion becomes problematic, you can attempt propagation and select nodes from clearly variegated portions of the stem.",
          },
        ],
      },
      {
        category: "Buying Guidance",
        items: [
          {
            question: "Where should I buy variegated Philodendron gloriosum?",
            answer:
              "In the United States, NSE Tropicals is your best source — they maintain the original plant lineage from Kaylee Ellen. In the UK, purchasing directly from Kaylee Ellen is recommended. Pay close attention to plant lineage and verify you're not accidentally buying tissue-cultured Type 2 when seeking Type 1.",
          },
          {
            question: "Tissue culture versus rooted cuttings — which should I buy for variegated gloriosum?",
            answer:
              "Type 1 has not yet appeared in tissue culture, so rooted cuttings are your only option and are generally superior anyway. When purchasing, look for plants that have already pushed out one to two variegated leaves, as this demonstrates stability. The plant can revert easily, so past performance is a helpful indicator.",
          },
        ],
      },
      {
        category: "Safety",
        items: [
          {
            question: "Is Philodendron gloriosum toxic to pets or humans?",
            answer:
              "Yes. Like all Philodendrons, gloriosum contains calcium oxalate crystals throughout its tissue. Ingestion causes oral irritation, excessive drooling, swelling, and gastrointestinal distress in cats, dogs, and humans. Keep the plant out of reach of children and animals, and wear gloves when handling damaged tissue.",
          },
        ],
      },
    ],
  },

  conservation: {
    iucn: "NE",
    cites: null,
    wildCollectionRisk:
      "Philodendron gloriosum has not been formally assessed by the IUCN, but wild collection pressure from Colombia\u2019s cloud forests is well-documented. Colombia\u2019s Ley 99 restricts the export of all native biological resources. The variegated form is a chimeric mutation that exists only in cultivation \u2014 there is no wild variegated population to poach.",
    ethicalSourcingTips: [
      "The variegated form is only available as nursery stock or TC \u2014 if a seller claims wild origin for a variegated specimen, that is impossible.",
      "For straight-species gloriosum, ask for propagation photos or mother plant documentation.",
      "Tissue culture (TC) stock from reputable labs is the gold standard \u2014 genetically stable, pest-free, and legally unambiguous.",
    ],
    redFlags: [
      "Bare, rootless stems shipped without substrate \u2014 a hallmark of wild-harvested material prepared to bypass customs.",
      "Origin described as \u2018imported directly from Colombia\u2019 without phytosanitary certificates.",
      "Sellers who cannot name the nursery or source clone for a variegated specimen.",
    ],
  },
};
