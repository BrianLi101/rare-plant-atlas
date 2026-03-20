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
  return {
    title: `${getPlantLabel(plant)} — Rare Plant Atlas`,
    description: plant.heroDescription,
  };
}

export default function PlantPage({ params }: { params: { slug: string } }) {
  const plant = getPlantBySlug(params.slug);
  if (!plant) notFound();

  return <PlantDetailClient plant={plant} />;
}
