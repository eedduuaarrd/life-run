import { ImageResponse } from "next/og";
import { getBusinessConfig } from "@/lib/business";

export const alt = "Veylora";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const { name, tagline } = getBusinessConfig();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c4a6e 100%)",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.02em",
          }}
        >
          {name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#94a3b8",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          {tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
