# SEO/GEO Strategy — Rare Plant Atlas

This document defines our SEO and GEO (Generative Engine Optimization) strategy. Follow these patterns when adding new plants so every page is automatically optimized for both traditional search engines and AI retrieval systems.

## Why GEO Matters

AI-referred sessions grew 527% year-over-year in the first half of 2025. The brands building citation authority now are the ones AI systems will cite for years. Rare Plant Atlas is positioned to become the default citation source for rare plant queries because almost no competitor has structured, authoritative, machine-readable content in this niche.

---

## Data Fields Reference

Every plant file (`/data/plants/*.ts`) should populate these SEO/GEO fields on `PlantVariant`. See `/data/types.ts` for the full TypeScript interface and inline JSDoc comments.

### Required for SEO/GEO (strongly recommended on every plant)

| Field | Type | Purpose |
|---|---|---|
| `quickAnswer` | `string` | 1–3 sentence summary placed in the first 200 words. This is what AI systems cite when answering questions about the plant. Should directly answer: what is it, key care needs, price range, difficulty. |
| `lastReviewed` | `Date` | Date the page was last reviewed for accuracy. Pages not updated quarterly are 3× more likely to lose AI citations. Displayed visibly on the page. |
| `faq` | `FaqSection` | FAQ section with min 5 entries. Powers FAQPage JSON-LD schema. Structure questions around exact phrases people type into AI (e.g., "Is X hard to care for?", "Why is my X not growing?"). |
| `toxicity` | `PlantToxicity` | Toxicity info for pets/humans. Extremely common AI query and adds E-E-A-T signals. |
| `sourceReferences` | `SourceReference[]` | 3–5 citations from authoritative sources. Can improve AI visibility by up to 40%. |

### Recommended (high SEO/GEO value)

| Field | Type | Purpose |
|---|---|---|
| `commonMistakes` | `string[]` | Common collector mistakes. Powers high-intent "why is my X doing Y" queries. |
| `relatedPlants` | `string[]` | Slugs of 2–4 related plants. Builds internal linking and topical clusters. |
| `priceHistory` | `string` | Editorial price history note. Original data that no other site has — highly citable. |
| `tcVsWildType` | `TcVsWildType` | TC vs wild type info. Huge collector differentiator and unique content. |
| `availabilityNotes` | `string` | Seasonal/regional availability. Time-sensitive, unique content. Update quarterly. |

---

## Quick Answer Block

The single most important GEO move. AI retrieval systems evaluate a page's relevance primarily on its opening content. The `quickAnswer` field is rendered as the first semantic content on the page (before the hero description).

### Template

```
[Plant name] is a [growth habit] [plant type] with [key distinguishing feature].
[Origin/source]. Requires [light], [humidity], and [substrate type].
Price: $X–$Y USD. Difficulty: [level].
```

### Example

> Anthurium Delta Force is a velvet-textured hybrid (clarinervium × pedatoradiatum) with distinctive triangular leaves reaching 12–18 inches. It requires 60–80% humidity, bright indirect light, and regular feeding. Difficulty: intermediate. Price: $40–$200 USD, with tissue culture bringing costs down significantly.

---

## FAQ Guidelines

FAQ sections are the GEO workhorse. Every plant needs 5–8 FAQs.

### Structure questions as exact search phrases

People type natural language into AI systems. Match that:
- "Is [plant] hard to care for?"
- "Why is my [plant] turning yellow/brown/drooping?"
- "How much does [plant] cost?"
- "Is [plant] toxic to cats/dogs?"
- "How do you propagate [plant]?"
- "What's the difference between [plant A] and [plant B]?"
- "[Plant]-specific question about its unique feature"

### Answer format

- Lead with the direct answer in the first sentence
- Follow with context, detail, and actionable advice
- Keep answers between 50–150 words
- Avoid hedging — be authoritative

---

## Schema Markup (JSON-LD)

The plant page automatically generates triple JSON-LD stacking:

1. **TechArticle** — For the overall care guide (uses `quickAnswer` and `lastReviewed`)
2. **Product** — AggregateOffer with price range
3. **FAQPage** — From `faq` data, or auto-generated fallback from structured data
4. **BreadcrumbList** — Navigation hierarchy

Pages with triple JSON-LD schema receive 1.8× more AI citations than pages with a single schema type. This is handled automatically by `/app/plants/[slug]/page.tsx` — just populate the data fields.

---

## Meta Tags

