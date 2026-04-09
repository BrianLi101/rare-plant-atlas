import type { PlantListing } from "../types";

export const monsteraThaiConstellation: PlantListing = {
  identity: {
    id: "monstera-thai-constellation",
    slug: "monstera-thai-constellation",
    genus: "Monstera",
    species: "deliciosa",
    cultivar: "Thai Constellation",
    tradeName: "Monstera Thai Constellation",
    aliases: ["monstera thai constellation"],
    matchPhrases: ["thai constellation", "monstera"],
    mustExcludePhrases: ["starlight", "tricolor"],
  },
  tagline:
    "Stable creamy-white variegation on a plant that actually grows. The gateway grail.",
  origin: "Thailand (tissue culture origin)",
  family: "Araceae",
  rarity: "Rare",
  priceRange: {
    currency: "USD",
    min: 30,
    max: 250,
    lastObserved: new Date("2026-03-28"),
    note: "Mass TC production has driven prices down dramatically since 2023. Big-box retail availability has compressed the floor to under $50 for small plants.",
  },
  images: {
    hero: undefined,
  },
  colors: {
    primary: "#0e110e",
    accent: "#c9a257",
    gradient: ["#1a1e14", "#141714"],
  },
  marketNote:
    "The plant that broke the rare aroid market. Once $300+ for a cutting, Thai Constellation is now available at Costa Farms retail for under $50. TC supply from Thai labs flooded the market in 2023–2024. Still a beautiful plant, but no longer a collector flex. Mature specimens with high variegation coverage hold some premium.",
  fullProfileStatus: "in-progress",
  tissueCultureStatus: "widespread",
  tissueCultureNote:
    "All Thai Constellation are tissue culture — the cultivar originated in a Thai lab and has never existed in the wild. TC is the only propagation method. Growth rate is moderate, significantly faster than Albo variegated deliciosa.",
  priceHistory:
    "Prices collapsed ~80% between 2022 and 2025 due to mass TC production and Costa Farms retail distribution. The $300 cutting is now a $40 retail plant.",
  availabilityNotes:
    "Widely available at big-box retailers (Home Depot, Lowe's) through Costa Farms. Also stocked by most online rare plant sellers. No longer scarce.",
  lastReviewed: new Date("2026-03-28"),

  faq: {
    categories: [
      {
        category: "Price & Value",
        items: [
          {
            question: "How much does Monstera Thai Constellation cost?",
            answer:
              "Monstera Thai Constellation currently ranges from about $25 to $150 from online sellers, with small TC plants available for as low as $25. The lowest price we've tracked is $24.99. This is a dramatic drop from the $300+ cuttings that were standard before 2023.",
          },
          {
            question: "What is a fair price for Monstera Thai Constellation?",
            answer:
              "For a small plant, $25–$50 is a fair price — mass TC production and big-box retail distribution through Costa Farms have compressed prices significantly. Mature specimens or unusual mutations (tricolor, starlight) still sell for $100–$150 from specialty sellers.",
          },
          {
            question: "Why is Monstera Thai Constellation so expensive?",
            answer:
              "It mostly isn't anymore. Thai Constellation was once $300+ because tissue culture supply hadn't scaled. Since Costa Farms began mass production and retail distribution in 2023–2024, prices have dropped roughly 80%. If you're seeing high prices, you're likely looking at mature specimens, rare mutations, or legacy listings that haven't adjusted to the current market.",
          },
        ],
      },
      {
        category: "Buying Guidance",
        items: [
          {
            question: "Where can I buy Monstera Thai Constellation?",
            answer:
              "Widely available at big-box retailers like Home Depot and Lowe's through Costa Farms for under $50. Also stocked by most online rare plant sellers including Carnivero, Rare Plant Fairy, Rare Foliage Plant Co, and Aroid Market. At this price point, you can also find them on Etsy and Facebook Marketplace from local hobby growers.",
          },
          {
            question: "Is Monstera Thai Constellation available as tissue culture?",
            answer:
              "All Monstera Thai Constellation are tissue culture — the cultivar originated in a Thai lab and has never existed in the wild. TC is the only propagation method. This is why supply scaled so quickly once labs ramped production.",
          },
          {
            question: "Is a tissue culture Monstera Thai Constellation worth buying?",
            answer:
              "Since all Thai Constellation are TC-derived, this isn't really a choice. The real question is size: small TC plants are cheap ($25–$50) but Monsteras from tissue culture take a long time to grow because of the thin stems. It's often better to buy a more established plant given how slow TC Monsteras are to develop and the risks of acclimating very small tissue culture plants.",
          },
          {
            question: "What's the cheapest way to get Monstera Thai Constellation?",
            answer:
              "Small plants from online sellers like Rare Foliage Plant Co start at about $25. At this price level, you can also find them on Etsy or Facebook Marketplace — local hobby growers often sell for 30–50% less than online retailers. Costa Farms retail stock at Home Depot or Lowe's is another affordable option.",
          },
        ],
      },
      {
        category: "Rarity",
        items: [
          {
            question: "Is Monstera Thai Constellation rare?",
            answer:
              "Not anymore. It's classified as rare by collector standards, but widespread TC availability and Costa Farms retail distribution mean it's one of the most accessible variegated Monsteras on the market. It's no longer a collector flex — but it's still a beautiful plant.",
          },
          {
            question: "Is Monstera Thai Constellation getting easier to find?",
            answer:
              "It's already easy to find. TC production is widespread across multiple Thai labs, and Costa Farms mass-produces them for US retail. Supply will only continue increasing. Prices are unlikely to drop much further below the current $25–$50 floor — once rare plants hit that range, they stabilize.",
          },
        ],
      },
    ],
  },
};
