// ---------------------------------------------------------------------------
// Image manifest — standardized filenames per role
// ---------------------------------------------------------------------------
export interface PlantPhoto {
  id: string;
  image: string; // Path under /public
  /** Display text shown alongside the image in the UI */
  caption: string;
  /** Longer editorial description of the photo's content or context */
  description: string;
  /**
   * SEO/GEO: Functional alt text describing what is literally visible in the
   * image. Used for accessibility (screen readers) and AI/search crawlers.
   * Should be concrete and descriptive, e.g. "Mature deltoid leaf with white
   * venation against dark background, 6-inch pot". If omitted, `caption` is
   * used as fallback — but a dedicated alt is always preferred.
   */
  alt?: string;
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
// SEO/GEO: FAQ data powers FAQPage JSON-LD schema markup. Pages with FAQ
// schema receive significantly more AI citations. Every plant should have
// 5–8 FAQs structured around exact phrases people type into AI systems.
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
// SEO/GEO — fields that power AI citation, schema markup, and search ranking
// ---------------------------------------------------------------------------

/**
 * SEO/GEO: Toxicity data for pets and humans.
 * Very common AI query ("Is X toxic to cats?"). Adds E-E-A-T signals and
 * powers auto-generated FAQ entries for toxicity-related searches.
 */
export interface PlantToxicity {
  /** Whether the plant is toxic to pets (cats/dogs) */
  toxic: boolean;
  /** Short summary of toxicity — used in quick-answer blocks and schema */
  summary: string;
  /** Specific toxic compounds, e.g. "calcium oxalate crystals" */
  compounds?: string[];
  /** Symptoms if ingested */
  symptoms?: string[];
}

/**
 * SEO/GEO: External source reference.
 * 3–5 citations from authoritative sources per page can improve AI
 * visibility by up to 40%. These are rendered as a references section
 * and signal authority to both search engines and AI systems.
 */
export interface SourceReference {
  /** Display label for the reference */
  label: string;
  /** URL to the source */
  url: string;
  /** Brief description of what the source covers */
  description?: string;
}

/**
 * SEO/GEO: Tissue culture vs. wild type distinction.
 * Huge collector differentiator and unique content that helps
 * establish authority on specific cultivar lineage.
 */
export interface TcVsWildType {
  /** Whether tissue culture specimens exist for this plant */
  tcAvailable: boolean;
  /** Editorial note explaining TC vs wild-type differences */
  note: string;
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

  // ---------------------------------------------------------------------------
  // SEO/GEO fields
  // These fields power AI citations, schema markup, and search visibility.
  // See /docs/seo-geo-strategy.md for full guidance on populating these.
  // ---------------------------------------------------------------------------

  /**
   * SEO/GEO: 1–3 sentence summary placed in the first 200 words of the page.
   * AI retrieval systems evaluate relevance primarily on opening content.
   * This block is what gets cited when someone asks an AI about this plant.
   * Should directly answer: what is it, key care needs, price, difficulty.
   *
   * Example: "Monstera Thai Constellation is a slow-growing tropical aroid
   * with stable creamy-white variegation. Requires bright indirect light,
   * high humidity (60–80%), and chunky substrate. $80–$300 USD. Intermediate."
   */
  quickAnswer?: string;

  /**
   * SEO/GEO: Date this plant page was last reviewed for accuracy.
   * Freshness signal — pages not updated quarterly are 3× more likely to
   * lose AI citations. Displayed visibly on the page as "Last reviewed: ...".
   */
  lastReviewed?: Date;

  /**
   * SEO/GEO: Toxicity information for pets and humans.
   * Powers auto-generated FAQ entries and is a very common AI query.
   * Adds E-E-A-T (Experience, Expertise, Authority, Trust) signals.
   */
  toxicity?: PlantToxicity;

  /**
   * SEO/GEO: Common mistakes collectors make with this plant.
   * Powers high-intent "why is my X doing Y" search queries.
   * Each entry should be a standalone actionable statement.
   */
  commonMistakes?: string[];

  /**
   * SEO/GEO: Slugs of related plants for internal linking.
   * Every plant page should link to 2–4 related plants to build
   * topical clusters ("also in the Araceae family", "similar care needs").
   */
  relatedPlants?: string[];

  /**
   * SEO/GEO: Editorial price history note.
   * Original data (e.g. "prices dropped ~40% since 2022 due to TC flooding")
   * that no other site has — highly citable by AI systems.
   */
  priceHistory?: string;

  /**
   * SEO/GEO: Tissue culture vs. wild type information.
   * Unique content that differentiates cultivated specimens from
   * wild-collected plants — a key collector concern.
   */
  tcVsWildType?: TcVsWildType;

  /**
   * SEO/GEO: Seasonal or regional availability notes.
   * Unique, time-sensitive content that provides value beyond
   * static care guides. Update quarterly.
   */
  availabilityNotes?: string;

  /**
   * SEO/GEO: External authoritative source references.
   * 3–5 citations per page can improve AI visibility by up to 40%.
   * Links to studies, taxonomic databases, or authoritative grower resources.
   */
  sourceReferences?: SourceReference[];

  // Optional sections
  variegation?: VariegationSection;
  substrate?: SubstrateSection;
  provenance?: ProvenanceSection;
  propagation?: PropagationSection;

  /**
   * SEO/GEO: FAQ section — treat as effectively required for every plant.
   *
   * Every plant should have a minimum of 5 FAQ entries across at least 2
   * categories. Pages with FAQPage JSON-LD schema receive 1.8× more AI
   * citations than those without. The `buildFaqJsonLd` function in the plant
   * page generates auto-fallback FAQs from structured data when this is
   * missing, but hand-written FAQs targeting exact search phrases (e.g.
   * "Is X toxic to cats?", "Why is my X turning yellow?") dramatically
   * outperform auto-generated ones for AI citation.
   *
   * Typed as optional only because some plants may be in draft state —
   * no plant should ship to production without this populated.
   */
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
