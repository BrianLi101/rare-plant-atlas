import type { PlantListing } from "../types";

export const monsteraElectrolyte: PlantListing = {
  identity: {
    id: "monstera-electrolyte",
    slug: "monstera-electrolyte",
    genus: "Monstera",
    species: "deliciosa",
    cultivar: "Electrolyte",
    tradeName: "Monstera Electrolyte",
    aliases: [
      "monstera deliciosa electrolyte",
      "electrolyte monstera",
    ],
    matchPhrases: ["electrolyte", "monstera"],
  },
  tagline:
    "A minty green-on-green deliciosa mutation that now spans cheap TC, accessible starters, and expensive exact plants.",
  origin: "China (cultivated Monstera deliciosa mutation)",
  family: "Araceae",
  rarity: "Rare",
  priceRange: {
    currency: "USD",
    min: 89.99,
    max: 1049.99,
    lastObserved: new Date("2026-04-25"),
    note:
      "Acclimated stock now starts around $89.99-$99.99 for 3-inch plants, while exact plants and premium releases still stretch from roughly $450 to $1,049.99. Tissue culture forms a separate lower tier.",
  },
  images: {
    hero: "/plants/monstera-electrolyte/hero.jpg",
  },
  colors: {
    primary: "#0f1a16",
    accent: "#9fe3b8",
    gradient: ["#183127", "#0f1a16"],
  },
  marketNote:
    "Electrolyte is a green-on-green Monstera deliciosa mutation with a cleaner, brighter look than darker camo cultivars. The 2026 market already looks stratified: TC for the lowest-cost entry, acclimated 3-inch plants under $100, and exact plants or standout one-offs holding a premium. That mix usually signals a cultivar moving from collector bottleneck into broader specialty availability.",
  fullProfileStatus: "planned",
  tissueCultureInfo: {
    status: "widespread",
    note:
      "Electrolyte should now be treated as a real tissue-culture offering, not just an occasional rumor listing. The April 25, 2026 price snapshot captured an in-stock Orange Lake Nursery TC at $49.99, and a live check of Orange Lake's official product page confirms they actively list Electrolyte in tissue culture format.",
    priceRange: {
      currency: "USD",
      min: 49.99,
      max: 49.99,
      lastObserved: new Date("2026-04-25"),
    },
  },
  priceHistory:
    "Spring 2026 snapshots show Electrolyte compressing into a three-tier market. Tissue culture reached $49.99 by April 25, acclimated 3-inch plants landed around $89.99-$99.99 at Orange Lake Nursery, and established or exact plants ranged from about $195 for starter stock to $1,049.99 for premium exact offerings. Rare Plant Fairy special releases still pushed higher at $750-$950, but the entry tier is clearly broadening.",
  availabilityNotes:
    "Orange Lake Nursery is the clearest signal that Electrolyte has moved into broader specialty circulation, with both TC and acclimated 3-inch inventory showing up in the same snapshot window. Rare Plant Fairy and Rare Foliage Plant Co still anchor the upper end for more mature or exact plants. Expect the easiest buy to be TC or a small acclimated starter, not a premium exact specimen.",
  lastReviewed: new Date("2026-04-25"),

  faq: {
    categories: [
      {
        category: "Price & Value",
        items: [
          {
            question: "How much does Monstera Electrolyte cost?",
            answer:
              "Snapshot-backed pricing currently spans about $49.99 to $1,049.99 overall. Tissue culture sits at the bottom, acclimated 3-inch plants are already under $100, and established exact plants still occupy the upper hundreds to low four figures.",
          },
          {
            question: "What is a fair price for Monstera Electrolyte?",
            answer:
              "A fair price depends on format. Around $50 is reasonable for TC, roughly $90-$200 is solid for a small acclimated plant, and $450-$700 is normal for stronger exact or more mature plants. Four-figure pricing only makes sense for very specific premium plants, not generic starter stock.",
          },
          {
            question: "Why are some Monstera Electrolyte plants still expensive if TC exists?",
            answer:
              "TC lowers entry cost, but it does not replace the premium for established stems and exact patterning. Buyers still pay more for finished plants that already have size, stronger expression, and less grow-out risk than a fresh TC plantlet.",
          },
        ],
      },
      {
        category: "Buying Guidance",
        items: [
          {
            question: "Is Monstera Electrolyte available as tissue culture now?",
            answer:
              "Yes. Electrolyte should now be treated as a real TC market plant. The April 25, 2026 snapshot captured an in-stock Orange Lake Nursery TC listing at $49.99, and Orange Lake's official site currently maintains a dedicated Electrolyte tissue-culture product page.",
          },
          {
            question: "Is a tissue culture Monstera Electrolyte worth buying?",
            answer:
              "If your goal is cheap entry, yes. Just price your time correctly. A TC Monstera will take much longer to develop stem thickness and mature-looking growth than an acclimated 3-inch plant, so the savings are real only if you are comfortable with a slower grow-out.",
          },
          {
            question: "Where can I buy Monstera Electrolyte?",
            answer:
              "Orange Lake Nursery is currently the clearest source for TC and small acclimated plants, while Rare Plant Fairy and Rare Foliage Plant Co remain useful references for premium or exact stock. That combination makes Electrolyte easier to source than cultivars that still depend on one or two collector-only sellers.",
          },
          {
            question: "Is Monstera Electrolyte getting easier to find?",
            answer:
              "Yes. The strongest signal is that the market now supports three distinct price tiers at once: TC, cheap acclimated starters, and premium exact plants. Once that happens, availability is usually broadening even if the best-patterned plants still hold their collector premium.",
          },
        ],
      },
    ],
  },
};