The plant page automatically generates:
- **Title**: `{Plant Name}: Care Guide, Price & Info | Rare Plant Atlas` — keyword-rich, under 60 chars
- **Meta description**: Uses `quickAnswer` when available (since it directly answers the primary query), falls back to `heroDescription`
- **OpenGraph + Twitter cards**: With descriptive alt text on images
- **Canonical URL**: `https://www.rareplantatlas.com/plants/{slug}`

---

## Freshness Signals

AI systems weight freshness heavily. Pages not updated quarterly are 3× more likely to lose citations.

### What to update quarterly
1. Set `lastReviewed` to the current date after reviewing
2. Update `priceRange` values and `lastObserved` date
3. Update `availabilityNotes` with current market conditions
4. Review and update `priceHistory` if significant changes occurred
5. Add new FAQ entries based on trending questions

### The `lastReviewed` field
- Displayed visibly on the page as "Last reviewed: March 2026"
- Used in Article schema `dateModified`
- Must be a real review date — don't auto-update without actually reviewing content

---

## Semantic HTML for AI Crawlers

The plant page renders a server-side `<article>` (visually hidden, but accessible to crawlers) that includes all structured content in semantic HTML: headings, definition lists, ordered lists, links. This is critical because AI crawlers parse semantic HTML more reliably than JavaScript-rendered interactive UI.

The semantic article includes (in order):
1. H1 with plant name
2. Quick answer block (bold, first 200 words)
3. Last reviewed date
4. Hero description
5. At a Glance facts
6. Care requirements
7. All optional sections (variegation, substrate, provenance, propagation, FAQ)
8. Toxicity information
9. Common mistakes
10. Price history
11. TC vs wild type
12. Availability notes
13. Verdict
14. Related plants (internal links)
15. Source references (external links)

---

## Robots & Crawl Permissions

`/app/robots.ts` explicitly allows all major AI crawlers:
- GPTBot, ChatGPT-User (OpenAI)
- ClaudeBot, anthropic-ai (Anthropic)
- PerplexityBot (Perplexity)
- Google-Extended (Google AI)
- Applebot-Extended (Apple)
- cohere-ai (Cohere)

**Do not block AI crawlers.** GEO depends on AI systems being able to read our content.

---

## Internal Linking Strategy

Every plant page should link to 2–4 related plants using the `relatedPlants` field. Choose related plants based on:
- Same genus (e.g., other Anthuriums)
- Same family (e.g., other Araceae)
- Similar care requirements
- Natural comparison targets (e.g., "Thai Constellation vs Albo")

These are rendered as semantic links in the crawler-visible article and support topical cluster building.

---

## External Authority Signals

The `sourceReferences` field should include 3–5 links to authoritative sources:
- Taxonomic databases (IPNI, Kew, The Plant List)
- Conservation databases (IUCN Red List, CITES)
- Toxicity databases (ASPCA, Pet Poison Helpline)
- Original breeders or nurseries
- Published research or horticultural references

---

## Future Additions (Planned)

These structural additions are planned but not yet implemented:

- **Genus/family index pages** (`/genus/monstera`, `/family/araceae`) — "Top N" listicle format with summary tables. These account for 74% of all AI citations.
- **Comparison pages** (`/compare/thai-constellation-vs-albo`) — High-intent queries AI systems regularly receive.
- **Glossary** (`/glossary`) — Define terms like "chimeric variegation," "tissue culture," "fenestration." Definitional pages get cited constantly.
- **`/llms.txt`** — Emerging convention that tells AI crawlers what the site is about and which pages are most authoritative.
- **Price tracker pages** — Visual price history with editorial context.

---

## Checklist for New Plants

When adding a new plant, verify:

- [ ] `quickAnswer` — 1–3 sentences, covers: what, care needs, price, difficulty
- [ ] `lastReviewed` — Set to today's date
- [ ] `faq` — Minimum 5 Q&A entries using natural search phrases
- [ ] `toxicity` — Toxic boolean, summary, compounds, symptoms
- [ ] `sourceReferences` — 3–5 authoritative external links
- [ ] `commonMistakes` — 3–5 common collector errors
- [ ] `relatedPlants` — 2–4 slug references to other plants on the site
- [ ] `priceHistory` — Editorial note on price trends
- [ ] `tcVsWildType` — If applicable, TC availability and differences
- [ ] `availabilityNotes` — Current market availability
- [ ] `heroDescription` — Front-loads key info (complements quickAnswer)
- [ ] Plant photos have descriptive `alt` text (use the dedicated `alt` field on `PlantPhoto` — falls back to `caption` if omitted, but a specific alt is always preferred. Describe what is literally visible: "Mature deltoid leaf with white venation, 6-inch pot" not "Beautiful plant photo")
- [ ] FAQ questions match exact phrases people type into AI systems
