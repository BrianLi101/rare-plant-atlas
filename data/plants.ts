export type { PlantVariant } from "./types";
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

import type { PlantVariant } from "./types";
import { philodendronGloriosumVariegated } from "./plants/philodendron-gloriosum-variegated";
import { alocasiaBlackVelvetVariegatedPink } from "./plants/alocasia-black-velvet-variegated-pink";
import { anthuriumDeltaForce } from "./plants/anthurium-delta-force";

export const plants: PlantVariant[] = [
  anthuriumDeltaForce,
  alocasiaBlackVelvetVariegatedPink,
  philodendronGloriosumVariegated,
];

export function getPlantBySlug(slug: string): PlantVariant | undefined {
  return plants.find((p) => p.identity.slug === slug);
}
