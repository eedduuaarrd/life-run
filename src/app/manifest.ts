import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Veylora",
    short_name: "Veylora",
    description: "Free landing page audit tool.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#020617",
  };
}
