import type { FieldNotesPost } from "../posts";

export const thePlantsNoOneWasWritingAbout: FieldNotesPost = {
  slug: "the-plants-no-one-was-writing-about",
  category: "Editor's Note",
  title: "The Plants No One Was Writing About",
  subtitle:
    "The guide I wish I had to extraordinary plants.",
  hero: {
    src: "/plants/philodendron-gloriosum-variegated-type-1/hero.jpg",
    alt: "Philodendron gloriosum 'Variegata' Type 1",
    caption:
      "Philodendron gloriosum 'Variegata' Type 1 — the plant I was chasing, and the one no one was writing about.",
  },
  author: {
    name: "Brian Li",
    role: "Rare Plant Collector",
    initials: "BL",
  },
  publishedDisplay: "March 19, 2026",
  publishedISO: "2026-03-19",
  readingMinutes: 5,
  tags: [
    "Editor's Note",
    "Rare Plants",
    "Collector",
    "Philodendron Gloriosum",
    "Why Atlas",
  ],
  plantsMentioned: [
    {
      slug: "philodendron-gloriosum-variegated-type-1",
      name: "Philodendron Gloriosum Var. Type 1",
      typical: 480,
      href: "/plants/philodendron-gloriosum-variegated-type-1",
    },
    {
      slug: "monstera-albo",
      name: "Monstera Albo",
      typical: 195,
      href: "/prices/monstera-albo",
    },
    {
      slug: "anthurium-delta-force",
      name: "Anthurium Delta Force",
      typical: 350,
      href: "/plants/anthurium-delta-force",
    },
  ],
  body: [
    {
      type: "paragraph",
      drop: true,
      text: "My journey into rare plants started the way a lot of collector obsessions do — through a rabbit hole of content. After discovering Kaylee Ellen in 2023, I picked up a Monstera Albo and quickly became addicted to variegated plants with stunning foliage. As any plantaholic knows, you can only watch so many of her videos before you feel the urge to own a variegated Philodendron Gloriosum.",
    },
    {
      type: "paragraph",
      text: "And that's where things got frustrating.",
    },
    { type: "heading", text: "What I couldn't find" },
    {
      type: "paragraph",
      text: "For something like the Monstera Albo, the internet has you covered. There are great guides and videos explaining every aspect of the care and propagation. But for rarer plants — plants like the variegated Gloriosum — there was almost nothing. No one was writing about the real experience of growing it. There were pictures here and there, but no sense of what it would actually feel like to own one. If you're about to spend serious money chasing a rare plant, you deserve to know: What's it going to look like in your home? What challenges are you going to face? Is it going to stay variegated? Can you take cuttings, and will those cuttings be variegated too? What medium should you grow it in? What pots work best?",
    },
    {
      type: "paragraph",
      text: "None of that existed in a useful form. And the few posts out there felt like they were pulled from a blog in the early 2000s — text-heavy, poorly organized, light on images, and completely missing the visual and emotional experience of actually owning the plant. In the era of Instagram, something felt like it was missing.",
    },
    { type: "heading", text: "The seller problem" },
    {
      type: "paragraph",
      text: "And there was another problem: most of the content out there is written by people who are also trying to sell plants. That creates an obvious incentive to make everything sound wonderful. The trade-offs get glossed over. The hard parts of propagation don't get mentioned. The realistic picture of what it's like to grow a difficult, expensive plant gets buried under enthusiasm designed to close a sale.",
    },
    {
      type: "paragraph",
      text: "No one was writing about these plants from the perspective of a collector.",
    },
    { type: "heading", text: "What Atlas is for" },
    {
      type: "paragraph",
      text: "That's what Rare Plant Atlas is meant to fix. The goal was simple: create something that lets a potential buyer or collector truly experience a plant before they own it. A guide that's visually rich, honest about the challenges, clear about propagation, and comprehensive enough that by the time you finish reading, you genuinely understand what it would be like to bring that plant into your life — and whether it's worth it for you.",
    },
    {
      type: "note",
      text: "If that's the kind of guide you've been looking for, the plant files are the place to start. Each one is built from the collector's side of the table.",
      cta: { label: "Browse the plant files →", href: "/" },
    },
  ],
};
