"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden">
      {/* Background gradient simulating full-bleed plant imagery */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900/80 to-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(45,100,59,0.4)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(205,171,121,0.15)_0%,transparent_60%)]" />
        {/* Decorative botanical shapes */}
        <motion.div
          className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, rgba(133,185,142,1) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, rgba(205,171,121,1) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.08, 1], rotate: [0, -2, 0] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
        style={{ y: textY, opacity }}
      >
        <motion.p
          className="text-xs md:text-sm tracking-[0.35em] uppercase text-forest-300/70 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A Botanical Experience
        </motion.p>

        <motion.h1
          className="font-serif text-display-xl text-cream max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Rare Plant
          <br />
          <span className="text-gradient">Atlas</span>
        </motion.h1>

        <motion.p
          className="mt-6 md:mt-8 text-base md:text-lg text-cream/50 max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          In-depth guides to extraordinary plants. Cultivate with intention.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <a
            href="#featured"
            className="group inline-flex items-center gap-2 text-sm tracking-widest uppercase text-forest-300/80 hover:text-forest-200 transition-colors duration-500"
          >
            <span>Explore</span>
            <motion.span
              className="inline-block"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent z-20" />
    </section>
  );
}
