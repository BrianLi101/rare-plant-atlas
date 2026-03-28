import Image from "next/image";
import Link from "next/link";
import type { PlantFile } from "@/data/types";
import { plants } from "@/data/plants";
import { getPlantFullName, getPlantVariantLabel } from "@/data/identity";
import { formatPlantPriceRangeForGlance } from "@/data/price";
import { TabContainer, TabHeader } from "./TabContainer";

// ── Recommendation logic ──────────────────────────────────────────────────────
function getRelatedPlants(current: PlantFile, max = 3): PlantFile[] {
  const others = plants.filter((p) => p.identity.slug !== current.identity.slug);
  const sameGenus = others.filter((p) => p.identity.genus === current.identity.genus);
  const rest = others.filter((p) => p.identity.genus !== current.identity.genus);
  return [...sameGenus, ...rest].slice(0, max);
}

// ── Related card ──────────────────────────────────────────────────────────────
function RelatedCard({ plant }: { plant: PlantFile }) {
  const variant = getPlantVariantLabel(plant);
  const heroImage = plant.panels[0]?.image;
  const priceLabel = formatPlantPriceRangeForGlance(plant.priceRange);

  return (
    <Link
      href={`/plants/${plant.identity.slug}`}
      className="group block border border-cream/[0.08] rounded-[7px] overflow-hidden bg-cream/[0.04] transition-colors hover:bg-cream/[0.07]"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {heroImage ? (
          <Image
            src={heroImage}
            alt={getPlantFullName(plant)}
            fill
            sizes="(max-width: 768px) 50vw, 280px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(145deg, ${plant.colors.gradient[0]}, ${plant.colors.gradient[1]})`,
            }}
          />
        )}
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Rarity badge */}
        <span className="absolute top-2.5 left-2.5 text-[7px] tracking-[0.3em] uppercase text-cream/50 bg-black/40 backdrop-blur-sm px-2 py-[3px] rounded-sm">
          {plant.rarity}
        </span>
      </div>
      {/* Info */}
      <div className="p-3.5">
        <p className="text-[7px] tracking-[0.42em] uppercase text-cream/15 mb-1.5">
          {plant.identity.genus}
        </p>
        <p className="font-serif text-[0.9rem] text-cream/75 leading-[1.2] mb-0.5">
          {getPlantFullName(plant)}
        </p>
        {variant && (
          <p className="text-[10px] text-forest-300/60 italic mb-2">
            {variant}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-cream/25">{priceLabel}</span>
          <span className="text-[9px] tracking-[0.1em] uppercase text-forest-300/50 opacity-0 translate-x-[-4px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}

// ── Continue exploring section ────────────────────────────────────────────────
function ContinueExploring({ plant }: { plant: PlantFile }) {
  const related = getRelatedPlants(plant);
  if (related.length === 0) return null;

  return (
    <div className="mt-10 pt-8 border-t border-cream/[0.08]">
      <p className="text-[8px] tracking-[0.42em] uppercase text-earth-300/50 mb-2.5">
        Continue exploring
      </p>
      <h3 className="font-serif text-[1.1rem] text-cream/70 leading-[1.1] tracking-[-0.01em] mb-5">
        From the atlas.
      </h3>
      <div className="w-8 h-px bg-gradient-to-r from-forest-300/50 to-transparent mb-6" />
      <div className="grid grid-cols-2 gap-3">
        {related.map((p) => (
          <RelatedCard key={p.identity.slug} plant={p} />
        ))}
      </div>
    </div>
  );
}

// ── Overview tab ──────────────────────────────────────────────────────────────
export function OverviewTab({ plant }: { plant: PlantFile }) {
  return (
    <TabContainer>
      <TabHeader label="Plant overview" title={getPlantFullName(plant)} />
      <p className="text-[13px] text-cream/40 leading-[1.78] mb-7">
        {plant.verdict}
      </p>
      <div className="grid grid-cols-2 gap-1 mb-7">
        {plant.glance.slice(0, 4).map((s, i) => (
          <div key={i} className="p-3.5 border border-cream/[0.08] rounded-[7px] bg-cream/[0.04]">
            <p className="text-[7px] tracking-[0.42em] uppercase text-cream/15 mb-2">
              {s.label}
            </p>
            <p className="font-serif text-[0.9rem] text-cream/75">{s.value}</p>
          </div>
        ))}
      </div>
      <p className="text-[8px] tracking-[0.42em] uppercase text-cream/15 mb-2.5">
        Traits
      </p>
      <div className="flex flex-wrap gap-1.5">
        {plant.traits.map((t) => (
          <span
            key={t}
            className="text-[11px] text-cream/35 px-2.5 py-1 border border-cream/[0.08] rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <ContinueExploring plant={plant} />
    </TabContainer>
  );
}
