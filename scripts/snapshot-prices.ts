// scripts/snapshot-prices.ts
// Fetches product data from curated sellers (Shopify + WooCommerce + Etsy),
// matches to plant slugs via keyword matching, then prompts the user
// to confirm before writing.
// Run with: npx tsx scripts/snapshot-prices.ts

import fs from "fs";
import path from "path";
import readline from "readline";
import { sellers } from "../data/prices/sellers";
import { plants } from "../data/plants";
import { normalizeListings } from "./match-listings";
import { fetchWithRetry } from "./fetch-utils";
import { fetchNSEProducts } from "./fetch-nse";
import { fetchEtsyShop } from "./fetch-etsy";
import type { RawListing, DailySnapshot, NormalizedListing } from "../data/prices/types";
import { SNAPSHOT_VERSION } from "../data/prices/types";

const TODAY = new Date().toISOString().split("T")[0];
const SNAPSHOTS_DIR = path.join(process.cwd(), "data/prices/snapshots");
const HISTORY_DIR = path.join(process.cwd(), "data/prices/history");
const AGGREGATE_PATH = path.join(process.cwd(), "data/prices/aggregate.json");

fs.mkdirSync(SNAPSHOTS_DIR, { recursive: true });
fs.mkdirSync(HISTORY_DIR, { recursive: true });

// ---------------------------------------------------------------------------
// Interactive prompts
// ---------------------------------------------------------------------------

function ask(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim().toLowerCase());
    });
  });
}

// ---------------------------------------------------------------------------
// Shopify fetcher
// ---------------------------------------------------------------------------

const PAGE_DELAY_MS = 1500;

async function fetchShopifyProducts(domain: string): Promise<any[]> {
  const products: any[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const url = `https://${domain}/products.json?limit=250&page=${page}`;
    console.log(`  Fetching page ${page}...`);

    const res = await fetchWithRetry(url);
    if (!res) break;

    const data = await res.json();

    if (!data.products || data.products.length === 0) {
      hasMore = false;
    } else {
      products.push(...data.products);
      if (data.products.length < 250) hasMore = false;
      page++;
    }

    await new Promise((r) => setTimeout(r, PAGE_DELAY_MS));
  }

  return products;
}

function shopifyProductToRawListing(
  product: any,
  seller: (typeof sellers)[0],
): RawListing {
  return {
    sellerId: seller.id,
    sellerName: seller.name,
    productId: product.id,
    title: product.title,
    handle: product.handle,
    productUrl: `https://${seller.shopifyDomain}/products/${product.handle}`,
    variants: product.variants.map((v: any) => ({
      variantId: v.id,
      variantTitle: v.title,
      price: v.price,
      available: v.available,
    })),
    tags: Array.isArray(product.tags)
      ? product.tags
      : typeof product.tags === "string"
        ? product.tags.split(", ")
        : [],
    snapshotDate: TODAY,
  };
}

// ---------------------------------------------------------------------------
// Fetch all sellers
// ---------------------------------------------------------------------------

async function fetchAllSellers(): Promise<RawListing[]> {
  const allRawListings: RawListing[] = [];

  for (const seller of sellers) {
    if (seller.platform === "woocommerce" && seller.id === "nse-tropicals") {
      console.log(`Fetching ${seller.name} (WooCommerce Store API)`);
      try {
        const listings = await fetchNSEProducts(TODAY);
        console.log(`  ${listings.length} specimen listings\n`);
        allRawListings.push(...listings);
      } catch (e) {
        console.error(`  Error fetching ${seller.name}:`, e);
      }
    } else if (seller.platform === "etsy" && seller.etsyShopName) {
      if (!process.env.ETSY_API_KEY) {
        console.log(`Skipping ${seller.name} (no ETSY_API_KEY set)\n`);
      } else {
        console.log(`Fetching ${seller.name} (Etsy API)`);
        try {
          const listings = await fetchEtsyShop(
            seller.etsyShopName,
            seller.id,
            seller.name,
            TODAY,
          );
          console.log(`  ${listings.length} listings\n`);
          allRawListings.push(...listings);
        } catch (e) {
          console.error(`  Error fetching ${seller.name}:`, e);
        }
      }
    } else if (seller.platform === "shopify" && seller.shopifyDomain) {
      console.log(`Fetching ${seller.name} (${seller.shopifyDomain})`);
      try {
        const products = await fetchShopifyProducts(seller.shopifyDomain);
        console.log(`  ${products.length} products\n`);
        const listings = products.map((p) =>
          shopifyProductToRawListing(p, seller),
        );
        allRawListings.push(...listings);
      } catch (e) {
        console.error(`  Error fetching ${seller.name}:`, e);
      }
    }
  }

  return allRawListings;
}

// ---------------------------------------------------------------------------
// Display helpers
// ---------------------------------------------------------------------------

