export type { PlantListing } from "./types";

import type { PlantListing } from "./types";
import { getPlantBySlug } from "./plants";
import { monsteraAlbo } from "./listings/monstera-albo";
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
import { anthuriumCarlablackiae } from "./listings/anthurium-carlablackiae";
import { alocasiaBlackVelvetVariegatedPinkListing } from "./listings/alocasia-black-velvet-variegated-pink";

const editorialListingOrder = [
  "monstera-albo",
  "monstera-devil-monster",
  "monstera-bulbasaur",
  "anthurium-delta-force",
  "anthurium-carlablackiae",
  "monstera-electrolyte",
  "philodendron-gloriosum-variegated-type-1",
  "alocasia-chantrieri-variegated-pink",
] as const;

const editorialListingRank: Map<string, number> = new Map(
  editorialListingOrder.map((slug, index) => [slug, index]),
);

export function sortListingsByEditorialPriority<T extends PlantListing>(
  items: T[],
): T[] {
  return [...items].sort((a, b) => {
    const aRank = editorialListingRank.get(a.identity.slug);
    const bRank = editorialListingRank.get(b.identity.slug);

    if (aRank !== undefined && bRank !== undefined) return aRank - bRank;
    if (aRank !== undefined) return -1;
    if (bRank !== undefined) return 1;
    return 0;
  });
}

const rawListings: PlantListing[] = [
  philodendronGloriosumVariegatedType1,
  philodendronGloriosumVariegatedType2,
  anthuriumDeltaForceListing,
  anthuriumCarlablackiae,
  alocasiaBlackVelvetVariegatedPinkListing,
  monsteraAlbo,
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

export const listings: PlantListing[] =
  sortListingsByEditorialPriority(rawListings);

export const standaloneListings = listings.filter(
  (listing) => !getPlantBySlug(listing.identity.slug),
);

export const listingSourceFiles: Record<string, string> = {
  "philodendron-gloriosum-variegated-type-1": "data/listings/philodendron-gloriosum-variegated-type-1.ts",
  "philodendron-gloriosum-variegated-type-2": "data/listings/philodendron-gloriosum-variegated-type-2.ts",
  "anthurium-delta-force": "data/listings/anthurium-delta-force.ts",
  "anthurium-carlablackiae": "data/listings/anthurium-carlablackiae.ts",
  "alocasia-black-velvet-variegated-pink": "data/listings/alocasia-black-velvet-variegated-pink.ts",
  "monstera-albo": "data/listings/monstera-albo.ts",
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

export function getRelatedListings(
  slug: string,
  { limit = 5 }: { limit?: number } = {},
): PlantListing[] {
  const source = getListingBySlug(slug);
  if (!source) return [];

  const curated = source.relatedSlugs ?? [];
  if (curated.length > 0) {
    const resolved: PlantListing[] = [];
    const seen = new Set<string>([slug]);
    for (const s of curated) {
      if (seen.has(s)) continue;
      const entry = getListingBySlug(s);
      if (!entry) continue;
      seen.add(s);
      resolved.push(entry);
      if (resolved.length >= limit) break;
    }
    return resolved;
  }

  return listings
    .filter(
      (l) =>
        l.identity.slug !== slug &&
        l.identity.genus === source.identity.genus,
    )
    .sort((a, b) => a.priceRange.min - b.priceRange.min)
    .slice(0, limit);
}
