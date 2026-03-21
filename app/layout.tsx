import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rareplantatlas.com"),
  title: "Rare Plant Atlas | In-Depth Guides for Serious Collectors",
  description:
    "Beautiful guides to rare plants. Evaluate variegation stability, genetics, propagation, and realistic pricing for rare aroids including Monstera Albo, Philodendron Gloriosum, Anthurium, and Alocasia.",
  keywords: [
    "rare plants",
    "variegated plants",
    "plant collector",
    "monstera albo",
    "rare aroids",
    "variegation stability",
    "plant propagation",
  ],
  openGraph: {
    title: "Rare Plant Atlas",
    description:
      "Beautiful guides to rare plants. Evaluate variegation stability, genetics, propagation, and realistic pricing for rare aroids.",
    siteName: "Rare Plant Atlas",
    type: "website",
    images: [{ url: "/icon.png", alt: "Rare Plant Atlas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rare Plant Atlas",
    description:
      "Beautiful guides to rare plants. Evaluate variegation stability, genetics, propagation, and realistic pricing for rare aroids.",
    images: ["/icon.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
