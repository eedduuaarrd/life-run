import Script from "next/script";
import { adsenseClient } from "@/lib/adsense";

export function AdSenseScript() {
  if (!adsenseClient) {
    return null;
  }

  return (
    <Script
      id="google-adsense"
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
    />
  );
}
