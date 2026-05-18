import { AuditConsole } from "./components/audit-console";

const siteUrl = "https://veylora.app";
const paidReportHref =
  process.env.NEXT_PUBLIC_PAID_REPORT_URL ??
  "mailto:hello@veylora.app?subject=I%20want%20a%20Veylora%20paid%20landing%20page%20report";
const sprintHref =
  process.env.NEXT_PUBLIC_FIX_SPRINT_URL ??
  "mailto:hello@veylora.app?subject=I%20want%20the%20Veylora%20landing%20fix%20sprint";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <SeoJsonLd />
      <Hero />
      <AuditConsole />
      <HowItWorks />
      <RevenueEngine />
      <TrafficEngine />
      <Pricing />
      <Faq />
      <FinalCta />
    </main>
  );
}

function SeoJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Veylora",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteUrl,
    description:
      "Veylora audits landing pages and returns prioritized conversion, SEO, trust, and accessibility recommendations.",
    offers: [
      {
        "@type": "Offer",
        name: "Free conversion audit",
        price: "0",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Paid landing page report",
        price: "19",
        priceCurrency: "EUR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
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
          <a href="#growth" className="transition hover:text-white">
            Growth
          </a>
          <a href="#pricing" className="transition hover:text-white">
            Pricing
          </a>
          <a href="/guides/landing-page-conversion-audit" className="transition hover:text-white">
            Guide
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
            Free audit today. Paid action plan when you are ready.
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
              href={paidReportHref}
              className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              Get the paid report
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-400">
            Launch offer: free score, 19 EUR detailed report, 199 EUR landing fix sprint.
          </p>
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

function RevenueEngine() {
  const offers = [
    {
      title: "Paid report",
      price: "19 EUR",
      text: "A deeper teardown with rewritten hero copy, CTA sequence, proof placement, and a launch checklist.",
    },
    {
      title: "Landing fix sprint",
      price: "199 EUR",
      text: "Done-for-you changes for one landing page: copy, structure, CTAs, SEO metadata, and proof blocks.",
    },
    {
      title: "Agency retainer",
      price: "Custom",
      text: "Recurring audits and white-label reports for freelancers or small agencies selling conversion work.",
    },
  ];

  return (
    <section id="growth" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
            Monetization funnel
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Turn every free audit into a paid next step.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            The free tool creates trust. The money comes from selling the next
            layer: a detailed report, done-for-you fixes, and recurring agency
            audits.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                {offer.price}
              </p>
              <h3 className="mt-5 text-xl font-semibold">{offer.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{offer.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrafficEngine() {
  const loops = [
    "Publish teardown pages: 'We audited [brand] landing page' with practical lessons.",
    "Post score screenshots on X, LinkedIn, Indie Hackers, and relevant founder communities.",
    "Offer agencies a white-label version so they send client traffic back through Veylora.",
    "Create SEO guides around landing page audits, conversion leaks, CTA examples, and trust proof.",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300/10 p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-100">
              Traffic plan
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Built-in loops for traffic, not just a static landing page.
            </h2>
          </div>
          <div className="grid gap-3">
            {loops.map((loop) => (
              <div key={loop} className="rounded-2xl bg-slate-950/70 p-4 text-slate-200">
                {loop}
              </div>
            ))}
            <a
              href="/guides/landing-page-conversion-audit"
              className="mt-3 inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-200"
            >
              Read the SEO guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0 EUR",
      description: "A live audit that proves the value and brings users into the funnel.",
      features: ["Live conversion score", "Top fixes", "Social share loop"],
      cta: "Run free audit",
      href: "#audit",
    },
    {
      name: "Report",
      price: "19 EUR",
      description: "For founders who want exact copy and layout changes.",
      features: ["Detailed teardown", "Hero rewrite", "Prioritized checklist"],
      cta: "Get report",
      href: paidReportHref,
    },
    {
      name: "Fix Sprint",
      price: "199 EUR",
      description: "For teams who want the page improved, not just diagnosed.",
      features: ["Done-for-you copy", "CTA structure", "SEO metadata pass"],
      cta: "Book sprint",
      href: sprintHref,
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
        <p className="mt-4 text-slate-300">
          Add Stripe Payment Links later with `NEXT_PUBLIC_PAID_REPORT_URL` and
          `NEXT_PUBLIC_FIX_SPRINT_URL`; the funnel works today via email.
        </p>
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

function Faq() {
  const items = [
    {
      question: "How does Veylora make money?",
      answer:
        "The free audit attracts leads. Paid reports and fix sprints monetize visitors who want specific copy, layout, and CTA improvements.",
    },
    {
      question: "Why would people share it?",
      answer:
        "The score is simple, visual, and useful. Founders can share the result, agencies can use it as a lead magnet, and teardown content can rank on search.",
    },
    {
      question: "Is this expensive to run?",
      answer:
        "No. The current MVP uses a lightweight Next.js app and heuristic analysis, so it can start with minimal infrastructure cost.",
    },
  ];

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
        FAQ
      </p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight">
        Built to attract traffic and monetize quickly.
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <article key={item.question} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
            <h3 className="text-xl font-semibold">{item.question}</h3>
            <p className="mt-3 leading-7 text-slate-300">{item.answer}</p>
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
