import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LocalBusinessJsonLd } from "@/components/local-business-json-ld";
import { getBusinessConfig } from "@/lib/business";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const business = getBusinessConfig();

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | Google Maps i contacte`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  keywords: [
    business.name,
    "Veylora",
    "Google Maps",
    business.addressLocality,
    business.addressRegion,
    "horaris",
    "contacte",
    "ubicació",
  ].filter((k): k is string => Boolean(k)),
  alternates: {
    canonical: business.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "ca_ES",
    url: business.siteUrl,
    siteName: business.name,
    title: `${business.name} | Troba’ns a Google Maps`,
    description: business.description,
  },
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description: business.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": business.addressRegion ?? business.addressCountry,
    ...(business.latitude != null && business.longitude != null
      ? {
          "geo.position": `${business.latitude};${business.longitude}`,
          ICBM: `${business.latitude}, ${business.longitude}`,
        }
      : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ca"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
