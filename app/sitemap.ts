import { MetadataRoute } from "next";
import { plants } from "@/data/plants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rareplantatlas.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...plants.map((plant) => ({
      url: `${baseUrl}/plants/${plant.identity.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
