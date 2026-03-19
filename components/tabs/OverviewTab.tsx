import type { PlantVariant } from "@/data/types";
import { TabContainer, TabHeader } from "./TabContainer";

export function OverviewTab({ plant }: { plant: PlantVariant }) {
  return (
    <TabContainer>
      <TabHeader label="Plant overview" title={plant.name} />
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
    </TabContainer>
  );
}
