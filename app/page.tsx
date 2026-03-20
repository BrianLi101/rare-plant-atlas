import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturedSection } from "@/components/FeaturedSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FeaturedSection />
        <Footer />
      </main>
    </>
  );
}
