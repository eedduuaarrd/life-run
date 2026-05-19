"use client";

import { useEffect } from "react";
import { adsenseClient } from "@/lib/adsense";

export function AdSenseScript() {
  useEffect(() => {
    if (!adsenseClient || document.getElementById("google-adsense")) {
      return;
    }

    const timer = window.setTimeout(() => {
      const script = document.createElement("script");
      script.id = "google-adsense";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`;
      document.head.appendChild(script);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
