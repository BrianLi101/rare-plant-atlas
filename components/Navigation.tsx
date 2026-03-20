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
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-black to-[#123322] overflow-hidden flex items-center justify-center">
              <img
                src="/icon.png"
                alt="Rare Plant Atlas icon"
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
            </div>
            <span className="font-serif text-lg tracking-tight text-cream/90 group-hover:text-cream transition-colors">
              Rare Plant Atlas
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
