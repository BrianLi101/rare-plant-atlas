export interface PlantCareProfile {
  light: "low" | "medium" | "bright-indirect" | "direct";
  humidity: "low" | "moderate" | "high" | "very-high";
  temperature: { min: number; max: number; unit: "F" };
  watering: string;
  soil: string;
  difficulty: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface PlantFitWeights {
  light: number;
  humidity: number;
  space: number;
  experience: number;
}

export interface Plant {
  slug: string;
  name: string;
  binomial: string;
  tagline: string;
  heroDescription: string;
  origin: string;
  family: string;
  rarity: string;
  priceRange: string;
  sections: {
    title: string;
    body: string;
    accent?: string;
  }[];
  care: PlantCareProfile;
  fitWeights: PlantFitWeights;
  traits: string[];
  colors: {
    primary: string;
    accent: string;
    gradient: [string, string];
  };
}

export const plants: Plant[] = [
  {
    slug: "philodendron-gloriosum-variegated",
    name: "Philodendron Gloriosum Variegated",
    binomial: "Philodendron gloriosum (Variegated Type I)",
    tagline: "Velvet meets light.",
    heroDescription:
      "A terrestrial creeper with heart-shaped leaves of deep emerald velvet, interrupted by strokes of cream and white variegation. Each leaf is a living canvas — no two patterns alike.",
    origin: "Colombia",
    family: "Araceae",
    rarity: "Ultra-rare",
    priceRange: "$300 – $2,500+",
    sections: [
      {
        title: "The Leaf",
        body: "Gloriosum leaves can span over two feet across. The surface is a dense, velvety texture that catches light like crushed velvet fabric — deep green that borders on black in low light, with prominent white veins radiating from the central midrib. The variegated form adds unpredictable sectors of cream, mint, and pure white that shift with every new unfurling.",
        accent: "Each new leaf takes 4–8 weeks to fully harden.",
      },
      {
        title: "The Crawl",
        body: "Unlike most philodendrons that climb, Gloriosum is a ground-creeper. Its thick rhizome crawls horizontally along the forest floor, sending leaves upward on long petioles. This terrestrial habit demands a wide, shallow planter rather than a tall pot with a moss pole — a fundamentally different approach to display.",
        accent: "Rhizomes can grow 6–12 inches per year in optimal conditions.",
      },
      {
        title: "The Variegation",
        body: "Type I variegation in Gloriosum presents as stable, sectoral patterns — large blocks of white or cream alongside deep green. Unlike unstable sport variegation, Type I tends to persist across new growth, though the exact pattern is never predictable. Some leaves emerge half-moon, others speckled, others almost entirely white.",
        accent: "High-white leaves photosynthesize less and grow slower.",
      },
      {
        title: "The Provenance",
        body: "Native to the humid forest floors of Colombia and parts of Central America, Gloriosum thrives in the consistent warmth and high humidity of tropical understory. In cultivation, this translates to a preference for stable temperatures above 65°F, humidity above 60%, and protection from direct sun that would scorch those precious variegated sectors.",
        accent: "First described botanically in 1900 by N.E. Brown.",
      },
    ],
    care: {
      light: "bright-indirect",
      humidity: "high",
      temperature: { min: 65, max: 85, unit: "F" },
      watering:
        "Allow top 2 inches to dry between waterings. Reduce in winter.",
      soil: "Chunky aroid mix: orchid bark, perlite, sphagnum moss, charcoal.",
      difficulty: "advanced",
    },
    fitWeights: {
      light: 0.3,
      humidity: 0.3,
      space: 0.15,
      experience: 0.25,
    },
    traits: [
      "Velvet-textured foliage",
      "Terrestrial creeper",
      "Sectoral variegation",
      "Slow grower",
      "Humidity dependent",
      "Statement plant",
    ],
    colors: {
      primary: "#1a3522",
      accent: "#cdab79",
      gradient: ["#0d1f13", "#265031"],
    },
  },
];

export function getPlantBySlug(slug: string): Plant | undefined {
  return plants.find((p) => p.slug === slug);
}
