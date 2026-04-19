import type { PlantListing } from "../types";

const IMG = "/plants/monstera-white-lava";

export const monsteraWhiteLava: PlantListing = {
  identity: {
    id: "monstera-white-lava",
    slug: "monstera-white-lava",
    genus: "Monstera",
    species: "deliciosa",
    cultivar: "White Lava",
    tradeName: "Monstera White Lava",
    aliases: ["white lava monstera"],
    matchPhrases: ["white lava", "monstera"],
  },
  tagline:
    "Bold white sectoral variegation on a compact deliciosa sport — striking and unpredictable.",
  origin: "Thailand (tissue culture sport)",
  family: "Araceae",
  rarity: "Ultra-Rare",
  priceRange: {
    currency: "USD",
    min: 200,
    max: 1500,
    lastObserved: new Date("2026-03-28"),
    note: "Prices vary widely based on variegation stability and leaf count. High-contrast specimens with stable sectoral patterning command the top of the range.",
  },
  images: {
    hero: `${IMG}/hero.jpg`,
  },
  colors: {
    primary: "#1a1f1a",
    accent: "#e8e0d0",
    gradient: ["#1a1f1a", "#0f130f"],
  },
  marketNote:
    "A striking Monstera deliciosa sport featuring bold white to cream sectoral variegation. Emerged from Thai tissue culture labs and quickly gained collector attention for its high-contrast patterning. Variegation stability varies between specimens — plants with consistent sectoral patterns are most sought after. Sometimes confused with Monstera Albo, but White Lava typically displays broader, more irregular white sectors.",
  fullProfileStatus: "planned",
  tissueCultureStatus: "limited",
  tissueCultureNote:
    "Produced via tissue culture in Thai labs. Supply is growing but still limited compared to demand. Reverted or low-variegation specimens are more affordable but less desirable.",
  priceHistory:
    "Entered the collector market around 2024–2025. Early specimens sold for $500+. Prices have begun to soften as TC supply increases, but high-quality variegated plants still hold value.",
  availabilityNotes:
    "Available from select rare plant sellers online. Restocks tend to sell out quickly. Verify variegation quality from seller photos before purchasing.",
  lastReviewed: new Date("2026-03-28"),

  faq: {
    categories: [
      {
        category: "Price & Value",
        items: [
          {
            question: "How much does Monstera White Lava cost?",
            answer:
              "Monstera White Lava currently ranges from $850 to $10,975 from online sellers. Most listings fall in the $850–$1,500 range for individual plants. The extreme high end represents large or exceptional specimens. The lowest price we've tracked is $850.",
          },
          {
            question: "What is a fair price for Monstera White Lava?",
            answer:
              "Based on current market listings, $850–$1,500 is a fair range for a White Lava plant. Prices depend heavily on variegation quality — plants with stable, high-contrast white sectoral patterns command the top of the range. Early specimens sold for $500+, but as TC supply increases, the floor has started to shift.",
          },
          {
            question: "Why is Monstera White Lava so expensive?",
            answer:
              "White Lava is ultra-rare with limited tissue culture supply. The variegation is unstable — not every TC plant produces the desirable bold white sectors, which restricts supply of high-quality specimens. It's also still relatively new to the collector market (arriving around 2024–2025), so production hasn't scaled yet.",
          },
        ],
      },
      {
        category: "Buying Guidance",
        items: [
          {
            question: "Where can I buy Monstera White Lava?",
            answer:
              "Available from select rare plant sellers online, including Rare Plant Fairy and Aroid Market. Restocks tend to sell out quickly. Always verify variegation quality from seller photos before purchasing — the extent and stability of white sectors varies significantly between specimens.",
          },
          {
            question: "Is Monstera White Lava available as tissue culture?",
            answer:
              "Yes — White Lava was produced via tissue culture in Thai labs. Supply is growing but still limited compared to demand. Reverted or low-variegation specimens are more affordable but less desirable.",
          },
          {
            question: "Is a tissue culture Monstera White Lava worth buying?",
            answer:
              "Be cautious. Monsteras from tissue culture take a long time to grow because the stems are thin — growth rate is proportional to stem thickness. A small TC White Lava will be years away from the dramatic fenestrated look the plant is known for. If budget allows, an established plant is the better investment. TC also carries variegation instability risk — some plants revert to mostly green.",
          },
        ],
      },
      {
        category: "Rarity",
        items: [
          {
            question: "Is Monstera White Lava rare?",
            answer:
              "Yes — it is classified as ultra-rare. Tissue culture exists but is still limited. The unstable variegation means that even among TC-produced plants, only a subset show the desirable bold white sectoral patterning.",
          },
          {
            question: "Is Monstera White Lava getting easier to find?",
            answer:
              "Slowly. More TC stock is reaching the market, and prices have begun to soften from the early $500+ days. But supply is still constrained, and high-quality specimens with stable variegation remain uncommon. Expect gradual improvement as labs scale production over the next 1–2 years.",
          },
        ],
      },
    ],
  },
};
