import { AuditConsole } from "./components/audit-console";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Hero />
      <AuditConsole />
      <HowItWorks />
      <Pricing />
      <FinalCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate px-6 pt-8 lg:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.32),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.24),_transparent_30%)]" />
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur">
        <a href="#" className="text-lg font-semibold tracking-tight">
          Veylora
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#audit" className="transition hover:text-white">
            Audit
          </a>
          <a href="#pricing" className="transition hover:text-white">
            Pricing
          </a>
          <a href="mailto:hello@veylora.app" className="transition hover:text-white">
            Contact
          </a>
        </div>
        <a
          href="#audit"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          Try free
        </a>
      </nav>

      <div className="mx-auto grid max-w-7xl gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
            Conversion audits for pages that should sell harder.
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Find the leaks that make visitors leave before they buy.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Veylora turns any public landing page into a prioritized action plan:
            stronger headlines, clearer CTAs, trust proof, SEO snippets, and
            accessibility fixes.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#audit"
              className="rounded-full bg-cyan-300 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-white"
            >
              Audit a page
            </a>
            <a
              href="#pricing"
              className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              See pricing
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur">
          <div className="rounded-[1.5rem] bg-slate-900 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-300">Veylora report</span>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-semibold text-emerald-200">
                Revenue ready
              </span>
            </div>
            <div className="mt-8 grid grid-cols-[auto_1fr] gap-5">
              <div className="flex size-28 items-center justify-center rounded-full bg-cyan-300 text-5xl font-semibold text-slate-950">
                B
              </div>
              <div>
                <p className="text-4xl font-semibold">74/100</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  The offer is promising, but CTA repetition and proof placement
                  are suppressing conversions.
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              {[
                "Move testimonial proof next to the hero CTA",
                "Replace vague headline with a measurable outcome",
                "Add one lead capture path before the footer",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/[0.06] p-4 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Scan the page",
      text: "We fetch the public HTML and extract conversion, SEO, proof, form, and accessibility signals.",
    },
    {
      title: "Prioritize fixes",
      text: "The report ranks the changes most likely to improve leads or sales before design polish.",
    },
    {
      title: "Monetize the insight",
      text: "Use the audit as a lead magnet, paid report, or upsell into done-for-you landing fixes.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">
              {index + 1}
            </span>
            <h2 className="mt-8 text-2xl font-semibold">{step.title}</h2>
            <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0 EUR",
      description: "One live audit to prove the value.",
      features: ["Live conversion score", "Top fixes", "Shareable page"],
      cta: "Run free audit",
      href: "#audit",
    },
    {
      name: "Growth",
      price: "19 EUR/mo",
      description: "For founders and freelancers running weekly checks.",
      features: ["25 audits/month", "PDF-ready reports", "Weekly monitoring"],
      cta: "Request access",
      href: "mailto:hello@veylora.app?subject=Veylora Growth access",
    },
    {
      name: "Agency",
      price: "79 EUR/mo",
      description: "For teams turning audits into client work.",
      features: ["Unlimited draft reports", "White-label exports", "Priority support"],
      cta: "Talk to us",
      href: "mailto:hello@veylora.app?subject=Veylora Agency access",
    },
  ];

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
          Monetization
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight">
          Start free, then charge for repeat audits and client-ready reports.
        </h2>
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <article
            key={plan.name}
            className={`rounded-[2rem] border p-6 ${
              index === 1
                ? "border-cyan-300 bg-cyan-300 text-slate-950"
                : "border-white/10 bg-white/[0.05] text-white"
            }`}
          >
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <p className="mt-3 text-4xl font-semibold">{plan.price}</p>
            <p className={`mt-3 leading-7 ${index === 1 ? "text-slate-800" : "text-slate-300"}`}>
              {plan.description}
            </p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm font-medium">
                  <span aria-hidden="true">+</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={plan.href}
              className={`mt-8 block rounded-full px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] transition ${
                index === 1
                  ? "bg-slate-950 text-white hover:bg-slate-800"
                  : "bg-white text-slate-950 hover:bg-cyan-200"
              }`}
            >
              {plan.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-8 text-center text-slate-950 md:p-14">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Launch with audits. Sell the fixes.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Veylora is built to be cheap to run: one Next.js app, a lightweight
          heuristic audit engine, and upgrade paths for paid reports.
        </p>
        <a
          href="#audit"
          className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-cyan-700"
        >
          Try the audit
        </a>
      </div>
    </section>
  );
}
