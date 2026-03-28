// ---------------------------------------------------------------------------
// Price tracking types — Shopify snapshot pipeline
// ---------------------------------------------------------------------------

export interface Seller {
  id: string
  name: string
  shopifyDomain: string
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

export interface DailySnapshot {
  date: string
  listings: RawListing[]
}

export interface NormalizedListing {
  slug: string
  sellerId: string
  sellerName: string
  productUrl: string
  price: number
  priceHigh: number
  available: boolean
  variantSummary: string
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
  productUrl: string
  price: number
  priceHigh: number
  available: boolean
  variantSummary: string
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
    variantSummary: string
    date: string
    available: boolean
  }[]
}
