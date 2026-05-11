import type { FieldNotesPost } from "../posts";

export const introducingPlantPriceIndex: FieldNotesPost = {
  slug: "introducing-plant-price-index",
  category: "Announcement",
  title: "Introducing Plant Price Index",
  subtitle:
    "A lighter companion to the plant files — tracking prices, availability, and the right moment to buy.",
  hero: {
    src: "/plants/monstera-devil-monster/hero.jpg",
    alt: "Monstera 'Devil Monster'",
    caption:
      "Monstera 'Devil Monster' — once commanding $30,000, now a few hundred. The kind of price collapse the Plant Price Index is built to make legible.",
  },
  author: {
    name: "Brian Li",
    role: "Rare Plant Collector",
    initials: "BL",
  },
  publishedDisplay: "March 28, 2026",
  publishedISO: "2026-03-28",
  readingMinutes: 3,
  tags: [
    "Announcement",
    "Plant Price Index",
    "Pricing",
    "Tissue Culture",
    "Monstera Devil Monster",
  ],
  plantsMentioned: [
    {
      slug: "monstera-devil-monster",
      name: "Monstera Devil Monster",
      typical: 350,
      href: "/prices/monstera-devil-monster",
    },
    {
      slug: "monstera-thai-constellation",
      name: "Monstera Thai Constellation",
      typical: 60,
      href: "/prices/monstera-thai-constellation",
    },
  ],
  methodology:
    "Plant Price Index uses observed listing data from major rare-plant marketplaces, sampled at regular intervals. Each profile shows its own data sources and recency.",
  body: [
    {
      type: "paragraph",
      drop: true,
      text: "When I started Rare Plant Atlas, the vision was simple: rich, comprehensive guides for rare plants — the kind of deep, honest, visually engaging content that didn't exist anywhere else on the internet.",
    },
    {
      type: "paragraph",
      text: "But I ran into a problem pretty quickly. I can only grow so many plants myself. And without at least a year of hands-on experience with a plant — really living with it, understanding its quirks, watching it grow through different seasons — I didn't want to put out guides that were anything less than exceptional.",
    },
    {
      type: "paragraph",
      text: "Meanwhile, the rare plant market was changing fast.",
    },
    { type: "heading", text: "Faster than I could grow" },
    {
      type: "paragraph",
      text: "Plants that were commanding $30,000 just two or three years ago — like the Monstera Devil Monster — can now be found for a few hundred dollars. Tissue culture has been quietly transforming the market, making plants that were once impossibly rare increasingly accessible. But with that shift comes a whole new set of questions for collectors and buyers: Is this plant in tissue culture yet? Can I find it at a big box store, or is it still only available from a handful of specialty sellers? Has the price already crashed, or is it still on the way down? Is now the right time to buy — or should I wait?",
    },
    {
      type: "figure",
      src: "/plants/monstera-thai-constellation/hero.jpg",
      alt: "Monstera Thai Constellation",
      caption:
        "Monstera Thai Constellation — a textbook example of what tissue culture does to a price ceiling. Now available at big-box stores for what a single cutting cost three years ago.",
    },
    {
      type: "paragraph",
      text: "Those are the questions that Plant Price Index is designed to answer.",
    },
    { type: "heading", text: "How the index works" },
    {
      type: "paragraph",
      text: "Built on top of sales data from online plant shops, these indexes are a lighter-weight companion to the full Rare Plant Atlas guides. They're not meant to replace the deep dives — they're meant to help you make smarter decisions before you spend. Where are prices now? Where should you expect them to go? How available is this plant, really? Is it the right time for you to buy?",
    },
    { type: "heading", text: "The same goal, lighter" },
    {
      type: "paragraph",
      text: "The goal is the same as it's always been: help collectors and buyers be more informed, so they can get the right plant at the right price — and at the right moment for them.",
    },
    {
      type: "note",
      text: "The price index is live now. Start with a plant you've been watching — or skim the index to see which ones are crashing fastest.",
      cta: { label: "Browse the price index →", href: "/prices" },
      secondaryCta: {
        label: "See the methodology →",
        href: "/field-notes/plant-pricing-methodology",
      },
    },
  ],
};
