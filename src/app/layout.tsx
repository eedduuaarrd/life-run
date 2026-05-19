import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StructuredDataJsonLd } from "@/components/structured-data-json-ld";
import { BRAND_KEYWORD, getBusinessConfig } from "@/lib/business";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const site = getBusinessConfig();

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    site.name,
    BRAND_KEYWORD,
    "veylora",
    "web oficial veylora",
    "Veylora oficial",
  ],
  alternates: {
    canonical: site.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "ca_ES",
    url: site.siteUrl,
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
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
  verification: {
    // Afegeix quan tinguis el codi de Google Search Console:
    // google: "el-teu-codi",
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
        <StructuredDataJsonLd />
        {children}
      </body>
    </html>
  );
}
