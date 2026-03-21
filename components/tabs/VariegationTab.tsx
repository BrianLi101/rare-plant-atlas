import Image from "next/image";
import type { PlantVariant } from "@/data/types";
import { TabContainer, TabHeader } from "./TabContainer";

export function VariegationTab({ plant }: { plant: PlantVariant }) {
  const variegation = plant.variegation;
  if (!variegation) return null;
  return (
    <TabContainer>
      <TabHeader label="Variegation types" title={variegation.title} />
      <p className="text-[13px] text-cream/35 leading-[1.78] mb-6">{variegation.intro}</p>
      {variegation.types.map((t, i) => (
        <div key={i} className="border border-cream/[0.08] rounded-[10px] bg-cream/[0.04] mb-2.5 overflow-hidden">
          {t.image && (
            <div className="relative w-full aspect-[16/10]">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          )}
          <div className="p-5">
            <div className="w-7 h-[2.5px] rounded-full mb-3.5" style={{ background: t.color }} />
            <h3 className="font-serif text-base text-cream mb-2.5">{t.name}</h3>
            <p className="text-xs text-cream/35 leading-[1.75] mb-3.5">{t.pattern}</p>
            <div className="flex flex-col gap-1.5 pt-3 border-t border-cream/[0.08]">
              {([["Stability", t.stability], ["Market", t.market]] as const).map(([k, v]) => (
                <div key={k} className="flex gap-2.5">
                  <span className="text-[7px] tracking-[0.42em] uppercase text-cream/15 w-14 flex-shrink-0 pt-px">
                    {k}
                  </span>
                  <span className="text-[11px] text-cream/35 leading-[1.55]">{v}</span>
                </div>
              ))}
            </div>
            <p className="text-xs italic leading-[1.6] mt-3" style={{ color: t.color, opacity: 0.75 }}>
              {t.note}
            </p>
          </div>
        </div>
      ))}
      <p className="text-xs italic text-cream/25 leading-[1.65] mt-3.5">{variegation.closing}</p>
    </TabContainer>
  );
}
