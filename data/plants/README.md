# Plant File Authoring Guide

This guide explains the structure of a plant file in Rare Plant Atlas, what data is required by types, and what makes an entry complete for the app experience.

## Where plant files live

- Plant entries: `data/plants/<slug>.ts`
- Plant registry: `data/plants.ts` (must import and add new plant to `plants` array)
- Plant images: `public/plants/<slug>/...`
- Types source of truth: `data/types.ts`

## File shape

Most plant files follow this pattern:

1. Import `PlantVariant` (and related types like `PlantPhoto`, `PlantPriceRange`).
2. Import any recommended products.
3. Define photo constants.
4. Export a `PlantPriceRange` object.
5. Export the `PlantVariant` object.

## `PlantVariant` fields

### Required (must exist)

- `identity: PlantIdentity`
  - Required inside identity: `id`, `slug`, `genus`
  - Commonly included: `species`, `tradeName`, `variantLabel`, `aliases`
- `tagline: string`
- `heroDescription: string`
- `origin: string`
- `family: string`
- `rarity: string`
- `priceRange: PlantPriceRange`
  - `currency` (currently `"USD"`), `min`, `max`, `lastObserved`, optional `note`
- `images: PlantImages`
  - Keys are optional, but object is required
- `photos: PlantPhoto[]`
- `colors`
  - `primary`, `accent`, `gradient: [string, string]`
- `traits: string[]`
- `fitWeights`
  - `light`, `humidity`, `space`, `experience` (numbers)
- `panels: CinematicPanel[]`
- `glance: GlanceFact[]`
- `verdict: string`
- `recommendedProducts: PlantRecommendedProduct[]`
- `care: CareItem[]`
- `downsides: DownsideItem[]`

### Optional (drives conditional tabs/sections)

- `variegation?: VariegationSection`
- `substrate?: SubstrateSection`
- `provenance?: ProvenanceSection`
- `propagation?: PropagationSection`
- `faq?: FaqSection`
- `alocasiaCormData?: AlocasiaCormData`

## What data turns on each tab

From `components/PlantDetailClient.tsx`:

- `Overview`: always shown
- `Gallery`: shown when `photos.length > 0`
- `Variegation`: shown when `variegation` exists
- `Care`: always shown
- `Substrate`: shown when `substrate` exists
- `Provenance`: shown when `provenance` exists
- `Propagation`: shown when `propagation` exists
- `FAQ`: shown when `faq` exists
- `Fit Check`: always shown
- `Downsides`: always shown
- `Shop`: shown when `recommendedProducts.length > 0`

## Important behavior and conventions

- Plant page route uses `identity.slug` (`/plants/<slug>`).
- SEO preview image fallback order is:
  1. `images.hero`
  2. first `photos[0].image`
  3. `/icon.png`
- Card artwork prefers `panels[0]?.image`.
- Display naming comes from identity helpers:
  - label preference: `identity.label`, then `tradeName + variantLabel`, then scientific name.
- `fitWeights` are used as weighted scoring inputs. Keep them normalized (recommended total near `1.0`) for predictable scores.

## Definition of done

### Type-complete (minimum to compile)

- [ ] Plant file exports a valid `PlantVariant`.
- [ ] `identity.slug` is unique.
- [ ] `priceRange.lastObserved` is a valid `Date`.
- [ ] File is imported and added to `plants` array in `data/plants.ts`.

### Atlas-complete (recommended quality bar)

- [ ] `panels` includes at least a hero panel with image.
- [ ] `images.hero` points to a real file under `public/plants/<slug>/`.
- [ ] `photos` has multiple useful references (hero + detail/variegation/stage shots).
- [ ] `glance` has clear facts (commonly around 6 entries).
- [ ] `care` and `downsides` are substantive, not placeholders.
- [ ] Optional sections are filled where relevant (`variegation`, `substrate`, `provenance`, `propagation`, `faq`).
- [ ] `recommendedProducts` includes real product links and meaningful reasons.
- [ ] Content reads as specific to that plant, not generic care copy.

## Starter scaffold

```ts
import type { PlantPhoto, PlantPriceRange, PlantVariant } from "../types";
import { someProduct } from "../products";
import { formatPlantPriceRangeForGlance } from "../price";

const IMG = "/plants/example-plant";

const heroPhoto: PlantPhoto = {
  id: "example-hero",
  image: `${IMG}/hero.jpg`,
  caption: "Example plant hero",
  description: "Primary specimen view.",
};

export const examplePlantPriceRange: PlantPriceRange = {
  currency: "USD",
  min: 100,
  max: 400,
  lastObserved: new Date("2026-03-21"),
  note: "Depends on size and expression.",
};

export const examplePlant: PlantVariant = {
  identity: {
    id: "example_plant_variant",
    slug: "example-plant",
    genus: "Genus",
    species: "species",
    tradeName: "Example Plant",
    variantLabel: "Variegated",
  },
  tagline: "Short hook.",
  heroDescription: "Collector-focused summary.",
  origin: "Cultivated selection",
  family: "Araceae",
  rarity: "Rare",
  priceRange: examplePlantPriceRange,
  images: {
    hero: heroPhoto.image,
    detail: [heroPhoto.image],
  },
  photos: [heroPhoto],
  colors: {
    primary: "#101010",
    accent: "#9ec9a2",
    gradient: ["#0b0b0b", "#202020"],
  },
  traits: ["Trait one", "Trait two"],
  fitWeights: { light: 0.3, humidity: 0.3, space: 0.2, experience: 0.2 },
  panels: [
    {
      id: "hero",
      eyebrow: "Rare - Araceae",
      lines: ["Genus", "species", "Variegated"],
      sub: "Visual summary.",
      image: heroPhoto.image,
    },
  ],
  glance: [
    {
      label: "Price range",
      value: formatPlantPriceRangeForGlance(examplePlantPriceRange),
      note: "Observed market range",
    },
  ],
  verdict: "One sentence verdict.",
  recommendedProducts: [
    {
      product: someProduct,
      reason: "Why this product specifically helps with this plant.",
    },
  ],
  care: [
    {
      label: "Light",
      value: "Bright indirect",
      detail: "Specific guidance for this plant.",
    },
  ],
  downsides: [
    {
      title: "Slow growth",
      body: "Set expectations clearly.",
    },
  ],
};
```

## Final step when adding a new plant

Update `data/plants.ts`:

1. Import the new plant constant.
2. Add it to the exported `plants` array.
3. Keep desired sort/order.

