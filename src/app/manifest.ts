import type { MetadataRoute } from "next";
import { getBusinessConfig } from "@/lib/business";

export default function manifest(): MetadataRoute.Manifest {
  const { name, description, siteUrl } = getBusinessConfig();

  return {
    name,
    short_name: name,
    description,
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#0ea5e9",
    lang: "ca",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    id: siteUrl,
  };
}
