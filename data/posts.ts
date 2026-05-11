export type PostBodyBlock =
  | { type: "paragraph"; text: string; drop?: boolean }
  | { type: "heading"; text: string }
  | { type: "figure"; src: string; caption: string; alt: string }
  | { type: "list"; items: string[] }
  | {
      type: "compare";
      rows: { label: string; range: string; what: string; tradeoff: string }[];
    }
  | { type: "note"; text: string; cta?: { label: string; href: string } };

export type PlantMention = {
  slug: string;
  name: string;
  typical: number;
  href: string;
};

export type FieldNotesPost = {
  slug: string;
  category: string;
  issueLabel?: string;
  title: string;
  subtitle: string;
  hero: { src: string; alt: string; caption: string };
  author: { name: string; role: string; initials: string };
  publishedDisplay: string;
  publishedISO: string;
  readingMinutes: number;
  tags: string[];
  plantsMentioned: PlantMention[];
  methodology?: string;
  body: PostBodyBlock[];
};

import { tissueCultureVsRooted } from "./posts/tissue-culture-vs-rooted";
import { thePlantsNoOneWasWritingAbout } from "./posts/the-plants-no-one-was-writing-about";

export const fieldNotesPosts: FieldNotesPost[] = [
  thePlantsNoOneWasWritingAbout,
  tissueCultureVsRooted,
];

export function getPostBySlug(slug: string): FieldNotesPost | undefined {
  return fieldNotesPosts.find((p) => p.slug === slug);
}
