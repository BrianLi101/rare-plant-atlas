import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import {
  fieldNotesPosts,
  getPostBySlug,
  type FieldNotesPost,
  type PostBodyBlock,
} from "@/data/posts";
import { formatUsd } from "@/data/price";
import "./post.css";

export function generateStaticParams() {
  return fieldNotesPosts.map((p) => ({ slug: p.slug }));
}

// Slugify a heading into an anchor id. Lowercase, replace runs of
// non-alphanumeric with a single dash, strip leading/trailing dashes.
// Deterministic and stable across renders.
function headingId(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Not Found" };

  const title = `${post.title} | Field Notes — Rare Plant Atlas`;
  const description = post.subtitle;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.rareplantatlas.com/field-notes/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedISO,
      images: [{ url: post.hero.src, alt: post.hero.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.hero.src],
    },
  };
}

function renderBlock(block: PostBodyBlock, idx: number) {
  switch (block.type) {
    case "paragraph":
      if (block.drop) {
        const first = block.text.charAt(0);
        const rest = block.text.slice(1);
        return (
          <p key={idx} className="fn-p">
            <span className="fn-dropcap" aria-hidden>
              {first}
            </span>
            {rest}
          </p>
        );
      }
      return (
        <p key={idx} className="fn-p">
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h2 key={idx} id={headingId(block.text)} className="fn-h2">
          {block.text}
        </h2>
      );

    case "figure": {
      const portrait = block.layout === "portrait";
      return (
        <figure key={idx} className="fn-fig">
          <div className={`fn-fig-img${portrait ? " fn-fig-img--portrait" : ""}`}>
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes={portrait ? "(max-width: 720px) 80vw, 360px" : "(max-width: 720px) 100vw, 720px"}
              className={portrait ? "object-contain" : "object-cover"}
            />
          </div>
          <figcaption>{block.caption}</figcaption>
        </figure>
      );
    }

    case "list":
      return (
        <ul key={idx} className="fn-list">
          {block.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );

    case "compare":
      return (
        <div key={idx} className="fn-compare">
          <div className="fn-compare-head">
            <div>Stage</div>
            <div>Range</div>
            <div>What you actually get</div>
            <div>Trade-off</div>
          </div>
          {block.rows.map((r, j) => (
            <div key={j} className="fn-compare-row">
              <div className="fn-c-stage">{r.label}</div>
              <div className="fn-c-price">{r.range}</div>
              <div className="fn-c-what">{r.what}</div>
              <div className="fn-c-trade">{r.tradeoff}</div>
            </div>
          ))}
        </div>
      );

    case "note":
      return (
        <div key={idx} className="fn-note">
          <p>{block.text}</p>
          {(block.cta || block.secondaryCta) && (
            <div className="fn-note-ctas">
              {block.cta && (
                <Link href={block.cta.href} className="fn-note-cta">
                  {block.cta.label}
                </Link>
              )}
              {block.secondaryCta && (
                <Link
                  href={block.secondaryCta.href}
                  className="fn-note-cta fn-note-cta-secondary"
                >
                  {block.secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      );

    default:
      return null;
  }
}

function PostHeader({ post }: { post: FieldNotesPost }) {
  return (
    <header className="fn-head">
      <div className="fn-head-inner">
        <div className="fn-breadcrumb">
          <Link href="/">Atlas</Link>
          <span className="sep">/</span>
          <Link href="/field-notes">Field Notes</Link>
          <span className="sep">/</span>
          <span style={{ color: "var(--cream)" }}>{post.category}</span>
        </div>
        <div className="fn-eyebrow">
          {post.category}
          {post.issueLabel ? ` · ${post.issueLabel}` : ""}
        </div>
        <h1 className="fn-title">{post.title}</h1>
        <p className="fn-subtitle">{post.subtitle}</p>
        <div className="fn-meta-row">
          <div className="fn-byline">
            <span className="fn-avatar" aria-hidden>
              {post.author.initials}
            </span>
            <div>
              <div className="fn-byname">By {post.author.name}</div>
              <div className="fn-byrole">{post.author.role}</div>
            </div>
          </div>
          <div className="fn-meta-right">
            <div>
              <span className="k">Published</span> {post.publishedDisplay}
            </div>
            <div>
              <span className="k">Reading</span> {post.readingMinutes} min
            </div>
          </div>
        </div>
      </div>
      {post.hero.layout === "portrait" && post.hero.width && post.hero.height ? (
        <div className="fn-hero-img fn-hero-img--portrait">
          <Image
            src={post.hero.src}
            alt={post.hero.alt}
            width={post.hero.width}
            height={post.hero.height}
            priority
            sizes="(max-width: 720px) 90vw, 720px"
            className="fn-hero-img-intrinsic"
          />
        </div>
      ) : (
        <div className="fn-hero-img">
          <Image
            src={post.hero.src}
            alt={post.hero.alt}
            fill
            priority
            sizes="(max-width: 1240px) 100vw, 1240px"
            className="object-cover"
          />
        </div>
      )}
      <div
        className={`fn-hero-cap${
          post.hero.layout === "portrait" ? " fn-hero-cap--portrait" : ""
        }`}
      >
        <span>Plate I.</span> {post.hero.caption}
      </div>
    </header>
  );
}

function PostFooter({ post }: { post: FieldNotesPost }) {
  return (
    <footer className="fn-foot">
      <div className="fn-foot-row">
        <div className="k">Tags</div>
        <div className="fn-tags">
          {post.tags.map((t) => (
            <span key={t} className="fn-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="fn-foot-row">
        <div className="k">Plants mentioned</div>
        <div className="fn-plants">
          {post.plantsMentioned.map((p) => (
            <Link key={p.slug} href={p.href} className="fn-plant-chip">
              <span className="fn-pc-name">{p.name}</span>
              <span className="fn-pc-price">{formatUsd(p.typical)}</span>
            </Link>
          ))}
        </div>
      </div>
      {post.methodology && (
        <div className="fn-foot-row">
          <div className="k">Methodology</div>
          <div className="fn-meth">
            {post.methodology}{" "}
            <Link href="/prices" className="fn-meth-link">
              See live price index →
            </Link>
          </div>
        </div>
      )}
    </footer>
  );
}

export default function FieldNotesPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.subtitle,
          datePublished: post.publishedISO,
          author: { "@type": "Person", name: post.author.name },
          publisher: {
            "@type": "Organization",
            name: "Rare Plant Atlas",
            url: "https://www.rareplantatlas.com",
          },
          image: `https://www.rareplantatlas.com${post.hero.src}`,
          mainEntityOfPage: `https://www.rareplantatlas.com/field-notes/${post.slug}`,
          keywords: post.tags.join(", "),
          ...(post.mentions && post.mentions.length > 0
            ? {
                mentions: post.mentions.map((m) => ({
                  "@type": "WebSite",
                  name: m.name,
                  url: m.url,
                  ...(m.description ? { description: m.description } : {}),
                  ...(m.sameAs && m.sameAs.length > 0
                    ? { sameAs: m.sameAs }
                    : {}),
                })),
              }
            : {}),
        }}
      />
      {post.mentions?.map((m) => (
        <JsonLd
          key={m.url}
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: m.name,
            url: m.url,
            ...(m.description ? { description: m.description } : {}),
            ...(m.sameAs && m.sameAs.length > 0 ? { sameAs: m.sameAs } : {}),
          }}
        />
      ))}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.rareplantatlas.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Field Notes",
              item: "https://www.rareplantatlas.com/field-notes",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: post.title,
              item: `https://www.rareplantatlas.com/field-notes/${post.slug}`,
            },
          ],
        }}
      />
      <div className="fn">
        <Navigation fixed={false} />
        <PostHeader post={post} />
        <article className="fn-body">
          {post.body.map((block, i) => renderBlock(block, i))}
        </article>
        <PostFooter post={post} />
        <SiteFooter />
      </div>
    </>
  );
}
