import type { PlantListing } from "../types";

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
    hero: undefined,
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
};
