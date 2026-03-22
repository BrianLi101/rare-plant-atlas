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
  title: string;
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

export enum PropagationMethodType {
  CormDivision = "Corm Division",
  Cutting = "Cutting",
  Division = "Division",
  TissueCulture = "Tissue Culture",
  AirLayering = "Air Layering",
  Offset = "Offset",
}

export type PropagationDifficulty =
  | "Easy"
  | "Moderate"
  | "Challenging"
  | "Expert";

export type SuccessRateLevel = "High" | "Medium" | "Low";

export interface PropagationStep {
  title: string;
  body: string;
  image?: string;
  tip?: string;
}

export interface PropagationMethod {
  type: PropagationMethodType;
  name: string;
  badge?: string;
  timing: string;
  successRate: SuccessRateLevel;
  difficulty: PropagationDifficulty;
  overview: string;
  heroImage?: string;
  steps: PropagationStep[];
  warnings: string[];
}

export interface PropagationSection {
  intro?: string;
  methods: PropagationMethod[];
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
  Pot = "Pot",
  Nutrients = "Nutrients",
  Humidity = "Humidity",
  Lighting = "Lighting",
  PestControl = "Pest Control",
  Tools = "Tools",
}

export enum PotCompatibleSubstrate {
  LechuzaPon = "Lechuza Pon",
  Leca = "Leca",
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

export interface ProductBase {
  id: string;
  category: ProductCategory;
  product: string;
  description?: string;
  approximatePriceUsd: number;
  image: string; // Path under /public, e.g. /products/item.jpg
  listings: ProductListing[];
}

export interface PotProduct extends ProductBase {
  category: ProductCategory.Pot;
  compatibleSubstrates: PotCompatibleSubstrate[];
}

export interface NonPotProduct extends ProductBase {
  category: Exclude<ProductCategory, ProductCategory.Pot>;
}

export type Product = PotProduct | NonPotProduct;

export interface PlantRecommendedProduct {
  product: Product;
  reason: string;
}

export interface PlantIdentity {
  id: string;
  slug: string;
  /**
   * Optional short display label for legacy entries.
   */
  label?: string;
  genus: string;
  /**
   * Some plants might be hybrids and have unclear species
   */
  species?: string;
  /**
   * Cultivar or clonal name used in scientific formatting.
   */
  cultivar?: string;
  /**
   * e.g. "Anthurium 'Delta Force'", "Philodendron gloriosum"
   */
  tradeName?: string;
  /**
   * e.g. "Variegated Type 1", "Variegated Pink"
   */
  variantLabel?: string;
  cloneId?: string;
  aliases?: string[];
}

export type Level = "Low" | "Medium" | "High";

export interface AlocasiaCormData {
  ageBeforeCormingMonths: number;
  cormsPerYearRange: [number, number];
  monthsToCormSproutLeaf: number;
  cormViabilityRate?: Level;
  variegationInheritanceLikelihood?: Level;
}

// ---------------------------------------------------------------------------
// FAQ section — grouped Q&A pairs
// ---------------------------------------------------------------------------
export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export interface FaqSection {
  categories: FaqCategory[];
}

// ---------------------------------------------------------------------------
// Conservation section
// ---------------------------------------------------------------------------
export type IucnCode = "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX" | "DD" | "NE";
export type CitesAppendix = "I" | "II" | "III";

export interface ConservationSection {
  /** IUCN Red List category */
  iucn: IucnCode;
  /** CITES Appendix, or null if not listed */
  cites: CitesAppendix | null;
  /** 1–3 sentence plain-language summary of wild collection risk */
  wildCollectionRisk: string;
  /** Actionable tips for buying ethically */
  ethicalSourcingTips: string[];
  /** Warning signs of wild-collected or illegally traded specimens */
  redFlags: string[];
  /** Optional curated sellers/nurseries */
  verifiedSources?: PlantSeller[];
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
  // priceRange: string;
  priceRange: PlantPriceRange;
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
  faq?: FaqSection;
  alocasiaCormData?: AlocasiaCormData;
  conservation?: ConservationSection;
}

/**
 * Encompasses the seller type:
 * - Individual (Kaylee Ellen)
 * - Nursery (NSE Tropicals)
 */
export enum PlantSellerType {
  INDIVIDUAL = 'INDIVIDUAL',
  NURSERY = 'NURSERY',
}
export interface PlantSeller {
  name: string;
  url: string;
  image: string;
  description: string;
}

export interface PlantPriceRange {
  currency: 'USD'
  min: number
  max: number
  lastObserved: Date;
  note?: string;
}
