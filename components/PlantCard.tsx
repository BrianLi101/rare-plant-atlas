"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { PlantFile } from "@/data/plants";
import {
  getPlantFullName,
  getPlantVariantLabel,
} from "@/data/identity";
import {
  getPlantPlaceholderVariant,
  PlantPlaceholder,
} from "@/components/PlantPlaceholder";

function hexToRgba(hex: string, alpha: number): string {
  const cleaned = hex.replace("#", "");
  const normalized =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((c) => c + c)
          .join("")
      : cleaned;
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function PlantCard({ plant }: { plant: PlantFile }) {
  const variant = getPlantVariantLabel(plant);
  const heroImage = plant.panels[0]?.image;
  const hasHeroImage = Boolean(heroImage);
  const accent = plant.colors.accent || "#85b98e";
  const accentSoft = hexToRgba(accent, 0.5);
  const accentMid = hexToRgba(accent, 0.3);
  const accentStrong = hexToRgba(accent, 0.75);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/plants/${plant.identity.slug}`}
        className="group block relative overflow-hidden rounded-[18px]"
      >
        <div className="aspect-[3/4] md:aspect-[4/5] relative">
          {heroImage ? (
            <Image
              src={heroImage}
              alt={getPlantFullName(plant)}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
          ) : (
            <PlantPlaceholder
              accent={accent}
              variant={getPlantPlaceholderVariant(plant.identity.genus)}
              label={`${getPlantFullName(plant)} placeholder image`}
            />
          )}

          {hasHeroImage && (
            <>
              <svg
                viewBox="0 0 400 533"
                className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
                preserveAspectRatio="xMidYMid slice"
              >
                <ellipse
                  cx="200"
                  cy="160"
                  rx="120"
                  ry="200"
                  fill="none"
                  stroke={accent}
                  strokeWidth="1"
                />
                <line
                  x1="200"
                  y1="0"
                  x2="200"
                  y2="360"
                  stroke={accent}
                  strokeWidth="0.6"
                />
                <line
                  x1="200"
                  y1="80"
                  x2="110"
                  y2="120"
                  stroke={accent}
                  strokeWidth="0.5"
                />
                <line
                  x1="200"
                  y1="110"
                  x2="290"
                  y2="150"
                  stroke={accent}
                  strokeWidth="0.5"
                />
                <line
                  x1="200"
                  y1="140"
                  x2="100"
                  y2="190"
                  stroke={accent}
                  strokeWidth="0.5"
                />
                <line
                  x1="200"
                  y1="175"
                  x2="300"
                  y2="215"
                  stroke={accent}
                  strokeWidth="0.5"
                />
                <line
                  x1="200"
                  y1="210"
                  x2="105"
                  y2="260"
                  stroke={accent}
                  strokeWidth="0.5"
                />
                <line
                  x1="200"
                  y1="250"
                  x2="295"
                  y2="290"
                  stroke={accent}
                  strokeWidth="0.5"
                />
                <ellipse
                  cx="200"
                  cy="120"
                  rx="55"
                  ry="85"
                  fill={accentSoft}
                />
              </svg>

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 70% 50% at 40% 30%, ${accentMid} 0%, transparent 65%)`,
                }}
              />
            </>
          )}

          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none"
            style={{
              height: "65%",
              background:
                "linear-gradient(to top, rgba(10,10,10,0.98) 0%, rgba(14,22,16,0.82) 30%, rgba(16,26,18,0.45) 55%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none"
            style={{
              height: "40%",
              background:
                "linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(9,12,9,0.9) 30%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

          <div className="absolute inset-0 flex flex-col justify-between p-5">
            <div className="flex items-start justify-between">
              <span className="text-[8.5px] tracking-[0.38em] uppercase text-cream/40 px-[11px] py-[5px] rounded-full border border-cream/[0.12] bg-black/25">
                {plant.rarity}
              </span>
            </div>

              <div className="flex flex-col gap-1.5">
              <h3 className="font-serif text-[clamp(1.1rem,2.5vw,1.5rem)] leading-[1.1] tracking-[-0.015em] text-cream m-0">
                {getPlantFullName(plant)}
              </h3>

              {variant && (
                <p
                  className="font-serif text-[13px] md:text-[14px] leading-[1.2] m-0"
                  style={{ color: accentStrong }}
                >
                  {variant}
                </p>
              )}

              <div className="flex flex-wrap gap-[5px] pt-0.5">
                {plant.traits.slice(0, 2).map((trait) => (
                  <span
                    key={trait}
                    className="text-[8px] tracking-[0.18em] uppercase px-[9px] py-1 rounded-full border border-cream/[0.1] text-cream/30"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              <div className="pt-1.5 flex items-center gap-1.5">
                <span
                  className="text-[9.5px] tracking-[0.3em] uppercase transition-colors duration-500"
                  style={{ color: hexToRgba(accent, 0.5) }}
                >
                  Explore
                </span>
                <motion.span
                  className="transition-colors duration-500 text-[13px]"
                  style={{ color: hexToRgba(accent, 0.5) }}
                  animate={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >
                  →
                </motion.span>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 rounded-[18px] shadow-[inset_0_0_0_1px_rgba(250,247,242,0.06)] pointer-events-none" />
        </div>
      </Link>
    </motion.div>
  );
}
