import type { PlantFile } from "@/data/types";
import { TabContainer, TabHeader } from "./TabContainer";

export function SubstrateTab({ plant }: { plant: PlantFile }) {
  const substrate = plant.substrate;
  if (!substrate) return null;
  return (
    <TabContainer>
      <TabHeader label="Substrate" title="What it grows in" />
      <p className="text-[13px] text-cream/35 leading-[1.78] mb-6">{substrate.intro}</p>
      {substrate.options.map((o, i) => (
        <div
          key={i}
          className={`relative p-5 rounded-[10px] mb-2.5 border ${
            o.recommended
              ? "border-forest-300/50 bg-forest-300/[0.04]"
              : "border-cream/[0.08] bg-cream/[0.04]"
          }`}
        >
          {o.recommended && (
            <span className="absolute top-3.5 right-3.5 text-[9px] text-forest-300 px-2 py-0.5 border border-forest-300/50 rounded-lg tracking-[0.1em]">
              RECOMMENDED
            </span>
          )}
          <h4 className={`font-serif text-base text-cream mb-3 ${o.recommended ? "pr-[100px]" : ""}`}>
            {o.name}
          </h4>
          <div className="flex flex-wrap gap-1 mb-3.5">
            {o.components.map((c) => (
              <span
                key={c}
                className="text-[10px] text-cream/20 px-2 py-0.5 border border-cream/[0.08] rounded-[10px]"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-xs text-cream/35 leading-[1.72] mb-3">{o.body}</p>
          <p className="text-xs text-forest-300/75 italic leading-[1.55] pt-3 border-t border-cream/[0.08]">
            {o.verdict}
          </p>
        </div>
      ))}
      <p className="text-xs italic text-cream/20 leading-[1.65] mt-3.5">{substrate.note}</p>
    </TabContainer>
  );
}
