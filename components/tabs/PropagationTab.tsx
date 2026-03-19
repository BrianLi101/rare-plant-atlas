import type { PlantVariant } from "@/data/types";
import { TabContainer, TabHeader } from "./TabContainer";

export function PropagationTab({ plant }: { plant: PlantVariant }) {
  const propagation = plant.propagation;
  if (!propagation) return null;
  return (
    <TabContainer>
      <TabHeader label="Propagation" title="How to multiply" />

      <div className="grid grid-cols-2 gap-1 mb-6">
        {([
          ["Method", propagation.method],
          ["Timing", propagation.timing],
          ["Success rate", propagation.successRate],
        ] as const).map(([l, v], i) => (
          <div
            key={l}
            className={`p-[12px_14px] border border-cream/[0.08] rounded-[7px] bg-cream/[0.04] ${
              i === 2 ? "col-span-2" : ""
            }`}
          >
            <p className="text-[7px] tracking-[0.42em] uppercase text-cream/15 mb-1.5">{l}</p>
            <p className="text-xs text-cream/55">{v}</p>
          </div>
        ))}
      </div>

      <p className="text-[8px] tracking-[0.42em] uppercase text-cream/15 mb-3.5">
        Steps
      </p>
      {propagation.steps.map((s, i) => (
        <div
          key={i}
          className={`flex gap-3 ${
            i < propagation.steps.length - 1
              ? "pb-3.5 mb-3.5 border-b border-cream/[0.08]"
              : ""
          }`}
        >
          <span className="text-[10px] text-cream/15 w-4 flex-shrink-0 text-right pt-px">
            {i + 1}.
          </span>
          <p className="text-[12.5px] text-cream/35 leading-[1.7]">{s}</p>
        </div>
      ))}

      <div className="mt-5 p-[16px_18px] border border-earth-300/[0.18] rounded-lg bg-earth-300/[0.03]">
        <p className="text-[7px] tracking-[0.42em] uppercase text-earth-300/50 mb-3">
          Warnings
        </p>
        {propagation.warnings.map((w, i) => (
          <p
            key={i}
            className={`text-xs text-earth-300/[0.55] leading-[1.65] ${
              i < propagation.warnings.length - 1 ? "mb-2" : ""
            }`}
          >
            {w}
          </p>
        ))}
      </div>
    </TabContainer>
  );
}
