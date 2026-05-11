import Link from "next/link";
import Image from "next/image";
import type { FieldNotesPost } from "@/data/posts";

// Card preview for a Field Notes post. Used on /field-notes (index) and on
// the home page Field Notes section. Title rendered as a styled div, not a
// heading tag, so the same card slots cleanly under whatever section header
// the surrounding page uses (h3 on home, h1 on the index page).
export function FieldNotesCard({ post }: { post: FieldNotesPost }) {
  return (
    <Link
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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        <div
          className="font-serif text-[1.5rem] leading-[1.1] tracking-[-0.015em] mb-3"
          style={{ color: "#e8e0d0" }}
        >
          {post.title}
        </div>
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
  );
}
