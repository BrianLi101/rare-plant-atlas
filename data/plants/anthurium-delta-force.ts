import type { PlantPhoto, PlantPriceRange, PlantVariant } from "../types";
import { PropagationMethodType } from "../types";
import {
  lechuzaPonSubstrate3L,
  ikeaOdlaLeca,
  lechuzaClassicoLs21CharcoalMetallic,
  nurtureSystemNo1PowerGrow,
} from "../products";
import { formatPlantPriceRangeForGlance } from "../price";

const IMG = "/plants/anthurium-delta-force";

const heroPhoto: PlantPhoto = {
  id: "anthurium-delta-force-hero",
  image: `${IMG}/hero.jpeg`,
  caption: "Anthurium Delta Force leaf",
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

const crispyLeafTipsPhoto: PlantPhoto = {
  id: "anthurium-delta-force-crispy-leaf-tips",
  image: `${IMG}/crispy-leaf-tips.jpg`,
  caption: "Crispy leaf tips",
  description:
    "Under low humidity, the tips of the leaves can slowly crisp. This affects the plant aesthetically but generally it can be healthy even when this happens.",
};

const leafFromCataphyllPhoto: PlantPhoto = {
  id: "anthurium-delta-force-leaf-from-cataphyll",
  image: `${IMG}/leaf-from-cataphyll.jpg`,
  caption: "Leaf emerging from cataphyll",
  description:
    "A new leaf emerging from cataphyll. Leaves are densely packed with very tight internodal spacing.",
};

const multileafTopViewPhoto: PlantPhoto = {
  id: "anthurium-delta-force-multileaf-top-view",
  image: `${IMG}/multileaf-top-view.jpeg`,
  caption: "Multileaf top view",
  description:
    "A top view of a Delta Force plant with multiple leaves.",
};

export const anthuriumDeltaForcePlantPriceRange: PlantPriceRange = {
  currency: "USD",
  min: 40,
  max: 200,
  lastObserved: new Date("2026-03-22"),
  note: "Tissue culture has compressed pricing. Mature specimens with strong form command the upper range.",
};

export const anthuriumDeltaForce: PlantVariant = {
  identity: {
    id: "anthurium_delta_force",
    slug: "anthurium-delta-force",
    genus: "Anthurium",
    tradeName: "Anthurium 'Delta Force'",
    aliases: ["Delta Force", "Anthurium DF"],
  },
  tagline: "Military precision. Botanical impact.",
  heroDescription:
    "A striking hybrid built for durability. Delta Force fuses the bold triangular architecture of its pedatoradiatum parent with clarinervium's legendary velvety texture \u2014 producing a plant that grows fast, tolerates ambience, and commands attention at every stage. Mature leaves reach 12\u201318 inches, with the characteristic triangular geometry becoming fully defined by the fourth or fifth leaf.",
  origin: "Ree Gardens, Miami, Florida",
  family: "Araceae",
  rarity: "Rare",
  priceRange: anthuriumDeltaForcePlantPriceRange,
  images: {
    hero: heroPhoto.image,
    detail: [roundedEmergencePhoto.image, tissueCulturePhoto.image, crispyLeafTipsPhoto.image, leafFromCataphyllPhoto.image],
  },
  photos: [heroPhoto, roundedEmergencePhoto, tissueCulturePhoto, crispyLeafTipsPhoto, leafFromCataphyllPhoto],
  colors: {
    primary: "#3a4a30",
    accent: "#6b7c5a",
    gradient: ["#1c2418", "#3a4a30"],
  },
  traits: [
    "Triangular leaf architecture",
    "Thick velvet texture",
    "Ambient-tolerant",
    "Heavy feeder",
    "Tissue culture stable",
    "LECA-compatible",
    "Hemiepiphyte",
  ],
  fitWeights: { light: 0.15, humidity: 0.45, space: 0.15, experience: 0.25 },

  panels: [
    {
      id: "hero",
      eyebrow: "Hybrid · Araceae · Tissue Culture",
      lines: ["Anthurium", "Delta", "Force."],
      italicLine: 1,
      earthLine: 2,
      sub: "Triangular, architectural, and built to thrive where others wilt. Delta Force is a one of a kind anthurium hybrid.",
      image: heroPhoto.image,
    },
    {
      id: "form",
      eyebrow: "The leaf",
      lines: ["Triangular.", "Deliberate.", "Alive."],
      italicLine: 0,
      sub: "Each leaf tapers to a narrow point with military precision. Thick velvet surface, deep olive-green, sized to dominate. The sinus flattens as the plant matures — a sign you have the real thing.",
      fact: "New growth pushes fast. A well-fed Delta Force sizes up a leaf in weeks, not months.",
      image: multileafTopViewPhoto.image,
    },
    // {
    //   id: "origin",
    //   eyebrow: "1990s · Miami, Florida",
    //   lines: ["Two plants.", "One result."],
    //   italicLine: 1,
    //   sub: "Created by Steve Nock at Ree Gardens from Anthurium clarinervium × pedatoradiatum. The cross produces something neither parent offers alone — velvet texture meets dramatic lobed geometry.",
    //   fact: "Despite repeated crosses from the same parents, this exact form has not been reliably recreated from seed. Modern distribution depends on tissue culture.",
    //   image: tissueCulturePhoto.image,
    // },
  ],

  glance: [
    { label: "Price range", value: formatPlantPriceRangeForGlance(anthuriumDeltaForcePlantPriceRange), note: "TC has stabilised pricing" },
    { label: "Leaf form", value: "Triangular", note: "Tapers to a narrow point" },
    { label: "Leaf size", value: "12\u201318 inches at maturity", note: "Full geometry by 4th\u20135th leaf" },
    { label: "Difficulty", value: "Intermediate", note: "Hardy, but humidity matters" },
    { label: "Humidity", value: "60–80%", note: "Tip crisp below this" },
    { label: "Light", value: "Low to bright", note: "Handles both well" },
    { label: "Media", value: "LECA-friendly", note: "Thick roots love open media" },
  ],

  verdict:
    "One of the most forgiving velvet anthuriums you can grow. Delta Force rewards consistent humidity and feeding with rapid, impressive growth — and punishes neither the beginner nor the busy collector. The main ask is humidity. Give it that and it performs.",
  recommendedProducts: [
    {
      product: lechuzaClassicoLs21CharcoalMetallic,
      reason:
        "A must-have when your Delta Force starts growing rich root systems and large leaves that require stability. Only necessary after 6 leaves or when leaves approach 1 foot in length.",
    },
    {
      product: ikeaOdlaLeca,
      reason:
        "Delta Force transitions well to LECA and benefits from the aeration and stable moisture profile of semi-hydro culture. It's thick roots adapt well in this medium.",
    },
    {
      product: nurtureSystemNo1PowerGrow,
      reason:
        "Diluted, regular feeding supports leaf size, venation clarity, and consistent growth in both soil and semi-hydro setups.",
    },
    {
      product: lechuzaPonSubstrate3L,
      reason:
        "A practical size for small to medium plants, especially during early transitions from soil to mineral media.",
    },
  ],

  care: [
    {
      label: "Light",
      value: "Low to bright indirect",
      detail:
        "Thicker leaves and a deep olive-green pigmentation mean Delta Force tolerates a wider light range than most velvet anthuriums. It handles bright indirect and even short stints of gentle direct sun without burning. A north or east-facing window is ideal; a south window with a sheer works fine.",
    },
    {
      label: "Humidity",
      value: "60–80%",
      detail:
        "The most critical variable for this plant. Delta Force's leaves taper to a fine narrow point, and that tip is the first thing to crisp when humidity drops. Browning starts at the very tip and creeps inward over time. The plant survives below 60% but the cosmetic damage accumulates quickly. A humidifier is the only reliable solution — misting doesn't cut it.",
    },
    {
      label: "Watering",
      value: "Moist, not wet",
      detail:
        "Water thoroughly and allow the top 1–2 inches to dry before re-watering. In LECA or chunky media, this happens faster. Root rot is possible but Delta Force is more forgiving than most anthuriums — the thick root system buffers brief over-watering better than narrow-rooted species. Reduce frequency in winter.",
    },
    {
      label: "Fertilising",
      value: "Frequent, diluted",
      detail:
        "Delta Force is a heavy feeder relative to other collector anthuriums. Regular feeding during active growth is essential to maintain leaf size and speed. A balanced liquid fertiliser at quarter to half strength weekly, or half strength bi-weekly, keeps it moving. Nutrient deficiency shows as smaller leaves and slowed growth before any visible yellowing.",
    },
    {
      label: "Temperature",
      value: "65–85°F (18–30°C)",
      detail:
        "Typical household temperatures are fine. Avoid cold drafts and windowsill exposure in winter — sustained temperatures below 60°F slow growth noticeably. Tissue culture plants are particularly sensitive to thermal shock on arrival.",
    },
    {
      label: "Repotting",
      value: "Every 6–12 months",
      detail:
        "Delta Force grows thick, relatively unbranched white roots that fill available space quickly. Plan to repot once the roots are clearly circling or emerging from drainage holes. The thick root system makes it well suited to chunky or open media — LECA, perlite-heavy mixes, or semi-hydro setups all work well.",
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
    body: "Anthurium Delta Force is a deliberate hybrid of two species with well-documented collector histories. A. clarinervium is native to the limestone mountains of Chiapas, Mexico, where it grows as a lithophyte or semi-epiphyte in humid forest shade. A. pedatoradiatum is a Mexican and Central American species known for its dramatically lobed, finger-like leaves. The cross was performed by Steve Nock at Ree Gardens in Miami, Florida in the 1990s. From the resulting seedlings, one plant stood out for a uniquely deltoid, narrow-tipped blade and was named Delta Force. As a hemiepiphyte, Delta Force can be grown terrestrially or mounted \u2014 though most collectors grow it as a compact rosette in an open aroid mix or semi-hydro setup. Because this exact phenotype has not been reliably recreated from seed, modern distribution depends heavily on tissue culture and clonal propagation, with prices compressing as TC accessibility has grown.",
    timeline: [
      {
        year: "1990s",
        event:
          "Steve Nock performs clarinervium × pedatoradiatum crosses at Ree Gardens in Miami and selects the standout seedling later named Delta Force.",
      },
      {
        year: "2000s–2010s",
        event:
          "Plant circulates mainly through divisions from original stock, remaining scarce and premium-priced among collectors.",
      },
      {
        year: "2020s",
        event:
          "Tissue culture proliferation drives prices down to accessible levels. Available widely but authentication from reputable sources still matters.",
      },
    ],
  },

  // propagation: {
  //   intro:
  //     "Delta Force multiplies most reliably through basal division once the plant has produced offsets. Tissue culture is the dominant commercial route and the reason this hybrid is widely available at accessible prices.",
  //   methods: [
  //     {
  //       type: PropagationMethodType.Division,
  //       name: "Basal Division",
  //       badge: "Most common",
  //       timing: "Spring through summer",
  //       successRate: "High",
  //       difficulty: "Moderate",
  //       overview:
  //         "Once the plant produces basal offsets with their own root systems, they can be separated and potted independently. This is the safest home propagation method.",
  //       steps: [
  //         {
  //           title: "Wait for offset maturity",
  //           body: "Wait until a secondary stem has developed two or more leaves before dividing. Premature separation drastically lowers survival.",
  //         },
  //         {
  //           title: "Unpot and separate",
  //           body: "Unpot and separate offsets with a sterile blade, preserving as many roots as possible on each division.",
  //           tip: "A clean, decisive cut heals faster than a tear. Sterilize between cuts with 70% isopropyl.",
  //         },
  //         {
  //           title: "Callous the cut surface",
  //           body: "Allow the cut surface to callous for 30–60 minutes before potting into an airy mix or LECA.",
  //         },
  //         {
  //           title: "Recovery environment",
  //           body: "Keep warm with elevated humidity during recovery. Do not fertilise for the first 4 weeks post-cut.",
  //         },
  //         {
  //           title: "Resume normal care",
  //           body: "Water lightly but consistently until roots re-establish and new growth resumes.",
  //         },
  //       ],
  //       warnings: [
  //         "Tight internodal spacing makes stem cuttings difficult — you frequently sacrifice a healthy node in the attempt. Division is preferred.",
  //         "Division stress is real — avoid fertilising for the first 4 weeks post-cut to prevent root burn on damaged tissue.",
  //       ],
  //     },
  //     {
  //       type: PropagationMethodType.TissueCulture,
  //       name: "Tissue Culture",
  //       badge: "Commercial",
  //       timing: "Year-round (lab setting)",
  //       successRate: "High",
  //       difficulty: "Expert",
  //       overview:
  //         "Tissue culture is the dominant commercial propagation route for Delta Force. It requires sterile lab conditions and is not practical for home growers, but it's the reason this hybrid is widely available.",
  //       steps: [
  //         {
  //           title: "Obtain sterile explant",
  //           body: "A small piece of meristematic tissue is excised under sterile conditions and placed on nutrient agar.",
  //         },
  //         {
  //           title: "Multiplication phase",
  //           body: "Explants are subcultured repeatedly in a growth-hormone medium to produce multiple plantlets from a single source.",
  //         },
  //         {
  //           title: "Rooting and hardening",
  //           body: "Plantlets are transferred to a rooting medium, then gradually acclimatized to ex-vitro conditions before sale.",
  //         },
  //       ],
  //       warnings: [
  //         "Seed-grown offspring from the parent cross are not guaranteed to reproduce Delta Force morphology. TC is the dominant commercial route for a reason.",
  //         "Delta Force does flower and pollination is possible, but the first one or two inflorescences are often not receptive.",
  //       ],
  //     },
  //   ],
  // },

  downsides: [
    {
      title: "Leaf tip crisp is almost inevitable",
      body: "That narrow pointed tip is the plant's most vulnerable point. In anything below 60–65% humidity, the tips begin to brown first, and it progresses inward. The plant still looks good at a distance, but up close the damage accumulates. It's cosmetic, not fatal — but hard to reverse.",
    },
    {
      title: "Authentication risk at low price points",
      body: "The anthurium boom has flooded markets with plants sold as Delta Force that are simply crosses of the two parent species — not the specific hybrid phenotype. At very low prices from unknown sellers, you're often buying the parentage, not the plant. The real Delta Force has a specific sinus geometry that flattens with maturity; an impostor will reveal itself over time.",
    },
    {
      title: "Juvenile plants look generic",
      body: "Fresh from tissue culture, Delta Force plants don't show their triangular character clearly. The first few leaves can be rounded and indistinct. You need four to six leaves of maturity before the true form emerges — which is why buying from reputable growers who can show mature specimens matters.",
    },
    {
      title: "Toxic to pets and humans",
      body: "Like all anthuriums, Delta Force contains calcium oxalate crystals throughout its tissue. Ingestion causes oral pain, swelling, and GI distress in cats, dogs, and humans. Keep it out of reach of children and animals.",
    },
    {
      title: "Winter dormancy slows progress",
      body: "Growth slows noticeably in low-light winter months. If you're growing under ambient indoor conditions without supplemental lighting, expect fewer leaves per year than the growing season average suggests.",
    },
  ],

  faq: {
    categories: [
      {
        category: "Care & Environment",
        items: [
          {
            question: "Why are my Delta Force leaf tips turning brown?",
            answer:
              "This is nearly always a humidity issue. The narrow pointed leaf tip is the first part of the plant to lose moisture to the air. If ambient humidity is below 60%, tip browning will begin and gradually progress inward. Once brown, the tissue won't recover — but raising humidity prevents further spread. A humidifier is the only reliable fix.",
          },
          {
            question: "Can Delta Force grow in LECA?",
            answer:
              "Yes — and it's arguably one of the best media choices for this plant. Delta Force grows thick, unbranched white roots that transition readily to inorganic media. LECA's open structure suits the root architecture and reduces overwatering risk. Run a full flush every two weeks to prevent salt buildup from the heavy feeding schedule.",
          },
          {
            question: "How often should I fertilise Delta Force?",
            answer:
              "More often than you'd expect for a velvet anthurium. During active growth, a diluted balanced fertiliser (quarter to half strength) weekly is appropriate. If using LECA or semi-hydro, add fertiliser to your reservoir at each top-up. Signs of underfeeding appear as leaves that come in smaller than the previous generation, before any yellowing becomes obvious.",
          },
          {
            question: "Is Delta Force a good beginner anthurium?",
            answer:
              "It's one of the most forgiving velvet anthuriums available — but it's not maintenance-free. If you're growing in ambient home conditions without a humidifier, expect cosmetic tip damage over time. The plant will survive; it just won't look showroom-perfect.",
          },
          {
            question: "Does Delta Force need a moss pole?",
            answer:
              "Not typically. Unlike some climbing anthuriums, Delta Force is not a strong vining grower — it tends to grow more as a compact rosette or semi-upright form. As leaves get larger and heavier, light staking may help with stability, but a full moss pole is unnecessary for most specimens.",
          },
        ],
      },
      {
        category: "Identification & Sourcing",
        items: [
          {
            question: "How do I know I have a real Delta Force and not just a cross?",
            answer:
              "Authentic Delta Force has a specific triangular leaf shape with a sinus that flattens and sharpens as the plant matures. On juvenile plants (fewer than four leaves), the form can look similar to other Anthurium crosses. Buy from reputable tissue culture suppliers or specialist growers who can show images of mature plants from the same stock.",
          },
          {
            question: "My Delta Force leaves aren't as triangular as photos I've seen. Is it the wrong plant?",
            answer:
              "Probably not — juvenile Delta Force plants have rounder, less defined leaves. The characteristic triangular geometry with the sharp tip and flat sinus typically doesn't appear clearly until the fourth or fifth leaf. If you bought from a reputable TC source, give it time. If leaves remain indistinct past six full-sized leaves, it may be worth questioning the provenance.",
          },
          {
            question: "Is Delta Force toxic to pets?",
            answer:
              "Yes. Like all Anthuriums, Delta Force contains calcium oxalate crystals throughout its tissue. Ingestion by cats, dogs, or children causes oral irritation, excessive drooling, swelling, and GI distress. Keep the plant out of reach and wear gloves when handling damaged tissue.",
          },
        ],
      },
    ],
  },

  conservation: {
    iucn: "NE",
    cites: null,
    wildCollectionRisk:
      "Anthurium \u2018Delta Force\u2019 is a registered hybrid cultivar with no wild population \u2014 it cannot be wild-collected. It was bred by Steve Nock of Ree Gardens, Miami, in the mid-1990s from Anthurium clarinervium \u00d7 Anthurium pedatoradiatum, both native to southern Mexico. The specific clone has never been recreated from seed and exists solely as clonally propagated or TC stock. Buyers have no conservation concerns specific to this cultivar.",
    ethicalSourcingTips: [
      "As a hybrid cultivar, Delta Force has no wild provenance to verify \u2014 focus on plant health and propagation legitimacy.",
      "Reputable sellers will be able to name the breeding line or TC source.",
      "If you care about parent species conservation, support sellers who propagate from existing cultivated stock.",
    ],
    redFlags: [
      "Sellers who cannot confirm whether stock is TC-derived or cutting-propagated \u2014 Delta Force lineage is traceable.",
      "Claims of \u2018wild hybrid\u2019 origin \u2014 this is botanically incoherent for a registered cultivar.",
    ],
  },
};
