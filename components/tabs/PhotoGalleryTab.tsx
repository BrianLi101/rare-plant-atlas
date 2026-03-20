"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { PlantVariant } from "@/data/types";

export function PhotoGalleryTab({ plant }: { plant: PlantVariant }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const selected = activeIndex !== null ? plant.photos[activeIndex] ?? null : null;
  const isModalOpen = selected !== null;

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const navigate = useCallback(
    (direction: -1 | 1) => {
      setActiveIndex((current) => {
        if (current === null) return current;
        const next = current + direction;
        if (next < 0 || next >= plant.photos.length) return current;
        return next;
      });
    },
    [plant.photos.length]
  );

  useEffect(() => {
    if (!isModalOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowRight") navigate(1);
      if (event.key === "ArrowLeft") navigate(-1);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModal, isModalOpen, navigate]);

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
          {plant.photos.map((photo, index) => (
            <article
              key={photo.id}
              className="flex flex-col group cursor-pointer"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
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
          className="fixed inset-0 z-[220] bg-[rgba(3,6,4,0.97)] flex flex-col md:flex-row items-stretch"
          role="dialog"
          aria-modal="true"
          aria-label={selected.caption}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-5 right-5 h-9 w-9 rounded-full border border-cream/[0.1] bg-cream/[0.06] text-cream/50 hover:bg-cream/[0.12] hover:text-cream/90 transition-colors z-[230] flex items-center justify-center"
            aria-label="Close gallery image"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div
            className="relative h-[67svh] basis-[67svh] min-h-[67svh] md:h-auto md:min-h-0 md:basis-auto md:flex-1 p-0 md:p-[48px_32px_48px_48px] flex items-center justify-center"
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
              const delta = endX - touchStartX.current;
              touchStartX.current = null;
              if (Math.abs(delta) < 50) return;
              navigate(delta < 0 ? 1 : -1);
            }}
          >
            <div className="relative h-full w-full">
              <Image
                src={selected.image}
                alt={selected.caption}
                fill
                sizes="100vw"
                className="object-cover md:object-contain rounded-none md:rounded-[10px]"
                priority
              />
            </div>
          </div>

          <div className="w-full h-[33svh] min-h-[33svh] max-h-[33svh] md:w-[300px] md:h-auto md:min-h-0 md:max-h-none md:flex-shrink-0 border-t md:border-t-0 md:border-l border-cream/[0.06] p-[10px_14px_12px] md:p-[48px_44px_48px_28px] flex flex-col justify-start md:justify-center overflow-y-auto">
            <p className="text-[9px] md:text-[10px] tracking-[0.22em] md:tracking-[0.28em] uppercase text-earth-300/55 mb-2 md:mb-6">
              {activeIndex !== null ? `${activeIndex + 1} / ${plant.photos.length}` : ""}
            </p>
            <p className="font-serif text-[16px] md:text-[21px] italic text-cream/90 leading-[1.2] md:leading-[1.25] mb-2 md:mb-3">
              {selected.caption}
            </p>
            <p className="text-[12px] md:text-[13px] leading-[1.55] md:leading-[1.75] text-cream/40 mb-2.5 md:mb-9">
              {selected.description}
            </p>

            <div className="flex items-center gap-2 mb-2.5 md:mb-5">
              <button
                type="button"
                onClick={() => navigate(-1)}
                disabled={activeIndex === 0}
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-cream/[0.05] border border-cream/[0.1] text-cream/60 hover:bg-cream/[0.1] hover:border-cream/[0.22] hover:text-cream/90 disabled:opacity-20 disabled:cursor-default transition-colors flex items-center justify-center"
                aria-label="Previous image"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M10 3L5 8l5 5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => navigate(1)}
                disabled={activeIndex === plant.photos.length - 1}
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-cream/[0.05] border border-cream/[0.1] text-cream/60 hover:bg-cream/[0.1] hover:border-cream/[0.22] hover:text-cream/90 disabled:opacity-20 disabled:cursor-default transition-colors flex items-center justify-center"
                aria-label="Next image"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M6 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              {plant.photos.map((photo, index) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-[5px] w-[5px] rounded-full transition-all ${index === activeIndex ? "bg-earth-300/80 scale-[1.3]" : "bg-cream/20 hover:bg-cream/35"}`}
                  aria-label={`Open image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
