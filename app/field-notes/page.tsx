import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { FieldNotesCard } from "@/components/FieldNotesCard";
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
      </div>

      <div
        className="grid gap-6 pb-24"
        style={{
          padding: "0 clamp(20px,5vw,80px) 100px",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        }}
      >
        {fieldNotesPosts.map((post) => (
          <FieldNotesCard key={post.slug} post={post} />
        ))}
      </div>

      <SiteFooter />
    </div>
  );
}
