"use client";

import { motion } from "framer-motion";
import { plants } from "@/data/plants";
import { PlantCard } from "./PlantCard";

export function FeaturedSection() {
  return (
    <section id="featured" className="relative py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-earth-400/60 mb-4">
            Collection
          </p>
          <h2 className="font-serif text-display text-cream">
            Featured Plants
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {plants.map((plant) => (
            <PlantCard key={plant.identity.slug} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
}
