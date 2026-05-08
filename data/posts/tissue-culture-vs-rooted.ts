import type { FieldNotesPost } from "../posts";

export const tissueCultureVsRooted: FieldNotesPost = {
  slug: "tissue-culture-or-rooted",
  category: "Buying Guide",
  issueLabel: "No. 001",
  title: "Tissue Culture or Rooted?",
  subtitle:
    "How to read a rare-plant price tag — and decide which side of the supply line you actually want to be on.",
  hero: {
    src: "/plants/monstera-albo/hero.jpg",
    alt: "Monstera deliciosa 'Albo Variegated' — established cutting",
    caption:
      "Monstera deliciosa 'Albo Variegated' — established cutting, unrelated to the listings discussed.",
  },
  author: {
    name: "Rare Plant Atlas",
    role: "Editorial",
    initials: "RP",
  },
  publishedDisplay: "May 1, 2026",
  publishedISO: "2026-05-01",
  readingMinutes: 7,
  tags: [
    "Tissue Culture",
    "Buying Guide",
    "Variegated",
    "Monstera Albo",
    "Pricing",
  ],
  plantsMentioned: [
    {
      slug: "monstera-albo",
      name: "Monstera Albo",
      typical: 195,
      href: "/prices/monstera-albo",
    },
    {
      slug: "monstera-thai-constellation",
      name: "Thai Constellation",
      typical: 60,
      href: "/prices/monstera-thai-constellation",
    },
    {
      slug: "philodendron-gloriosum-variegated-type-1",
      name: "Philodendron Gloriosum Var.",
      typical: 480,
      href: "/plants/philodendron-gloriosum-variegated-type-1",
    },
  ],
  methodology:
    "Pricing observations sampled from active listings on Carnivero, Aroid Market, Rare Plant Fairy, Etsy, and Facebook Marketplace, Apr 28 – May 1, 2026.",
  body: [
    {
      type: "paragraph",
      drop: true,
      text: "There is a moment, somewhere around the third browser tab, when a buyer realizes the same plant is selling for $19.99 and $1,950. Same Latin name on the label. Same leaf in the photo. The instinct is that someone is wrong — that one is a scam or a steal. Almost always, neither is true. They are different products that happen to share a name.",
    },
    {
      type: "paragraph",
      text: "The difference between a $20 Monstera Albo and a $400 Monstera Albo is mostly the difference between a tissue culture plantlet and a mature rooted cutting. Once you see that line, the price sheets stop looking chaotic. You know which questions to ask, which photos to demand, and which 'deals' to walk away from.",
    },
    {
      type: "figure",
      src: "/plants/anthurium-carlablackiae/hero.jpg",
      alt: "Anthurium tissue culture plantlets",
      caption:
        "A tissue culture Anthurium starting in agar. At this stage, every plantlet on the shelf is identical clone material — that's the entire economic point.",
    },
    { type: "heading", text: "What tissue culture actually is" },
    {
      type: "paragraph",
      text: "Tissue culture (TC) is a lab process. A few millimeters of meristem tissue are sterilized, placed on nutrient agar in a sealed jar, and induced to multiply. One mother plant becomes hundreds, then thousands. The plantlets that come out are genetically identical to each other and to the parent.",
    },
    {
      type: "paragraph",
      text: "It is, in industrial terms, the difference between a craft good and a manufactured one. A rooted cutting was once another individual plant; a TC plantlet was scraped out of a flask. That changes the supply curve, and the price.",
    },
    { type: "heading", text: "Why TC is cheaper" },
    {
      type: "list",
      items: [
        "Throughput — one lab can produce thousands of identical plantlets a month.",
        "Predictable inputs — agar, hormones, sterile light hours. No mother-plant cycle to wait on.",
        "Lower variegation risk — for stable cultivars (Thai Constellation), TC reliably reproduces the look. For chimeric ones (Albo), it doesn't, which is why Albo TC stays scarce.",
      ],
    },
    {
      type: "paragraph",
      text: "When TC works for a cultivar, prices collapse from collector tier to retail tier. Thai Constellation was $300 in 2021. It's now under $50 at Costa Farms. Burle Marx Flame did the same trip in eighteen months.",
    },
    {
      type: "figure",
      src: "/plants/philodendron-gloriosum-variegated-type-1/hero.jpg",
      alt: "Mature rooted cutting of Philodendron gloriosum",
      caption:
        "A mature rooted cutting of Philodendron gloriosum — the kind of plant that hasn't been industrialized yet, and probably won't be soon.",
    },
    { type: "heading", text: "Why TC is sometimes the wrong buy" },
    {
      type: "paragraph",
      text: "TC is not a universal substitute for a rooted cutting. A plantlet from agar is small, soft, and has spent its life in 100% humidity under fluorescent light. The acclimation phase — the first six to twelve weeks out of the jar — is where most of them die. A rooted cutting has already survived that gauntlet.",
    },
    {
      type: "paragraph",
      text: "And for chimeric variegations like Monstera Albo, TC is genuinely lower-quality. White sectoring on Albo is unstable in tissue culture and tends to revert. The TC version is a different, weaker product than the cutting it superficially resembles. Buyers who don't know that pay $20 and end up with a plant that browns or greens out within months.",
    },
    { type: "heading", text: "How to read a price tag" },
    {
      type: "paragraph",
      text: "Three numbers tell you almost everything. The price, the stage (TC / cutting / established plant), and the leaf count. A $40 'Monstera Albo' with no stage stated is the listing we get the most questions about. It is almost always a one-leaf cutting or an unrooted node. Sometimes it's TC. It is almost never a mature plant.",
    },
    {
      type: "compare",
      rows: [
        {
          label: "Tissue Culture",
          range: "$20–30",
          what: "1 small plantlet, sterile flask or just deflasked",
          tradeoff:
            "Lowest entry. Long acclimation. Variegation may not stabilize.",
        },
        {
          label: "Rooted Cutting",
          range: "$40–145",
          what: "1–3 leaves, established roots, the most common stage",
          tradeoff:
            "Best value tier for most buyers. Variegation already visible.",
        },
        {
          label: "Established Plant",
          range: "$200–1,950",
          what: "4+ leaves, fenestrated, often potted",
          tradeoff: "Pay for vigor and proven variegation, not for novelty.",
        },
      ],
    },
    { type: "heading", text: "What the photos should show" },
    {
      type: "paragraph",
      text: "Three angles separate a real listing from a stock photo. Recent overhead leaf shot in good light, so you can read the variegation. Node shot, so you can see the meristem and any stem rot. Root shot, so you know the plant is actually established and not a prayer dressed in moss. Sellers who refuse one of those, on a plant priced over $100, are telling you something.",
    },
    {
      type: "figure",
      src: "/plants/alocasia-black-velvet-variegated-pink/hero.jpg",
      alt: "Alocasia leaf and node detail",
      caption:
        "Two of the three angles you should ask for: an overhead leaf shot and the node behind it. The third — roots — should arrive on request.",
    },
    { type: "heading", text: "The decision" },
    {
      type: "paragraph",
      text: "If a cultivar has stable, scaled tissue culture — Thai Constellation, Burle Marx Flame, Philodendron Florida Beauty — the answer is almost always: buy TC, save your money, accept a few months of acclimation. The product is real and the price is rational.",
    },
    {
      type: "paragraph",
      text: "If a cultivar's TC market is limited or unstable — Monstera Albo, half of the chimeric Philodendrons, anything where TC pricing is suspiciously close to the cutting price — buy a rooted cutting from a seller who can show you the node and the roots. The premium you pay over the TC price is genuine value, not a markup.",
    },
    {
      type: "paragraph",
      text: "The skill, in the end, isn't spotting the cheapest listing. It's knowing whether the cheap listing and the expensive listing are even selling the same thing.",
    },
    {
      type: "note",
      text: "This guide is part of our ongoing series on collector pricing. Per-plant TC status, observed price ranges by stage, and seller-by-seller availability are tracked daily in each profile.",
      cta: { label: "See all profiles →", href: "/prices" },
    },
  ],
};
