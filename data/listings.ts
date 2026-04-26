export type { PlantListing } from "./types";

import type { PlantListing } from "./types";
import { getPlantBySlug } from "./plants";
import { monsteraThaiConstellation } from "./listings/monstera-thai-constellation";
import { monsteraDevilMonster } from "./listings/monstera-devil-monster";
import { alocasiaChantrierVariegatedPink } from "./listings/alocasia-chantrieri-variegated-pink";
import { monsteraWhiteLava } from "./listings/monstera-white-lava";
import { monsteraWhiteMonster } from "./listings/monstera-white-monster";
import { monsteraBulbasaur } from "./listings/monstera-bulbasaur";
import { monsteraBurleMarxFlame } from "./listings/monstera-burle-marx-flame";
import { monsteraElectrolyte } from "./listings/monstera-electrolyte";
import { philodendronBillietiaeVariegated } from "./listings/philodendron-billietiae-variegated";
import { philodendronIlsemaniiVariegated } from "./listings/philodendron-ilsemanii-variegated";
import { philodendronSpiritusSancti } from "./listings/philodendron-spiritus-sancti";
import { philodendronGloriosumVariegatedType1 } from "./listings/philodendron-gloriosum-variegated-type-1";
import { philodendronGloriosumVariegatedType2 } from "./listings/philodendron-gloriosum-variegated-type-2";
import { anthuriumDeltaForceListing } from "./listings/anthurium-delta-force";
import { alocasiaBlackVelvetVariegatedPinkListing } from "./listings/alocasia-black-velvet-variegated-pink";

export const listings: PlantListing[] = [
  philodendronGloriosumVariegatedType1,
  philodendronGloriosumVariegatedType2,
  anthuriumDeltaForceListing,
  alocasiaBlackVelvetVariegatedPinkListing,
  monsteraThaiConstellation,
  monsteraDevilMonster,
  alocasiaChantrierVariegatedPink,
  monsteraWhiteLava,
  monsteraWhiteMonster,
  monsteraBulbasaur,
  monsteraBurleMarxFlame,
  monsteraElectrolyte,
  philodendronBillietiaeVariegated,
  philodendronIlsemaniiVariegated,
  philodendronSpiritusSancti,
];

export const standaloneListings = listings.filter(
  (listing) => !getPlantBySlug(listing.identity.slug),
);

export const listingSourceFiles: Record<string, string> = {
  "philodendron-gloriosum-variegated-type-1": "data/listings/philodendron-gloriosum-variegated-type-1.ts",
  "philodendron-gloriosum-variegated-type-2": "data/listings/philodendron-gloriosum-variegated-type-2.ts",
  "anthurium-delta-force": "data/listings/anthurium-delta-force.ts",
  "alocasia-black-velvet-variegated-pink": "data/listings/alocasia-black-velvet-variegated-pink.ts",
  "monstera-thai-constellation": "data/listings/monstera-thai-constellation.ts",
  "monstera-devil-monster": "data/listings/monstera-devil-monster.ts",
  "alocasia-chantrieri-variegated-pink": "data/listings/alocasia-chantrieri-variegated-pink.ts",
  "monstera-white-lava": "data/listings/monstera-white-lava.ts",
  "monstera-white-monster": "data/listings/monstera-white-monster.ts",
  "monstera-bulbasaur": "data/listings/monstera-bulbasaur.ts",
  "monstera-burle-marx-flame": "data/listings/monstera-burle-marx-flame.ts",
  "monstera-electrolyte": "data/listings/monstera-electrolyte.ts",
  "philodendron-billietiae-variegated": "data/listings/philodendron-billietiae-variegated.ts",
  "philodendron-ilsemanii-variegated": "data/listings/philodendron-ilsemanii-variegated.ts",
  "philodendron-spiritus-sancti": "data/listings/philodendron-spiritus-sancti.ts",
};

export function getListingBySlug(slug: string): PlantListing | undefined {
  return listings.find((l) => l.identity.slug === slug);
}
