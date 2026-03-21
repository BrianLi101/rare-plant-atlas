import { notFound } from "next/navigation";
import { plants, getPlantBySlug } from "@/data/plants";
import { getPlantLabel } from "@/data/identity";
import { PlantDetailClient } from "@/components/PlantDetailClient";

export function generateStaticParams() {
  return plants.map((p) => ({ slug: p.identity.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const plant = getPlantBySlug(params.slug);
  if (!plant) return { title: "Not Found" };

  const previewImage =
    plant.images.hero ?? plant.photos[0]?.image ?? "/icon.png";
  const title = `${getPlantLabel(plant)} — Rare Plant Atlas`;

  return {
    title,
    description: plant.heroDescription,
    openGraph: {
      title,
      description: plant.heroDescription,
      images: [
        {
          url: previewImage,
          alt: getPlantLabel(plant),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: plant.heroDescription,
      images: [previewImage],
    },
  };
}

export default function PlantPage({ params }: { params: { slug: string } }) {
  const plant = getPlantBySlug(params.slug);
  if (!plant) notFound();

  return <PlantDetailClient plant={plant} />;
}
