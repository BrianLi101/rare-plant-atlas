"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Variegation Analysis",
    description:
      "Understand how variegation expresses, stabilizes, and affects long-term plant value.",
  },
  {
    title: "Honest Evaluation",
    description:
      "Realistic pricing, propagation success rates, and downsides — not just pretty photos.",
  },
  {
    title: "Collector Depth",
    description:
      "Provenance, genetics, substrate science, and fit scoring for your specific environment.",
  },
];

export function ValueProp() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-earth-400/60 mb-4">
            Why Rare Plant Atlas
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="font-serif text-lg text-cream mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-cream/40 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
