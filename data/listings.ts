export type { PlantListing } from "./types";

import type { PlantListing } from "./types";
import { monsteraThaiConstellation } from "./listings/monstera-thai-constellation";
import { monsteraDevilMonster } from "./listings/monstera-devil-monster";
import { alocasiaChantrierVariegatedPink } from "./listings/alocasia-chantrieri-variegated-pink";
import { monsteraWhiteLava } from "./listings/monstera-white-lava";
import { monsteraWhiteMonster } from "./listings/monstera-white-monster";
import { monsteraBulbasaur } from "./listings/monstera-bulbasaur";
import { philodendronSpiritusSancti } from "./listings/philodendron-spiritus-sancti";

export const listings: PlantListing[] = [
  monsteraThaiConstellation,
  monsteraDevilMonster,
  alocasiaChantrierVariegatedPink,
  monsteraWhiteLava,
  monsteraWhiteMonster,
  monsteraBulbasaur,
  philodendronSpiritusSancti,
];

export const listingSourceFiles: Record<string, string> = {
  "monstera-thai-constellation": "data/listings/monstera-thai-constellation.ts",
  "monstera-devil-monster": "data/listings/monstera-devil-monster.ts",
  "alocasia-chantrieri-variegated-pink": "data/listings/alocasia-chantrieri-variegated-pink.ts",
  "monstera-white-lava": "data/listings/monstera-white-lava.ts",
  "monstera-white-monster": "data/listings/monstera-white-monster.ts",
  "monstera-bulbasaur": "data/listings/monstera-bulbasaur.ts",
  "philodendron-spiritus-sancti": "data/listings/philodendron-spiritus-sancti.ts",
};

export function getListingBySlug(slug: string): PlantListing | undefined {
  return listings.find((l) => l.identity.slug === slug);
}
