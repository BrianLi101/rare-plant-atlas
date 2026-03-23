import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { JsonLd } from "@/components/JsonLd";
import { plants } from "@/data/plants";
import { getPlantLabel, getPlantFullName, getPlantVariantLabel } from "@/data/identity";
import { formatPlantPriceRangeForGlance } from "@/data/price";

// ─── Rarity pill colors ──────────────────────────────────────────────────────
const RARITY_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  "Scarce":      { bg: "rgba(168,201,168,0.15)", border: "#a8c9a8", text: "#a8c9a8" },
  "Rare":        { bg: "rgba(143,190,122,0.15)", border: "#8fbe7a", text: "#8fbe7a" },
  "Very Rare":   { bg: "rgba(200,127,160,0.15)", border: "#c87fa0", text: "#c87fa0" },
  "Ultra-rare":  { bg: "rgba(200,127,160,0.15)", border: "#c87fa0", text: "#c87fa0" },
  "Exceptional": { bg: "rgba(212,133,90,0.15)",  border: "#d4855a", text: "#d4855a" },
};

function RarityPill({ label }: { label: string }) {
  const s = RARITY_COLORS[label] || RARITY_COLORS["Rare"];
  return (
    <span
      className="inline-flex items-center gap-[5px] px-2.5 py-[3px] rounded-sm font-mono text-[9px] tracking-[0.12em] uppercase whitespace-nowrap"
      style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.text }}
    >
      <span
        className="w-[5px] h-[5px] rounded-full shrink-0"
        style={{ background: s.border }}
      />
      {label}
    </span>
  );
}

