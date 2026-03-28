// scripts/match-listings.ts
// Keyword-based slug matcher — no API calls required.
// Matches Shopify listing titles to known plant slugs using fuzzy
// word-order-independent matching against plant identity data.

import { plants } from "../data/plants";
import type { RawListing, NormalizedListing } from "../data/prices/types";

// ---------------------------------------------------------------------------
// Build match rules from plant registry
// ---------------------------------------------------------------------------

interface MatchRule {
  slug: string;
  /** Tokenized words that must ALL appear in the listing title (order-independent) */
  words: string[];
  /** Substrings that must appear verbatim in the lowercased title */
  phrases: string[];
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[''""]/g, "")
    .split(/[\s\-_/|,·]+/)
    .map((w) => w.replace(/[^a-z0-9]/g, ""))
    .filter((w) => w.length > 1);
}

function buildMatchRules(): MatchRule[] {
  const rules: MatchRule[] = [];

  for (const plant of plants) {
    const id = plant.identity;
    const slug = id.slug;
    const hasVariant = !!id.variantLabel;
    const variantWords = hasVariant ? tokenize(id.variantLabel!) : [];
    // matchPhrases from the plant identity — author-controlled specificity
    const requiredPhrases = (id.matchPhrases ?? []).map((p) => p.toLowerCase());

    // Trade name + variant words + required phrases
    if (id.tradeName) {
      const words = tokenize(id.tradeName);
      if (words.length >= 2) {
        if (hasVariant) {
          rules.push({
            slug,
            words: [...words, ...variantWords],
            phrases: requiredPhrases,
          });
        } else {
          rules.push({ slug, words, phrases: requiredPhrases });
        }
      }
    }

    // Aliases — match as phrases (substrings) for maximum specificity
    if (id.aliases) {
      for (const alias of id.aliases) {
        const phrase = alias.toLowerCase().trim();
        if (phrase.length >= 4) {
          rules.push({ slug, words: [], phrases: [phrase, ...requiredPhrases] });
        }
      }
    }

    // Genus + species + variant words + required phrases
    if (id.genus && id.species && hasVariant) {
      const words = tokenize(`${id.genus} ${id.species}`);
      rules.push({
        slug,
        words: [...words, ...variantWords],
        phrases: requiredPhrases,
      });
    }

    // Genus + cultivar — specific enough on its own
    if (id.genus && id.cultivar) {
      const words = tokenize(`${id.genus} ${id.cultivar}`);
      rules.push({ slug, words, phrases: requiredPhrases });
    }
  }

  // Sort by total specificity descending
  rules.sort(
    (a, b) =>
      b.words.length + b.phrases.length - (a.words.length + a.phrases.length),
  );

  // Deduplicate
  const seen = new Set<string>();
  return rules.filter((r) => {
    const key = `${r.slug}:${r.words.slice().sort().join(",")}|${r.phrases.slice().sort().join(",")}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// ---------------------------------------------------------------------------
// Match a single listing
// ---------------------------------------------------------------------------

const matchRules = buildMatchRules();

// Products with these words in the title are merchandise, not plants
const BLOCKLIST = new Set([
  "tumbler", "mug", "shirt", "tshirt", "hoodie", "sticker",
  "poster", "print", "candle", "pin", "enamel", "keychain",
  "tote", "bag", "hat", "cap", "book", "seed", "seeds",
]);

interface MatchResult {
  slug: string | null;
  confidence: "high" | "medium" | "low";
}

export function matchListingToSlug(listing: RawListing): MatchResult {
  const titleTokens = tokenize(listing.title);

  // Skip merchandise
  if (titleTokens.some((w) => BLOCKLIST.has(w))) {
    return { slug: null, confidence: "low" };
  }

  const titleWords = new Set(titleTokens);
  const titleLower = listing.title.toLowerCase().replace(/[''""*]/g, "");

  for (const rule of matchRules) {
    const wordsMatch =
      rule.words.length === 0 || rule.words.every((w) => titleWords.has(w));
    const phrasesMatch =
      rule.phrases.length === 0 ||
      rule.phrases.every((p) => titleLower.includes(p));

    if (wordsMatch && phrasesMatch) {
      return { slug: rule.slug, confidence: "high" };
    }
  }

  return { slug: null, confidence: "low" };
}

// ---------------------------------------------------------------------------
// Normalize listings
// ---------------------------------------------------------------------------

export function normalizeListings(
  listings: RawListing[],
): NormalizedListing[] {
  const results: NormalizedListing[] = [];

  for (const listing of listings) {
    const match = matchListingToSlug(listing);
    if (!match.slug) continue;

    const availableVariants = listing.variants.filter((v) => v.available);
    const allVariants =
      availableVariants.length > 0 ? availableVariants : listing.variants;
    const prices = allVariants
      .map((v) => parseFloat(v.price))
      .filter((p) => p > 0);
    if (prices.length === 0) continue;

    const variantLabels = allVariants
      .filter((v) => parseFloat(v.price) > 0)
      .map((v) => v.variantTitle)
      .filter((t) => t !== "Default Title")
      .join(" / ");

    results.push({
      slug: match.slug,
      sellerId: listing.sellerId,
      sellerName: listing.sellerName,
      productUrl: listing.productUrl,
      price: Math.min(...prices),
      priceHigh: Math.max(...prices),
      available: availableVariants.length > 0,
      variantSummary: variantLabels || "",
      snapshotDate: listing.snapshotDate,
      confidence: match.confidence,
    });
  }

  return results;
}
