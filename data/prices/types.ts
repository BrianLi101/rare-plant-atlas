// ---------------------------------------------------------------------------
// Price tracking types — snapshot pipeline
// ---------------------------------------------------------------------------

export type GrowthStage = "tc" | "cutting" | "corm" | "plant"

export interface Seller {
  id: string
  name: string
  platform: "shopify" | "woocommerce" | "etsy"
  shopifyDomain?: string
  wooDomain?: string
  etsyShopName?: string
  url: string
  tier: 1 | 2
  notes?: string
}

export interface RawListing {
  sellerId: string
  sellerName: string
  productId: number
  title: string
  handle: string
  productUrl: string
  variants: RawVariant[]
  tags: string[]
  snapshotDate: string
}

export interface RawVariant {
  variantId: number
  variantTitle: string
  price: string
  available: boolean
}

export const SNAPSHOT_VERSION = 2

export interface DailySnapshot {
  version: number
  date: string
  listings: RawListing[]
}

export interface NormalizedListing {
  slug: string
  sellerId: string
  sellerName: string
  title: string
  productUrl: string
  price: number
  priceHigh: number
  available: boolean
  growthStage: GrowthStage
  snapshotDate: string
  confidence: "high" | "medium" | "low"
}

export interface PlantPriceHistory {
  slug: string
  lastUpdated: string
  entries: PriceEntry[]
}

export interface PriceEntry {
  date: string
  sellerId: string
  sellerName: string
  title: string
  productUrl: string
  price: number
  priceHigh: number
  available: boolean
  growthStage: GrowthStage
  confidence: "high" | "medium" | "low"
}

export interface PriceSummary {
  slug: string
  currentMin: number | null
  currentMax: number | null
  allTimeMin: number | null
  allTimeMax: number | null
  lastSeen: string | null
  sellerCount: number
  availableNow: boolean
  recentListings: {
    sellerId: string
    sellerName: string
    price: number
    priceHigh: number
    productUrl: string
    growthStage: GrowthStage
    date: string
    available: boolean
  }[]
}
