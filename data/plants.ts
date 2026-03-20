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
  PlantIdentity,
  PlantPhoto,
  PlantRecommendedProduct,
} from "./types";

import type { PlantVariant } from "./types";
import { philodendronGloriosumVariegated } from "./plants/philodendron-gloriosum-variegated";

export const plants: PlantVariant[] = [
  philodendronGloriosumVariegated,
];

export function getPlantBySlug(slug: string): PlantVariant | undefined {
  return plants.find((p) => p.identity.slug === slug);
}
