import type { Seller } from "./types";

export const sellers: Seller[] = [
  {
    id: "nse-tropicals",
    name: "NSE Tropicals",
    platform: "woocommerce",
    wooDomain: "www.nsetropicals.com",
    url: "https://www.nsetropicals.com",
    tier: 1,
    notes:
      "WYSIWYG individual specimen listings. Each listing is a unique physical plant " +
      "with a 4-digit numeric prefix as an internal specimen ID. Multiple listings for " +
      "the same species are common and expected.",
  },
  {
    id: "rare-plant-fairy",
    name: "Rare Plant Fairy",
    platform: "shopify",
    shopifyDomain: "www.rareplantfairy.com",
    url: "https://www.rareplantfairy.com",
    tier: 1,
    notes:
      "Highly reputable, strong collector community trust. Wide selection of aroids and hoyas.",
  },
  // Ecuagenera US — massive catalog (2,500+ products) that doesn't specialize
  // in the rare aroids we track. Too much noise, slow to fetch. Re-add if needed.
  {
    id: "steves-leaves",
    name: "Steve's Leaves",
    platform: "shopify",
    shopifyDomain: "stevesleaves.com",
    url: "https://stevesleaves.com",
    tier: 1,
    notes:
      "Collector-trusted Texas grower. Strong in begonias, hoyas, and unusual aroids.",
  },
  {
    id: "carnivero",
    name: "Carnivero",
    platform: "shopify",
    shopifyDomain: "www.carnivero.com",
    url: "https://www.carnivero.com",
    tier: 1,
    notes:
      "Premium end of the market. Carries very rare stock. Pricing here signals the top of what serious collectors pay.",
  },
  {
    id: "rare-foliage-plant-co",
    name: "Rare Foliage Plant Co",
    platform: "etsy",
    etsyShopName: "RareFoliagePlantCo",
    url: "https://www.etsy.com/shop/RareFoliagePlantCo",
    tier: 1,
    notes:
      "Winter Garden, Florida. 11.8k sales, 4.9 rating. Aroids specialist " +
      "with strong cultivar specificity in listing titles.",
  },
  {
    id: "aroid-market",
    name: "Aroid Market",
    platform: "shopify",
    shopifyDomain: "aroidmarket.com",
    url: "https://aroidmarket.com",
    tier: 1,
    notes:
      "Large selection, competitive pricing, good for market-rate benchmarking across common-to-rare aroids.",
  },
];
