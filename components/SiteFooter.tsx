import Link from "next/link";
import { plants } from "@/data/plants";
import { listings } from "@/data/listings";

// Shared site-wide footer. Lives on the home page, the field-notes index,
// and individual posts. Server component — pulls genera from the catalog
// so the nav stays in sync as new plants are added.
export function SiteFooter() {
  const uniqueGenera = Array.from(
    new Set([
      ...plants.map((p) => p.identity.genus),
      ...listings.map((l) => l.identity.genus),
    ])
  ).sort();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(232,224,208,0.10)",
        padding: "32px clamp(20px,5vw,80px) 24px",
      }}
    >
      <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
        <div>
          <div
            className="font-mono text-[8px] tracking-[0.18em] uppercase opacity-40 mb-2"
            style={{ color: "#b8975a" }}
          >
            Explore
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <Link
              href="/glossary"
              className="font-mono text-[10px] tracking-[0.12em] uppercase opacity-50 hover:opacity-80 transition-opacity"
              style={{ color: "#c4b89a" }}
            >
              Glossary
            </Link>
            <Link
              href="/prices"
              className="font-mono text-[10px] tracking-[0.12em] uppercase opacity-50 hover:opacity-80 transition-opacity"
              style={{ color: "#c4b89a" }}
            >
              Price Index
            </Link>
            <Link
              href="/field-notes"
              className="font-mono text-[10px] tracking-[0.12em] uppercase opacity-50 hover:opacity-80 transition-opacity"
              style={{ color: "#c4b89a" }}
            >
              Field Notes
            </Link>
            {uniqueGenera.map((genus) => (
              <Link
                key={genus}
                href={`/genus/${genus.toLowerCase()}`}
                className="font-mono text-[10px] tracking-[0.12em] uppercase opacity-50 hover:opacity-80 transition-opacity"
                style={{ color: "#c4b89a" }}
              >
                {genus}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div
        className="h-px mb-4"
        style={{ background: "rgba(232,224,208,0.06)" }}
      />

      <div className="flex justify-between items-center flex-wrap gap-3">
        <div
          className="font-mono text-[9px] tracking-[0.15em] uppercase opacity-30"
          style={{ color: "#c4b89a" }}
        >
          Rare Plant Atlas &copy; 2026
        </div>
        <div
          className="font-mono text-[9px] tracking-[0.12em] uppercase opacity-30"
          style={{ color: "#c4b89a" }}
        >
          Cultivate with intention.
        </div>
      </div>
    </footer>
  );
}
