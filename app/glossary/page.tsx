import { Navigation } from "@/components/Navigation";
import { JsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";

// SEO/GEO: Glossary/encyclopedia pages with definitional content get cited
// constantly by AI systems when users ask what terms mean. Short, dense,
// authoritative definitions are the ideal format.

export const metadata: Metadata = {
  title: "Rare Plant Glossary | Rare Plant Atlas",
  description:
    "Definitions of rare plant terminology: chimeric variegation, tissue culture, fenestration, corm propagation, and more. A collector's reference.",
  alternates: {
    canonical: "https://www.rareplantatlas.com/glossary",
  },
};

interface GlossaryEntry {
  term: string;
  definition: string;
  related?: string[];
}

const GLOSSARY_ENTRIES: GlossaryEntry[] = [
  {
    term: "Aroid",
    definition:
      "A plant in the family Araceae. Includes genera like Monstera, Philodendron, Anthurium, Alocasia, and Pothos. Aroids are the most commonly collected rare houseplant family.",
    related: ["Araceae", "Hemiepiphyte"],
  },
  {
    term: "Araceae",
    definition:
      "The arum family — one of the largest monocot families, containing roughly 3,750 species across 114 genera. Characterized by a spathe-and-spadix inflorescence. Most collector plants on Rare Plant Atlas belong to this family.",
  },
  {
    term: "Chimeric variegation",
    definition:
      "Variegation caused by a genetic mutation in some but not all cells of a plant, creating sectors of tissue with and without chlorophyll. Unstable — expression varies leaf to leaf and can revert. Monstera albo and Philodendron gloriosum Type 1 are classic examples.",
    related: ["Stable variegation", "Sectoral variegation", "Reversion"],
  },
  {
    term: "Corm",
    definition:
      "A small, bulb-like dormant propagule produced at the base of certain plants, especially Alocasia. Can be separated and grown into independent plants. The primary propagation method for jewel Alocasias.",
    related: ["Propagation", "Offset"],
  },
  {
    term: "Crown cutting",
    definition:
      "A propagation cut that removes the growing tip (crown) of a plant, forcing the remaining stem to produce new growth points. Used in Philodendron and Monstera propagation. The crown typically roots and grows faster than the stump.",
  },
  {
    term: "Cultivar",
    definition:
      "A plant variety produced by selective breeding or clonal propagation that maintains distinct characteristics. Written in single quotes — e.g., Anthurium 'Delta Force'. Not a naturally occurring variant.",
  },
  {
    term: "E-E-A-T",
    definition:
      "Experience, Expertise, Authoritativeness, and Trustworthiness — Google's quality evaluation framework. In rare plant content, E-E-A-T is demonstrated through original data, cited sources, and firsthand growing experience.",
  },
  {
    term: "Fenestration",
    definition:
      "Natural holes or splits in leaves, most commonly associated with mature Monstera. Fenestrations increase with leaf maturity and are thought to help leaves resist wind damage and capture dappled light on the forest floor.",
  },
  {
    term: "Half-moon",
    definition:
      "A variegation pattern where roughly half of a leaf is variegated and half is green, split along or near the midrib. Highly sought after in chimeric variegated plants but inherently unstable — the next leaf may look completely different.",
    related: ["Chimeric variegation", "Sectoral variegation"],
  },
  {
    term: "Hemiepiphyte",
    definition:
      "A plant that spends part of its life as an epiphyte (growing on another plant) and part terrestrially. Many aroids start as ground seedlings, climb a tree, then lose their ground connection. Relevant to substrate and support choices in cultivation.",
  },
  {
    term: "Inflorescence",
    definition:
      "The flowering structure of a plant. In aroids, this consists of a spathe (modified leaf) surrounding a spadix (spike of tiny flowers). Many collector aroids flower in cultivation but are primarily grown for foliage.",
  },
  {
    term: "Internode",
    definition:
      "The stem section between two nodes. Short internodes produce compact growth; long (leggy) internodes indicate insufficient light. Internode length affects propagation — each cutting needs at least one node.",
    related: ["Node"],
  },
  {
    term: "LECA",
    definition:
      "Lightweight Expanded Clay Aggregate — baked clay balls used as an inert growing medium in semi-hydroponic setups. Provides excellent aeration and consistent moisture when used with a water reservoir. Popular for aroids.",
    related: ["Semi-hydro", "Pon"],
  },
  {
    term: "Meristem",
    definition:
      "Undifferentiated plant tissue capable of cell division and growth. Found at growth tips and nodes. In tissue culture, meristematic tissue is used to clone plants. Variegation in the meristem determines whether future growth will be variegated.",
  },
  {
    term: "Node",
    definition:
      "The point on a stem where leaves, aerial roots, and new growth emerge. Every viable cutting must include at least one node. In Philodendron gloriosum, nodes appear as white bumps on the rhizome.",
    related: ["Internode", "Propagation"],
  },
  {
    term: "Offset",
    definition:
      "A new plant that grows from the base of a parent plant, eventually developing its own root system. Also called a pup. Common in Alocasia, Anthurium, and many other aroids. Can be separated once roots are established.",
    related: ["Corm", "Propagation"],
  },
  {
    term: "Pon",
    definition:
      "A mineral substrate mix (typically pumice, zeolite, and lava rock) marketed by Lechuza. Used in self-watering planters for consistent moisture and root-zone stability. Popular alternative to soil-based mixes for aroids.",
    related: ["LECA", "Semi-hydro"],
  },
  {
    term: "Propagation",
    definition:
      "The process of creating new plants from an existing one. Methods include stem cuttings, rhizome division, corm separation, air layering, and tissue culture. Each species has preferred methods with different success rates.",
  },
  {
    term: "Reversion",
    definition:
      "When a variegated plant produces new growth that is fully green, losing the variegation pattern. Common in chimeric variegation. Does not always mean permanent loss — some plants (like gloriosum) can produce green leaves then return to variegated growth.",
    related: ["Chimeric variegation"],
  },
  {
    term: "Rhizome",
    definition:
      "A horizontal underground or surface-level stem from which roots and shoots emerge. Philodendron gloriosum is a classic rhizomatous creeper — it grows along the soil surface rather than climbing. Propagated by dividing the rhizome between nodes.",
  },
  {
    term: "Sectoral variegation",
    definition:
      "Variegation that appears in large, defined blocks or sectors on a leaf, rather than as fine splashes or speckles. Created by chimeric mutations affecting large cell lineages. Often dramatic but inherently unstable.",
    related: ["Chimeric variegation", "Splash variegation"],
  },
  {
    term: "Semi-hydro",
    definition:
      "A growing method using inert media (LECA, pon, perlite) with a water reservoir instead of traditional soil. The plant wicks moisture as needed. Reduces overwatering risk and provides consistent root-zone conditions.",
    related: ["LECA", "Pon"],
  },
  {
    term: "Splash variegation",
    definition:
      "Variegation expressed as fine speckles, flecks, or small irregular marks distributed across the leaf surface. More stable than sectoral variegation. Philodendron gloriosum Type 2 and Monstera Thai Constellation are examples.",
    related: ["Sectoral variegation", "Stable variegation"],
  },
  {
    term: "Stable variegation",
    definition:
      "Variegation that persists reliably across new growth with minimal risk of reversion. Typically produced by tissue culture to fix the mutation genetically. Monstera Thai Constellation is the classic example — every leaf shows variegation.",
    related: ["Chimeric variegation", "Tissue culture"],
  },
  {
    term: "TC (Tissue culture)",
    definition:
      "A lab-based propagation method where small pieces of meristematic tissue are grown in sterile nutrient media to produce genetically identical clones. The dominant commercial propagation route for many rare plants. TC has dramatically reduced prices for previously scarce cultivars.",
    related: ["Meristem", "Propagation"],
  },
  {
    term: "Terrestrial",
    definition:
      "A plant that grows on the ground rather than climbing or growing epiphytically. Philodendron gloriosum is a terrestrial creeper — it crawls along the forest floor. Terrestrial aroids need horizontal planter space, not poles.",
    related: ["Hemiepiphyte", "Rhizome"],
  },
  {
    term: "Variegation",
    definition:
      "The presence of differently colored zones in plant tissue, most commonly areas lacking chlorophyll that appear white, cream, pink, or yellow. Can be chimeric (unstable, cell-mutation based) or stable (genetically fixed, often via tissue culture). The primary value driver in the collector plant market.",
    related: ["Chimeric variegation", "Stable variegation", "Reversion"],
  },
];

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Rare Plant Glossary",
          description:
            "Definitions of terminology used in rare plant collecting, care, and propagation.",
          url: "https://www.rareplantatlas.com/glossary",
          hasDefinedTerm: GLOSSARY_ENTRIES.map((entry) => ({
            "@type": "DefinedTerm",
            name: entry.term,
            description: entry.definition,
          })),
        }}
      />
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
              name: "Glossary",
              item: "https://www.rareplantatlas.com/glossary",
            },
          ],
        }}
      />

      <div
        className="min-h-screen"
        style={{ background: "#0a0a08", color: "#e8e0d0" }}
      >
        <Navigation fixed={false} />

        {/* Hero */}
        <div
          className="relative"
          style={{
            padding: "clamp(100px,14vh,160px) clamp(20px,5vw,80px) 48px",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, #1a2e1a 0%, #0a0a08 70%)",
            }}
          />
          <div className="relative">
            <div
              className="font-mono text-[9px] tracking-[0.25em] uppercase mb-3"
              style={{ color: "#b8975a" }}
            >
              Reference
            </div>
            <h1
              className="font-serif font-bold leading-[0.95] tracking-[-0.025em] m-0 mb-4"
              style={{
                fontSize: "clamp(2rem,5vw,3.5rem)",
                color: "#e8e0d0",
              }}
            >
              Glossary
            </h1>
            <p
              className="font-body leading-relaxed m-0 max-w-[520px] opacity-80"
              style={{
                fontSize: "clamp(0.9rem,1.6vw,1.05rem)",
                color: "#c4b89a",
              }}
            >
              {GLOSSARY_ENTRIES.length} terms used in rare plant collecting,
              care, and propagation. Definitions written for collectors, not
              botanists.
            </p>
          </div>
        </div>

        {/* Glossary entries */}
        <div style={{ padding: "0 clamp(20px,5vw,80px) 80px" }}>
          <div
            className="h-px mb-8"
            style={{ background: "rgba(232,224,208,0.10)" }}
          />

          <dl className="max-w-[720px]">
            {GLOSSARY_ENTRIES.map((entry) => (
              <div
                key={entry.term}
                className="mb-8 pb-8"
                style={{
                  borderBottom: "1px solid rgba(232,224,208,0.06)",
                }}
              >
                <dt
                  id={entry.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                  className="font-serif text-[1.1rem] font-bold mb-2"
                  style={{ color: "#e8e0d0" }}
                >
                  {entry.term}
                </dt>
                <dd
                  className="font-body text-[0.88rem] leading-relaxed m-0 opacity-85"
                  style={{ color: "#c4b89a" }}
                >
                  {entry.definition}
                </dd>
                {entry.related && entry.related.length > 0 && (
                  <dd className="m-0 mt-2">
                    <span
                      className="font-mono text-[9px] tracking-[0.12em] uppercase opacity-50"
                      style={{ color: "#b8975a" }}
                    >
                      See also:{" "}
                    </span>
                    {entry.related.map((r, i) => (
                      <span key={r}>
                        <a
                          href={`#${r.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="font-mono text-[10px] tracking-[0.05em] opacity-60 hover:opacity-100 transition-opacity"
                          style={{ color: "#c4b89a" }}
                        >
                          {r}
                        </a>
                        {i < entry.related!.length - 1 && (
                          <span className="opacity-30 mx-1">·</span>
                        )}
                      </span>
                    ))}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>

        {/* Footer */}
        <div
          className="flex justify-between items-center flex-wrap gap-3"
          style={{
            borderTop: "1px solid rgba(232,224,208,0.10)",
            padding: "24px clamp(20px,5vw,80px)",
          }}
        >
          <div
            className="font-mono text-[9px] tracking-[0.15em] uppercase opacity-30"
            style={{ color: "#c4b89a" }}
          >
            Rare Plant Atlas &copy; 2026
          </div>
        </div>
      </div>
    </>
  );
}
