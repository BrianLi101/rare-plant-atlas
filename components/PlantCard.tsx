"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { PlantVariant } from "@/data/plants";

export function PlantCard({ plant }: { plant: PlantVariant }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/plants/${plant.slug}`}
        className="group block relative overflow-hidden rounded-2xl"
      >
        {/* Card background */}
        <div
          className="aspect-[3/4] md:aspect-[4/5] relative"
          style={{
            background: `linear-gradient(135deg, ${plant.colors.gradient[0]}, ${plant.colors.gradient[1]})`,
          }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(133,185,142,0.2)_0%,transparent_70%)]" />

          {/* Leaf-shaped decorative SVG */}
          <motion.svg
            viewBox="0 0 200 300"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] opacity-[0.12]"
            initial={false}
          >
            <motion.path
              d="M100 20 C40 60, 20 140, 100 280 C180 140, 160 60, 100 20Z"
              fill="none"
              stroke="rgba(250,247,242,0.4)"
              strokeWidth="1"
              className="group-hover:stroke-forest-300/50 transition-all duration-700"
            />
            <motion.line
              x1="100"
              y1="40"
              x2="100"
              y2="260"
              stroke="rgba(250,247,242,0.2)"
              strokeWidth="0.5"
            />
            {[60, 90, 120, 150, 180, 210].map((cy, i) => (
              <motion.line
                key={i}
                x1="100"
                y1={cy}
                x2={i % 2 === 0 ? "55" : "145"}
                y2={cy - 15}
                stroke="rgba(250,247,242,0.15)"
                strokeWidth="0.5"
              />
            ))}
          </motion.svg>

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.3em] uppercase text-cream/40">
                {plant.rarity}
              </p>
              <h3 className="font-serif text-heading text-cream group-hover:text-gradient transition-all duration-500">
                {plant.name}
              </h3>
              <p className="text-sm text-cream/50 italic">{plant.binomial}</p>
              <p className="text-sm text-cream/40 leading-relaxed max-w-sm line-clamp-2">
                {plant.heroDescription}
              </p>

              {/* Traits */}
              <div className="flex flex-wrap gap-2 pt-2">
                {plant.traits.slice(0, 3).map((trait) => (
                  <span
                    key={trait}
                    className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border border-cream/10 text-cream/35"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="mt-6 flex items-center gap-2 text-sm text-forest-300/70 group-hover:text-forest-200 transition-colors duration-500"
              whileHover={{ x: 4 }}
            >
              <span className="tracking-widest uppercase text-xs">
                Explore
              </span>
              <span className="text-lg">→</span>
            </motion.div>
          </div>

          {/* Hover gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </Link>
    </motion.div>
  );
}
