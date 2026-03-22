import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ValueProp } from "@/components/ValueProp";
import { FeaturedSection } from "@/components/FeaturedSection";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { plants } from "@/data/plants";
import { getPlantLabel } from "@/data/identity";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Rare Plant Atlas",
          url: "https://www.rareplantatlas.com",
          description:
            "Beautiful guides to rare plants. Evaluate variegation stability, genetics, propagation, and realistic pricing for rare aroids.",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Rare Plant Collection",
          url: "https://www.rareplantatlas.com",
          description:
            "In-depth profiles of rare aroids for serious plant collectors.",
          hasPart: plants.map((plant) => ({
            "@type": "CreativeWork",
            name: getPlantLabel(plant),
            url: `https://www.rareplantatlas.com/plants/${plant.identity.slug}`,
          })),
        }}
      />
      <Navigation />
      <main>
        <Hero />
        <FeaturedSection />
        <ValueProp />
        <Footer />
      </main>
    </>
  );
}
