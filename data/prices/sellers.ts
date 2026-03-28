import type { Seller } from "./types";

export const sellers: Seller[] = [
  // NSE Tropicals uses WooCommerce, not Shopify — no /products.json endpoint.
  // Excluded from automated snapshots. Can be added if WooCommerce REST API
  // support is implemented in the future.
  {
    id: "rare-plant-fairy",
    name: "Rare Plant Fairy",
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
    shopifyDomain: "stevesleaves.com",
    url: "https://stevesleaves.com",
    tier: 1,
    notes:
      "Collector-trusted Texas grower. Strong in begonias, hoyas, and unusual aroids.",
  },
  {
    id: "carnivero",
    name: "Carnivero",
    shopifyDomain: "www.carnivero.com",
    url: "https://www.carnivero.com",
    tier: 1,
    notes:
      "Premium end of the market. Carries very rare stock. Pricing here signals the top of what serious collectors pay.",
  },
  {
    id: "aroid-market",
    name: "Aroid Market",
    shopifyDomain: "aroidmarket.com",
    url: "https://aroidmarket.com",
    tier: 1,
    notes:
      "Large selection, competitive pricing, good for market-rate benchmarking across common-to-rare aroids.",
  },
];
