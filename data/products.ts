export type { Product, PotProduct } from "./types";

import {
  ProductCategory,
  ProductRetailer,
  PotCompatibleSubstrate,
  type Product,
  type PotProduct,
} from "./types";

export const lechuzaPlanterHorizontalSmall: PotProduct = {
  id: "lechuza-planter-horizontal-small",
  category: ProductCategory.Pot,
  product: "Lechuza Delta 10 Self-Watering Planter",
  approximatePriceUsd: 35,
  image: "/products/lechuza-pon-horizontal-planter-small.jpg",
  compatibleSubstrates: [
    PotCompatibleSubstrate.LechuzaPon,
    PotCompatibleSubstrate.Leca,
  ],
  listings: [
    {
      retailer: ProductRetailer.Amazon,
      url: "https://www.amazon.com/dp/B00MUQVT0W",
    },
  ],
};

export const ojyuddSelfWateringPlanter8Pack: PotProduct = {
  id: "ojyudd-self-watering-planter-8-pack",
  category: ProductCategory.Pot,
  product: "8 Pack 4 Inch Self Watering Plastic Planter",
  description:
    "Inexpensive self watering planters that work well with lechuza pon.",
  approximatePriceUsd: 10,
  image: "/products/ojyudd-self-watering-planter-8-pack.jpg",
  compatibleSubstrates: [PotCompatibleSubstrate.LechuzaPon],
  listings: [
    {
      retailer: ProductRetailer.Amazon,
      url: "https://www.amazon.com/dp/B08GFNVKWC?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_4",
    },
  ],
};

export const lechuzaPonSubstrate18L: Product = {
  id: "lechuza-pon-substrate-18l",
  category: ProductCategory.Substrate,
  product: "Lechuza Pon Substrate 18L",
  approximatePriceUsd: 80,
  image: "/products/lechuza-pon-substrate-18-L.jpg",
  listings: [
    {
      retailer: ProductRetailer.Amazon,
      url: "https://www.amazon.com/dp/B085DDH5B2",
    },
  ],
};

export const lechuzaPonSubstrate3L: Product = {
  id: "lechuza-pon-substrate-3l",
  category: ProductCategory.Substrate,
  product: "Lechuza Pon Substrate 3L",
  approximatePriceUsd: 30,
  image: "/products/lechuza-pon-substrate-3-L.jpg",
  listings: [
    {
      retailer: ProductRetailer.Amazon,
      url: "https://www.amazon.com/dp/B085DC5FG9",
    },
  ],
};

export const xactoKnifeSet16Pc: Product = {
  id: "xacto-knife-set-16-pc",
  category: ProductCategory.Tools,
  product: "16 Pc X-Acto Knife Set",
  description:
    "16 Pcs Exacto Knife Set, 3 Craft Knife and 13 SK5 Steel Blades, Precision Hobby Knife for Carving, Modeling, DIY, Scrapbooking, and Art Projects.",
  approximatePriceUsd: 10,
  image: "/products/jetmore-xacto-16-pc-set.jpg",
  listings: [
    {
      retailer: ProductRetailer.Amazon,
      url: "https://www.amazon.com/dp/B0BNQ93N95",
    },
  ],
};

export const nurtureSystemNo1PowerGrow: Product = {
  id: "nurture-system-no1-power-grow",
  category: ProductCategory.Nutrients,
  product: "NurtureSystem No1 Power Grow Nutrient Concentrate",
  description:
    "NurtureSystem No1. Power Grow Adaptive Nutrient Concentrate Houseplant food.",
  approximatePriceUsd: 15,
  image: "/products/nurture-system-no1-power-grow.jpg",
  listings: [
    {
      retailer: ProductRetailer.Amazon,
      url: "https://www.amazon.co.uk/dp/B0CFQRVBTV",
    },
  ],
};

export const ikeaOdlaLeca: Product = {
  id: "ikea-odla-leca-4-5qt",
  category: ProductCategory.Substrate,
  product: "Leca 4.5QT",
  description:
    "Smaller LECA pellet balls that are denser and rounder than many common Amazon alternatives.",
  approximatePriceUsd: 8,
  image: "/products/ikea-leca.avif",
  listings: [
    {
      retailer: ProductRetailer.IKEA,
      url: "https://www.ikea.com/us/en/p/odla-growing-media-clay-pellets-50288546/",
      label: "View on IKEA",
    },
  ],
};
