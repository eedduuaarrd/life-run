import type { MetadataRoute } from "next";
import { getBusinessConfig } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const { siteUrl } = getBusinessConfig();
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
