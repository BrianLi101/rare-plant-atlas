export type { Product } from "./types";

import { ProductCategory, type Product } from "./types";

export const lechuzaPlanterHorizontalSmall: Product = {
  id: "lechuza-planter-horizontal-small",
  category: ProductCategory.PlanterPot,
  product: "Lechuza Delta 10 Self-Watering Planter",
  approximatePriceUsd: 35,
  image: "/products/lechuza-pon-horizontal-planter-small.jpg",
  amazonUrl: "https://www.amazon.com/dp/B00MUQVT0W",
};

export const lechuzaPonSubstrate18L: Product = {
  id: "lechuza-pon-substrate-18l",
  category: ProductCategory.Substrate,
  product: "Lechuza Pon Substrate 18L",
  approximatePriceUsd: 80,
  image: "/products/lechuza-pon-substrate-18-L.jpg",
  amazonUrl: "https://www.amazon.com/dp/B085DDH5B2",
};

export const lechuzaPonSubstrate3L: Product = {
  id: "lechuza-pon-substrate-3l",
  category: ProductCategory.Substrate,
  product: "Lechuza Pon Substrate 3L",
  approximatePriceUsd: 30,
  image: "/products/lechuza-pon-substrate-3-L.jpg",
  amazonUrl: "https://www.amazon.com/dp/B085DC5FG9",
};

export const xactoKnifeSet16Pc: Product = {
  id: "xacto-knife-set-16-pc",
  category: ProductCategory.Tools,
  product: "16 Pc X-Acto Knife Set",
  description:
    "16 Pcs Exacto Knife Set, 3 Craft Knife and 13 SK5 Steel Blades, Precision Hobby Knife for Carving, Modeling, DIY, Scrapbooking, and Art Projects.",
  approximatePriceUsd: 10,
  image: "/products/jetmore-xacto-16-pc-set.jpg",
  amazonUrl: "https://www.amazon.com/dp/B0BNQ93N95",
};
