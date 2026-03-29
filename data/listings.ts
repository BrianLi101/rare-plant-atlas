export type { PlantListing } from "./types";

import type { PlantListing } from "./types";
import { monsteraThaiConstellation } from "./listings/monstera-thai-constellation";
import { monsteraDevilMonster } from "./listings/monstera-devil-monster";
import { alocasiaChantrierVariegatedPink } from "./listings/alocasia-chantrieri-variegated-pink";
import { monsteraWhiteLava } from "./listings/monstera-white-lava";
import { monsteraWhiteMonster } from "./listings/monstera-white-monster";
import { philodendronSpiritusSancti } from "./listings/philodendron-spiritus-sancti";

export const listings: PlantListing[] = [
  monsteraThaiConstellation,
  monsteraDevilMonster,
  alocasiaChantrierVariegatedPink,
  monsteraWhiteLava,
  monsteraWhiteMonster,
  philodendronSpiritusSancti,
];

export function getListingBySlug(slug: string): PlantListing | undefined {
  return listings.find((l) => l.identity.slug === slug);
}
