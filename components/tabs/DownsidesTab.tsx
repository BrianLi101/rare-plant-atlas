import type { PlantFile } from "@/data/types";
import { TabContainer, TabHeader } from "./TabContainer";

export function DownsidesTab({ plant }: { plant: PlantFile }) {
  return (
    <TabContainer>
      <TabHeader label="Honest take" title="The downsides" />
      <p className="text-[13px] text-cream/35 leading-[1.78] mb-6">
        No honest assessment of this plant is complete without the parts that aren&apos;t photogenic.
      </p>
      {plant.downsides.map((d, i) => (
        <div
          key={i}
          className="p-[14px_16px] mb-1.5 border border-cream/[0.08] rounded-lg"
        >
          <p className="font-serif text-[0.9rem] text-cream/60 mb-1">{d.title}</p>
          <p className="text-xs text-cream/25 leading-[1.72]">{d.body}</p>
        </div>
      ))}
    </TabContainer>
  );
}
