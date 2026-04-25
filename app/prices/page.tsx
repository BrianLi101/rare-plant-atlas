import { plants } from "@/data/plants";
import { listings } from "@/data/listings";
import { getPlantLabel } from "@/data/identity";
import { formatPlantPriceRangeForGlance } from "@/data/price";
import { JsonLd } from "@/components/JsonLd";
import { Navigation } from "@/components/Navigation";
import { PricesPageClient } from "@/components/PricesPageClient";
import {
  getPricesPagePlants,
  getPricesPageMarket,
} from "@/lib/pricesPageData";
import "./prices-page.css";

const totalCount = plants.length + listings.length;

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
  plants: typeof plants;
  listings: typeof listings;
};

function groupByGenus(): GenusGroup[] {
  const map = new Map<string, GenusGroup>();
  for (const plant of plants) {
    const g = plant.identity.genus.toLowerCase();
    if (!map.has(g))
      map.set(g, { genus: g, plants: [], listings: [] });
    map.get(g)!.plants.push(plant);
  }
  for (const listing of listings) {
    const g = listing.identity.genus.toLowerCase();
    if (!map.has(g))
      map.set(g, { genus: g, plants: [], listings: [] });
    map.get(g)!.listings.push(listing);
  }
  return Array.from(map.values()).sort((a, b) =>
    a.genus.localeCompare(b.genus),
  );
}

export default function PricesIndexPage() {
  const items = getPricesPagePlants();
  const market = getPricesPageMarket(items);
  const groups = groupByGenus();

  const allEntries = [
    ...plants.map((p) => ({ entry: p, type: "plant" as const })),
    ...listings.map((l) => ({ entry: l, type: "listing" as const })),
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Rare Plant Prices — Rare Plant Atlas",
          description: `Price reference for ${totalCount} rare and collectible plants.`,
          numberOfItems: totalCount,
          itemListElement: allEntries.map(({ entry, type }, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: getPlantLabel(entry),
            url: `https://www.rareplantatlas.com/${
              type === "plant" ? "plants" : "prices"
            }/${entry.identity.slug}`,
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
                  {group.plants.map((plant) => (
                    <tr key={plant.identity.slug}>
                      <td>
                        <a href={`/plants/${plant.identity.slug}`}>
                          {getPlantLabel(plant)}
                        </a>
                      </td>
                      <td>{plant.rarity}</td>
                      <td>
                        {formatPlantPriceRangeForGlance(plant.priceRange)}
                      </td>
                    </tr>
                  ))}
                  {group.listings.map((listing) => (
                    <tr key={listing.identity.slug}>
                      <td>
                        <a href={`/prices/${listing.identity.slug}`}>
                          {getPlantLabel(listing)} (Price Reference)
                        </a>
                      </td>
                      <td>{listing.rarity}</td>
                      <td>
                        {formatPlantPriceRangeForGlance(listing.priceRange)}
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
