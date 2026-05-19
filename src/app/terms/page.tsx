import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for Veylora.",
  alternates: { canonical: "https://veylora.app/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white lg:px-8">
      <section className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-cyan-200">← Back to Veylora</Link>
        <h1 className="mt-12 text-5xl font-semibold tracking-tight">Terms of Use</h1>
        <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
          <p>Veylora provides informational website audit results and recommendations.</p>
          <p>
            Results are automated and may be incomplete or inaccurate. Use your
            own judgment before making business, design, SEO, or accessibility decisions.
          </p>
          <p>
            You may only audit public pages that you are allowed to access. Do
            not use Veylora to test private systems or restricted content.
          </p>
          <p>
            We may update, limit, or remove features at any time. For questions,
            contact hello@veylora.app.
          </p>
        </div>
      </section>
    </main>
  );
}
