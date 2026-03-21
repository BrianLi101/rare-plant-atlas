import type { PlantPriceRange } from "./types";

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function formatPlantPrice(amount: number, currency: PlantPriceRange["currency"]): string {
  if (currency === "USD") return usdFormatter.format(amount);
  return `${amount}`;
}

export function formatPlantPriceRangeForGlance(priceRange: PlantPriceRange): string {
  const min = formatPlantPrice(priceRange.min, priceRange.currency);
  const max = formatPlantPrice(priceRange.max, priceRange.currency);
  return `${min}-${max}`;
}
