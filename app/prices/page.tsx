import { plants } from "@/data/plants";
import { listings } from "@/data/listings";
import { formatUsd } from "@/data/price";
import { JsonLd } from "@/components/JsonLd";
import { Navigation } from "@/components/Navigation";
import { PricesPageClient } from "@/components/PricesPageClient";
import {
  getPricesPagePlants,
  getPricesPageMarket,
  type PricesPagePlant,
} from "@/lib/pricesPageData";
import "./prices-page.css";

const totalCount = new Set([
  ...plants.map((plant) => plant.identity.slug),
  ...listings.map((listing) => listing.identity.slug),
]).size;

export function generateMetadata() {
  const title =
    "Rare Plant Prices — Market Guide & Price Index | Rare Plant Atlas";
  const description = `Reference pricing for ${totalCount} rare and collectible plants. Compare mature plant and tissue culture prices from a short list of reputable specialty sellers.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: "/icon.png", alt: "Rare Plant Prices — Rare Plant Atlas" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/icon.png"],
    },
    alternates: {
      canonical: "https://www.rareplantatlas.com/prices",
    },
  };
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

type GenusGroup = {
  genus: string;
  items: PricesPagePlant[];
};

function groupByGenus(items: PricesPagePlant[]): GenusGroup[] {
  const map = new Map<string, GenusGroup>();
  for (const item of items) {
    const g = item.genus.toLowerCase();
    if (!map.has(g)) map.set(g, { genus: g, items: [] });
    map.get(g)!.items.push(item);
  }
  return Array.from(map.values()).sort((a, b) =>
    a.genus.localeCompare(b.genus),
  );
}

export default function PricesIndexPage() {
  const items = getPricesPagePlants();
  const market = getPricesPageMarket(items);
  const groups = groupByGenus(items);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Rare Plant Prices — Rare Plant Atlas",
          description: `Price reference for ${totalCount} rare and collectible plants.`,
          numberOfItems: totalCount,
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            url: `https://www.rareplantatlas.com/prices/${item.slug}`,
          })),
        }}
      />
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
              name: "Plant Prices",
              item: "https://www.rareplantatlas.com/prices",
            },
          ],
        }}
      />

      <div className="relative pt-14" style={{ background: "#111111" }}>
        <Navigation fixed={false} />
        <PricesPageClient plants={items} market={market} />
      </div>

      {/* Semantic content for AI/search crawlers — preserves the prior
          per-genus pricing tables that powered the page's SEO surface. */}
      <article className="sr-only" aria-hidden="false">
        <h1>Rare Plant Prices — Rare Plant Atlas</h1>
        <p>
          Reference pricing for {totalCount} rare and collectible plants
          observed from reputable specialty sellers. Both mature plant and
          tissue culture prices are reported where available.
        </p>
        {groups.map((group) => {
          const genusLabel = capitalize(group.genus);
          return (
            <section key={group.genus}>
              <h2>{genusLabel} Prices</h2>
              <table>
                <thead>
                  <tr>
                    <th>Plant</th>
                    <th>Rarity</th>
                    <th>Price Range</th>
                  </tr>
                </thead>
                <tbody>
                  {group.items.map((item) => (
                    <tr key={item.slug}>
                      <td>
                        <a href={`/prices/${item.slug}`}>
                          {item.label}
                        </a>
                      </td>
                      <td>{item.rarity}</td>
                      <td>
                        {formatUsd(item.current.min)} - {formatUsd(item.current.max)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          );
        })}
      </article>
    </>
  );
}