function formatPrice(n: number): string {
  return `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

function printProposedPrices(
  slug: string,
  listings: NormalizedListing[],
): void {
  console.log(`\n  ┌─ ${slug}`);
  for (const l of listings) {
    const price =
      l.price === l.priceHigh
        ? formatPrice(l.price)
        : `${formatPrice(l.price)}–${formatPrice(l.priceHigh)}`;
    const stock = l.available ? "In Stock" : "Sold Out";
    const title = l.title.length > 40 ? l.title.substring(0, 37) + "..." : l.title;
    console.log(
      `  │  ${l.sellerName.padEnd(20)} ${price.padEnd(14)} ${stock.padEnd(10)} ${title}`,
    );
  }
  console.log(`  └─`);
}

// ---------------------------------------------------------------------------
// Aggregation
// ---------------------------------------------------------------------------

function runAggregation(): void {
  const files = fs.existsSync(HISTORY_DIR)
    ? fs.readdirSync(HISTORY_DIR).filter((f) => f.endsWith(".json"))
    : [];

  if (files.length === 0) {
    fs.writeFileSync(AGGREGATE_PATH, JSON.stringify({}, null, 2));
    return;
  }

  const CURRENT_WINDOW_DAYS = 30;
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - CURRENT_WINDOW_DAYS);
  const cutoffStr = cutoff.toISOString().split("T")[0];

  const summaries: Record<string, any> = {};

  for (const file of files) {
    const history = JSON.parse(
      fs.readFileSync(path.join(HISTORY_DIR, file), "utf-8"),
    );
    const recent = history.entries.filter((e: any) => e.date >= cutoffStr);
    const all = history.entries;

    // Prefer available listings for current price range; fall back to all recent
    // if nothing is in stock so the page still shows a reference price.
    const available = recent.filter((e: any) => e.available);
    const currentBasis = available.length > 0 ? available : recent;
    const currentPrices = currentBasis.map((e: any) => e.price);
    const allPrices = all.map((e: any) => e.price);
    const sellersSeen = new Set(recent.map((e: any) => e.sellerId));

    summaries[history.slug] = {
      slug: history.slug,
      currentMin: currentPrices.length ? Math.min(...currentPrices) : null,
      currentMax: currentPrices.length
        ? Math.max(...currentBasis.map((e: any) => e.priceHigh))
        : null,
      allTimeMin: allPrices.length ? Math.min(...allPrices) : null,
      allTimeMax: allPrices.length
        ? Math.max(...all.map((e: any) => e.priceHigh))
        : null,
      lastSeen: recent.length ? recent[recent.length - 1].date : null,
      sellerCount: sellersSeen.size,
      availableNow: recent.some((e: any) => e.available),
      recentListings: recent.map((e: any) => ({
        sellerId: e.sellerId,
        sellerName: e.sellerName,
        price: e.price,
        priceHigh: e.priceHigh,
        productUrl: e.productUrl,
        growthStage: e.growthStage,
        date: e.date,
        available: e.available,
      })),
    };
  }

  fs.writeFileSync(AGGREGATE_PATH, JSON.stringify(summaries, null, 2));
  console.log(`\nAggregate updated: ${Object.keys(summaries).length} plants`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function run() {
  console.log(`\nRare Plant Atlas — Price Snapshot`);
  console.log(`Date: ${TODAY}\n`);

  // ── Step 0: Offer to load a previous snapshot ────────────────────────────

  const previousSnapshots = fs
    .readdirSync(SNAPSHOTS_DIR)
    .filter((f) => f.endsWith(".json") && f !== `${TODAY}.json`)
    .map((f) => f.replace(".json", ""))
    .sort()
    .reverse();

  let snapshotDate = TODAY;
  let allRawListings: RawListing[] | null = null;

  if (previousSnapshots.length > 0) {
    console.log(`Previous snapshots available:`);
    previousSnapshots.forEach((date, i) => {
      console.log(`  ${i + 1}. ${date}`);
    });
    const choice = await ask(
      `\nUse a previous snapshot? (enter number/date, or press Enter for today) `,
    );

    if (choice !== "") {
      // Try as a number first
      const num = parseInt(choice, 10);
      let pickedDate: string | undefined;
      if (!isNaN(num) && num >= 1 && num <= previousSnapshots.length) {
        pickedDate = previousSnapshots[num - 1];
      } else {
        // Try as a date string (exact or partial match)
        pickedDate = previousSnapshots.find((d) => d.includes(choice));
      }

      if (pickedDate) {
        const prevPath = path.join(SNAPSHOTS_DIR, `${pickedDate}.json`);
        const prevSnapshot: DailySnapshot = JSON.parse(
          fs.readFileSync(prevPath, "utf-8"),
        );
        console.log(
          `\nLoaded snapshot from ${pickedDate} (${prevSnapshot.listings.length} listings, v${prevSnapshot.version ?? 1})`,
        );
        snapshotDate = pickedDate;
        allRawListings = prevSnapshot.listings;
      } else {
        console.log(`No snapshot matching "${choice}" found. Using today.\n`);
      }
    }
  }

  // ── Step 1: Check for existing snapshot (today) ─────────────────────────

  if (allRawListings === null) {
    const snapshotPath = path.join(SNAPSHOTS_DIR, `${TODAY}.json`);

    if (fs.existsSync(snapshotPath)) {
      const existing: DailySnapshot = JSON.parse(
        fs.readFileSync(snapshotPath, "utf-8"),
      );
      console.log(`Snapshot for ${TODAY} already exists (${existing.listings.length} listings, v${existing.version ?? 1})`);
      const refetch = await ask("Re-fetch fresh data? (y/n) ");

      if (refetch === "y" || refetch === "yes") {
        console.log("");
        allRawListings = await fetchAllSellers();
        const rawSnapshot: DailySnapshot = {
          version: SNAPSHOT_VERSION,
          date: TODAY,
          listings: allRawListings,
        };
        fs.writeFileSync(snapshotPath, JSON.stringify(rawSnapshot, null, 2));
        console.log(`Raw snapshot saved (${allRawListings.length} listings total)`);
      } else {
        console.log("Using existing snapshot data.\n");
        allRawListings = existing.listings;
      }
    } else {
      allRawListings = await fetchAllSellers();
      const rawSnapshot: DailySnapshot = {
        version: SNAPSHOT_VERSION,
        date: TODAY,
        listings: allRawListings,
      };
      fs.writeFileSync(snapshotPath, JSON.stringify(rawSnapshot, null, 2));
      console.log(`Raw snapshot saved (${allRawListings.length} listings total)`);
    }
  }

  // ── Step 2: Match and group by slug ──────────────────────────────────────

  const normalized = normalizeListings(allRawListings);
  console.log(`\nMatched: ${normalized.length} listings to known plants`);

  if (normalized.length === 0) {
    console.log("No matches found. Nothing to update.");
    return;
  }

  const bySlug = new Map<string, NormalizedListing[]>();
  for (const listing of normalized) {
    if (!bySlug.has(listing.slug)) bySlug.set(listing.slug, []);
    bySlug.get(listing.slug)!.push(listing);
  }

  // ── Step 3: Ask which plants to update ───────────────────────────────────

  const matchedSlugs = Array.from(bySlug.keys());
  console.log(`\nMatched plants:`);
  matchedSlugs.forEach((slug, i) => {
    const count = bySlug.get(slug)!.length;
    console.log(`  ${i + 1}. ${slug} (${count} listing${count !== 1 ? "s" : ""})`);
  });

  const plantChoice = await ask(
    `\nUpdate which plant? (all / number / slug / q to quit) `,
  );

  if (plantChoice === "q") {
    console.log("Aborted.");
    return;
  }

  let selectedSlugs: string[];

  if (plantChoice === "all" || plantChoice === "" || plantChoice === "a") {
    selectedSlugs = matchedSlugs;
  } else {
    // Try as a number first
    const num = parseInt(plantChoice, 10);
    if (!isNaN(num) && num >= 1 && num <= matchedSlugs.length) {
      selectedSlugs = [matchedSlugs[num - 1]];
    } else {
      // Try as a slug (partial match)
      const match = matchedSlugs.find((s) => s.includes(plantChoice));
      if (match) {
        selectedSlugs = [match];
      } else {
        console.log(`No plant matching "${plantChoice}" found.`);
        return;
      }
    }
  }

  // ── Step 4: Show proposed prices and confirm per plant ───────────────────

  console.log(`\n${"=".repeat(60)}`);
  console.log(`  PROPOSED PRICE UPDATES`);
  console.log(`${"=".repeat(60)}`);

  let confirmedCount = 0;

  for (const slug of selectedSlugs) {
    const listings = bySlug.get(slug)!;
    printProposedPrices(slug, listings);

    const answer = await ask(
      `  Add ${listings.length} price(s) for ${slug}? (y/n/q) `,
    );

    if (answer === "q") {
      console.log("\nAborted. No further changes written.");
      break;
    }

    if (answer !== "y" && answer !== "yes") {
      console.log("  Skipped.");
      continue;
    }

    // Write to history file
    const historyPath = path.join(HISTORY_DIR, `${slug}.json`);
    let history: any = { slug, lastUpdated: TODAY, entries: [] };

    if (fs.existsSync(historyPath)) {
      history = JSON.parse(fs.readFileSync(historyPath, "utf-8"));
    }

    history.entries = history.entries.filter((e: any) => e.date !== snapshotDate);
    history.entries.push(
      ...listings.map((l) => ({
        date: l.snapshotDate,
        sellerId: l.sellerId,
        sellerName: l.sellerName,
        title: l.title,
        productUrl: l.productUrl,
        price: l.price,
        priceHigh: l.priceHigh,
        available: l.available,
        growthStage: l.growthStage,
        confidence: l.confidence,
      })),
    );
    history.lastUpdated = TODAY;
    history.entries.sort((a: any, b: any) => a.date.localeCompare(b.date));

    fs.writeFileSync(historyPath, JSON.stringify(history, null, 2));
    console.log(`  Written to ${historyPath}`);
    confirmedCount++;
  }

  if (confirmedCount > 0) {
    runAggregation();
    console.log(`\nDone. ${confirmedCount} plant(s) updated.`);
  } else {
    console.log("\nNo changes confirmed.");
  }
}

run().catch(console.error);
