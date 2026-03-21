import type { PlantIdentity, PlantVariant } from "./types";

export function formatScientificName(identity: PlantIdentity): string {
  const genus = identity.genus.trim();
  const species = identity.species?.trim();
  const cultivar = identity.cultivar?.trim();

  if (species && cultivar) return `${genus} ${species} '${cultivar}'`;
  if (species) return `${genus} ${species}`;
  if (cultivar) return `${genus} '${cultivar}'`;
  return genus;
}

export function getPlantLabel(plant: PlantVariant): string {
  const label = plant.identity.label?.trim();
  if (label) return label;

  const tradeName = plant.identity.tradeName?.trim();
  const variant = plant.identity.variantLabel?.trim();
  if (tradeName && variant) return `${tradeName} ${variant}`;
  if (tradeName) return tradeName;

  const scientific = formatScientificName(plant.identity);
  if (variant) return `${scientific} ${variant}`;
  return scientific;
}

export function getPlantFullName(plant: PlantVariant): string {
  return (
    plant.identity.tradeName?.trim() ??
    plant.identity.label?.trim() ??
    formatScientificName(plant.identity)
  );
}

export function getPlantScientificName(plant: PlantVariant): string {
  return formatScientificName(plant.identity);
}

export function getPlantVariantLabel(plant: PlantVariant): string | null {
  return plant.identity.variantLabel ?? null;
}
