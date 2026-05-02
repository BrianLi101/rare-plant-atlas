import { notFound } from "next/navigation";
import { listings, getListingBySlug, getRelatedListings } from "@/data/listings";
import { getPlantBySlug } from "@/data/plants";
import { getPlantLabel, formatScientificName } from "@/data/identity";
import { formatUsd } from "@/data/price";
import { PriceListingClient, type RelatedCard } from "@/components/PriceListingClient";
import { JsonLd } from "@/components/JsonLd";
import type { PriceSummary } from "@/data/prices/types";
import priceAggregate from "@/data/prices/aggregate.json";
import { getPricesPagePlants } from "@/lib/pricesPageData";
import type { PlantListing } from "@/data/types";

function getSeoDescription(listing: NonNullable<ReturnType<typeof getListingBySlug>>) {
  const fallback = `${getPlantLabel(listing)} pricing: ${formatUsd(listing.priceRange.min)}-${formatUsd(listing.priceRange.max)} USD. Live seller prices, availability, and market trends.`;
  const candidate = listing.seoDescription ?? listing.quickAnswer ?? fallback;

  if (candidate.length <= 160) return candidate;

  const truncated = candidate.slice(0, 157).trimEnd();
  return `${truncated}...`;
}

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.identity.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const listing = getListingBySlug(params.slug);
  if (!listing) return { title: "Not Found" };

  const label = getPlantLabel(listing);
  const title = `${label} Price Guide — Current Prices & Availability | Rare Plant Atlas`;
  const description = getSeoDescription(listing);
  const previewImage = listing.images.hero ?? listing.heroPhoto?.image ?? "/icon.png";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          alt: `${label} — pricing and availability`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [previewImage],
    },
    alternates: {
      canonical: `https://www.rareplantatlas.com/prices/${params.slug}`,
    },
  };
}

function getPriceSummary(slug: string): PriceSummary | undefined {
  const aggregate = priceAggregate as Record<string, PriceSummary>;
  return aggregate[slug];
}

function buildDisplayName(listing: PlantListing) {
  const id = listing.identity;
  let cultivar: string | null = id.cultivar ?? id.variantLabel ?? null;
  if (!cultivar && id.tradeName) {
    const stripped = id.tradeName.replace(new RegExp(`^${id.genus}\\s+`), "").trim();
    if (stripped && stripped !== id.tradeName) cultivar = stripped;
  }
  return {
    primary: id.genus,
    italic: id.species ?? null,
    cultivar,
  };
}

function buildRelatedCards(sourceSlug: string): RelatedCard[] {
  const related = getRelatedListings(sourceSlug);
  if (related.length === 0) return [];

  const pageData = getPricesPagePlants();
  const bySlug = new Map(pageData.map((p) => [p.slug, p]));

  return related.map((r) => {
    const data = bySlug.get(r.identity.slug);
    const typical =
      data?.current.typical ??
      Math.round(r.priceRange.min * 0.55 + r.priceRange.max * 0.45);
    return {
      slug: r.identity.slug,
      href: `/prices/${r.identity.slug}`,
      label: getPlantLabel(r),
      displayName: buildDisplayName(r),
      image: r.images.hero ?? null,
      rarity: r.rarity,
      tagline: r.tagline,
      typical,
      change30d: data?.change30d ?? 0,
      accent: r.colors.accent,
      genus: r.identity.genus,
    };
  });
}

function buildProductJsonLd(listing: NonNullable<ReturnType<typeof getListingBySlug>>) {
  const label = getPlantLabel(listing);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: label,
    description: listing.tagline,
    url: `https://www.rareplantatlas.com/prices/${listing.identity.slug}`,
    image: listing.images.hero ?? listing.heroPhoto?.image ?? "/icon.png",
    category: "Rare Plants",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: listing.priceRange.min,
      highPrice: listing.priceRange.max,
      priceCurrency: listing.priceRange.currency,
    },
  };
}

function buildFaqJsonLd(listing: NonNullable<ReturnType<typeof getListingBySlug>>) {
  const label = getPlantLabel(listing);
  const questions: { q: string; a: string }[] = [];

  // Use hand-written FAQ data when available
  if (listing.faq) {
    for (const category of listing.faq.categories) {
      for (const item of category.items) {
        questions.push({ q: item.question, a: item.answer });
      }
    }
  }

  // Fall back to auto-generated FAQs from structured data
  if (questions.length === 0) {
    questions.push({
      q: `What is the price range for ${label}?`,
      a: `${label} typically costs between ${formatUsd(listing.priceRange.min)} and ${formatUsd(listing.priceRange.max)} USD.${listing.priceRange.note ? ` ${listing.priceRange.note}` : ""}`,
    });

    if (listing.availabilityNotes) {
      questions.push({
        q: `Where can I buy ${label}?`,
        a: listing.availabilityNotes,
      });
    }

    if (listing.priceHistory) {
      questions.push({
        q: `Are ${label} prices going up or down?`,
        a: listing.priceHistory,
      });
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

export default function PriceListingPage({
  params,
}: {
  params: { slug: string };
}) {
  const listing = getListingBySlug(params.slug);
  if (!listing) notFound();

  const label = getPlantLabel(listing);
  const scientificName = formatScientificName(listing.identity);
  const priceSummary = getPriceSummary(listing.identity.slug);
  const hasFullProfile = !!getPlantBySlug(listing.identity.slug);
  const productJsonLd = buildProductJsonLd(listing);
  const faqJsonLd = buildFaqJsonLd(listing);
  const related = buildRelatedCards(listing.identity.slug);

  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.rareplantatlas.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Prices",
              item: "https://www.rareplantatlas.com/prices",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: label,
              item: `https://www.rareplantatlas.com/prices/${listing.identity.slug}`,
            },
          ],
        }}
      />

      {/* Server-rendered semantic content for AI crawlers */}
      <article className="sr-only" aria-hidden="false">
        <h2>{label} Price Guide</h2>
        {scientificName !== label && <p>{scientificName}</p>}

        {listing.quickAnswer && (
          <p>
            <strong>{listing.quickAnswer}</strong>
          </p>
        )}

        <p>{listing.tagline}</p>

        <section>
          <h2>Price Range</h2>
          <p>
            {label} costs between {formatUsd(listing.priceRange.min)} and{" "}
            {formatUsd(listing.priceRange.max)} USD.
          </p>
          {listing.priceRange.note && <p>{listing.priceRange.note}</p>}
        </section>

        {listing.priceHistory && (
          <section>
            <h2>Price History</h2>
            <p>{listing.priceHistory}</p>
          </section>
        )}

        {listing.availabilityNotes && (
          <section>
            <h2>Availability</h2>
            <p>{listing.availabilityNotes}</p>
          </section>
        )}

        {listing.marketNote && (
          <section>
            <h2>Market Context</h2>
            <p>{listing.marketNote}</p>
          </section>
        )}

        {listing.faq && (
          <section>
            <h2>Frequently Asked Questions</h2>
            {listing.faq.categories.map((cat) => (
              <div key={cat.category}>
                <h3>{cat.category}</h3>
                <dl>
                  {cat.items.map((item) => (
                    <div key={item.question}>
                      <dt>{item.question}</dt>
                      <dd>{item.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </section>
        )}

        {listing.lastReviewed && (
          <p>
            Last reviewed:{" "}
            {listing.lastReviewed.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
        )}
      </article>

      <PriceListingClient
        listing={listing}
        priceSummary={priceSummary}
        hasFullProfile={hasFullProfile}
        related={related}
      />
    </>
  );
}
