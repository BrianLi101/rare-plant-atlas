// scripts/fetch-nse.ts
// NSE Tropicals fetch adapter — WooCommerce Store API.
// NSE sells individual WYSIWYG specimens, each with a 3-4 digit ID prefix.

import { fetchWithRetry } from "./fetch-utils";
import type { RawListing } from "../data/prices/types";

const NSE_STORE_API = "https://www.nsetropicals.com/wp-json/wc/store/v1/products";
const PAGE_DELAY_MS = 1500;

// Matches "1817 " or "0659 " — 3 or 4 digits followed by a space
const SPECIMEN_ID_REGEX = /^(\d{3,4})\s+/;

function extractSpecimenId(title: string): {
  specimenId: string | null;
  cleanTitle: string;
} {
  const match = title.match(SPECIMEN_ID_REGEX);
  if (match) {
    return {
      specimenId: match[1],
      cleanTitle: title.replace(SPECIMEN_ID_REGEX, "").trim(),
    };
  }
  return { specimenId: null, cleanTitle: title.trim() };
}

export async function fetchNSEProducts(
  snapshotDate: string,
): Promise<RawListing[]> {
  const listings: RawListing[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const url = `${NSE_STORE_API}?per_page=100&page=${page}&status=publish`;
    console.log(`  Fetching page ${page}...`);

    const res = await fetchWithRetry(url);
    if (!res) break;

    const products = await res.json();

    if (!Array.isArray(products) || products.length === 0) {
      hasMore = false;
      break;
    }

    for (const product of products) {
      const { specimenId, cleanTitle } = extractSpecimenId(
        product.name ?? "",
      );

      // Price comes from Store API in cents (e.g., "15900" = $159.00)
      const priceRaw = product.prices?.price;
      const priceStr = priceRaw
        ? String(parseInt(priceRaw, 10) / 100)
        : "0";

      listings.push({
        sellerId: "nse-tropicals",
        sellerName: "NSE Tropicals",
        productId: product.id,
        title: cleanTitle,
        handle: product.slug ?? "",
        productUrl: product.permalink ?? "",
        variants: [
          {
            variantId: product.id,
            variantTitle: specimenId
              ? `Specimen #${specimenId}`
              : "Single specimen",
            price: priceStr,
            available: product.is_in_stock === true,
          },
        ],
        tags: product.categories?.map((c: any) => c.name) ?? [],
        snapshotDate,
      });
    }

    if (products.length < 100) hasMore = false;
    else page++;

    await new Promise((r) => setTimeout(r, PAGE_DELAY_MS));
  }

  return listings;
}
