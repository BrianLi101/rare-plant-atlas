// scripts/aggregate-history.ts
// Reads all history files and computes aggregate price summaries.
// Run with: npx tsx scripts/aggregate-history.ts

import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
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

  // Prefer available listings for current price range; fall back to all recent
  // if nothing is in stock so the page still shows a reference price.
  const available = recent.filter((e) => e.available);
  const currentBasis = available.length > 0 ? available : recent;
  const currentPrices = currentBasis.map((e) => e.price);
  const allPrices = all.map((e) => e.price);

  const sellersSeen = new Set(recent.map((e) => e.sellerId));

  return {
    slug: history.slug,
    currentMin: currentPrices.length ? Math.min(...currentPrices) : null,
    currentMax: currentPrices.length
      ? Math.max(...currentBasis.map((e) => e.priceHigh))
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
      growthStage: e.growthStage,
      date: e.date,
      available: e.available,
    })),
  };
}

export function runAggregation({
  historyDir = HISTORY_DIR,
  outputPath = OUTPUT_PATH,
  log = true,
}: {
  historyDir?: string;
  outputPath?: string;
  log?: boolean;
} = {}) {
  if (!fs.existsSync(historyDir)) {
    console.error("No history directory found. Run prices:snapshot first.");
    process.exit(1);
  }

  const files = fs.readdirSync(historyDir).filter((f) => f.endsWith(".json"));

  if (files.length === 0) {
    if (log) {
      console.log("No history files found. Run prices:snapshot first.");
    }
    // Write empty aggregate so the build doesn't break
    fs.writeFileSync(outputPath, JSON.stringify({}, null, 2));
    return;
  }

  const summaries: Record<string, PriceSummary> = {};

  for (const file of files) {
    const history: PlantPriceHistory = JSON.parse(
      fs.readFileSync(path.join(historyDir, file), "utf-8"),
    );
    summaries[history.slug] = summarizeHistory(history);
  }

  fs.writeFileSync(outputPath, JSON.stringify(summaries, null, 2));
  if (log) {
    console.log(`Aggregate written to ${outputPath}`);
    console.log(`Summarized ${files.length} plants`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runAggregation();
}
