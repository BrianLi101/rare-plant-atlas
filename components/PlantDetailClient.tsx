"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Plant } from "@/data/plants";
import { FitEngine } from "./FitEngine";

function PlantHero({ plant }: { plant: Plant }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, ${plant.colors.gradient[0]} 0%, ${plant.colors.gradient[1]} 40%, ${plant.colors.primary} 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_30%,rgba(133,185,142,0.25)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(205,171,121,0.1)_0%,transparent_50%)]" />

        {/* Large decorative leaf silhouette */}
        <motion.svg
          viewBox="0 0 400 600"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[50vw] max-w-[500px] h-auto opacity-[0.06]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <path
            d="M200 30 C80 100, 30 250, 200 570 C370 250, 320 100, 200 30Z"
            fill="none"
            stroke="rgba(250,247,242,0.5)"
            strokeWidth="1.5"
          />
          <line
            x1="200"
            y1="60"
            x2="200"
            y2="530"
            stroke="rgba(250,247,242,0.3)"
            strokeWidth="0.8"
          />
          {[120, 170, 220, 270, 320, 370, 420].map((cy, i) => (
            <g key={i}>
              <line
                x1="200"
                y1={cy}
                x2={i % 2 === 0 ? "90" : "310"}
                y2={cy - 25}
                stroke="rgba(250,247,242,0.2)"
                strokeWidth="0.5"
              />
            </g>
          ))}
        </motion.svg>
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col justify-end h-full px-6 md:px-10 pb-20 md:pb-28 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        <motion.p
          className="text-xs tracking-[0.35em] uppercase text-forest-300/60 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {plant.rarity} &middot; {plant.family} &middot; {plant.origin}
        </motion.p>

        <motion.h1
          className="font-serif text-display-xl text-cream"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {plant.name}
        </motion.h1>

        <motion.p
          className="mt-2 text-sm text-cream/35 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {plant.binomial}
        </motion.p>

        <motion.p
          className="mt-6 text-base md:text-lg text-cream/50 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {plant.heroDescription}
        </motion.p>

        <motion.p
          className="mt-4 text-lg font-serif text-earth-300/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          &ldquo;{plant.tagline}&rdquo;
        </motion.p>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-charcoal to-transparent z-20" />
    </section>
  );
}

function StorySection({
  section,
  index,
}: {
  section: Plant["sections"][number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div
      ref={ref}
      className="relative py-24 md:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, delay: 0.1 }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } gap-10 md:gap-16 items-start`}
        >
          {/* Section number + title */}
          <motion.div className="md:w-1/3 flex-shrink-0" style={{ y }}>
            <p className="text-[10px] tracking-[0.5em] uppercase text-cream/20 mb-3">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="font-serif text-heading text-cream">
              {section.title}
            </h2>
            {section.accent && (
              <p className="mt-4 text-sm text-earth-400/70 italic border-l border-earth-400/20 pl-4">
                {section.accent}
              </p>
            )}
          </motion.div>

          {/* Body */}
          <div className="md:w-2/3">
            <p className="text-cream/45 leading-[1.85] text-[15px]">
              {section.body}
            </p>
          </div>
        </div>
      </div>

      {/* Subtle divider */}
      {index < 3 && <div className="section-divider mt-20" />}
    </motion.div>
  );
}

function CareGrid({ plant }: { plant: Plant }) {
  const careItems = [
    { label: "Light", value: plant.care.light.replace("-", " "), icon: "sun" },
    { label: "Humidity", value: plant.care.humidity, icon: "droplet" },
    {
      label: "Temperature",
      value: `${plant.care.temperature.min}–${plant.care.temperature.max}°${plant.care.temperature.unit}`,
      icon: "thermometer",
    },
    { label: "Watering", value: plant.care.watering, icon: "water" },
    { label: "Soil", value: plant.care.soil, icon: "layers" },
    { label: "Difficulty", value: plant.care.difficulty, icon: "gauge" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-earth-400/60 mb-4">
            Care Profile
          </p>
          <h2 className="font-serif text-display text-cream">
            What It Needs
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {careItems.map((item, i) => (
            <motion.div
              key={item.label}
              className="rounded-xl border border-cream/8 bg-cream/[0.02] p-5 space-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-[10px] tracking-[0.3em] uppercase text-cream/30">
                {item.label}
              </p>
              <p className="text-sm text-cream/70 capitalize leading-relaxed">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlantFitSection({ plant }: { plant: Plant }) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-forest-950/20 to-charcoal" />
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-earth-400/60 mb-4">
            Your Assessment
          </p>
          <h2 className="font-serif text-display text-cream">
            Is This Plant For You?
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <FitEngine plant={plant} />
      </div>
    </section>
  );
}

export function PlantDetailClient({ plant }: { plant: Plant }) {
  return (
    <main>
      <PlantHero plant={plant} />
      {plant.sections.map((section, i) => (
        <StorySection key={section.title} section={section} index={i} />
      ))}
      <CareGrid plant={plant} />
      <PlantFitSection plant={plant} />
    </main>
  );
}
