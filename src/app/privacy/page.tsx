import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Veylora.",
  alternates: { canonical: "https://veylora.app/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white lg:px-8">
      <section className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-cyan-200">← Back to Veylora</Link>
        <h1 className="mt-12 text-5xl font-semibold tracking-tight">Privacy Policy</h1>
        <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
          <p>Veylora lets visitors submit a public URL to generate a website audit.</p>
          <p>
            We may process the submitted URL, page HTML, basic technical data,
            analytics events, and advertising signals to operate and improve the site.
          </p>
          <p>
            Veylora uses Vercel Analytics and may use Google AdSense. Google and
            other providers may use cookies or similar technologies to serve and
            measure ads according to their own policies.
          </p>
          <p>
            Do not submit private, confidential, or password-protected pages.
            Contact hello@veylora.app for privacy questions.
          </p>
        </div>
      </section>
    </main>
  );
}
