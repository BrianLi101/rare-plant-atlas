import { MetadataRoute } from "next";
import { plantSourceFiles, plants } from "@/data/plants";
import { listingSourceFiles, listings } from "@/data/listings";
import { getLatestLastModified } from "@/lib/contentTimestamps";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rareplantatlas.com";

  // Keep sitemap coverage aligned with the actual route generators.
  const genera = Array.from(
    new Set([
      ...plants.map((plant) => plant.identity.genus.toLowerCase()),
      ...listings.map((listing) => listing.identity.genus.toLowerCase()),
    ])
  );

  return [
    {
      url: baseUrl,
      lastModified: getLatestLastModified([
        "app/page.tsx",
        ...Object.values(plantSourceFiles),
        ...Object.values(listingSourceFiles),
      ]),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/prices`,
      lastModified: getLatestLastModified([
        "app/prices/page.tsx",
        ...Object.values(plantSourceFiles),
        ...Object.values(listingSourceFiles),
      ]),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...plants.map((plant) => ({
      url: `${baseUrl}/plants/${plant.identity.slug}`,
      lastModified: getLatestLastModified([
        "app/plants/[slug]/page.tsx",
        plantSourceFiles[plant.identity.slug],
      ]),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...listings.map((listing) => ({
      url: `${baseUrl}/prices/${listing.identity.slug}`,
      lastModified: getLatestLastModified([
        "app/prices/[slug]/page.tsx",
        listingSourceFiles[listing.identity.slug],
      ]),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...genera.map((genus) => ({
      url: `${baseUrl}/genus/${genus}`,
      lastModified: getLatestLastModified([
        "app/genus/[genus]/page.tsx",
        ...plants
          .filter((plant) => plant.identity.genus.toLowerCase() === genus)
          .map((plant) => plantSourceFiles[plant.identity.slug]),
        ...listings
          .filter((listing) => listing.identity.genus.toLowerCase() === genus)
          .map((listing) => listingSourceFiles[listing.identity.slug]),
      ]),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/glossary`,
      lastModified: getLatestLastModified(["app/glossary/page.tsx"]),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
