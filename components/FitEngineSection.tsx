"use client";

import { motion } from "framer-motion";
import { FitEngine } from "./FitEngine";
import { plants } from "@/data/plants";

export function FitEngineSection() {
  return (
    <section id="fit-engine" className="relative py-32 md:py-40 px-6 md:px-10">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-forest-950/30 to-charcoal" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-earth-400/60 mb-4">
            Interactive Tool
          </p>
          <h2 className="font-serif text-display text-cream">Fit Engine</h2>
          <p className="mt-4 text-cream/40 max-w-lg mx-auto leading-relaxed">
            Score how well a rare plant matches your environment and experience.
            Honest assessment, no wishful thinking.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        <FitEngine plant={plants[0]} />
      </div>
    </section>
  );
}
