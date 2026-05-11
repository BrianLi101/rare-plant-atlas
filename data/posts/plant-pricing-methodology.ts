import type { FieldNotesPost } from "../posts";

export const plantPricingMethodology: FieldNotesPost = {
  slug: "plant-pricing-methodology",
  category: "Methodology",
  title: "Plant Pricing Methodology",
  subtitle:
    "Where our prices come from — and what to expect when you compare them to the rest of the market.",
  hero: {
    src: "/plants/anthurium-delta-force/hero.jpg",
    alt: "Anthurium 'Delta Force'",
    caption:
      "Anthurium 'Delta Force' — a specific cultivar bred by Steve Nock of Ree Gardens. Many Anthurium clarinervium × pedatoradiatum crosses share the look, but they aren't Delta Force. The genuine plant only comes through sellers who can vouch for the lineage.",
  },
  author: {
    name: "Brian Li",
    role: "Rare Plant Collector",
    initials: "BL",
  },
  publishedDisplay: "May 10, 2026",
  publishedISO: "2026-05-10",
  readingMinutes: 3,
  tags: [
    "Methodology",
    "Plant Price Index",
    "Pricing",
    "Sellers",
    "Buying Guide",
  ],
  plantsMentioned: [
    {
      slug: "anthurium-delta-force",
      name: "Anthurium Delta Force",
      typical: 350,
      href: "/prices/anthurium-delta-force",
    },
    {
      slug: "monstera-albo",
      name: "Monstera Albo",
      typical: 195,
      href: "/prices/monstera-albo",
    },
    {
      slug: "philodendron-spiritus-sancti",
      name: "Philodendron Spiritus-Sancti",
      typical: 5000,
      href: "/prices/philodendron-spiritus-sancti",
    },
  ],
  body: [
    {
      type: "paragraph",
      drop: true,
      text: "Rare Plant Atlas tracks plant prices in a pretty straightforward way: we monitor a curated set of reputable online sellers and track what they're charging for plants over time. These sellers were chosen deliberately — some specialize in tissue culture, some are extremely well-regarded in the rare aroid community.",
    },
    { type: "heading", text: "What we don't track — and why" },
    {
      type: "paragraph",
      text: "You won't find Etsy or eBay prices in our indexes. That's intentional.",
    },
    {
      type: "paragraph",
      text: "The problem with those platforms is mislabeling — and it happens constantly. Sometimes it's outright fraud. Sometimes it's a genuinely well-meaning seller who doesn't know exactly what they're selling. Either way, the result is the same: noisy, unreliable price data that doesn't tell you much about what a plant is actually worth. The sellers we track are ones whose reputation is deeply tied to their business. Getting a label wrong would hurt them. That accountability is exactly what makes their pricing a reliable signal.",
    },
    { type: "heading", text: "The trade-off: accuracy vs. price" },
    {
      type: "paragraph",
      text: "There's a real cost to this approach. The sellers we track tend to carry a price premium. A place like NSE Tropicals, for example, will often be priced 20–30% above what you might find elsewhere. Rare Plant Fairy can sometimes run 1–2x the price of other sources. These are some of the most trusted names in the hobby, and that trust comes at a cost.",
    },
    {
      type: "paragraph",
      text: "So how should you interpret the Rare Plant Atlas price index? Think of it as a snapshot of what the most reputable sellers are currently asking for a given plant. It skews slightly high relative to the broader market — typically 20–30% above what you'd call \"street price.\"",
    },
    {
      type: "figure",
      src: "/plants/monstera-thai-constellation/hero.jpg",
      alt: "Monstera Thai Constellation",
      caption:
        "Monstera Thai Constellation. On the index it shows around $60 from reputable sellers. Costa Farms has it for less. Facebook Marketplace, less again.",
    },
    { type: "heading", text: "Finding it cheaper" },
    {
      type: "paragraph",
      text: "If you want to pay less, Facebook Marketplace is often your best bet. A local grower selling directly can frequently get you the same plant for around 50% of what our index shows. The savings are real — but so is the risk. With private sellers, there's typically no return policy, no guarantee the plant survives transit, and a higher chance of mislabeling. You're trading price for protection.",
    },
    { type: "heading", text: "The bottom line" },
    {
      type: "paragraph",
      text: "The Rare Plant Atlas price index isn't meant to be the lowest price you can find — it's meant to be the most trustworthy benchmark for where prices actually are. Use it as your reference point: if you're buying from a reputable seller, expect to pay around index price. If you're hunting on Facebook Marketplace, you might land it for half that — just go in with your eyes open.",
    },
    {
      type: "note",
      text: "Every plant in the index has its own data sources and sampling notes on the profile page. Start with a plant you've been watching.",
      cta: { label: "Open the price index →", href: "/prices" },
    },
  ],
};
