import type { PlantListing } from "../types";

const IMG = "/plants/monstera-devil-monster";

export const monsteraDevilMonster: PlantListing = {
  identity: {
    id: "monstera-devil-monster",
    slug: "monstera-devil-monster",
    genus: "Monstera",
    species: "deliciosa",
    cultivar: "Devil Monster",
    tradeName: "Monstera Devil Monster",
    aliases: ["devil monster monstera"],
    matchPhrases: ["devil monster"],
  },
  tagline:
    "Dark, textured, and heavily fenestrated — a compact deliciosa sport with serious presence.",
  origin: "Thailand (tissue culture sport)",
  family: "Araceae",
  rarity: "Ultra-Rare",
  priceRange: {
    currency: "USD",
    min: 600,
    max: 5000,
    lastObserved: new Date("2026-03-28"),
    note: "Still relatively new to the market. Prices are settling as TC supply ramps up, but demand remains strong for verified specimens.",
  },
  images: {
    hero: `${IMG}/hero.jpg`,
  },
  colors: {
    primary: "#0e110e",
    accent: "#7a8b6a",
    gradient: ["#141a14", "#101410"],
  },
  marketNote:
    "A compact, deeply textured Monstera deliciosa sport that emerged from Thai tissue culture labs. Characterized by darker coloration, pronounced ridging, and aggressive fenestration at a smaller size than standard deliciosa. Still establishing itself in the collector market — authentic specimens command a premium over the growing number of mislabeled lookalikes.",
  fullProfileStatus: "planned",
  tissueCultureInfo: {
    status: "limited",
    note:
      "Originated as a TC sport in Thai labs. Supply is increasing but not yet widespread — most availability comes from a handful of Thai exporters and US resellers. Growth rate is comparable to standard deliciosa.",
    priceRange: null,
  },
  priceHistory:
    "Entered the US market around 2024. Initial prices were $500+ for small plants. Now settling into the $80–$400 range as more TC stock arrives.",
  availabilityNotes:
    "Available from select online rare plant sellers. Not yet in big-box retail. Restocks are sporadic — tends to sell out quickly.",
  lastReviewed: new Date("2026-03-28"),

  faq: {
    categories: [
      {
        category: "Price & Value",
        items: [
          {
            question: "How much does Monstera Devil Monster cost?",
            answer:
              "Monstera Devil Monster currently ranges from about $800 to $2,800 from reputable online sellers. Tissue culture preorders start around $800, while established specimens with desirable texture and fenestration run $1,000–$2,800+. The all-time high we've tracked is $5,999 for a large specimen.",
          },
          {
            question: "What is a fair price for Monstera Devil Monster?",
            answer:
              "Based on current listings, $800–$1,000 is a fair entry point — especially for TC preorders or smaller plants. Prices are settling as TC supply ramps up, but demand remains strong. Expect to pay more for verified specimens with the characteristic dark coloration and heavy ridging.",
          },
          {
            question: "Why is Monstera Devil Monster so expensive?",
            answer:
              "Devil Monster is ultra-rare and still relatively new to the market, having emerged from Thai TC labs around 2024. Tissue culture supply is limited — only a handful of Thai exporters and US resellers carry it. Add strong demand and the growing number of mislabeled lookalikes, and verified specimens hold a significant premium.",
          },
        ],
      },
      {
        category: "Buying Guidance",
        items: [
          {
            question: "Where can I buy Monstera Devil Monster?",
            answer:
              "Available from select online rare plant sellers including Rare Plant Fairy and Rare Foliage Plant Co. Not yet in big-box retail. Restocks tend to be sporadic and sell out quickly. Verify authenticity carefully — mislabeled lookalikes are increasingly common.",
          },
          {
            question: "Is Monstera Devil Monster available as tissue culture?",
            answer:
              "Yes — Devil Monster originated as a TC sport in Thai labs. TC preorders are available from sellers like Rare Foliage Plant Co starting around $800. Supply is increasing but not yet widespread.",
          },
          {
            question: "Is a tissue culture Monstera Devil Monster worth buying?",
            answer:
              "Proceed with caution. Monsteras from tissue culture take a long time to grow because of their thin stems — the growth rate is proportional to stem thickness. TC Devil Monsters will be slow to develop the dramatic texture and fenestration the plant is known for. If you can afford an established plant, that's the better buy. TC is the cheapest entry point, but plan for a long acclimation and grow-out period.",
          },
        ],
      },
      {
        category: "Rarity",
        items: [
          {
            question: "Is Monstera Devil Monster rare?",
            answer:
              "Yes — it is classified as ultra-rare. Tissue culture exists but is still limited to a small number of Thai labs. The plant is still establishing itself in the collector market, and authentic specimens are hard to source. Mislabeled plants make the market even harder to navigate.",
          },
          {
            question: "Is Monstera Devil Monster getting easier to find?",
            answer:
              "Gradually. TC supply is increasing and prices have already come down from the initial $500+ entry point for small plants. As more labs scale production, expect prices to continue softening — but widespread availability is likely still 1–2 years away.",
          },
        ],
      },
    ],
  },
};
