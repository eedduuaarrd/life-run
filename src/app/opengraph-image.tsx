import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME} — free landing page audit`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background:
            "linear-gradient(135deg, #020617 0%, #0e7490 50%, #312e81 100%)",
        }}
      >
        <div
          style={{ fontSize: 72, fontWeight: 700, color: "white" }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#a5f3fc",
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          Free landing page conversion audit
        </div>
      </div>
    ),
    { ...size },
  );
}
