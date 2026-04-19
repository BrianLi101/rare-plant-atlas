import type { PlantListing } from "../types";

const IMG = "/plants/monstera-white-monster";

export const monsteraWhiteMonster: PlantListing = {
  identity: {
    id: "monstera-white-monster",
    slug: "monstera-white-monster",
    genus: "Monstera",
    species: "deliciosa",
    cultivar: "White Monster",
    tradeName: "Monstera White Monster",
    aliases: ["white monster monstera"],
    matchPhrases: ["white monster"],
    mustExcludePhrases: ["mint", "mint large form", "siam"],
  },
  tagline:
    "A high-contrast albo sport with dramatic white variegation and bold fenestration.",
  origin: "Thailand (tissue culture sport)",
  family: "Araceae",
  rarity: "Rare",
  priceRange: {
    currency: "USD",
    min: 150,
    max: 1200,
    lastObserved: new Date("2026-03-28"),
    note: "Prices depend heavily on variegation coverage and stability. Half-moon and full-white leaves command premiums, though full-white sections lack chlorophyll and may brown over time.",
  },
  images: {
    hero: `${IMG}/hero.jpg`,
  },
  colors: {
    primary: "#141a14",
    accent: "#f0ece4",
    gradient: ["#161c16", "#0e120e"],
  },
  marketNote:
    "A Monstera deliciosa sport prized for its large, dramatic white sectors — often more extensive than standard Albo Borsigiana. Originating from Thai TC labs, White Monster tends to produce bolder variegation but with less predictability. Half-moon leaves are highly sought after. Closely related to other albo-type sports but distinguished by its larger growth habit and more aggressive white coverage.",
  fullProfileStatus: "planned",
  tissueCultureStatus: "limited",
  tissueCultureNote:
    "Produced via tissue culture in Thailand. Supply has increased but remains limited relative to demand. Reversion to all-green growth is a known risk — buyers should look for specimens with consistent variegation across multiple leaves.",
  priceHistory:
    "Gained traction in the Western collector market around 2023–2024. Prices initially exceeded $500 for small plants. As TC supply has expanded, prices have settled into the $150–$1,200 range depending on quality.",
  availabilityNotes:
    "Available from online rare plant sellers and occasional local plant shop drops. High-quality specimens sell out fast. Check for reversion history and request recent photos before purchasing.",
  lastReviewed: new Date("2026-03-28"),

  faq: {
    categories: [
      {
        category: "Price & Value",
        items: [
          {
            question: "How much does Monstera White Monster cost?",
            answer:
              "Monstera White Monster currently ranges from about $30 to $1,950 from online sellers. Small TC plants start around $30, while mature specimens with dramatic half-moon or high-coverage variegation can reach $500–$1,950. The lowest price we've tracked is $29.99.",
          },
          {
            question: "What is a fair price for Monstera White Monster?",
            answer:
              "For a small plant, $30–$100 is a fair price based on current listings. The market has expanded significantly as TC supply increased. Mature specimens and those with particularly dramatic variegation patterns (half-moon, high white coverage) command $500+, but entry-level plants are very accessible.",
          },
          {
            question: "Why is Monstera White Monster so expensive?",
            answer:
              "At the low end, it isn't — small plants start around $30. The expensive specimens ($500+) are priced for their variegation quality. White Monster produces bolder white sectors than standard Albo but with less predictability — half-moon leaves and consistent high-coverage variegation are uncommon and highly sought after. Full-white sections lack chlorophyll and may brown over time, so stable sectoral patterns are most valuable.",
          },
        ],
      },
      {
        category: "Buying Guidance",
        items: [
          {
            question: "Where can I buy Monstera White Monster?",
            answer:
              "Available from online rare plant sellers including Carnivero, Rare Plant Fairy, and Rare Foliage Plant Co. At the low end ($30–$50), it's also findable on Etsy and Facebook Marketplace — local hobby growers often sell for 30–50% less than online retailers, though plants from Marketplace sellers without established provenance carry identification risk.",
          },
          {
            question: "Is Monstera White Monster available as tissue culture?",
            answer:
              "Yes — White Monster is produced via tissue culture in Thailand. Supply has increased but remains limited relative to demand. Reversion to all-green growth is a known risk, so look for specimens showing consistent variegation across multiple leaves.",
          },
          {
            question: "Is a tissue culture Monstera White Monster worth buying?",
            answer:
              "TC is the cheapest entry point ($30–$55 for small plants), but keep in mind that Monsteras from tissue culture grow slowly due to thin stems. A small TC White Monster will take a long time to produce the large, dramatically variegated leaves the plant is known for. If you want the full visual impact sooner, an established plant is worth the premium. TC also carries higher reversion risk.",
          },
          {
            question: "What's the cheapest way to get Monstera White Monster?",
            answer:
              "Small TC plants from online sellers start around $30. At this price point, you can also find them on Etsy or Facebook Marketplace from hobby growers. Be cautious with Marketplace purchases for any \"mint\" variegated Monstera without clear lineage — plants that are hard to visually verify without established provenance are risky.",
          },
        ],
      },
      {
        category: "Rarity",
        items: [
          {
            question: "Is Monstera White Monster rare?",
            answer:
              "It's classified as rare but becoming more accessible. Tissue culture production in Thailand has expanded supply, and small plants are now available for under $50. High-quality mature specimens with stable, dramatic variegation are still uncommon and priced accordingly.",
          },
          {
            question: "Is Monstera White Monster getting easier to find?",
            answer:
              "Yes. TC supply has steadily increased, driving small-plant prices down to the $30–$50 range. At this level, prices are unlikely to drop much further — once rare plants hit this floor, they stabilize. Expect continued availability improvements as labs scale production.",
          },
        ],
      },
    ],
  },
};
