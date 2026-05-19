import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "../components/ad-slot";
import { guides } from "./guide-content";

export const metadata: Metadata = {
  title: "Conversion audit guides",
  description:
    "Free landing page, website audit, CTA, and conversion optimization guides from Veylora.",
  alternates: {
    canonical: "https://veylora.app/guides",
  },
};

export default function GuidesIndex() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white lg:px-8">
      <section className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-semibold text-cyan-200 transition hover:text-white">
          ← Back to Veylora
        </Link>
        <p className="mt-16 text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
          Organic guides
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          Free conversion guides for founders and small teams
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
          Practical pages built to help visitors and bring organic search traffic
          back into the free Veylora audit flow.
        </p>

        <AdSlot
          label="Guide hub ad"
          slot={process.env.NEXT_PUBLIC_ADSENSE_GUIDE_SLOT}
          className="mt-10"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
                {guide.keyword}
              </p>
              <h2 className="mt-4 text-2xl font-semibold">{guide.title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{guide.description}</p>
              <Link
                href={`/guides/${guide.slug}`}
                className="mt-6 inline-flex rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-white"
              >
                Read guide
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
