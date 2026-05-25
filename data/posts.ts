export type PostBodyBlock =
  | { type: "paragraph"; text: string; drop?: boolean }
  | { type: "heading"; text: string }
  | {
      type: "figure";
      src: string;
      caption: string;
      alt: string;
      layout?: "portrait";
    }
  | { type: "list"; items: string[] }
  | {
      type: "compare";
      rows: { label: string; range: string; what: string; tradeoff: string }[];
    }
  | {
      type: "note";
      text: string;
      cta?: { label: string; href: string };
      secondaryCta?: { label: string; href: string };
    };

export type PlantMention = {
  slug: string;
  name: string;
  typical: number;
  href: string;
};

/** External entity (e.g. sister product) referenced by the post.
 *  Emitted as schema.org/WebSite in JSON-LD and listed under the Article's
 *  `mentions` so Google understands the relationship between the article and
 *  the linked site. */
export type ExternalMention = {
  name: string;
  url: string;
  description?: string;
  /** Other authoritative URLs about this entity (social profiles, app stores). */
  sameAs?: string[];
};

export type FieldNotesPost = {
  slug: string;
  category: string;
  issueLabel?: string;
  title: string;
  subtitle: string;
  hero: {
    src: string;
    alt: string;
    caption: string;
    layout?: "portrait";
    /** Intrinsic image dimensions. Required for non-default layouts so the
     *  container sizes to the image's true aspect ratio. */
    width?: number;
    height?: number;
  };
  author: { name: string; role: string; initials: string };
  publishedDisplay: string;
  publishedISO: string;
  readingMinutes: number;
  tags: string[];
  plantsMentioned: PlantMention[];
  methodology?: string;
  /** External sites/products this article announces or references. Surfaced
   *  in JSON-LD for richer Google indexing. */
  mentions?: ExternalMention[];
  body: PostBodyBlock[];
};

import { thePlantsNoOneWasWritingAbout } from "./posts/the-plants-no-one-was-writing-about";
import { introducingPlantPriceIndex } from "./posts/introducing-plant-price-index";
import { plantPricingMethodology } from "./posts/plant-pricing-methodology";
import { introducingGlasshouse } from "./posts/introducing-glasshouse";

// Sorted newest-first by publishedISO so the index and any other consumer
// gets chronological ordering automatically when new posts are added.
export const fieldNotesPosts: FieldNotesPost[] = [
  thePlantsNoOneWasWritingAbout,
  introducingPlantPriceIndex,
  plantPricingMethodology,
  introducingGlasshouse,
].sort((a, b) => b.publishedISO.localeCompare(a.publishedISO));

// Source-file map for sitemap lastModified — same pattern as plants/listings.
export const postSourceFiles: Record<string, string> = {
  "the-plants-no-one-was-writing-about":
    "data/posts/the-plants-no-one-was-writing-about.ts",
  "introducing-plant-price-index":
    "data/posts/introducing-plant-price-index.ts",
  "plant-pricing-methodology":
    "data/posts/plant-pricing-methodology.ts",
  "introducing-glasshouse":
    "data/posts/introducing-glasshouse.ts",
};

export function getPostBySlug(slug: string): FieldNotesPost | undefined {
  return fieldNotesPosts.find((p) => p.slug === slug);
}
