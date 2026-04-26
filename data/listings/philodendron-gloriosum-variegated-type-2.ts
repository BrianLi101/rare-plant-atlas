import type { PlantListing } from "../types";

const IMG = "/plants/philodendron-gloriosum-variegated-type-1";

export const philodendronGloriosumVariegatedType2: PlantListing = {
  identity: {
    id: "philodendron-gloriosum-variegated-type-2",
    slug: "philodendron-gloriosum-variegated-type-2",
    genus: "Philodendron",
    species: "gloriosum",
    tradeName: "Philodendron gloriosum",
    variantLabel: "Variegated Type 2",
    aliases: [
      "variegated philodendron gloriosum type 2",
      "philodendron gloriosum variegated type 2",
      "philodendron gloriosum variegated",
      "philodendron variegated gloriosum",
    ],
    matchPhrases: ["gloriosum", "variegated"],
    mustExcludePhrases: [
      "type 1",
      "og type 1",
      "type 3",
      "snow leopard",
      "tricolor",
      "type 4",
      "marble",
    ],
  },
  tagline:
    "The splash-form variegated gloriosum now entering the tissue-culture stage of the market.",
  origin: "Cultivated variegated line; type 2 splash form",
  family: "Araceae",
  rarity: "Rare",
  priceRange: {
    currency: "USD",
    min: 19.99,
    max: 800,
    lastObserved: new Date("2026-04-25"),
    note: "Type 2 pricing has a much lower floor than Type 1 because tissue culture now exists, but exact plants and larger specimens still command meaningful premiums.",
  },
  images: {
    hero: `${IMG}/type-2-splash.jpg`,
  },
  colors: {
    primary: "#152018",
    accent: "#cdb58c",
    gradient: ["#1c2d20", "#131b14"],
  },
  marketNote:
    "Type 2 splash gloriosum is no longer trading like a single-lineage oddity. It most likely reflects a tissue-culture mutation line coming out of Asian labs rather than a scarce legacy clone, which is why it behaves more like Monstera Thai Constellation versus Monstera albo. Tissue culture has expanded access, and the low end now includes TC and smaller starter plants, while exact plants and high-quality splash patterns still push the upper end much higher.",
  fullProfileStatus: "planned",
  seoDescription:
    "Philodendron gloriosum Variegated Type 2 prices now include tissue culture and starter plants, with premium splash specimens still carrying a collector premium.",
  quickAnswer:
    "Philodendron gloriosum Variegated Type 2 is the splash-form variegated gloriosum. It is now available in tissue culture, which has lowered entry pricing relative to Type 1 block variegation.",
  lastReviewed: new Date("2026-04-25"),
  priceHistory:
    "Stored 2026 snapshots show Type 2 listings across NSE Tropicals, Rare Plant Fairy, Rare Foliage Plant Co, and Orange Lake Nursery. That mix of exact plants, grower's choice plants, and explicit TC listings shows a market that has already shifted beyond the old cutting-only phase.",
  tissueCultureInfo: {
    status: "widespread",
    note:
      "Type 2 splash gloriosum is now available in tissue culture. It is most likely a lab-origin mutation line from Asian TC production, so the market behaves more like Thai Constellation compared with Monstera albo. Stored seller snapshots include explicit TC listings and TC-backed seller inventory, which is the core reason Type 2 has compressed while Type 1 remains much more expensive.",
    priceRange: {
      currency: "USD",
      min: 19.99,
      max: 79.99,
      lastObserved: new Date("2026-04-25"),
    },
  },
  availabilityNotes:
    "Available from NSE Tropicals, Rare Plant Fairy, Rare Foliage Plant Co, and Orange Lake Nursery. Type 2 is materially easier to source than Type 1, especially at the TC and starter-plant end of the market.",
  faq: {
    categories: [
      {
        category: "Price & Value",
        items: [
          {
            question: "How much does Philodendron gloriosum Variegated Type 2 cost?",
            answer:
              "Current Type 2 pricing spans from tissue culture and starter material at the low end to premium exact plants in the higher collector tier. The floor is much lower than Type 1 because TC now exists for Type 2.",
          },
          {
            question: "What is a fair price for Type 2 variegated gloriosum?",
            answer:
              "A fair price depends on format. TC and small starter plants should be much cheaper than established exact plants. If you are paying premium pricing, you should be getting specific pattern quality, size, or exact-plant selection rather than generic starter stock.",
          },
          {
            question: "Why is Type 2 cheaper than Type 1?",
            answer:
              "Because Type 2 has entered tissue culture while Type 1 has not, and it most likely represents a TC mutation line rather than a tightly held old clone. In market terms, that makes it closer to Thai Constellation versus Monstera albo: broader lab supply, lower floor pricing, and less scarcity pressure.",
          },
        ],
      },
      {
        category: "Buying Guidance",
        items: [
          {
            question: "Is Philodendron gloriosum Variegated Type 2 available as tissue culture?",
            answer:
              "Yes. Stored seller data includes explicit TC listings for variegated gloriosum and repeated Type 2 inventory across multiple sellers, which confirms that Type 2 is firmly in the tissue-culture market now. It is best understood as the likely TC-mutation lane of variegated gloriosum rather than the rarer Type 1 collector lane.",
          },
          {
            question: "Where can I buy Type 2 variegated gloriosum?",
            answer:
              "Type 2 shows up at NSE Tropicals, Rare Plant Fairy, Rare Foliage Plant Co, and Orange Lake Nursery. Compared with Type 1, there are more entry-level buying options and more repeated restocks.",
          },
          {
            question: "Is tissue culture Type 2 gloriosum worth buying?",
            answer:
              "If you want the cheapest route in, yes. The usual TC tradeoff still applies: exact plants give you more certainty on pattern and size, while TC lowers cost and increases access.",
          },
        ],
      },
      {
        category: "Rarity",
        items: [
          {
            question: "Is Philodendron gloriosum Variegated Type 2 still rare?",
            answer:
              "It is still a collector plant, but it is no longer in the same scarcity tier as Type 1. Tissue culture and repeated seller availability have made it much easier to obtain.",
          },
          {
            question: "Is Type 2 gloriosum getting easier to find?",
            answer:
              "Yes. The combination of TC availability and repeat multi-seller listings shows a broader market than the older lineage-limited phase.",
          },
        ],
      },
    ],
  },
};
