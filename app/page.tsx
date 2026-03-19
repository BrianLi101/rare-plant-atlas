import { Hero } from "@/components/Hero";
import { FeaturedSection } from "@/components/FeaturedSection";
import { FitEngineSection } from "@/components/FitEngineSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedSection />
      <FitEngineSection />
      <Footer />
    </main>
  );
}
