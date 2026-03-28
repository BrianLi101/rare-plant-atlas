import type { PlantListing } from "../types";

export const monsteraWhiteMonster: PlantListing = {
  identity: {
    id: "monstera-white-monster",
    slug: "monstera-white-monster",
    genus: "Monstera",
    species: "deliciosa",
    cultivar: "White Monster",
    tradeName: "Monstera White Monster",
    aliases: ["white monster monstera"],
    matchPhrases: ["white monster"],
  },
  tagline:
    "A high-contrast albo sport with dramatic white variegation and bold fenestration.",
  origin: "Thailand (tissue culture sport)",
  family: "Araceae",
  rarity: "Rare",
  priceRange: {
    currency: "USD",
    min: 150,
    max: 1200,
    lastObserved: new Date("2026-03-28"),
    note: "Prices depend heavily on variegation coverage and stability. Half-moon and full-white leaves command premiums, though full-white sections lack chlorophyll and may brown over time.",
  },
  images: {
    hero: undefined,
  },
  colors: {
    primary: "#141a14",
    accent: "#f0ece4",
    gradient: ["#161c16", "#0e120e"],
  },
  marketNote:
    "A Monstera deliciosa sport prized for its large, dramatic white sectors — often more extensive than standard Albo Borsigiana. Originating from Thai TC labs, White Monster tends to produce bolder variegation but with less predictability. Half-moon leaves are highly sought after. Closely related to other albo-type sports but distinguished by its larger growth habit and more aggressive white coverage.",
  fullProfileStatus: "planned",
  tissueCultureStatus: "limited",
  tissueCultureNote:
    "Produced via tissue culture in Thailand. Supply has increased but remains limited relative to demand. Reversion to all-green growth is a known risk — buyers should look for specimens with consistent variegation across multiple leaves.",
  priceHistory:
    "Gained traction in the Western collector market around 2023–2024. Prices initially exceeded $500 for small plants. As TC supply has expanded, prices have settled into the $150–$1,200 range depending on quality.",
  availabilityNotes:
    "Available from online rare plant sellers and occasional local plant shop drops. High-quality specimens sell out fast. Check for reversion history and request recent photos before purchasing.",
  lastReviewed: new Date("2026-03-28"),
};
