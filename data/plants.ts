export type { PlantFile, PlantVariant, PlantListing } from "./types";
export type {
  PlantImages,
  CinematicPanel,
  GlanceFact,
  VariegationType,
  VariegationSection,
  CareItem,
  SubstrateOption,
  SubstrateSection,
  ProvenanceSection,
  PropagationSection,
  DownsideItem,
  PlantFitWeights,
  PlantPriceRange,
  PlantIdentity,
  PlantPhoto,
  PlantRecommendedProduct,
  AlocasiaCormData,
} from "./types";

import type { PlantFile } from "./types";
import { philodendronGloriosumVariegated } from "./plants/philodendron-gloriosum-variegated-type-1";
import { alocasiaBlackVelvetVariegatedPink } from "./plants/alocasia-black-velvet-variegated-pink";
import { anthuriumDeltaForce } from "./plants/anthurium-delta-force";

export const plants: PlantFile[] = [
  philodendronGloriosumVariegated,
  anthuriumDeltaForce,
  alocasiaBlackVelvetVariegatedPink,
];

export const plantSourceFiles: Record<string, string> = {
  "philodendron-gloriosum-variegated-type-1": "data/plants/philodendron-gloriosum-variegated-type-1.ts",
  "anthurium-delta-force": "data/plants/anthurium-delta-force.ts",
  "alocasia-black-velvet-variegated-pink": "data/plants/alocasia-black-velvet-variegated-pink.ts",
};

export function getPlantBySlug(slug: string): PlantFile | undefined {
  return plants.find((p) => p.identity.slug === slug);
}
