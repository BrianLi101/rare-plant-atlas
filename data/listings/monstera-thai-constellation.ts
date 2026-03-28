import type { PlantListing } from "../types";

export const monsteraThaiConstellation: PlantListing = {
  identity: {
    id: "monstera-thai-constellation",
    slug: "monstera-thai-constellation",
    genus: "Monstera",
    species: "deliciosa",
    cultivar: "Thai Constellation",
    tradeName: "Monstera Thai Constellation",
    aliases: ["monstera thai constellation"],
    matchPhrases: ["thai constellation", "monstera"],
  },
  tagline:
    "Stable creamy-white variegation on a plant that actually grows. The gateway grail.",
  origin: "Thailand (tissue culture origin)",
  family: "Araceae",
  rarity: "Rare",
  priceRange: {
    currency: "USD",
    min: 40,
    max: 250,
    lastObserved: new Date("2026-03-28"),
    note: "Mass TC production has driven prices down dramatically since 2023. Big-box retail availability has compressed the floor to under $50 for small plants.",
  },
  images: {
    hero: undefined,
  },
  colors: {
    primary: "#0e110e",
    accent: "#c9a257",
    gradient: ["#1a1e14", "#141714"],
  },
  marketNote:
    "The plant that broke the rare aroid market. Once $300+ for a cutting, Thai Constellation is now available at Costa Farms retail for under $50. TC supply from Thai labs flooded the market in 2023–2024. Still a beautiful plant, but no longer a collector flex. Mature specimens with high variegation coverage hold some premium.",
  fullProfileStatus: "in-progress",
  tissueCultureStatus: "widespread",
  tissueCultureNote:
    "All Thai Constellation are tissue culture — the cultivar originated in a Thai lab and has never existed in the wild. TC is the only propagation method. Growth rate is moderate, significantly faster than Albo variegated deliciosa.",
  priceHistory:
    "Prices collapsed ~80% between 2022 and 2025 due to mass TC production and Costa Farms retail distribution. The $300 cutting is now a $40 retail plant.",
  availabilityNotes:
    "Widely available at big-box retailers (Home Depot, Lowe's) through Costa Farms. Also stocked by most online rare plant sellers. No longer scarce.",
  lastReviewed: new Date("2026-03-28"),
};
