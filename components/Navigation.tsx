"use client";

import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient fade -- no solid color */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(17,17,17,0.6) 0%, rgba(17,17,17,0.3) 50%, transparent 100%)",
        }}
      />
      <div className="relative px-6 py-4 md:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-forest-400 to-forest-700 group-hover:from-forest-300 group-hover:to-forest-600 transition-all duration-500" />
            <span className="font-serif text-lg tracking-tight text-cream/90 group-hover:text-cream transition-colors">
              Rare Plant Atlas
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide text-cream/50">
            <Link
              href="/"
              className="hover:text-cream/90 transition-colors duration-300"
            >
              Atlas
            </Link>
            <Link
              href="/#fit-engine"
              className="hover:text-cream/90 transition-colors duration-300"
            >
              Fit Engine
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
