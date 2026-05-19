import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Veylora for feedback, support, or advertising questions.",
  alternates: { canonical: "https://veylora.app/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white lg:px-8">
      <section className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-cyan-200">← Back to Veylora</Link>
        <h1 className="mt-12 text-5xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          For feedback, support, partnerships, or advertising questions, email:
        </p>
        <a
          href="mailto:hello@veylora.app"
          className="mt-6 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-950"
        >
          hello@veylora.app
        </a>
      </section>
    </main>
  );
}
