import Link from "next/link";
import Image from "next/image";
import { plants } from "@/data/plants";
import { listings } from "@/data/listings";
import type { PlantListing } from "@/data/types";
import { getPlantLabel } from "@/data/identity";
import { formatPlantPriceRangeForGlance } from "@/data/price";
import { Navigation } from "@/components/Navigation";
import { JsonLd } from "@/components/JsonLd";

type GenusGroup = {
  genus: string;
  plants: typeof plants;
  listings: PlantListing[];
};

function getGroupedByGenus(): GenusGroup[] {
  const map = new Map<string, GenusGroup>();

  for (const plant of plants) {
    const g = plant.identity.genus.toLowerCase();
    if (!map.has(g)) map.set(g, { genus: g, plants: [], listings: [] });
    map.get(g)!.plants.push(plant);
  }
  for (const listing of listings) {
    const g = listing.identity.genus.toLowerCase();
    if (!map.has(g)) map.set(g, { genus: g, plants: [], listings: [] });
    map.get(g)!.listings.push(listing);
  }

  return Array.from(map.values()).sort((a, b) =>
    a.genus.localeCompare(b.genus)
  );
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function isFullProfile(entry: PlantListing): boolean {
  return plants.some((p) => p.identity.slug === entry.identity.slug);
}

const totalCount = plants.length + listings.length;

export function generateMetadata() {
  const title = "Rare Plant Prices — Market Guide & Price Index | Rare Plant Atlas";
  const description = `Reference pricing for ${totalCount} rare and collectible plants. Compare prices across tissue culture, cuttings, and established plants from reputable specialty sellers.`;

  return {
    title,
    description,
    openGraph: { title, description },
    alternates: {
      canonical: "https://www.rareplantatlas.com/prices",
    },
  };
}

export default function PricesIndexPage() {
  const groups = getGroupedByGenus();
  const allEntries = [
    ...plants.map((p) => ({ entry: p as PlantListing, type: "plant" as const })),
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
            url: `https://www.rareplantatlas.com/${type === "plant" ? "plants" : "prices"}/${entry.identity.slug}`,
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

      <div
        className="min-h-screen"
        style={{ background: "#0a0a08", color: "#e8e0d0" }}
      >
        <Navigation fixed={false} />

        {/* Hero */}
        <div
          className="relative"
          style={{
            padding: "clamp(100px,14vh,160px) clamp(20px,5vw,80px) 48px",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, #1a2e1a 0%, #0a0a08 70%)",
            }}
          />
          <div className="relative">
            <div
              className="font-mono text-[9px] tracking-[0.25em] uppercase mb-3"
              style={{ color: "#b8975a" }}
            >
              Price Index
            </div>
            <h1
              className="font-serif font-bold leading-[0.95] tracking-[-0.025em] m-0 mb-4"
              style={{
                fontSize: "clamp(2rem,5vw,3.5rem)",
                color: "#e8e0d0",
              }}
            >
              Plant Prices
            </h1>
            <p
              className="font-body leading-relaxed m-0 max-w-[560px] opacity-80"
              style={{
                fontSize: "clamp(0.9rem,1.6vw,1.05rem)",
                color: "#c4b89a",
              }}
            >
              Reference pricing for {totalCount} rare and collectible plants,
              sourced from reputable specialty sellers. Prices reflect the online
              specialty market — not local or secondary market pricing.
            </p>
          </div>
        </div>

        {/* Per-genus summary tables */}
        <div style={{ padding: "0 clamp(20px,5vw,80px) 32px" }}>
          {groups.map((group) => {
            const genusLabel = capitalize(group.genus);
            return (
              <div key={group.genus} className="mb-10">
                <Link
                  href={`/genus/${group.genus}`}
                  className="font-serif text-[1.25rem] font-bold hover:opacity-80 transition-opacity inline-block mb-3"
                  style={{ color: "#e8e0d0" }}
                >
                  {genusLabel}
                </Link>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr
                        className="font-mono text-[9px] tracking-[0.15em] uppercase"
                        style={{
                          color: "#b8975a",
                          borderBottom: "1px solid rgba(232,224,208,0.15)",
                        }}
                      >
                        <th className="py-3 pr-4 font-normal">Plant</th>
                        <th className="py-3 pr-4 font-normal">Rarity</th>
                        <th className="py-3 pr-4 font-normal">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.plants.map((plant) => (
                        <tr
                          key={plant.identity.slug}
                          style={{
                            borderBottom: "1px solid rgba(232,224,208,0.08)",
                          }}
                        >
                          <td className="py-3 pr-4">
                            <Link
                              href={`/plants/${plant.identity.slug}`}
                              className="font-serif text-[0.95rem] hover:opacity-80 transition-opacity"
                              style={{ color: "#e8e0d0" }}
                            >
                              {getPlantLabel(plant)}
                            </Link>
                          </td>
                          <td
                            className="py-3 pr-4 font-mono text-[10px] tracking-[0.1em] uppercase"
                            style={{ color: "#c4b89a" }}
                          >
                            {plant.rarity}
                          </td>
                          <td
                            className="py-3 pr-4 font-mono text-[10px] tracking-[0.1em]"
                            style={{ color: "#c4b89a" }}
                          >
                            {formatPlantPriceRangeForGlance(plant.priceRange)}
                          </td>
                        </tr>
                      ))}
                      {group.listings.map((listing) => (
                        <tr
                          key={listing.identity.slug}
                          style={{
                            borderBottom: "1px solid rgba(232,224,208,0.08)",
                          }}
                        >
                          <td className="py-3 pr-4">
                            <Link
                              href={`/prices/${listing.identity.slug}`}
                              className="font-serif text-[0.95rem] hover:opacity-80 transition-opacity"
                              style={{ color: "#e8e0d0" }}
                            >
                              {getPlantLabel(listing)}
                            </Link>
                            <span
                              className="ml-2 font-mono text-[8px] tracking-[0.1em] uppercase px-1.5 py-0.5 rounded"
                              style={{
                                color: "rgba(232,224,208,0.3)",
                                border: "1px solid rgba(232,224,208,0.1)",
                              }}
                            >
                              Price Ref
                            </span>
                          </td>
                          <td
                            className="py-3 pr-4 font-mono text-[10px] tracking-[0.1em] uppercase"
                            style={{ color: "#c4b89a" }}
                          >
                            {listing.rarity}
                          </td>
                          <td
                            className="py-3 pr-4 font-mono text-[10px] tracking-[0.1em]"
                            style={{ color: "#c4b89a" }}
                          >
                            {formatPlantPriceRangeForGlance(listing.priceRange)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>

        {/* Plant cards */}
        <div style={{ padding: "24px clamp(20px,5vw,80px) 80px" }}>
          <div
            className="h-px mb-8"
            style={{ background: "rgba(232,224,208,0.10)" }}
          />
          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {plants.map((plant) => {
              const heroImage =
                plant.images.hero ?? plant.photos[0]?.image;
              return (
                <Link
                  key={plant.identity.slug}
                  href={`/plants/${plant.identity.slug}`}
                  className="group relative block rounded-sm overflow-hidden"
                  style={{
                    background: plant.colors.primary,
                    border: "1px solid rgba(232,224,208,0.10)",
                    padding: "20px",
                  }}
                >
                  <div className="flex gap-4 items-start">
                    {heroImage && (
                      <div className="w-16 h-16 rounded-sm overflow-hidden shrink-0 relative">
                        <Image
                          src={heroImage}
                          alt={getPlantLabel(plant)}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      <div
                        className="font-serif text-[1rem] font-bold leading-tight mb-1 group-hover:opacity-80 transition-opacity"
                        style={{ color: "#e8e0d0" }}
                      >
                        {getPlantLabel(plant)}
                      </div>
                      <div
                        className="font-body text-[0.8rem] leading-relaxed opacity-70 line-clamp-2"
                        style={{ color: "#c4b89a" }}
                      >
                        {plant.quickAnswer ?? plant.tagline}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
            {listings.map((listing) => (
              <Link
                key={listing.identity.slug}
                href={`/prices/${listing.identity.slug}`}
                className="group relative block rounded-sm overflow-hidden"
                style={{
                  background: listing.colors.primary,
                  border: "1px solid rgba(232,224,208,0.10)",
                  padding: "20px",
                }}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="font-serif text-[1rem] font-bold leading-tight group-hover:opacity-80 transition-opacity"
                      style={{ color: "#e8e0d0" }}
                    >
                      {getPlantLabel(listing)}
                    </div>
                    <span
                      className="font-mono text-[8px] tracking-[0.1em] uppercase px-1.5 py-0.5 rounded shrink-0"
                      style={{
                        color: "rgba(232,224,208,0.3)",
                        border: "1px solid rgba(232,224,208,0.1)",
                      }}
                    >
                      Price Ref
                    </span>
                  </div>
                  <div
                    className="font-body text-[0.8rem] leading-relaxed opacity-70 line-clamp-2 mb-2"
                    style={{ color: "#c4b89a" }}
                  >
                    {listing.tagline}
                  </div>
                  <div
                    className="font-mono text-[10px] tracking-[0.1em]"
                    style={{ color: "#c4b89a" }}
                  >
                    {formatPlantPriceRangeForGlance(listing.priceRange)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Semantic content for AI crawlers */}
        <article className="sr-only" aria-hidden="false">
          <h1>Rare Plant Prices — Rare Plant Atlas</h1>
          <p>
            Reference pricing for {totalCount} rare and collectible plants sourced
            from reputable specialty sellers. Prices reflect the online specialty
            market, not local or secondary market pricing.
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

        {/* Footer */}
        <div
          className="flex justify-between items-center flex-wrap gap-3"
          style={{
            borderTop: "1px solid rgba(232,224,208,0.10)",
            padding: "24px clamp(20px,5vw,80px)",
          }}
        >
          <div
            className="font-mono text-[9px] tracking-[0.15em] uppercase opacity-30"
            style={{ color: "#c4b89a" }}
          >
            Rare Plant Atlas &copy; 2026
          </div>
        </div>
      </div>
    </>
  );
}
