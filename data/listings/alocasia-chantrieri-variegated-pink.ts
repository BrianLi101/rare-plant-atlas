import type { PlantListing } from "../types";

const IMG = "/plants/alocasia-chantrieri-variegated-pink";

export const alocasiaChantrierVariegatedPink: PlantListing = {
  identity: {
    id: "alocasia-chantrieri-variegated-pink",
    slug: "alocasia-chantrieri-variegated-pink",
    genus: "Alocasia",
    species: "chantrieri",
    tradeName: "Alocasia Chantrieri",
    variantLabel: "Variegated Pink",
    aliases: ["pink chantrieri", "alocasia chantrieri pink"],
    matchPhrases: ["chantrieri"],
  },
  tagline:
    "A compact, sculptural Alocasia with pink variegation on deeply ridged leaves.",
  origin: "Southeast Asia (tissue culture sport)",
  family: "Araceae",
  rarity: "Ultra-Rare",
  priceRange: {
    currency: "USD",
    min: 300,
    max: 2000,
    lastObserved: new Date("2026-03-28"),
    note: "TC availability is increasing but still limited to specialty sellers. Prices vary significantly by variegation quality.",
  },
  images: {
    hero: `${IMG}/hero.jpg`,
  },
  colors: {
    primary: "#0e110e",
    accent: "#c87fa0",
    gradient: ["#1a1418", "#141014"],
  },
  marketNote:
    "A pink variegated form of Alocasia chantrieri that emerged from tissue culture labs in Southeast Asia. The compact, deeply veined foliage takes on pink and cream sectors. Still relatively uncommon in the US market, with most stock coming through Thai importers.",
  fullProfileStatus: "planned",
  tissueCultureInfo: {
    status: "limited",
    note:
      "Originated as a TC sport. Supply is growing but not yet widespread — most availability comes from Thai and Indonesian labs. Plants can be slow to establish after import.",
    priceRange: null,
  },
  priceHistory:
    "Entered the collector market around 2023–2024. Prices have softened slightly as more TC stock arrives, but high-variegation specimens still command premiums.",
  availabilityNotes:
    "Available from select online rare plant sellers. Restocks are sporadic. Import plants may need acclimation time.",
  lastReviewed: new Date("2026-03-28"),

  faq: {
    categories: [
      {
        category: "Price & Value",
        items: [
          {
            question: "How much does Alocasia Chantrieri Variegated Pink cost?",
            answer:
              "Alocasia Chantrieri Variegated Pink currently ranges from $650 to $2,498 from reputable online sellers. Prices vary significantly based on variegation quality — plants with strong, high-contrast pink sectors command the top of that range. The lowest listed price we've tracked is $650.",
          },
          {
            question: "What is a fair price for Alocasia Chantrieri Variegated Pink?",
            answer:
              "A fair price for a small to mid-size plant is in the $650–$750 range based on current listings. Prices have softened slightly as more tissue culture stock arrives from Southeast Asian labs, but high-variegation specimens still command premiums well above $1,000.",
          },
          {
            question: "Why is Alocasia Chantrieri Variegated Pink so expensive?",
            answer:
              "This is an ultra-rare plant with limited tissue culture availability. Most stock comes through Thai and Indonesian labs, and supply hasn't yet caught up with demand. Pink variegation in Alocasia tends to be unstable, which means not every TC plant produces desirable coloring — further restricting supply of high-quality specimens.",
          },
        ],
      },
      {
        category: "Buying Guidance",
        items: [
          {
            question: "Where can I buy Alocasia Chantrieri Variegated Pink?",
            answer:
              "Available from select online rare plant sellers including Rare Plant Fairy and Aroid Market. Restocks are sporadic and tend to sell out quickly. Import plants from Thai or Indonesian labs may need acclimation time after arrival.",
          },
          {
            question: "Is Alocasia Chantrieri Variegated Pink available as tissue culture?",
            answer:
              "Yes — this plant originated as a tissue culture sport. TC supply is growing but still limited, with most availability coming from Thai and Indonesian labs. TC plants can be slow to establish after import.",
          },
          {
            question: "Is a tissue culture Alocasia Chantrieri Variegated Pink worth buying?",
            answer:
              "TC is actually the primary source for this plant since it originated as a TC sport. The main risk is acclimation — imported TC plants need time to adjust. With variegated Alocasias, it usually makes more sense to purchase a small established plant rather than an unsprouted corm, since variegation can be unstable.",
          },
        ],
      },
      {
        category: "Rarity",
        items: [
          {
            question: "Is Alocasia Chantrieri Variegated Pink rare?",
            answer:
              "Yes — it is classified as ultra-rare. Tissue culture exists but is still limited to specialty labs in Southeast Asia. As TC production scales, availability should gradually increase, but for now this remains one of the harder variegated Alocasias to find.",
          },
          {
            question: "Is Alocasia Chantrieri Variegated Pink getting easier to find?",
            answer:
              "Slowly. TC supply is increasing and prices have softened slightly since the plant first entered the collector market around 2023–2024. As more labs produce it, expect availability to improve over the next 1–2 years — but it's still far from common.",
          },
        ],
      },
    ],
  },
};
