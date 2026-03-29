import type { PlantListing } from "../types";

export const philodendronSpiritusSancti: PlantListing = {
  identity: {
    id: "philodendron-spiritus-sancti",
    slug: "philodendron-spiritus-sancti",
    genus: "Philodendron",
    species: "spiritus-sancti",
    tradeName: "Philodendron Spiritus Sancti",
    aliases: [
      "spiritus sancti",
      "philodendron spiritus sancti",
      "spirit of the saint",
    ],
    matchPhrases: ["spiritus sancti", "philodendron"],
  },
  tagline:
    "The Holy Grail of Philodendrons — once nearly extinct, now accessible through tissue culture.",
  origin: "Espírito Santo, Brazil (critically endangered in the wild)",
  family: "Araceae",
  rarity: "Rare",
  priceRange: {
    currency: "USD",
    min: 50,
    max: 300,
    lastObserved: new Date("2026-03-29"),
    note: "Tissue culture has dramatically reduced prices from the $10,000+ era. Small TC plants now start around $50.",
  },
  images: {
    hero: undefined,
  },
  colors: {
    primary: "#0f1a0e",
    accent: "#4a8c3f",
    gradient: ["#1a2618", "#0f1a0e"],
  },
  marketNote:
    "Once the most expensive houseplant in the world, with mature specimens selling for $10,000–$30,000+. Tissue culture labs (primarily in Thailand and Indonesia) have flooded the market since 2024, making small TC plants available for under $100. Mature specimens still command a premium, but the days of five-figure price tags are over for most buyers.",
  fullProfileStatus: "in-progress",
  tissueCultureStatus: "widespread",
  tissueCultureNote:
    "TC propagation has been the primary driver of accessibility. Wild populations in Espírito Santo, Brazil are critically endangered with fewer than a few hundred plants remaining. Nearly all plants in cultivation are TC-derived.",
  priceHistory:
    "Prices dropped ~95% between 2022 and 2026 as TC supply scaled up. A plant that once cost $10,000+ as a cutting is now $50–$300 for TC specimens.",
  availabilityNotes:
    "Widely available from online rare plant sellers and aroid specialists. TC plants are regularly stocked. Mature specimens are still uncommon and priced higher.",
  lastReviewed: new Date("2026-03-29"),
};
