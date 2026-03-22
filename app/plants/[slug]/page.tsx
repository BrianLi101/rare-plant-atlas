import { notFound } from "next/navigation";
import { plants, getPlantBySlug } from "@/data/plants";
import { getPlantLabel, getPlantScientificName } from "@/data/identity";
import { PlantDetailClient } from "@/components/PlantDetailClient";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return plants.map((p) => ({ slug: p.identity.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const plant = getPlantBySlug(params.slug);
  if (!plant) return { title: "Not Found" };

  const previewImage =
    plant.images.hero ?? plant.photos[0]?.image ?? "/icon.png";
  const title = `${getPlantLabel(plant)} — Rare Plant Atlas`;

  return {
    title,
    description: plant.heroDescription,
    openGraph: {
      title,
      description: plant.heroDescription,
      images: [
        {
          url: previewImage,
          alt: getPlantLabel(plant),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: plant.heroDescription,
      images: [previewImage],
    },
    alternates: {
      canonical: `https://www.rareplantatlas.com/plants/${params.slug}`,
    },
  };
}

function buildProductJsonLd(plant: ReturnType<typeof getPlantBySlug>) {
  if (!plant) return null;
  const label = getPlantLabel(plant);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: label,
    description: plant.heroDescription,
    url: `https://www.rareplantatlas.com/plants/${plant.identity.slug}`,
    category: "Rare Plants",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: plant.priceRange.min,
      highPrice: plant.priceRange.max,
      priceCurrency: plant.priceRange.currency,
    },
  };
}

function buildFaqJsonLd(plant: ReturnType<typeof getPlantBySlug>) {
  if (!plant) return null;
  const label = getPlantLabel(plant);
  const questions: { q: string; a: string }[] = [];

  // Use plant-specific FAQ data when available
  if (plant.faq) {
    for (const category of plant.faq.categories) {
      for (const item of category.items) {
        questions.push({ q: item.question, a: item.answer });
      }
    }
  }

  // Fall back to auto-generated FAQs from structured data
  if (questions.length === 0) {
    questions.push({
      q: `What is the price range for ${label}?`,
      a: `${label} typically costs between $${plant.priceRange.min} and $${plant.priceRange.max} ${plant.priceRange.currency}.${plant.priceRange.note ? ` ${plant.priceRange.note}` : ""}`,
    });

    if (plant.propagation) {
      questions.push({
        q: `How do you propagate ${label}?`,
        a: `${label} is propagated by ${plant.propagation.method}. Best timing: ${plant.propagation.timing}. Success rate: ${plant.propagation.successRate}.`,
      });
    }

    if (plant.variegation && plant.variegation.types.length > 0) {
      const typeNames = plant.variegation.types.map((t) => t.name).join(", ");
      questions.push({
        q: `What types of variegation does ${label} have?`,
        a: `${label} can display the following variegation types: ${typeNames}. ${plant.variegation.intro}`,
      });
    }
  }

  if (questions.length === 0) return null;

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

export default function PlantPage({ params }: { params: { slug: string } }) {
  const plant = getPlantBySlug(params.slug);
  if (!plant) notFound();

  const label = getPlantLabel(plant);
  const scientificName = getPlantScientificName(plant);
  const productJsonLd = buildProductJsonLd(plant);
  const faqJsonLd = buildFaqJsonLd(plant);

  return (
    <>
      {productJsonLd && <JsonLd data={productJsonLd} />}
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
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
              name: label,
              item: `https://www.rareplantatlas.com/plants/${plant.identity.slug}`,
            },
          ],
        }}
      />

      {/* Server-rendered semantic content for AI crawlers */}
      <article className="sr-only" aria-hidden="false">
        <h1>{label}</h1>
        {scientificName !== label && <p>{scientificName}</p>}
        <p>{plant.heroDescription}</p>

        <section>
          <h2>At a Glance</h2>
          <dl>
            {plant.glance.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>
                  {fact.value}
                  {fact.note && ` — ${fact.note}`}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2>Care Requirements</h2>
          <dl>
            {plant.care.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>
                  {item.value} — {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {plant.variegation && (
          <section>
            <h2>{plant.variegation.title}</h2>
            <p>{plant.variegation.intro}</p>
            {plant.variegation.types.map((type) => (
              <div key={type.name}>
                <h3>{type.name}</h3>
                <dl>
                  <div><dt>Color</dt><dd>{type.color}</dd></div>
                  <div><dt>Pattern</dt><dd>{type.pattern}</dd></div>
                  <div><dt>Stability</dt><dd>{type.stability}</dd></div>
                  <div><dt>Market</dt><dd>{type.market}</dd></div>
                </dl>
                <p>{type.note}</p>
              </div>
            ))}
            <p>{plant.variegation.closing}</p>
          </section>
        )}

        {plant.substrate && (
          <section>
            <h2>Substrate</h2>
            <p>{plant.substrate.intro}</p>
            {plant.substrate.options.map((opt) => (
              <div key={opt.name}>
                <h3>{opt.name}{opt.recommended && " (Recommended)"}</h3>
                <p>{opt.body}</p>
                <p>{opt.verdict}</p>
              </div>
            ))}
            {plant.substrate.note && <p>{plant.substrate.note}</p>}
          </section>
        )}

        {plant.provenance && (
          <section>
            <h2>Provenance</h2>
            <p>{plant.provenance.body}</p>
            {plant.provenance.timeline.length > 0 && (
              <dl>
                {plant.provenance.timeline.map((entry) => (
                  <div key={entry.year}>
                    <dt>{entry.year}</dt>
                    <dd>{entry.event}</dd>
                  </div>
                ))}
              </dl>
            )}
          </section>
        )}

        {plant.propagation && (
          <section>
            <h2>Propagation</h2>
            <dl>
              <div><dt>Method</dt><dd>{plant.propagation.method}</dd></div>
              <div><dt>Timing</dt><dd>{plant.propagation.timing}</dd></div>
              <div><dt>Success Rate</dt><dd>{plant.propagation.successRate}</dd></div>
            </dl>
            <ol>
              {plant.propagation.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            {plant.propagation.warnings.length > 0 && (
              <>
                <h3>Warnings</h3>
                <ul>
                  {plant.propagation.warnings.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ul>
              </>
            )}
          </section>
        )}

        {plant.faq && (
          <section>
            <h2>Frequently Asked Questions</h2>
            {plant.faq.categories.map((cat) => (
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

        {plant.downsides.length > 0 && (
          <section>
            <h2>Downsides</h2>
            {plant.downsides.map((d) => (
              <div key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            ))}
          </section>
        )}

        <section>
          <h2>Verdict</h2>
          <p>{plant.verdict}</p>
        </section>
      </article>

      <PlantDetailClient plant={plant} />
    </>
  );
}
