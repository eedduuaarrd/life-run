import type { MetadataRoute } from "next";
import { getBusinessConfig } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  const { siteUrl } = getBusinessConfig();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
