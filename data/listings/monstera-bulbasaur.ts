import type { PlantListing } from "../types";

export const monsteraBulbasaur: PlantListing = {
  identity: {
    id: "monstera-bulbasaur",
    slug: "monstera-bulbasaur",
    genus: "Monstera",
    species: "deliciosa",
    cultivar: "Bulbasaur",
    tradeName: "Monstera Bulbasaur",
    aliases: [
      "monstera deliciosa bulbasaur",
      "bulbasaur monstera",
    ],
    matchPhrases: ["bulbasaur", "monstera"],
  },
  tagline:
    "A camo-toned deliciosa mutation with high collector appeal, now split between cheap TC starts and expensive exact plants.",
  origin: "China (cultivated Monstera deliciosa mutation)",
  family: "Araceae",
  rarity: "Rare",
  priceRange: {
    currency: "USD",
    min: 195,
    max: 2800,
    lastObserved: new Date("2026-04-25"),
    note:
      "Established plants currently start around $195 for grower's-choice stock, while exact or XL plants still run $550-$2,800. Tissue culture now forms a separate lower tier.",
  },
  images: {
    hero: "/plants/monstera-bulbasaur/hero.jpg",
  },
  colors: {
    primary: "#101711",
    accent: "#88bc6c",
    gradient: ["#1b2a1d", "#101711"],
  },
  marketNote:
    "Bulbasaur is a green-on-green Monstera deliciosa mutation named for its Pokemon-like camo look. The market now behaves like two different products: low-cost tissue culture for entry-level buyers, and premium exact plants for collectors chasing stronger patterning and established stem thickness. That split has compressed starter pricing quickly without killing the premium top end.",
  fullProfileStatus: "planned",
  tissueCultureInfo: {
    status: "widespread",
    note:
      "By the April 25, 2026 snapshot, in-stock TC was already down to $29.99 at Orange Lake Nursery, and live checks show additional U.S. sellers offering Bulbasaur TC. Earlier Rare Foliage Plant Co preorder pricing sat at $74.99, so the direction is clearly downward as supply broadens.",
    priceRange: {
      currency: "USD",
      min: 29.99,
      max: 74.99,
      lastObserved: new Date("2026-04-25"),
    },
  },
  priceHistory:
    "Snapshot-backed pricing compressed fast in spring 2026. Rare Plant Fairy listed an exact plant at $950 on March 28, then a similar special release at $500 on April 9. At the same time, standard grower's-choice plants held at $195, while Rare Foliage Plant Co anchored larger established stock at $549.99-$2,799.99. Tissue culture moved from $74.99 preorder pricing to $29.99 in-stock by April 25, showing the market is already normalizing.",
  availabilityNotes:
    "Tissue culture is now the easiest entry point, with Orange Lake Nursery and other small-format TC sellers carrying it. For established plants, Rare Plant Fairy and Rare Foliage Plant Co remain the clearest pricing anchors. Expect the cheapest listings to be TC plantlets, while exact plants still command a major premium.",
  lastReviewed: new Date("2026-04-25"),

  faq: {
    categories: [
      {
        category: "Price & Value",
        items: [
          {
            question: "How much does Monstera Bulbasaur cost?",
            answer:
              "In snapshot-backed pricing, Monstera Bulbasaur currently spans about $29.99 to $2,799.99 overall. Tissue culture sits at the bottom of the range, while established plants generally start around $195 and move into the $550-$750 range quickly. Premium XL or exact plants still push into the high three and low four figures.",
          },
          {
            question: "What is a fair price for Monstera Bulbasaur?",
            answer:
              "A fair price depends on the format. Tissue culture around $15-$40 is the current value tier. A small established grower's-choice plant at roughly $195-$300 is reasonable. Mid-size or exact plants around $550-$750 are normal, and top-end XL specimens can still justify four figures if the patterning and maturity are strong.",
          },
          {
            question: "Why is Monstera Bulbasaur still expensive if tissue culture exists?",
            answer:
              "Tissue culture solved entry cost, not collector demand for finished plants. Monsteras grow slowly from TC because the stems start thin, so sellers can still charge heavily for established plants with real size, stronger fenestration potential, and more proven variegation expression.",
          },
        ],
      },
      {
        category: "Buying Guidance",
        items: [
          {
            question: "Is Monstera Bulbasaur available as tissue culture now?",
            answer:
              "Yes. Bulbasaur should now be treated as a widely available TC plant rather than a one-off novelty release. The latest snapshot captured in-stock TC at $29.99 from Orange Lake Nursery, and live checks show additional U.S. sellers carrying TC plantlets as well.",
          },
          {
            question: "Is a tissue culture Monstera Bulbasaur worth buying?",
            answer:
              "If your goal is the cheapest entry point, yes. But buy it knowing you're paying for time. TC Monsteras take a while to develop thick stems and dramatic mature leaves, so the savings are real only if you're willing to grow the plant on for a long time.",
          },
          {
            question: "Where can I buy Monstera Bulbasaur?",
            answer:
              "For tissue culture, smaller specialty sellers and TC-focused shops are now the best place to look. For established plants, Rare Plant Fairy and Rare Foliage Plant Co remain useful market anchors. That combination makes Bulbasaur easier to source than it was just a few months ago, even though premium exact plants are still expensive.",
          },
          {
            question: "Is Monstera Bulbasaur getting easier to find?",
            answer:
              "Yes. The clearest signal is price compression: spring 2026 snapshot data shows starter-plant pricing dropping rapidly while TC moved from preorder territory into sub-$30 in-stock territory. That usually means supply is broadening, not just that one seller ran a sale.",
          },
        ],
      },
    ],
  },
};
