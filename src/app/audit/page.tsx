import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "../components/ad-slot";
import { AuditResultCard } from "../components/audit-result-card";
import { runAudit } from "@/lib/audit-runner";

type AuditPageProps = {
  searchParams: Promise<{ url?: string }>;
};

export async function generateMetadata({ searchParams }: AuditPageProps): Promise<Metadata> {
  const { url } = await searchParams;
  let title = "Shared audit result";

  if (url) {
    try {
      title = `Veylora audit for ${new URL(url).hostname}`;
    } catch {
      title = "Shared audit result";
    }
  }

  const hasSharedUrl = Boolean(url);

  return {
    title,
    description: "A shareable Veylora landing page audit with score and recommendations.",
    alternates: {
      canonical: hasSharedUrl
        ? `https://veylora.app/audit?url=${encodeURIComponent(url!)}`
        : "https://veylora.app/audit",
    },
    robots: hasSharedUrl
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

export default async function SharedAuditPage({ searchParams }: AuditPageProps) {
  const { url } = await searchParams;

  if (!url) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-10 text-white lg:px-8">
        <section className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
          <h1 className="text-4xl font-semibold">No audit URL provided.</h1>
          <p className="mt-4 text-slate-300">Run a free audit first, then open the share link.</p>
          <Link
            href="/#audit"
            className="mt-6 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-950"
          >
            Run an audit
          </Link>
        </section>
      </main>
    );
  }

  const result = await runAudit(url).catch((error: unknown) => ({
    error: error instanceof Error ? error.message : "Unable to run this shared audit.",
  }));

  if ("error" in result) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-10 text-white lg:px-8">
        <section className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
          <h1 className="text-4xl font-semibold">Audit unavailable.</h1>
          <p className="mt-4 text-slate-300">{result.error}</p>
          <Link
            href="/#audit"
            className="mt-6 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-950"
          >
            Try another URL
          </Link>
        </section>
      </main>
    );
  }

  const shareUrl = `https://veylora.app/audit?url=${encodeURIComponent(result.url)}`;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white lg:px-8">
      <section className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-semibold text-cyan-200 transition hover:text-white">
          ← Run your own audit
        </Link>
        <h1 className="mt-10 text-5xl font-semibold tracking-tight md:text-6xl">
          Shared landing page audit
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          This public report can be shared with a team, client, or community.
        </p>
        <AdSlot
          label="Shared audit ad"
          slot={process.env.NEXT_PUBLIC_ADSENSE_IN_FEED_SLOT}
          className="mt-8"
        />
        <div className="mt-8 rounded-[2rem] bg-white p-6 text-slate-950">
          <AuditResultCard result={result} shareUrl={shareUrl} />
        </div>
      </section>
    </main>
  );
}
