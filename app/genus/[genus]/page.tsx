import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { plants } from "@/data/plants";
import { standaloneListings } from "@/data/listings";
import { getPlantLabel } from "@/data/identity";
import { formatPlantPriceRangeForGlance } from "@/data/price";
import { Navigation } from "@/components/Navigation";
import { JsonLd } from "@/components/JsonLd";
import {
  getPlantPlaceholderVariant,
  PlantPlaceholder,
} from "@/components/PlantPlaceholder";

// SEO/GEO: Genus index pages function as "Top N" listicle pages that account
// for 74% of all AI citations. They provide a summary table above the fold
// with name, rarity, price, and difficulty — the format AI systems prefer.

function getGenera(): string[] {
  const genera = new Set([
    ...plants.map((p) => p.identity.genus.toLowerCase()),
    ...standaloneListings.map((l) => l.identity.genus.toLowerCase()),
  ]);
  return Array.from(genera);
}

function getPlantsForGenus(genus: string) {
  return plants.filter(
    (p) => p.identity.genus.toLowerCase() === genus.toLowerCase()
  );
}

function getListingsForGenus(genus: string) {
  return standaloneListings.filter(
    (l) => l.identity.genus.toLowerCase() === genus.toLowerCase()
  );
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function generateStaticParams() {
  return getGenera().map((genus) => ({ genus }));
}

export function generateMetadata({ params }: { params: { genus: string } }) {
  const genus = capitalize(params.genus);
  const genusPlants = getPlantsForGenus(params.genus);
  const genusListings = getListingsForGenus(params.genus);
  const totalCount = genusPlants.length + genusListings.length;
  if (totalCount === 0) return { title: "Not Found" };

  const title = `${genus} Varieties & Care Guide | Rare Plant Atlas`;
  const description = `Explore ${totalCount} ${genus} varieties on Rare Plant Atlas. Compare rarity, pricing, care difficulty, and variegation across all ${genus} species in our collection.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    alternates: {
      canonical: `https://www.rareplantatlas.com/genus/${params.genus}`,
    },
  };
}

export default function GenusPage({ params }: { params: { genus: string } }) {
  const genusPlants = getPlantsForGenus(params.genus);
  const genusListings = getListingsForGenus(params.genus);
  const totalCount = genusPlants.length + genusListings.length;
  if (totalCount === 0) notFound();

  const genus = capitalize(params.genus);
  const family = genusPlants[0]?.family ?? genusListings[0]?.family ?? "Araceae";

  return (
    <>
      {/* SEO/GEO: ItemList schema for genus index — AI systems love structured lists */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${genus} Varieties — Rare Plant Atlas`,
          description: `All ${genus} varieties in the Rare Plant Atlas collection.`,
          numberOfItems: totalCount,
          itemListElement: [
            ...genusPlants.map((plant, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: getPlantLabel(plant),
              url: `https://www.rareplantatlas.com/plants/${plant.identity.slug}`,
            })),
            ...genusListings.map((listing, i) => ({
              "@type": "ListItem",
              position: genusPlants.length + i + 1,
              name: getPlantLabel(listing),
              url: `https://www.rareplantatlas.com/prices/${listing.identity.slug}`,
            })),
          ],
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
              name: genus,
              item: `https://www.rareplantatlas.com/genus/${params.genus}`,
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
            padding:
              "clamp(100px,14vh,160px) clamp(20px,5vw,80px) 48px",
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
              {family} · Genus
            </div>
            <h1
              className="font-serif font-bold leading-[0.95] tracking-[-0.025em] m-0 mb-4"
              style={{
                fontSize: "clamp(2rem,5vw,3.5rem)",
                color: "#e8e0d0",
              }}
            >
              {genus}
            </h1>
            <p
              className="font-body leading-relaxed m-0 max-w-[520px] opacity-80"
              style={{
                fontSize: "clamp(0.9rem,1.6vw,1.05rem)",
                color: "#c4b89a",
              }}
            >
              {totalCount} {genus} {totalCount === 1 ? "variety" : "varieties"} in
              the Rare Plant Atlas collection. Compare rarity, pricing, and care
              difficulty at a glance.
            </p>
          </div>
        </div>

        {/* SEO/GEO: Summary table above the fold — the format AI systems cite most */}
        <div style={{ padding: "0 clamp(20px,5vw,80px) 32px" }}>
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
                  <th className="py-3 pr-4 font-normal">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {genusPlants.map((plant) => {
                  const difficulty =
                    plant.glance.find((g) => g.label === "Difficulty")?.value ??
                    "—";
                  return (
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
                      <td
                        className="py-3 pr-4 font-mono text-[10px] tracking-[0.1em]"
                        style={{ color: "#c4b89a" }}
                      >
                        {difficulty}
                      </td>
                    </tr>
                  );
                })}
                {genusListings.map((listing) => (
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
                    <td
                      className="py-3 pr-4 font-mono text-[10px] tracking-[0.1em]"
                      style={{ color: "rgba(232,224,208,0.25)" }}
                    >
                      —
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
              gridTemplateColumns:
                "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {genusPlants.map((plant) => {
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
                    <div className="w-16 h-16 rounded-sm overflow-hidden shrink-0 relative">
                      {heroImage ? (
                        <Image
                          src={heroImage}
                          alt={getPlantLabel(plant)}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      ) : (
                        <PlantPlaceholder
                          accent={plant.colors.accent}
                          variant={getPlantPlaceholderVariant(plant.identity.genus)}
                          label={`${getPlantLabel(plant)} placeholder image`}
                        />
                      )}
                    </div>
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
            {genusListings.map((listing) => (
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
          <h1>{genus} — Rare Plant Atlas</h1>
          <p>
            All {genus} varieties in the Rare Plant Atlas collection, part of the{" "}
            {family} family.
          </p>
          <h2>{genus} Varieties Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Plant</th>
                <th>Rarity</th>
                <th>Price Range</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {genusPlants.map((plant) => {
                const difficulty =
                  plant.glance.find((g) => g.label === "Difficulty")?.value ??
                  "—";
                return (
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
                    <td>{difficulty}</td>
                  </tr>
                );
              })}
              {genusListings.map((listing) => (
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
                  <td>—</td>
                </tr>
              ))}
            </tbody>
          </table>

          {genusPlants.map((plant) => (
            <section key={plant.identity.slug}>
              <h2>{getPlantLabel(plant)}</h2>
              {plant.quickAnswer && <p>{plant.quickAnswer}</p>}
              <p>{plant.heroDescription}</p>
              <a href={`/plants/${plant.identity.slug}`}>
                Read full {getPlantLabel(plant)} guide
              </a>
            </section>
          ))}
          {genusListings.map((listing) => (
            <section key={listing.identity.slug}>
              <h2>{getPlantLabel(listing)} (Price Reference)</h2>
              {listing.quickAnswer && <p>{listing.quickAnswer}</p>}
              <p>{listing.tagline}</p>
              <p>Price range: {formatPlantPriceRangeForGlance(listing.priceRange)}</p>
              <a href={`/prices/${listing.identity.slug}`}>
                View {getPlantLabel(listing)} pricing
              </a>
            </section>
          ))}
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
