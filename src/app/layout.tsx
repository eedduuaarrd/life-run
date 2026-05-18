import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import { AdSenseScript } from "./components/adsense-script";
import { adsenseClient } from "@/lib/adsense";
import "./globals.css";

const siteUrl = "https://veylora.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Veylora - Conversion audits for landing pages",
    template: "%s | Veylora",
  },
  description:
    "Audit any public landing page and get prioritized recommendations to improve clarity, trust, CTAs, SEO, and conversions.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Veylora - Conversion audits for landing pages",
    description:
      "Find the leaks that make visitors leave before they buy with a live conversion audit.",
    url: siteUrl,
    siteName: "Veylora",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Veylora - Conversion audits for landing pages",
    description:
      "Audit any public landing page and get prioritized recommendations to improve conversions.",
  },
  other: {
    "google-adsense-account": adsenseClient,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <AdSenseScript />
      </body>
    </html>
  );
}
