import type { PlantVariant } from "@/data/types";
import { TabContainer, TabHeader } from "./TabContainer";

function formatUsd(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}

export function ShopTab({ plant }: { plant: PlantVariant }) {
  return (
    <TabContainer>
      <TabHeader label="Recommended products" title="Shop" />
      <p className="text-[13px] text-cream/35 leading-[1.78] mb-2">
        Curated specifically for this plant. These recommendations prioritize
        real care outcomes over generic houseplant gear.
      </p>
      <p className="text-[11px] text-cream/20 italic leading-[1.6] mb-8">
        Prices are approximate and may change.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {plant.recommendedProducts.map(({ product, reason }) => (
          <article
            key={product.id}
            className="rounded-[10px] overflow-hidden border border-cream/[0.08] bg-cream/[0.03] flex flex-col"
          >
            <div className="relative aspect-square bg-white overflow-hidden">
              <div className="absolute inset-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.product}
                  className="block h-full w-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>

            <div className="p-4 flex flex-col gap-2.5 flex-1">
              <p className="text-[8px] tracking-[0.2em] uppercase text-earth-300/70">
                {product.category}
              </p>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-[8px] tracking-[0.2em] uppercase text-cream/20 mb-1">
                    Product
                  </p>
                  <h3 className="font-serif text-[0.95rem] text-cream/80 leading-[1.25]">
                    {product.product}
                  </h3>
                </div>
                <span className="text-xs text-earth-300 whitespace-nowrap">
                  {formatUsd(product.approximatePriceUsd)}
                </span>
              </div>

              <div className="flex-1">
                <p className="text-[8px] tracking-[0.2em] uppercase text-cream/20 mb-1">
                  Reason
                </p>
                <p className="text-[12px] text-cream/30 leading-[1.7]">
                  {reason}
                </p>
              </div>

              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-1 block text-center text-[11px] tracking-[0.08em] text-cream/50 border border-cream/[0.15] bg-cream/[0.04] rounded-[6px] py-2 px-3 hover:text-cream/75 hover:border-cream/[0.25] transition-colors"
              >
                View on Amazon
              </a>
            </div>
          </article>
        ))}
      </div>

    </TabContainer>
  );
}
