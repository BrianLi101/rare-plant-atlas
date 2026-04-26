import type { PlantFile, PlantListing } from "../types";

export function createListingFromPlantFile(
  plant: PlantFile,
  overrides: Partial<PlantListing> = {},
): PlantListing {
  return {
    identity: plant.identity,
    tagline: plant.tagline,
    origin: plant.origin,
    family: plant.family,
    rarity: plant.rarity,
    priceRange: plant.priceRange,
    images: plant.images,
    colors: plant.colors,
    marketNote: plant.marketNote,
    fullProfileStatus: "available",
    seoDescription: plant.seoDescription,
    quickAnswer: plant.quickAnswer,
    lastReviewed: plant.lastReviewed,
    priceHistory: plant.priceHistory,
    tissueCultureInfo: plant.tissueCultureInfo,
    availabilityNotes: plant.availabilityNotes,
    faq: plant.faq,
    ...overrides,
  };
}
