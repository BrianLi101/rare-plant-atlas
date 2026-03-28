import type { PlantListing } from "../types";

export const monsteraDevilMonster: PlantListing = {
  identity: {
    id: "monstera-devil-monster",
    slug: "monstera-devil-monster",
    genus: "Monstera",
    species: "deliciosa",
    cultivar: "Devil Monster",
    tradeName: "Monstera Devil Monster",
    aliases: ["devil monster monstera"],
    matchPhrases: ["devil monster"],
  },
  tagline:
    "Dark, textured, and heavily fenestrated — a compact deliciosa sport with serious presence.",
  origin: "Thailand (tissue culture sport)",
  family: "Araceae",
  rarity: "Ultra-Rare",
  priceRange: {
    currency: "USD",
    min: 600,
    max: 5000,
    lastObserved: new Date("2026-03-28"),
    note: "Still relatively new to the market. Prices are settling as TC supply ramps up, but demand remains strong for verified specimens.",
  },
  images: {
    hero: undefined,
  },
  colors: {
    primary: "#0e110e",
    accent: "#7a8b6a",
    gradient: ["#141a14", "#101410"],
  },
  marketNote:
    "A compact, deeply textured Monstera deliciosa sport that emerged from Thai tissue culture labs. Characterized by darker coloration, pronounced ridging, and aggressive fenestration at a smaller size than standard deliciosa. Still establishing itself in the collector market — authentic specimens command a premium over the growing number of mislabeled lookalikes.",
  fullProfileStatus: "planned",
  tissueCultureStatus: "limited",
  tissueCultureNote:
    "Originated as a TC sport in Thai labs. Supply is increasing but not yet widespread — most availability comes from a handful of Thai exporters and US resellers. Growth rate is comparable to standard deliciosa.",
  priceHistory:
    "Entered the US market around 2024. Initial prices were $500+ for small plants. Now settling into the $80–$400 range as more TC stock arrives.",
  availabilityNotes:
    "Available from select online rare plant sellers. Not yet in big-box retail. Restocks are sporadic — tends to sell out quickly.",
  lastReviewed: new Date("2026-03-28"),
};
