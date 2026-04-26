import type { PlantListing } from "../types";

const IMG = "/plants/monstera-burle-marx-flame";

export const monsteraBurleMarxFlame: PlantListing = {
  identity: {
    id: "monstera-burle-marx-flame",
    slug: "monstera-burle-marx-flame",
    genus: "Monstera",
    tradeName: "Monstera Burle Marx Flame",
    aliases: [
      "burle marx flame monstera",
      "monstera flame",
      "burle marx flame",
    ],
    matchPhrases: ["burle marx flame"],
  },
  tagline:
    "Flame-cut foliage with real collector appeal, now finally accessible through broad tissue culture supply.",
  origin: "Brazil collection origin; now mass tissue cultured",
  family: "Araceae",
  rarity: "Scarce",
  priceRange: {
    currency: "USD",
    min: 9.99,
    max: 49,
    lastObserved: new Date("2026-04-25"),
    note: "Current tissue culture and starter plant pricing sits under $50. Larger acclimated plants may still command a premium over this range.",
  },
  images: {
    hero: `${IMG}/hero.jpg`,
  },
  colors: {
    primary: "#10130f",
    accent: "#97b26d",
    gradient: ["#182018", "#11150f"],
  },
  marketNote:
    "Burle Marx Flame has moved from wishlist Monstera to realistic entry-level collector buy. Costa Farms now sells it directly, and specialty sellers are offering both tissue culture and small rooted plants under $50. The plant is still slow to mature, but the old access barrier has broken.",
  fullProfileStatus: "planned",
  seoDescription:
    "Monstera Burle Marx Flame prices now start around $10 from tissue culture, with small established plants under $50 as supply expands.",
  quickAnswer:
    "Monstera Burle Marx Flame is a slow-growing climbing Monstera with narrow juvenile leaves that mature into deeply cut, flame-like foliage. It is now widely available in tissue culture, with current entry pricing around $10-$50.",
  lastReviewed: new Date("2026-04-25"),
  priceHistory:
    "By April 25, 2026, tracked US listings ranged from $9.99 tissue culture to $49 medium established plants. That signals a major accessibility shift from the earlier collector-only phase, driven by specialty TC sellers and Costa Farms distribution.",
  tissueCultureInfo: {
    status: "widespread",
    note:
      "Tissue culture is now the main reason Burle Marx Flame has become accessible. Orange Lake Nursery and Varietata Labs list TC directly, and Costa Farms is selling established plants built from scaled production rather than limited collector propagation.",
    priceRange: {
      currency: "USD",
      min: 9.99,
      max: 29.99,
      lastObserved: new Date("2026-04-25"),
    },
  },
  availabilityNotes:
    "Available from Costa Farms and specialty online sellers including Orange Lake Nursery and Varietata Labs. Tissue culture is easy to find; acclimated starter plants are also becoming routine.",

  faq: {
    categories: [
      {
        category: "Price & Value",
        items: [
          {
            question: "How much does Monstera Burle Marx Flame cost?",
            answer:
              "Current tracked US pricing runs from about $10 for tissue culture to about $49 for a medium established plant. That is far lower than the collector-only phase and makes Burle Marx Flame one of the more approachable specialty Monsteras right now.",
          },
          {
            question: "What is a fair price for Monstera Burle Marx Flame?",
            answer:
              "A fair price for tissue culture is currently about $10-$30, while a small rooted or established plant around $25-$50 is reasonable based on current seller data. Paying more should generally correspond to size, acclimation, or exact-plant selection.",
          },
          {
            question: "Why was Monstera Burle Marx Flame expensive before?",
            answer:
              "It used to circulate mostly through specialist collectors and limited nursery stock. Wider tissue culture availability changed the equation by increasing supply and lowering the barrier to entry.",
          },
        ],
      },
      {
        category: "Buying Guidance",
        items: [
          {
            question: "Where can I buy Monstera Burle Marx Flame?",
            answer:
              "Costa Farms now sells it directly online, and specialty shops such as Orange Lake Nursery and Varietata Labs list both tissue culture and starter plants. That makes sourcing much easier than it was even a year ago.",
          },
          {
            question: "Is Monstera Burle Marx Flame available as tissue culture?",
            answer:
              "Yes. Tissue culture is now widely available and is the main reason the plant has become much more affordable. Current tracked TC offers sit around the $10-$30 range.",
          },
          {
            question: "Is a tissue culture Monstera Burle Marx Flame worth buying?",
            answer:
              "If you want the cheapest entry point, yes. Just keep expectations realistic: like other Monsteras, TC plants take time to mature because thin juvenile stems slow the path to dramatic fenestration. Buyers who want the look sooner should pay more for an acclimated plant.",
          },
        ],
      },
      {
        category: "Rarity",
        items: [
          {
            question: "Is Monstera Burle Marx Flame still rare?",
            answer:
              "It is still a specialty Monstera, but it is no longer difficult to access. Tissue culture supply has pulled it out of the ultra-rare category for buyers willing to start with a small plant.",
          },
          {
            question: "Is Monstera Burle Marx Flame getting easier to find?",
            answer:
              "Yes. The combination of TC sellers and Costa Farms distribution points to a materially easier market than the collector-only period. Entry pricing under $50 is the clearest sign of that shift.",
          },
        ],
      },
    ],
  },
};
