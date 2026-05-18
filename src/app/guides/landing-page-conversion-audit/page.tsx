import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing page conversion audit checklist",
  description:
    "A practical landing page conversion audit checklist for founders, freelancers, and small SaaS teams.",
  alternates: {
    canonical: "https://veylora.app/guides/landing-page-conversion-audit",
  },
};

const checklist = [
  {
    title: "Clarify the hero promise",
    text: "Your first headline should name the audience, the problem, and the outcome. Avoid clever lines that do not explain the value.",
  },
  {
    title: "Repeat one primary CTA",
    text: "Use the same action above the fold, after proof, and near pricing. Different CTA labels create hesitation.",
  },
  {
    title: "Move proof close to claims",
    text: "Testimonials, logos, numbers, reviews, and case studies should appear next to the promise they support.",
  },
  {
    title: "Remove price uncertainty",
    text: "A starting price, package range, or clear next step helps qualified buyers decide whether to continue.",
  },
  {
    title: "Fix SEO snippets",
    text: "A strong title and meta description improve search clicks and make shared links easier to understand.",
  },
];

export default function LandingPageConversionAuditGuide() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white lg:px-8">
      <article className="mx-auto max-w-4xl">
        <a href="/" className="text-sm font-semibold text-cyan-200 transition hover:text-white">
          ← Back to Veylora
        </a>
        <p className="mt-16 text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
          Conversion guide
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
          Landing page conversion audit checklist
        </h1>
        <p className="mt-6 text-xl leading-9 text-slate-300">
          Use this checklist to find the leaks that stop visitors from becoming
          leads, trials, bookings, or customers.
        </p>

        <div className="mt-10 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
          <h2 className="text-2xl font-semibold">Fastest way to start</h2>
          <p className="mt-3 leading-7 text-slate-200">
            Run a free Veylora audit first, then use the checklist below to
            prioritize which changes to make this week.
          </p>
          <a
            href="/#audit"
            className="mt-6 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-white"
          >
            Audit my page
          </a>
        </div>

        <section className="mt-12 space-y-5">
          {checklist.map((item, index) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
                Step {index + 1}
              </span>
              <h2 className="mt-4 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-[2rem] bg-white p-6 text-slate-950">
          <h2 className="text-3xl font-semibold">What to measure after changes</h2>
          <ul className="mt-5 grid gap-3 text-slate-700">
            <li>CTA click rate above the fold.</li>
            <li>Form starts and completed submissions.</li>
            <li>Scroll depth before and after proof sections.</li>
            <li>Search click-through rate for the landing page query.</li>
            <li>Qualified lead rate, not just total traffic.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
