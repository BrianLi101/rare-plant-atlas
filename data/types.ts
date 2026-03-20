// ---------------------------------------------------------------------------
// Image manifest — standardized filenames per role
// ---------------------------------------------------------------------------
export interface PlantPhoto {
  id: string;
  image: string; // Path under /public
  caption: string;
  description: string;
}

export interface PlantImages {
  hero?: string;
  detail?: string[];
  variegation?: string;
}

// ---------------------------------------------------------------------------
// Cinematic layer
// ---------------------------------------------------------------------------
export interface CinematicPanel {
  id: string;
  eyebrow: string;
  lines: string[];
  italicLine?: number;
  earthLine?: number;
  sub: string;
  fact?: string;
  image?: string;
}

export interface GlanceFact {
  label: string;
  value: string;
  note?: string;
}

// ---------------------------------------------------------------------------
// Section types — each maps 1:1 to a tab in the plant file
// ---------------------------------------------------------------------------
export interface VariegationType {
  name: string;
  color: string;
  pattern: string;
  stability: string;
  market: string;
  note: string;
  image?: string;
}

export interface VariegationSection {
  intro: string;
  types: VariegationType[];
  closing: string;
}

export interface CareItem {
  label: string;
  value: string;
  detail: string;
}

export interface SubstrateOption {
  name: string;
  components: string[];
  body: string;
  verdict: string;
  recommended: boolean;
}

export interface SubstrateSection {
  intro: string;
  options: SubstrateOption[];
  note: string;
}

export interface ProvenanceSection {
  body: string;
  timeline: { year: string; event: string }[];
}

export interface PropagationSection {
  method: string;
  timing: string;
  successRate: string;
  steps: string[];
  warnings: string[];
}

export interface DownsideItem {
  title: string;
  body: string;
}

export interface PlantFitWeights {
  light: number;
  humidity: number;
  space: number;
  experience: number;
}

export enum ProductCategory {
  Substrate = "Substrate",
  PlanterPot = "Planter/Pot",
  Nutrients = "Nutrients",
  Humidity = "Humidity",
  Lighting = "Lighting",
  PestControl = "Pest Control",
  Tools = "Tools",
}

export enum ProductRetailer {
  Amazon = "Amazon",
  IKEA = "IKEA",
  Other = "Other",
}

export interface ProductListing {
  retailer: ProductRetailer;
  url: string;
  label?: string;
}

export interface Product {
  id: string;
  category: ProductCategory;
  product: string;
  description?: string;
  approximatePriceUsd: number;
  image: string; // Path under /public, e.g. /products/item.jpg
  listings: ProductListing[];
}

export interface PlantRecommendedProduct {
  product: Product;
  reason: string;
}

export interface PlantIdentity {
  id: string;
  slug: string;
  label: string;
  genus: string;
  species?: string;
  cultivar?: string;
  tradeName?: string;
  variantLabel?: string;
  cloneId?: string;
  aliases?: string[];
}

// ---------------------------------------------------------------------------
// PlantVariant — a specific cultivar or variant entry
// Required base + optional sections (presence determines tab visibility)
// ---------------------------------------------------------------------------
export interface PlantVariant {
  identity: PlantIdentity;
  tagline: string;
  heroDescription: string;
  origin: string;
  family: string;
  rarity: string;
  priceRange: string;
  images: PlantImages;
  photos: PlantPhoto[];
  colors: {
    primary: string;
    accent: string;
    gradient: [string, string];
  };
  traits: string[];
  fitWeights: PlantFitWeights;

  panels: CinematicPanel[];
  glance: GlanceFact[];
  verdict: string;
  recommendedProducts: PlantRecommendedProduct[];

  // Required sections
  care: CareItem[];
  downsides: DownsideItem[];

  // Optional sections
  variegation?: VariegationSection;
  substrate?: SubstrateSection;
  provenance?: ProvenanceSection;
  propagation?: PropagationSection;
}
