import type { PlantFile } from "@/data/types";
import { TabContainer, TabHeader, DataRow } from "./TabContainer";

export function CareTab({ plant }: { plant: PlantFile }) {
  return (
    <TabContainer>
      <TabHeader label="Care conditions" title="What it needs" />
      {plant.care.map((row, i) => (
        <DataRow
          key={i}
          label={row.label}
          value={row.value}
          detail={row.detail}
          last={i === plant.care.length - 1}
        />
      ))}
    </TabContainer>
  );
}