// ─── Plant card (static, CSS-only hover) ─────────────────────────────────────
function PlantCard({ plant }: { plant: (typeof plants)[number] }) {
  const variant = getPlantVariantLabel(plant);
  const heroImage = plant.panels[0]?.image;
  const accent = plant.colors.accent || "#85b98e";
  const priceLabel = formatPlantPriceRangeForGlance(plant.priceRange);

  return (
    <Link
      href={`/plants/${plant.identity.slug}`}
      className="group relative block rounded-sm overflow-hidden aspect-[3/4]"
      style={{
        background: plant.colors.primary,
        border: "1px solid rgba(232,224,208,0.10)",
      }}
    >
      {/* Photo with CSS hover zoom */}
      <div className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]">
        {heroImage ? (
          <Image
            src={heroImage}
            alt={getPlantFullName(plant)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover opacity-65"
          />
        ) : (
          <div
            className="absolute inset-0 opacity-65"
            style={{
              background: `linear-gradient(145deg, ${plant.colors.gradient[0]}, ${plant.colors.gradient[1]})`,
            }}
          />
        )}
      </div>

      {/* Gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${plant.colors.primary}f0 0%, ${plant.colors.primary}80 35%, transparent 70%)`,
        }}
      />

      {/* Top shading for badge legibility */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)" }}
      />

      {/* Top badge row */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
        <RarityPill label={plant.rarity} />
        <span className="font-mono text-[9px] tracking-[0.1em] uppercase" style={{ color: "#c4b89a" }}>
          {priceLabel}
        </span>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-[22px]">
        <div
          className="font-mono text-[9px] tracking-[0.18em] uppercase mb-1.5"
          style={{ color: accent }}
        >
          {plant.identity.genus}
        </div>
        <div className="font-serif text-[clamp(1.1rem,2.5vw,1.35rem)] font-bold leading-[1.1] tracking-[-0.01em] mb-2" style={{ color: "#e8e0d0" }}>
          {getPlantFullName(plant)}
          {variant && (
            <span className="font-normal italic opacity-70">
              {" "}{variant}
            </span>
          )}
        </div>
        <div className="font-body text-[0.78rem] leading-relaxed opacity-85" style={{ color: "#c4b89a" }}>
          {plant.tagline}
        </div>

        {/* CTA — visible on hover */}
        <div
          className="mt-3.5 flex items-center gap-2 font-mono text-[9px] tracking-[0.15em] uppercase opacity-0 translate-y-1.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
          style={{ color: accent }}
        >
          View file
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M0 4H12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </Link>
  );
}

// ─── Coming soon plants ──────────────────────────────────────────────────────
const COMING_SOON = [
  "Monstera Thai Constellation",
  "Philodendron Melanochrysum Variegated",
  "Philodendron Spiritus Sancti",
  "Anthurium 'King of Spades'",
];

// ─── Main page (fully SSR) ───────────────────────────────────────────────────
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

      <div className="min-h-screen home-scrollbar" style={{ background: "#0a0a08", color: "#e8e0d0" }}>
        {/* ── Hero ── */}
        <div className="relative pt-14">
          {/* ── Nav (scrolls with page on home) ── */}
          <Navigation fixed={false} />
          {/* Background image layer — spans full hero including description */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse at 60% 40%, #1a2e1a 0%, #0a0a08 70%)" }}
            />
            {plants[0]?.images.hero && (
              <Image
                src={plants[0].images.hero}
                alt=""
                fill
                priority
                className="object-cover opacity-[0.18]"
                style={{ objectPosition: "center 30%" }}
                sizes="100vw"
              />
            )}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(10,10,8,0.45) 50%, #0a0a08 100%)" }}
            />
          </div>

          {/* Content */}
          <div className="relative" style={{ padding: "clamp(100px,18vh,200px) clamp(20px,5vw,80px) 64px" }}>
            <div className="font-mono text-[9px] tracking-[0.25em] uppercase mb-3.5" style={{ color: "#b8975a" }}>
              Rare Plant Atlas
            </div>
            <h1
              className="font-serif font-bold leading-[0.95] tracking-[-0.025em] m-0 mb-[18px]"
              style={{ fontSize: "clamp(2.4rem,6vw,4.5rem)", color: "#e8e0d0" }}
            >
              The collector&apos;s<br />
              <em className="font-normal" style={{ color: "#c4b89a" }}>field guide.</em>
            </h1>
            <p
              className="font-body leading-relaxed m-0 max-w-[460px] opacity-80"
              style={{ fontSize: "clamp(0.95rem,1.8vw,1.15rem)", color: "#c4b89a" }}
            >
              In-depth guides to extraordinary plants — provenance, variegation analysis,
              real price ranges, and propagation data you won&apos;t find in a care guide.
            </p>
          </div>
        </div>

        {/* ── Catalog section ── */}
        <div id="catalog" style={{ padding: "56px clamp(20px,5vw,80px) 100px" }}>
          {/* Section header */}
          <div className="flex items-baseline gap-5 flex-wrap mb-8">
            <h2
              className="font-serif font-bold m-0 tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.4rem,3vw,2rem)", color: "#e8e0d0" }}
            >
              Catalog
            </h2>
            <span className="font-mono text-[9px] tracking-[0.15em] uppercase opacity-50" style={{ color: "#c4b89a" }}>
              {plants.length} plants
            </span>
          </div>

          {/* Thin rule */}
          <div className="h-px mb-8" style={{ background: "rgba(232,224,208,0.10)" }} />

          {/* Grid */}
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
            {plants.map((plant) => (
              <PlantCard key={plant.identity.slug} plant={plant} />
            ))}
          </div>

          {/* Coming soon strip */}
          <div
            className="mt-12 flex items-center gap-4 rounded-sm"
            style={{
              padding: "20px 24px",
              border: "1px solid rgba(232,224,208,0.10)",
              background: "rgba(232,224,208,0.08)",
            }}
          >
            <div className="w-2 h-2 rounded-full shrink-0 opacity-60" style={{ background: "#b8975a" }} />
            <div>
              <span className="font-mono text-[9px] tracking-[0.15em] uppercase opacity-70" style={{ color: "#b8975a" }}>
                Coming soon —
              </span>
              <span className="font-body text-[0.85rem] opacity-60 ml-2" style={{ color: "#c4b89a" }}>
                {COMING_SOON.join(", ")}, and more.
              </span>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div
          className="flex justify-between items-center flex-wrap gap-3"
          style={{
            borderTop: "1px solid rgba(232,224,208,0.10)",
            padding: "24px clamp(20px,5vw,80px)",
          }}
        >
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase opacity-30" style={{ color: "#c4b89a" }}>
            Rare Plant Atlas &copy; 2026
          </div>
          <div className="font-mono text-[9px] tracking-[0.12em] uppercase opacity-30" style={{ color: "#c4b89a" }}>
            Cultivate with intention.
          </div>
        </div>
      </div>
    </>
  );
}
