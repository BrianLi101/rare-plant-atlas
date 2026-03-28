export type { PlantListing } from "./types";

import type { PlantListing } from "./types";
import { monsteraThaiConstellation } from "./listings/monstera-thai-constellation";
import { monsteraDevilMonster } from "./listings/monstera-devil-monster";

export const listings: PlantListing[] = [
  monsteraThaiConstellation,
  monsteraDevilMonster,
];

export function getListingBySlug(slug: string): PlantListing | undefined {
  return listings.find((l) => l.identity.slug === slug);
}
