"use client";

import { useState, useRef, useEffect, useCallback, useMemo, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { PlantVariant, CinematicPanel as PanelData } from "@/data/types";
import { track } from "@vercel/analytics";
import {
  getPlantFullName,
  getPlantScientificName,
  getPlantVariantLabel,
} from "@/data/identity";
import { Navigation } from "@/components/Navigation";
import {
  OverviewTab,
  VariegationTab,
  CareTab,
  SubstrateTab,
  ProvenanceTab,
  PropagationTab,
  FitCheckTab,
  DownsidesTab,
  ShopTab,
  PhotoGalleryTab,
  FaqTab,
} from "./tabs";

// ---------------------------------------------------------------------------
// Background compositions per panel id
// ---------------------------------------------------------------------------
const BGSRC: Record<string, { base: string; glow1: string; glow2: string }> = {
  hero: {
    base: "linear-gradient(162deg,#010604 0%,#050f08 18%,#0c1e12 42%,#081507 68%,#030806 100%)",
    glow1: "radial-gradient(ellipse 68% 52% at 36% 26%,rgba(55,120,68,0.42) 0%,transparent 65%)",
    glow2: "radial-gradient(ellipse 38% 32% at 74% 70%,rgba(155,120,52,0.14) 0%,transparent 55%)",
  },
  variegation: {
    base: "linear-gradient(148deg,#010503 0%,#061009 20%,#0e1e12 46%,#09160c 72%,#030706 100%)",
    glow1: "radial-gradient(ellipse 52% 60% at 58% 38%,rgba(50,108,60,0.36) 0%,transparent 62%)",
    glow2: "radial-gradient(ellipse 48% 38% at 22% 62%,rgba(190,175,140,0.10) 0%,transparent 52%)",
  },
  origin: {
    base: "linear-gradient(155deg,#020705 0%,#071408 22%,#111f0e 50%,#0b190c 76%,#040a05 100%)",
    glow1: "radial-gradient(ellipse 72% 48% at 60% 42%,rgba(62,118,68,0.30) 0%,transparent 64%)",
    glow2: "radial-gradient(ellipse 42% 42% at 16% 72%,rgba(165,130,58,0.12) 0%,transparent 54%)",
  },
};

// ---------------------------------------------------------------------------
// Dynamic tab builder
// ---------------------------------------------------------------------------
interface TabDef {
  id: string;
  label: string;
}

function buildTabs(plant: PlantVariant): TabDef[] {
  const tabs: TabDef[] = [{ id: "overview", label: "Overview" }];
  if (plant.photos.length > 0) tabs.push({ id: "gallery", label: "Gallery" });
  if (plant.variegation) tabs.push({ id: "variegation", label: "Variegation" });
  tabs.push({ id: "care", label: "Care" });
  if (plant.substrate) tabs.push({ id: "substrate", label: "Substrate" });
  if (plant.provenance) tabs.push({ id: "provenance", label: "Provenance" });
  if (plant.propagation) tabs.push({ id: "propagation", label: "Propagation" });
  if (plant.faq) tabs.push({ id: "faq", label: "FAQ" });
  tabs.push({ id: "fit", label: "Fit Check" });
  tabs.push({ id: "downsides", label: "Downsides" });
  if (plant.recommendedProducts.length > 0) tabs.push({ id: "shop", label: "Shop" });
  return tabs;
}

function buildTabContent(plant: PlantVariant): Record<string, React.ReactNode> {
  const content: Record<string, React.ReactNode> = {
    overview: <OverviewTab plant={plant} />,
    gallery: <PhotoGalleryTab plant={plant} />,
    care: <CareTab plant={plant} />,
    fit: <FitCheckTab plant={plant} />,
    downsides: <DownsidesTab plant={plant} />,
    shop: <ShopTab plant={plant} />,
  };
  if (plant.variegation) content.variegation = <VariegationTab plant={plant} />;
  if (plant.substrate) content.substrate = <SubstrateTab plant={plant} />;
  if (plant.provenance) content.provenance = <ProvenanceTab plant={plant} />;
  if (plant.propagation) content.propagation = <PropagationTab plant={plant} />;
  if (plant.faq) content.faq = <FaqTab plant={plant} />;
  return content;
}

// ---------------------------------------------------------------------------
// Cinematic Panel
// ---------------------------------------------------------------------------
function CinematicPanel({ panel, isHero }: { panel: PanelData; isHero?: boolean }) {
  const bg = BGSRC[panel.id] ?? BGSRC.hero;

  return (
    <section className="relative overflow-hidden flex flex-col justify-end h-[100svh] snap-start snap-always">
      <div className="absolute inset-0">
        {panel.image ? (
          <>
            <Image src={panel.image} alt="" fill priority={isHero} className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-black/45" />
          </>
        ) : (
          <>
            <div className="absolute inset-0" style={{ background: bg.base }} />
            <div className="absolute inset-0" style={{ background: bg.glow1 }} />
            <div className="absolute inset-0" style={{ background: bg.glow2 }} />
          </>
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top,#111 0%,rgba(17,17,17,0.55) 28%,rgba(17,17,17,0.1) 58%,transparent 78%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(17,17,17,0.45) 0%,transparent 28%)" }} />
      </div>

      <motion.div
        className="relative z-10 px-6 pb-12 md:px-14 md:pb-[72px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {panel.eyebrow && (
          <p className="text-[9px] tracking-[0.42em] uppercase text-cream/25 mb-[18px]">{panel.eyebrow}</p>
        )}
        <h1 className="font-serif text-display-xl leading-[0.92] tracking-[-0.022em] mb-5 lg:text-[clamp(3rem,5vw,4.5rem)]">
          {panel.lines.map((line, i) => (
            <span
              key={i}
              className={`block ${panel.earthLine === i ? "text-earth-300" : "text-cream"} ${panel.italicLine === i ? "italic" : ""}`}
            >
              {line}
            </span>
          ))}
        </h1>
        {panel.sub && (
          <p className="text-[13px] lg:text-[14.5px] text-cream/40 leading-[1.78] max-w-[320px] lg:max-w-[520px] mb-[18px]">{panel.sub}</p>
        )}
        {panel.fact && (
          <div className="pt-4 border-t border-cream/[0.08]">
            <p className="text-[11.5px] lg:text-[13px] text-forest-300/75 leading-[1.6] italic">{panel.fact}</p>
          </div>
        )}
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// At a Glance
// ---------------------------------------------------------------------------
function AtAGlance({ plant }: { plant: PlantVariant }) {
  return (
    <section className="relative bg-deep border-t border-cream/[0.08] min-h-[100svh] snap-start snap-always flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_50%,rgba(25,65,32,0.18)_0%,transparent_70%)]" />
      <div className="relative z-10 py-[52px] px-6 lg:py-20 lg:px-14 max-w-[860px] lg:mx-auto">
        <p className="text-[9px] tracking-[0.42em] uppercase text-earth-300/50 mb-3.5">At a glance</p>
        <h2 className="font-serif text-display leading-[0.97] tracking-[-0.02em] text-cream mb-10">At a glance.</h2>

        <div className="grid grid-cols-2 lg:grid-cols-3">
          {plant.glance.map((s, i) => {
            const cols2 = i % 2 !== 0;
            const cols3 = i % 3 !== 0;
            const total = plant.glance.length;
            const lastRowStart2 = total - (total % 2 || 2);
            const lastRowStart3 = total - (total % 3 || 3);
            return (
              <div
                key={i}
                className={`py-[18px] px-3.5 lg:py-6 lg:px-7 ${cols2 ? "border-l border-cream/[0.08] lg:border-l-0" : ""} ${cols3 ? "lg:border-l lg:border-cream/[0.08]" : ""} ${i < lastRowStart2 ? "border-b border-cream/[0.08] lg:border-b-0" : ""} ${i < lastRowStart3 ? "lg:border-b lg:border-cream/[0.08]" : ""}`}
              >
                <p className="text-[8px] tracking-[0.42em] uppercase text-cream/15 mb-2 lg:mb-2.5">{s.label}</p>
                <p className="font-serif text-base lg:text-[1.1rem] text-cream/80 leading-[1.1] mb-1">{s.value}</p>
                {s.note && <p className="text-[11px] lg:text-xs text-cream/25 leading-[1.4]">{s.note}</p>}
              </div>
            );
          })}
        </div>

        <div className="mt-9 lg:mt-12 p-[18px] lg:p-[24px_28px] border border-cream/[0.08] rounded-[10px] bg-cream/[0.04]">
          <p className="font-serif text-[0.95rem] lg:text-[1.05rem] italic leading-[1.55] text-cream/40">
            &ldquo;{plant.verdict}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Sidebar (desktop)
// ---------------------------------------------------------------------------
function Sidebar({ active, onSelect, plant, tabs }: { active: string; onSelect: (id: string) => void; plant: PlantVariant; tabs: TabDef[] }) {
  const variant = getPlantVariantLabel(plant);
  const scientificName = getPlantScientificName(plant);

  return (
    <div className="w-[200px] flex-shrink-0 border-r border-cream/[0.08] bg-deep sticky top-0 self-start min-h-[500px]">
      <div className="p-[28px_24px_20px]">
        <p className="text-[9px] tracking-[0.42em] uppercase text-cream/15 mb-1.5">Plant file</p>
        <p className="font-serif text-[13px] text-cream/75 leading-[1.3]">{getPlantFullName(plant)}</p>
        {variant && (
          <p className="text-[9px] tracking-[0.18em] uppercase text-forest-300/70 mt-1.5">
            {variant}
          </p>
        )}
        <p className="font-serif text-xs italic text-cream/30 leading-[1.4] mt-1">{scientificName}</p>
      </div>
      <div className="border-t border-cream/[0.08] pt-1.5 pb-5">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => onSelect(t.id)}
            className={`block w-full text-left bg-transparent border-l-2 py-[9px] px-6 cursor-pointer text-xs tracking-[0.03em] font-sans transition-all duration-150 ${active === t.id ? "border-forest-300 text-forest-300" : "border-transparent text-cream/30 hover:text-cream/50"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Cinematic nav (shows during panels)
// ---------------------------------------------------------------------------
function CinematicNav({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Navigation />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ---------------------------------------------------------------------------
// Plant file header (shows during details section)
// ---------------------------------------------------------------------------
function PlantFileHeader({
  plant,
  active,
  onSelect,
  visible,
  tabs,
  onHeightChange,
}: {
  plant: PlantVariant;
  active: string;
  onSelect: (id: string) => void;
  visible: boolean;
  tabs: TabDef[];
  onHeightChange: (height: number) => void;
}) {
  const barRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const variant = getPlantVariantLabel(plant);
  const scientificName = getPlantScientificName(plant);

  useEffect(() => {
    if (!visible) return;
    const bar = barRef.current;
    if (!bar) return;
    const btn = bar.querySelector(`[data-id="${active}"]`) as HTMLElement | null;
    if (btn) btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }, [active, visible]);

  useEffect(() => {
    if (!visible) {
      onHeightChange(0);
      return;
    }

    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () => {
      onHeightChange(Math.ceil(header.getBoundingClientRect().height));
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);

    return () => observer.disconnect();
  }, [visible, onHeightChange, tabs.length]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={headerRef}
          className="fixed top-0 left-0 right-0 z-50 lg:hidden"
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}
        >
          <div className="bg-[rgba(15,15,15,0.98)] border-b border-cream/[0.08]">
            <div className="px-5 pt-3 pb-0">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-[9px] tracking-[0.42em] uppercase text-cream/20 mb-0.5">Plant file</p>
                  <p className="font-serif text-[15px] text-cream/80 leading-[1.2]">{getPlantFullName(plant)}</p>
                  {variant && (
                    <p className="text-[9px] tracking-[0.16em] uppercase text-forest-300/70 mt-1">
                      {variant}
                    </p>
                  )}
                  <p className="font-serif text-[12px] italic text-cream/45 mt-0.5">{scientificName}</p>
                </div>
                <Link href="/" className="text-[10px] tracking-[0.2em] uppercase text-cream/20 hover:text-cream/40 transition-colors">Atlas</Link>
              </div>
            </div>
            <div ref={barRef} className="overflow-x-auto flex" style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>
              <div className="flex px-3 min-w-max">
                {tabs.map((t) => (
                  <button
                    key={t.id} data-id={t.id} onClick={() => onSelect(t.id)}
                    className={`bg-transparent border-b-2 px-[11px] pt-[13px] pb-[11px] cursor-pointer whitespace-nowrap text-[11px] tracking-[0.03em] font-sans transition-all duration-150 ${active === t.id ? "border-forest-300 text-forest-300" : "border-transparent text-cream/25 hover:text-cream/40"}`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ---------------------------------------------------------------------------
// Details Section
// ---------------------------------------------------------------------------
function DetailsSection({
  plant,
  active,
  onSelect,
  detailsRef,
  mainRef,
  tabs,
  mobileHeaderHeight,
  inDetails,
}: {
  plant: PlantVariant;
  active: string;
  onSelect: (id: string) => void;
  detailsRef: React.RefObject<HTMLDivElement>;
  mainRef: React.RefObject<HTMLDivElement>;
  tabs: TabDef[];
  mobileHeaderHeight: number;
  inDetails: boolean;
}) {
  const tabContent = useMemo(() => buildTabContent(plant), [plant]);
  const contentRef = useRef<HTMLDivElement>(null);
  const mobileTopOffset = inDetails ? Math.max(mobileHeaderHeight + 8, 108) : 0;
  const contentStyle = {
    "--mobile-file-header-offset": `${mobileTopOffset}px`,
  } as CSSProperties;

  useEffect(() => {
    const content = contentRef.current;
    const main = mainRef.current;
    const details = detailsRef.current;

    if (content) content.scrollTo({ top: 0, behavior: "auto" });
    if (main && details) main.scrollTo({ top: details.offsetTop, behavior: "auto" });
  }, [active, detailsRef, mainRef]);

  return (
    <section ref={detailsRef} className="min-h-[100svh] snap-start snap-always border-t border-cream/[0.08] flex flex-col">
      <div className="lg:flex flex-1">
        <div className="hidden lg:block">
          <Sidebar active={active} onSelect={onSelect} plant={plant} tabs={tabs} />
        </div>
        <div
          ref={contentRef}
          style={contentStyle}
          className="flex-1 bg-charcoal overflow-y-auto pt-[var(--mobile-file-header-offset)] lg:pt-0"
        >
          {tabContent[active] ?? null}
        </div>
      </div>
      <div className="py-7 px-6 border-t border-cream/[0.08] flex justify-between items-center flex-shrink-0">
        <p className="text-[9px] tracking-[0.42em] uppercase text-cream/15">Rare Plant Atlas</p>
        <p className="font-serif text-[11px] italic text-cream/15">Cultivate with intention.</p>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Composition
// ---------------------------------------------------------------------------
export function PlantDetailClient({ plant }: { plant: PlantVariant }) {
  const mainRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const [inDetails, setInDetails] = useState(false);
  const [active, setActive] = useState("overview");
  const [mobileHeaderHeight, setMobileHeaderHeight] = useState(0);
  const tabs = useMemo(() => buildTabs(plant), [plant]);

  useEffect(() => {
    const el = mainRef.current;
    if (el) el.scrollTop = 0;
  }, []);

  useEffect(() => {
    const el = detailsRef.current;
    const root = mainRef.current;
    if (!el || !root) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setInDetails(entry.isIntersecting && entry.intersectionRatio > 0.15); },
      { root, threshold: [0.15] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const plantName = plant.identity.tradeName ?? plant.identity.slug;
  const handleTabSelect = useCallback((id: string) => {
    const label = tabs.find((t) => t.id === id)?.label ?? id;
    track("tab_clicked", { tab: label, plant: plantName });
    setActive(id);
  }, [tabs, plantName]);

  return (
    <>
      <CinematicNav visible={!inDetails} />
      <PlantFileHeader
        plant={plant}
        active={active}
        onSelect={handleTabSelect}
        visible={inDetails}
        tabs={tabs}
        onHeightChange={setMobileHeaderHeight}
      />
      <main ref={mainRef} className="h-[100svh] overflow-y-auto snap-y snap-mandatory hide-scrollbar">
        {plant.panels.map((panel, i) => (
          <CinematicPanel key={panel.id} panel={panel} isHero={i === 0} />
        ))}
        <AtAGlance plant={plant} />
        <DetailsSection
          plant={plant}
          active={active}
          onSelect={handleTabSelect}
          detailsRef={detailsRef}
          mainRef={mainRef}
          tabs={tabs}
          mobileHeaderHeight={mobileHeaderHeight}
          inDetails={inDetails}
        />
      </main>
    </>
  );
}
