"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { PlantVariant } from "@/data/types";

export function PhotoGalleryTab({ plant }: { plant: PlantVariant }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = plant.photos.find((p) => p.id === selectedId) ?? null;

  useEffect(() => {
    if (!selected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selected]);

  return (
    <div className="p-6 pb-11 lg:p-[36px_40px_56px]">
      <div className="max-w-[600px] mx-auto">
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.32em] uppercase text-earth-300/60 mb-2.5">
            Field Notes
          </p>
          <h2 className="font-serif text-[clamp(22px,4vw,38px)] italic font-normal text-cream/90 leading-[1.15] mb-2">
            Photo Gallery
          </h2>
          <p className="text-[13px] leading-[1.7] text-cream/35 max-w-[420px]">
            A visual reference across growth stages, variegation patterns, and
            anatomical detail from cultivated specimens.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-4">
          {plant.photos.map((photo) => (
            <article
              key={photo.id}
              className="flex flex-col group cursor-pointer"
            >
              <button
                type="button"
                onClick={() => setSelectedId(photo.id)}
                className="relative w-full aspect-square overflow-hidden rounded-[8px] cursor-zoom-in text-left"
              >
                <Image
                  src={photo.image}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(4,8,5,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2.5 right-2.5 w-[26px] h-[26px] rounded-full bg-[rgba(4,8,5,0.55)] border border-cream/[0.15] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M5 1H1v4M8 1h4v4M5 12H1V8M8 12h4V8"
                      stroke="rgba(250,247,242,0.7)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              <div className="pt-3 pb-5 border-b border-cream/[0.07]">
                <p className="font-serif text-[13.5px] italic text-cream/85 mb-1 leading-[1.35]">
                  {photo.caption}
                </p>
                <p className="text-[11.5px] leading-[1.7] text-cream/35">
                  {photo.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-[10px] tracking-[0.18em] uppercase text-cream/15 text-center mt-10">
          Philodendron gloriosum var. Type I - Cultivated specimens
        </p>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[200] bg-[rgba(4,8,5,0.96)] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={selected.caption}
        >
          <button
            type="button"
            onClick={() => setSelectedId(null)}
            className="absolute top-4 right-4 h-10 w-10 rounded-full border border-cream/[0.2] bg-black/35 text-cream/80 hover:text-cream hover:border-cream/[0.4] text-xl leading-none transition-colors z-[210]"
            aria-label="Close gallery image"
          >
            ×
          </button>

          <button
            type="button"
            onClick={() => setSelectedId(null)}
            className="absolute inset-0 cursor-default"
            aria-label="Close"
          />

          <div className="relative flex-1 min-h-0">
            <Image
              src={selected.image}
              alt={selected.caption}
              fill
              sizes="100vw"
              className="object-contain p-4 md:p-10"
              priority
            />
          </div>

          <div className="relative z-[205] bg-gradient-to-t from-black/90 to-black/40 px-5 py-4 md:px-8 md:py-5 border-t border-cream/[0.08]">
            <p className="font-serif text-[16px] italic text-cream/90 mb-1">
              {selected.caption}
            </p>
            <p className="text-[12px] leading-[1.7] text-cream/45 max-w-[900px]">
              {selected.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
