import type { PlantFile } from "@/data/types";
import { TabContainer, TabHeader } from "./TabContainer";

export function ProvenanceTab({ plant }: { plant: PlantFile }) {
  const provenance = plant.provenance;
  if (!provenance) return null;
  return (
    <TabContainer>
      <TabHeader label="Provenance" title="Origin & lineage" />
      <p className="text-[13px] text-cream/35 leading-[1.78] mb-7">{provenance.body}</p>
      <p className="text-[8px] tracking-[0.42em] uppercase text-cream/15 mb-4">
        Timeline
      </p>
      <div className="relative pl-[18px]">
        <div className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-cream/[0.08]" />
        {provenance.timeline.map((e, i) => (
          <div
            key={i}
            className={`relative ${i < provenance.timeline.length - 1 ? "pb-5" : ""}`}
          >
            <div className="absolute -left-[14.5px] top-[5px] w-2 h-2 rounded-full bg-earth-300/50" />
            <p className="text-[10px] text-earth-300/50 tracking-[0.06em] mb-1">{e.year}</p>
            <p className="text-[12.5px] text-cream/35 leading-[1.65]">{e.event}</p>
          </div>
        ))}
      </div>
    </TabContainer>
  );
}
