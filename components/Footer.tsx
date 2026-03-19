"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-20 px-6 md:px-10 border-t border-cream/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-forest-500 to-forest-800" />
          <span className="font-serif text-sm text-cream/40">
            Rare Plant Atlas
          </span>
        </motion.div>
        <p className="text-xs text-cream/20 tracking-wider">
          Cultivate with intention.
        </p>
      </div>
    </footer>
  );
}
