import type { PlantFile, IucnCode } from "@/data/types";
import { TabContainer, TabHeader } from "./TabContainer";

const IUCN_SCALE: { code: IucnCode; label: string; color: string }[] = [
  { code: "LC", label: "Least Concern", color: "#3d7d4c" },
  { code: "NT", label: "Near Threatened", color: "#5a9a66" },
  { code: "VU", label: "Vulnerable", color: "#be8f54" },
  { code: "EN", label: "Endangered", color: "#b07a42" },
  { code: "CR", label: "Critically Endangered", color: "#993c1d" },
  { code: "EW", label: "Extinct in Wild", color: "#7a2515" },
  { code: "EX", label: "Extinct", color: "#3a1008" },
];

function IucnScaleBar({ current }: { current: IucnCode }) {
  const idx = IUCN_SCALE.findIndex((s) => s.code === current);
  if (idx === -1) return null;

  return (
    <div className="mb-6">
      <p className="text-[7px] tracking-[0.42em] uppercase text-cream/15 mb-3">
        Extinction risk scale
      </p>
      <div className="flex gap-[3px] mb-2 relative">
        {IUCN_SCALE.map((seg, i) => (
          <div key={seg.code} className="flex-1 relative">
            {seg.code === current && (
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0"
                style={{
                  borderLeft: "4px solid transparent",
                  borderRight: "4px solid transparent",
                  borderTop: `5px solid ${seg.color}`,
                }}
              />
            )}
            <div
              className="h-[5px] rounded-sm"
              style={{
                background:
                  i <= idx ? seg.color : "rgba(250,247,242,0.06)",
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex">
        {IUCN_SCALE.map((seg) => (
          <span
            key={seg.code}
            className="flex-1 text-center text-[8px] tracking-[0.04em]"
            style={{
              color:
                seg.code === current
                  ? seg.color
                  : "rgba(250,247,242,0.15)",
              fontWeight: seg.code === current ? 500 : 400,
            }}
          >
            {seg.code}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ConservationTab({ plant }: { plant: PlantFile }) {
  const conservation = plant.conservation;
  if (!conservation) return null;

  const iucnEntry = IUCN_SCALE.find((s) => s.code === conservation.iucn);
  const iucnColor = iucnEntry?.color ?? "rgba(250,247,242,0.4)";
  const iucnLabel = iucnEntry?.label ?? conservation.iucn;
  const isHybrid = plant.identity.tradeName?.includes("'") ?? false;
  const tabLabel = isHybrid ? "Provenance & ethics" : "Conservation";

  return (
    <TabContainer>
      <TabHeader label={tabLabel} title="Status & ethical sourcing" />

      <p className="text-[13px] text-cream/35 leading-[1.78] mb-6">
        {conservation.wildCollectionRisk}
      </p>

      {/* Status cards */}
      <div className="grid grid-cols-2 gap-1 mb-6">
        <div className="p-[14px_16px] border border-cream/[0.08] rounded-[7px] bg-cream/[0.04]">
          <p className="text-[7px] tracking-[0.42em] uppercase text-cream/15 mb-2">
            IUCN Red List
          </p>
          <p
            className="font-serif text-base leading-[1.1] mb-1"
            style={{
              color:
                conservation.iucn === "NE"
                  ? "rgba(250,247,242,0.35)"
                  : iucnColor,
            }}
          >
            {conservation.iucn === "NE" ? "Not evaluated" : conservation.iucn}
          </p>
          <p className="text-[10px] text-cream/25 leading-[1.4]">
            {conservation.iucn === "NE"
              ? isHybrid
                ? "Cultivar \u2014 no wild population"
                : "Awaiting formal assessment"
              : iucnLabel}
          </p>
        </div>

        <div className="p-[14px_16px] border border-cream/[0.08] rounded-[7px] bg-cream/[0.04]">
          <p className="text-[7px] tracking-[0.42em] uppercase text-cream/15 mb-2">
            CITES
          </p>
          {conservation.cites ? (
            <>
              <p className="font-serif text-base leading-[1.1] mb-1 text-forest-300">
                Appendix {conservation.cites}
              </p>
              <p className="text-[10px] text-cream/25 leading-[1.4]">
                {conservation.cites === "I"
                  ? "Commercial trade prohibited"
                  : conservation.cites === "II"
                    ? "Trade regulated, permits required"
                    : "Regulated by one country"}
              </p>
            </>
          ) : (
            <>
              <p
                className="font-serif text-base leading-[1.1] mb-1"
                style={{ color: "rgba(250,247,242,0.4)" }}
              >
                Not listed
              </p>
              <p className="text-[10px] text-cream/25 leading-[1.4]">
                No international trade restriction
              </p>
            </>
          )}
        </div>
      </div>

      {/* IUCN scale bar — only for assessed species */}
      {conservation.iucn !== "NE" && conservation.iucn !== "DD" && (
        <IucnScaleBar current={conservation.iucn} />
      )}

      {/* Ethical sourcing tips */}
      <div className="mb-5">
        <p className="text-[8px] tracking-[0.42em] uppercase text-cream/15 mb-3">
          How to buy ethically
        </p>
        <div className="flex flex-col gap-[3px]">
          {conservation.ethicalSourcingTips.map((tip, i) => (
            <div
              key={i}
              className="flex gap-3 p-[11px_14px] border border-cream/[0.08] rounded-[7px] bg-cream/[0.03]"
            >
              <div className="w-1 h-1 rounded-full bg-forest-300/60 flex-shrink-0 mt-[6px]" />
              <p className="text-xs text-cream/35 leading-[1.72]">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Red flags */}
      <div className="p-[16px_18px] border border-earth-500/20 rounded-lg bg-earth-500/[0.03] mb-5">
        <p className="text-[7px] tracking-[0.42em] uppercase text-earth-300/50 mb-3">
          Red flags
        </p>
        {conservation.redFlags.map((flag, i) => (
          <div
            key={i}
            className={`flex gap-3 ${i < conservation.redFlags.length - 1 ? "mb-2.5" : ""}`}
          >
            <div className="w-1 h-1 rounded-full bg-earth-500/60 flex-shrink-0 mt-[6px]" />
            <p className="text-xs text-earth-300/55 leading-[1.65]">{flag}</p>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <p className="text-[10px] italic text-cream/15 leading-[1.65] mt-6">
        Conservation data sourced from IUCN Red List and CITES Appendices.
        Verify current listings before importing or exporting specimens.
      </p>
    </TabContainer>
  );
}
