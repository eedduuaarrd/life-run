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
  applicationName: "Veylora",
  title: {
    default: "Veylora | Free Landing Page Audit Tool",
    template: "%s | Veylora",
  },
  description:
    "Veylora is a free landing page audit tool that helps founders and marketers find conversion leaks, unclear CTAs, weak trust signals, SEO issues, and accessibility gaps.",
  keywords: [
    "Veylora",
    "veylora.app",
    "free landing page audit",
    "website audit tool",
    "conversion audit",
    "landing page checker",
  ],
  creator: "Veylora",
  publisher: "Veylora",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Veylora | Free Landing Page Audit Tool",
    description:
      "Run a free Veylora audit to find conversion leaks, unclear CTAs, weak trust signals, SEO issues, and accessibility gaps.",
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
    title: "Veylora | Free Landing Page Audit Tool",
    description:
      "Audit any public landing page with Veylora and get prioritized recommendations to improve conversions.",
  },
  other: {
    "google-adsense-account": adsenseClient,
  },
  verification: {
    google: "XR7jyPsI6s7ILwktGfZu9BAfngiJOm_PyeVi8z7Z0pk",
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
