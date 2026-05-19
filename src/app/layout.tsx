import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
} from "@/components/json-ld";
import {
  BRAND_KEYWORDS,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_URL,
} from "@/lib/site";
import { AdSenseScript } from "./components/adsense-script";
import { adsenseClient } from "@/lib/adsense";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${BRAND_KEYWORDS[0]}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: BRAND_KEYWORDS[0],
  keywords: [...BRAND_KEYWORDS],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: BRAND_KEYWORDS[0],
    type: "website",
    locale: "en_US",
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
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
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
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        {children}
        <Analytics />
        <AdSenseScript />
      </body>
    </html>
  );
}
