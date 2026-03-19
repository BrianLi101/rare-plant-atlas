// ---------------------------------------------------------------------------
// Image manifest — standardized filenames per role
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// PlantVariant — a specific cultivar or variant entry
// Required base + optional sections (presence determines tab visibility)
// ---------------------------------------------------------------------------
export interface PlantVariant {
  slug: string;
  name: string;
  binomial: string;
  tagline: string;
  heroDescription: string;
  origin: string;
  family: string;
  rarity: string;
  priceRange: string;
  images: PlantImages;
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

  // Required sections
  care: CareItem[];
  downsides: DownsideItem[];

  // Optional sections
  variegation?: VariegationSection;
  substrate?: SubstrateSection;
  provenance?: ProvenanceSection;
  propagation?: PropagationSection;
}
