import type { PlantListing } from "../types";

const IMG = "/plants/philodendron-spiritus-sancti";

export const philodendronSpiritusSancti: PlantListing = {
  identity: {
    id: "philodendron-spiritus-sancti",
    slug: "philodendron-spiritus-sancti",
    genus: "Philodendron",
    species: "spiritus-sancti",
    tradeName: "Philodendron Spiritus Sancti",
    aliases: [
      "spiritus sancti",
      "philodendron spiritus sancti",
      "spirit of the saint",
    ],
    matchPhrases: ["spiritus sancti", "philodendron"],
  },
  tagline:
    "The Holy Grail of Philodendrons — once nearly extinct, now accessible through tissue culture.",
  origin: "Espírito Santo, Brazil (critically endangered in the wild)",
  family: "Araceae",
  rarity: "Rare",
  priceRange: {
    currency: "USD",
    min: 50,
    max: 300,
    lastObserved: new Date("2026-03-29"),
    note: "Tissue culture has dramatically reduced prices from the $10,000+ era. Small TC plants now start around $50.",
  },
  images: {
    hero: `${IMG}/hero.jpg`,
  },
  colors: {
    primary: "#0f1a0e",
    accent: "#4a8c3f",
    gradient: ["#1a2618", "#0f1a0e"],
  },
  marketNote:
    "Once the most expensive houseplant in the world, with mature specimens selling for $10,000–$30,000+. Tissue culture labs (primarily in Thailand and Indonesia) have flooded the market since 2024, making small TC plants available for under $100. Mature specimens still command a premium, but the days of five-figure price tags are over for most buyers.",
  fullProfileStatus: "in-progress",
  tissueCultureStatus: "widespread",
  tissueCultureNote:
    "TC propagation has been the primary driver of accessibility. Wild populations in Espírito Santo, Brazil are critically endangered with fewer than a few hundred plants remaining. Nearly all plants in cultivation are TC-derived.",
  priceHistory:
    "Prices dropped ~95% between 2022 and 2026 as TC supply scaled up. A plant that once cost $10,000+ as a cutting is now $50–$300 for TC specimens.",
  availabilityNotes:
    "Widely available from online rare plant sellers and aroid specialists. TC plants are regularly stocked. Mature specimens are still uncommon and priced higher.",
  lastReviewed: new Date("2026-03-29"),

  faq: {
    categories: [
      {
        category: "Price & Value",
        items: [
          {
            question: "How much does Philodendron Spiritus Sancti cost?",
            answer:
              "Philodendron Spiritus Sancti currently ranges from about $40 to $300 from online sellers. Small TC plants start around $40, and mature specimens reach $250–$300. The lowest price we've tracked is $39.99. This is a staggering drop from the $10,000–$30,000+ prices that were standard before tissue culture scaled up.",
          },
          {
            question: "What is a fair price for Philodendron Spiritus Sancti?",
            answer:
              "For a small TC plant, $40–$130 is a fair price based on current listings. The market has fundamentally shifted — TC supply from Thai and Indonesian labs flooded the market starting in 2024, and prices dropped roughly 95%. Mature specimens still carry a premium ($250–$300), but the days of five-figure price tags are over.",
          },
          {
            question: "Why is Philodendron Spiritus Sancti so expensive?",
            answer:
              "It mostly isn't anymore — small plants start under $50. Spiritus Sancti was once the most expensive houseplant in the world because it is critically endangered in the wild (fewer than a few hundred plants remain in Espírito Santo, Brazil) and propagation was extremely limited. Tissue culture changed everything. If you're seeing high prices, you're likely looking at mature specimens or legacy listings that haven't adjusted.",
          },
        ],
      },
      {
        category: "Buying Guidance",
        items: [
          {
            question: "Where can I buy Philodendron Spiritus Sancti?",
            answer:
              "Widely available from online rare plant sellers and aroid specialists, including Rare Foliage Plant Co, Aroid Market, NSE Tropicals, and Carnivero. TC plants are regularly stocked. At the current price point ($40–$130), you can also find them on Etsy and Facebook Marketplace.",
          },
          {
            question: "Is Philodendron Spiritus Sancti available as tissue culture?",
            answer:
              "Yes — TC is widespread and is the primary source for this plant. Nearly all Spiritus Sancti in cultivation are TC-derived. Wild populations are critically endangered, so ethical sourcing means buying TC stock. Multiple labs in Thailand and Indonesia produce it at scale.",
          },
          {
            question: "Is a tissue culture Philodendron Spiritus Sancti worth buying?",
            answer:
              "Yes — and it's essentially the only ethical option. Unlike Monsteras, Philodendrons generally acclimate well from tissue culture and grow at a reasonable pace. TC Spiritus Sancti is a much better value proposition than TC Monsteras, which suffer from slow growth due to thin stems. The price-to-quality ratio is excellent right now.",
          },
          {
            question: "What's the cheapest way to get Philodendron Spiritus Sancti?",
            answer:
              "Small TC plants from online sellers start around $40. At this price level, you can also find them on Etsy or Facebook Marketplace from hobby growers. Since the plant has a distinctive leaf shape, identification risk from Marketplace sellers is lower than with some variegated plants.",
          },
        ],
      },
      {
        category: "Rarity",
        items: [
          {
            question: "Is Philodendron Spiritus Sancti rare?",
            answer:
              "In the wild, yes — it is critically endangered with fewer than a few hundred plants remaining in its native habitat in Brazil. In cultivation, it's now classified as rare but widely available thanks to tissue culture. Small TC plants are regularly in stock at multiple sellers for under $100.",
          },
          {
            question: "Is Philodendron Spiritus Sancti getting easier to find?",
            answer:
              "It's already easy to find. TC production is widespread, and multiple sellers regularly stock it. Prices dropped ~95% between 2022 and 2026 as supply scaled. At the current $40–$130 range, prices are unlikely to drop much further — once rare plants hit this floor, they stabilize.",
          },
        ],
      },
    ],
  },
};
