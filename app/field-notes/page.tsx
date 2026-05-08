import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { fieldNotesPosts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Field Notes | Rare Plant Atlas",
  description:
    "Editorial guides on rare plant pricing, propagation, and provenance — from the Rare Plant Atlas team.",
  alternates: {
    canonical: "https://www.rareplantatlas.com/field-notes",
  },
};

export default function FieldNotesIndex() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0a0a08", color: "#e8e0d0" }}
    >
      <Navigation fixed={false} />

      <div
        className="pt-20 pb-16"
        style={{ padding: "clamp(80px,12vh,140px) clamp(20px,5vw,80px) 64px" }}
      >
        <div
          className="font-mono text-[9px] tracking-[0.25em] uppercase mb-3.5"
          style={{ color: "#b8975a" }}
        >
          Atlas / Field Notes
        </div>
        <h1
          className="font-serif font-bold leading-[0.95] tracking-[-0.025em] m-0 mb-[18px]"
          style={{ fontSize: "clamp(2.4rem,6vw,4.5rem)", color: "#e8e0d0" }}
        >
          Field <em className="font-normal" style={{ color: "#c4b89a" }}>Notes.</em>
        </h1>
        <p
          className="font-body leading-relaxed m-0 max-w-[520px] opacity-80"
          style={{ fontSize: "clamp(0.95rem,1.8vw,1.15rem)", color: "#c4b89a" }}
        >
          Editorial guides on rare-plant pricing, propagation, and provenance —
          longer reads to pair with the price index.
        </p>
      </div>

      <div
        className="grid gap-6 pb-24"
        style={{
          padding: "0 clamp(20px,5vw,80px) 100px",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        }}
      >
        {fieldNotesPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/field-notes/${post.slug}`}
            className="group relative block rounded-sm overflow-hidden"
            style={{
              background: "#1a1a16",
              border: "1px solid rgba(232,224,208,0.10)",
            }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.hero.src}
                alt={post.hero.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-80 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,10,8,0.85) 0%, rgba(10,10,8,0.2) 50%, transparent 100%)",
                }}
              />
            </div>
            <div className="px-6 pt-5 pb-6">
              <div
                className="font-mono text-[9px] tracking-[0.18em] uppercase mb-2"
                style={{ color: "#cdab79" }}
              >
                {post.category} · {post.publishedDisplay}
              </div>
              <h2
                className="font-serif text-[1.5rem] leading-[1.1] tracking-[-0.015em] mb-3"
                style={{ color: "#e8e0d0" }}
              >
                {post.title}
              </h2>
              <p
                className="font-body text-[0.95rem] leading-relaxed opacity-75 mb-4"
                style={{ color: "#c4b89a" }}
              >
                {post.subtitle}
              </p>
              <div
                className="font-mono text-[9px] tracking-[0.15em] uppercase opacity-50"
                style={{ color: "#c4b89a" }}
              >
                {post.readingMinutes} min read
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
