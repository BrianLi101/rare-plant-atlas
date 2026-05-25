import type { FieldNotesPost } from "../posts";

export const introducingGlasshouse: FieldNotesPost = {
  slug: "introducing-glasshouse",
  category: "Announcement",
  title: "Introducing Glasshouse",
  subtitle: "A beautiful home for your stunning collection.",
  hero: {
    src: "/posts/introducing-glasshouse/landing.PNG",
    alt: "Glasshouse landing page — 'A Glasshouse for your beautiful plants.'",
    caption:
      "Our collections deserve a proper display built for them.",
    layout: "portrait",
    width: 2317,
    height: 1352,
  },
  author: {
    name: "Brian Li",
    role: "Rare Plant Collector",
    initials: "BL",
  },
  publishedDisplay: "May 23, 2026",
  publishedISO: "2026-05-23",
  readingMinutes: 2,
  tags: [
    "Announcement",
    "Glasshouse",
    "Community",
    "Collectors",
  ],
  plantsMentioned: [
    {
      slug: "philodendron-gloriosum-variegated-type-1",
      name: "Philodendron Gloriosum Var. Type 1",
      typical: 480,
      href: "/plants/philodendron-gloriosum-variegated-type-1",
    },
  ],
  mentions: [
    {
      name: "Glasshouse",
      url: "https://glasshouse.garden",
      description:
        "A beautiful home for your stunning plant collection. Build a profile, showcase the plants you love most, and chronicle every milestone in their journey.",
    },
  ],
  body: [
    {
      type: "note",
      text: "Glasshouse is open. Start your collection and share the plants you love most.",
      cta: { label: "Visit glasshouse.garden →", href: "https://glasshouse.garden" },
    },
    {
      type: "paragraph",
      drop: true,
      text: "When I started building Rare Plant Atlas, I wanted to create a way for others to experience my plants the way that I did. With all the love and care I poured into them, just showing off their foliage alone could never truly embody both the joys and challenges of growing.",
    },
    {
      type: "paragraph",
      text: "But there are only so many plants that I can take care of. There simply was no way to create a comprehensive guide to the most amazing plants without giving every grower and collector the ability to contribute.",
    },
    { type: "heading", text: "A home for your collection" },
    {
      type: "paragraph",
      text: "So today I'm launching Glasshouse. A beautiful home for you to show off your amazing collection.",
    },
    {
      type: "figure",
      layout: "portrait",
      src: "/posts/introducing-glasshouse/user-profile.PNG",
      alt: "A Glasshouse profile page showing a collector's grid of rare plants",
      caption:
        "Every grower gets a profile — a curated showcase of the plants they love most.",
    },
    {
      type: "paragraph",
      text: "On Glasshouse, every grower has a profile of the plants that they love the most. Each plant has a showcase of stunning photos, but also growers can add updates — from when they got the plant to every step of care and milestone along the plant's journey — enabling every grower and collector to contribute to the world's wealth of knowledge of plants.",
    },
    {
      type: "figure",
      layout: "portrait",
      src: "/posts/introducing-glasshouse/plant-updates.PNG",
      alt: "A Glasshouse plant page showing an update with a new variegated leaf unfurling",
      caption:
        "Updates let growers chronicle every milestone — from the day a plant arrives to a brand new leaf unfurling.",
    },
    { type: "heading", text: "A library of plants" },
    {
      type: "paragraph",
      text: "I envisioned it as a place where people could celebrate the time and care put into their collections. A place where growers could understand the nuances of taking care of a particular plant. A place where the community could come together to appreciate the beauty of the natural world.",
    },
    {
      type: "paragraph",
      text: "Every grower and every collector deserves a Glasshouse.",
    },
    {
      type: "note",
      text: "Glasshouse is open. Start your collection and share the plants you love most.",
      cta: { label: "Visit glasshouse.garden →", href: "https://glasshouse.garden" },
    },
  ],
};
