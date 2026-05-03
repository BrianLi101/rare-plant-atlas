import type { PlantListing } from "../types";

const IMG = "/plants/anthurium-carlablackiae";

export const anthuriumCarlablackiae: PlantListing = {
  identity: {
    id: "anthurium-carlablackiae",
    slug: "anthurium-carlablackiae",
    genus: "Anthurium",
    species: "carlablackiae",
    tradeName: "Anthurium carlablackiae",
    aliases: ["anthurium carlablackiae"],
    matchPhrases: ["anthurium", "carlablackiae"],
    mustExcludePhrases: [
      " x ",
      " by ",
      "docblock",
      "papillilaminum",
      "portillae",
      "dressleri",
      "ace of spades",
      "king of spades",
      "bvep",
      "antolakii",
      "kunayalense",
      "delta force",
      "wuhoo",
      "debilis",
      "luxurians",
      "besseae",
      "forgetii",
      "crystallinum",
      "magnificum",
      "red crystal",
      "golden sunrise",
      "blister",
      "variegated",
    ],
  },
  tagline:
    "Carla Black's Puerto Obaldia discovery, prized for near-black velvet leaves and bright silver veins.",
  origin: "Panama; species material and cultivated seedlings in specialist collections",
  family: "Araceae",
  rarity: "Rare",
  priceRange: {
    currency: "USD",
    min: 75,
    max: 255,
    lastObserved: new Date("2026-04-25"),
    note:
      "Range is based only on listings that read as pure Anthurium carlablackiae. Hybrid titles containing standalone x, multiplication-sign crosses, breeder-by phrasing, or common hybrid parents are excluded.",
  },
  images: {
    hero: `${IMG}/hero.jpg`,
  },
  colors: {
    primary: "#111714",
    accent: "#8fb79b",
    gradient: ["#19241f", "#0e1411"],
  },
  marketNote:
    "Carlablackiae is heavily used in Anthurium breeding, so the visible market is noisier than the species market. Stored seller snapshots show far more carlablackiae hybrids than pure-species listings; this page intentionally filters out hybrid phrases so the price guide reflects the species rather than every cross that includes it.",
  fullProfileStatus: "planned",
  seoDescription:
    "Anthurium carlablackiae price guide filtered for pure-species listings, excluding hybrid titles with x, by, or common hybrid parent terms.",
  quickAnswer:
    "Anthurium carlablackiae currently tracks around $75-$255 USD in stored seller snapshots when hybrid listings are excluded. Because the species is commonly crossed into other Anthuriums, titles containing standalone x, multiplication-sign crosses, breeder-by phrasing, or known hybrid parent terms are filtered out of the price history.",
  lastReviewed: new Date("2026-04-25"),
  priceHistory:
    "Stored snapshots from March 28 through April 25, 2026 show a narrow pure-species set from NSE Tropicals, Carnivero, and Rare Foliage Plant Co. Most carlablackiae mentions in those snapshots were hybrids, especially Papillilaminum, DocBlock, Portillae, Dressleri, and Ace of Spades crosses, and are intentionally excluded from this page.",
  tissueCultureInfo: {
    status: "unknown",
    note:
      "Tissue culture status is unclear from the stored 2026 seller snapshots. No explicit TC listings were tracked, so current pricing should be read as nursery or collector-grown plant material unless a seller clearly states otherwise.",
    priceRange: null,
  },
  availabilityNotes:
    "Pure Anthurium carlablackiae appears sporadically from specialty sellers such as NSE Tropicals, Carnivero, and Rare Foliage Plant Co. Read titles carefully: most listings that include carlablackiae are hybrids, not pure species plants.",
  relatedSlugs: [
    "anthurium-delta-force",
    "philodendron-spiritus-sancti",
    "philodendron-billietiae-variegated",
  ],
  faq: {
    categories: [
      {
        category: "Price & Value",
        items: [
          {
            question: "How much does Anthurium carlablackiae cost?",
            answer:
              "Stored 2026 seller snapshots show pure Anthurium carlablackiae listings from about $75 to $255. The low end came from small plants, while higher prices reflected larger or more established exact plants.",
          },
          {
            question: "What is a fair price for Anthurium carlablackiae?",
            answer:
              "A fair current price is roughly $75-$100 for a small pure-species plant and around $200-$255 for larger nursery stock. Prices above that should come with clear plant size, provenance, and exact-plant photos.",
          },
          {
            question: "Why do Anthurium carlablackiae prices look inconsistent?",
            answer:
              "The species is frequently used in breeding, so search results include many hybrids. A carlablackiae cross is not the same market as pure Anthurium carlablackiae, and mixing those titles together can make the price range look much wider than it really is.",
          },
        ],
      },
      {
        category: "Buying Guidance",
        items: [
          {
            question: "How do I avoid buying a carlablackiae hybrid by mistake?",
            answer:
              "Avoid listings with standalone x, multiplication-sign crosses, or breeder phrasing such as by DocBlock. Also watch for hybrid parent names like papillilaminum, portillae, dressleri, Ace of Spades, BVEP, or crystallinum in the title.",
          },
          {
            question: "Where can I buy Anthurium carlablackiae?",
            answer:
              "The stored snapshots show pure-species listings from specialty sellers including NSE Tropicals, Carnivero, and Rare Foliage Plant Co. Availability is sporadic, so exact-stock pages and seller restocks matter more than broad marketplace searches.",
          },
          {
            question: "Is Anthurium carlablackiae available as tissue culture?",
            answer:
              "It is unclear. No explicit tissue-culture carlablackiae listings appear in the stored 2026 seller snapshots, so this page does not treat it as a confirmed TC plant.",
          },
        ],
      },
      {
        category: "Rarity",
        items: [
          {
            question: "Is Anthurium carlablackiae rare?",
            answer:
              "Yes. It is listed here as rare because pure-species plants appear much less often than hybrids using carlablackiae as a parent.",
          },
          {
            question: "Is Anthurium carlablackiae getting easier to find?",
            answer:
              "The pure species is still sporadic in the tracked seller data. Hybrids are easy to find, but that does not mean the species market has broadly opened up.",
          },
        ],
      },
    ],
  },
};
