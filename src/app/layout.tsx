import type { Metadata } from "next";
import { Poppins, Baloo_2 } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "TwistUp Brand System",
  description: "Brand identity system for TwistUp flavored beverages with twist-cap flavor release.",
  metadataBase: new URL("https://agentic-75b78290.vercel.app"),
  openGraph: {
    title: "TwistUp Brand System",
    description: "Energetic, modern beverage branding with twist-cap flavor burst.",
    url: "https://agentic-75b78290.vercel.app",
    siteName: "TwistUp",
    images: [
      {
        url: "/meta/og-card.svg",
        width: 1200,
        height: 630,
        alt: "TwistUp Brand Identity"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TwistUp Brand System",
    description: "Energetic, modern beverage branding with twist-cap flavor burst.",
    images: ["/meta/og-card.svg"],
    creator: "@twistup"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${baloo.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
