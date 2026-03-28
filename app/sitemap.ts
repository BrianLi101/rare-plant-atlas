import { MetadataRoute } from "next";
import { plants } from "@/data/plants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rareplantatlas.com";

  // SEO/GEO: Collect unique genera for genus index pages
  const genera = Array.from(new Set(plants.map((p) => p.identity.genus.toLowerCase())));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // SEO/GEO: Use plant.lastReviewed when available for accurate freshness signals
    ...plants.map((plant) => ({
      url: `${baseUrl}/plants/${plant.identity.slug}`,
      lastModified: plant.lastReviewed ?? new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // SEO/GEO: Genus index pages — "Top N" listicle format for AI citations
    ...genera.map((genus) => ({
      url: `${baseUrl}/genus/${genus}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    // SEO/GEO: Glossary page — definitional content gets cited constantly
    {
      url: `${baseUrl}/glossary`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
