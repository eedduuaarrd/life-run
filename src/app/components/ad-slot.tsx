"use client";

import { useEffect } from "react";
import { adsenseClient } from "@/lib/adsense";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdSlotProps = {
  label: string;
  slot?: string;
  className?: string;
};

export function AdSlot({ label, slot, className = "" }: AdSlotProps) {
  const canRenderAd = Boolean(adsenseClient && slot);

  useEffect(() => {
    if (!canRenderAd) {
      return;
    }

    const timer = window.setTimeout(() => {
      try {
        window.adsbygoogle = window.adsbygoogle ?? [];
        window.adsbygoogle.push({});
      } catch {
        // Ad blockers and approval state can prevent AdSense from rendering.
      }
    }, 5500);

    return () => window.clearTimeout(timer);
  }, [canRenderAd]);

  return (
    <aside
      aria-label={label}
      className={`rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 text-center ${className}`}
    >
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
        Advertisement
      </p>
      {canRenderAd ? (
        <ins
          className="adsbygoogle mt-3 block min-h-24"
          data-ad-client={adsenseClient}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <a
          href="mailto:hello@veylora.app?subject=Sponsor%20Veylora"
          className="mt-3 block rounded-2xl border border-dashed border-cyan-300/30 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300 transition hover:border-cyan-300 hover:text-white"
        >
          Advertise here to reach founders, marketers, and small businesses
          improving their websites.
        </a>
      )}
    </aside>
  );
}
