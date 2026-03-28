// scripts/aggregate-history.ts
// Reads all history files and computes aggregate price summaries.
// Run with: npx tsx scripts/aggregate-history.ts

import fs from "fs";
import path from "path";
import type { PlantPriceHistory, PriceSummary } from "../data/prices/types";

const HISTORY_DIR = path.join(process.cwd(), "data/prices/history");
const OUTPUT_PATH = path.join(process.cwd(), "data/prices/aggregate.json");

const CURRENT_WINDOW_DAYS = 30;

function daysAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split("T")[0];
}

function summarizeHistory(history: PlantPriceHistory): PriceSummary {
  const cutoff = daysAgo(CURRENT_WINDOW_DAYS);
  const recent = history.entries.filter((e) => e.date >= cutoff);
  const all = history.entries;

  const recentPrices = recent.map((e) => e.price);
  const allPrices = all.map((e) => e.price);

  const sellersSeen = new Set(recent.map((e) => e.sellerId));

  return {
    slug: history.slug,
    currentMin: recentPrices.length ? Math.min(...recentPrices) : null,
    currentMax: recentPrices.length
      ? Math.max(...recent.map((e) => e.priceHigh))
      : null,
    allTimeMin: allPrices.length ? Math.min(...allPrices) : null,
    allTimeMax: allPrices.length
      ? Math.max(...all.map((e) => e.priceHigh))
      : null,
    lastSeen: recent.length ? recent[recent.length - 1].date : null,
    sellerCount: sellersSeen.size,
    availableNow: recent.some((e) => e.available),
    recentListings: recent.map((e) => ({
      sellerId: e.sellerId,
      sellerName: e.sellerName,
      price: e.price,
      priceHigh: e.priceHigh,
      productUrl: e.productUrl,
      variantSummary: e.variantSummary,
      date: e.date,
      available: e.available,
    })),
  };
}

function run() {
  if (!fs.existsSync(HISTORY_DIR)) {
    console.error("No history directory found. Run prices:snapshot first.");
    process.exit(1);
  }

  const files = fs.readdirSync(HISTORY_DIR).filter((f) => f.endsWith(".json"));

  if (files.length === 0) {
    console.log("No history files found. Run prices:snapshot first.");
    // Write empty aggregate so the build doesn't break
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify({}, null, 2));
    return;
  }

  const summaries: Record<string, PriceSummary> = {};

  for (const file of files) {
    const history: PlantPriceHistory = JSON.parse(
      fs.readFileSync(path.join(HISTORY_DIR, file), "utf-8"),
    );
    summaries[history.slug] = summarizeHistory(history);
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(summaries, null, 2));
  console.log(`Aggregate written to ${OUTPUT_PATH}`);
  console.log(`Summarized ${files.length} plants`);
}

run();
