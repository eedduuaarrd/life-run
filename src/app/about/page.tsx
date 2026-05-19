import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn what Veylora does and who it helps.",
  alternates: { canonical: "https://veylora.app/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white lg:px-8">
      <section className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-cyan-200">← Back to Veylora</Link>
        <h1 className="mt-12 text-5xl font-semibold tracking-tight">About Veylora</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Veylora is a free website audit tool for founders, marketers, freelancers,
          and small businesses. It reviews public pages and highlights practical
          ways to improve clarity, trust, calls to action, SEO snippets, and accessibility.
        </p>
        <p className="mt-4 text-lg leading-8 text-slate-300">
          The goal is simple: help people spot obvious conversion issues before
          they spend more time or money sending traffic to a page.
        </p>
      </section>
    </main>
  );
}
