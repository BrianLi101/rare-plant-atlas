// scripts/fetch-etsy.ts
// Etsy shop fetch adapter using the Etsy Open API v3.
// Requires ETSY_API_KEY environment variable (free registration at etsy.com/developers).
// Only needs the API keystring — no OAuth required for reading public listings.

import { fetchWithRetry } from "./fetch-utils";
import type { RawListing, RawVariant } from "../data/prices/types";

const ETSY_API_BASE = "https://openapi.etsy.com/v3/application";
const PAGE_DELAY_MS = 500;
const LISTINGS_PER_PAGE = 100;

function getApiKey(): string {
  const key = process.env.ETSY_API_KEY;
  if (!key) {
    throw new Error(
      "ETSY_API_KEY environment variable is required.\n" +
        "Register a free app at https://www.etsy.com/developers to get one.",
    );
  }
  return key;
}

async function etsyFetch(path: string): Promise<any> {
  const url = `${ETSY_API_BASE}${path}`;
  const res = await fetch(url, {
    headers: {
      "x-api-key": getApiKey(),
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Etsy API ${res.status}: ${res.statusText} — ${body}`);
  }

  return res.json();
}

async function resolveShopId(shopName: string): Promise<number> {
  // The findAllActiveListingsByShop endpoint needs a numeric shop_id.
  // We can look it up via the shop name search endpoint.
  const data = await etsyFetch(`/shops?shop_name=${encodeURIComponent(shopName)}`);

  if (data.count === 0 || !data.results?.length) {
    throw new Error(`Etsy shop "${shopName}" not found`);
  }

  const shop = data.results[0];
  console.log(`  Resolved shop: ${shop.shop_name} (ID: ${shop.shop_id})`);
  return shop.shop_id;
}

export async function fetchEtsyShop(
  shopName: string,
  sellerId: string,
  sellerName: string,
  snapshotDate: string,
): Promise<RawListing[]> {
  const shopId = await resolveShopId(shopName);
  const allListings: RawListing[] = [];
  let offset = 0;
  let hasMore = true;

  while (hasMore) {
    console.log(`  Fetching listings (offset ${offset})...`);

    const data = await etsyFetch(
      `/shops/${shopId}/listings/active?limit=${LISTINGS_PER_PAGE}&offset=${offset}`,
    );

    const results = data.results ?? [];
    if (results.length === 0) {
      hasMore = false;
      break;
    }

    for (const listing of results) {
      // Etsy price is { amount: 2500, divisor: 100, currency_code: "USD" }
      const priceObj = listing.price;
      const price =
        priceObj && priceObj.amount && priceObj.divisor
          ? priceObj.amount / priceObj.divisor
          : 0;

      if (price <= 0) continue;

      const available = listing.quantity > 0 && listing.state === "active";
      const listingUrl = listing.url?.split("?")[0] ?? "";

      const variants: RawVariant[] = [
        {
          variantId: listing.listing_id,
          variantTitle: "Default Title",
          price: String(price),
          available,
        },
      ];

      allListings.push({
        sellerId,
        sellerName,
        productId: listing.listing_id,
        title: listing.title ?? "",
        handle: String(listing.listing_id),
        productUrl: listingUrl,
        variants,
        tags: listing.tags ?? [],
        snapshotDate,
      });
    }

    if (results.length < LISTINGS_PER_PAGE || offset + LISTINGS_PER_PAGE >= 12000) {
      hasMore = false;
    } else {
      offset += LISTINGS_PER_PAGE;
    }

    await new Promise((r) => setTimeout(r, PAGE_DELAY_MS));
  }

  return allListings;
}
