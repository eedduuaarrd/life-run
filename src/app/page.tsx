import Link from "next/link";
import { AdSlot } from "./components/ad-slot";
import { AuditConsole } from "./components/audit-console";

const siteUrl = "https://veylora.app";
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <SeoJsonLd />
      <Hero />
      <AdSlot label="Top leaderboard ad" slot={process.env.NEXT_PUBLIC_ADSENSE_TOP_SLOT} className="mx-auto max-w-7xl" />
      <AuditConsole />
      <AdSlot label="In-feed audit ad" slot={process.env.NEXT_PUBLIC_ADSENSE_IN_FEED_SLOT} className="mx-auto max-w-7xl" />
      <HowItWorks />
      <AdRevenueEngine />
      <OrganicTrafficEngine />
      <ContentNetwork />
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
        name: "Free landing page audit",
        price: "0",
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
            Checks
          </a>
          <Link href="/guides" className="transition hover:text-white">
            Guides
          </Link>
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
            Free landing page audit for clearer, better-converting websites.
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Find the leaks that make visitors leave before they buy.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Veylora gives founders, marketers, and small businesses a practical
            score with clear recommendations for headlines, CTAs, trust signals,
            SEO snippets, and accessibility.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#audit"
              className="rounded-full bg-cyan-300 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-white"
            >
              Audit a page
            </a>
            <Link
              href="/guides"
              className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              Read free guides
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-400">
            No signup required. Paste a public URL and get useful fixes in seconds.
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
      text: "Share the result with your team and use the recommendations to decide what to improve first.",
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

function AdRevenueEngine() {
  const offers = [
    {
      title: "Clarity",
      price: "Copy",
      text: "Check whether visitors can understand the offer, audience, outcome, and next step quickly.",
    },
    {
      title: "Trust",
      price: "Proof",
      text: "Find missing proof, reviews, logos, security cues, and confidence builders near important claims.",
    },
    {
      title: "Action",
      price: "CTA",
      text: "Spot weak calls to action, missing forms, price uncertainty, and pages that make visitors hunt.",
    },
  ];

  return (
    <section id="growth" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
            What Veylora checks
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            A quick review of the things that usually block conversions.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            The audit focuses on practical issues a visitor can feel: confusing
            copy, weak proof, unclear actions, missing SEO snippets, and
            accessibility gaps.
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

function OrganicTrafficEngine() {
  const loops = [
    "Use the free audit first to find obvious issues.",
    "Read the guides for examples and checklists.",
    "Share the score with your team or client.",
    "Run the audit again after changes to compare progress.",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300/10 p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-100">
              How to use it
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Start with a score, then work through the recommendations.
            </h2>
          </div>
          <div className="grid gap-3">
            {loops.map((loop) => (
              <div key={loop} className="rounded-2xl bg-slate-950/70 p-4 text-slate-200">
                {loop}
              </div>
            ))}
            <Link
              href="/guides/landing-page-conversion-audit"
              className="mt-3 inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-200"
            >
              Read the SEO guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentNetwork() {
  const guides = [
    {
      title: "Landing page conversion audit checklist",
      description: "The core checklist for founders checking headlines, CTAs, proof, pricing, and SEO snippets.",
      href: "/guides/landing-page-conversion-audit",
    },
    {
      title: "Website audit checklist for small businesses",
      description: "A simple checklist for local sites that need more calls, bookings, and qualified leads.",
      href: "/guides/website-audit-checklist",
    },
    {
      title: "Landing page CTA examples",
      description: "Examples of call-to-action copy that makes the next step obvious and reduces hesitation.",
      href: "/guides/landing-page-cta-examples",
    },
    {
      title: "Conversion rate optimization basics",
      description: "A practical CRO primer built for early-stage SaaS, freelancers, and service businesses.",
      href: "/guides/conversion-rate-optimization-basics",
    },
  ];

  return (
    <section id="ads" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
          Free guides
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight">
          Learn how to improve a page before spending more on traffic.
        </h2>
        <p className="mt-4 text-slate-300">
          Short, practical guides for landing pages, website audits, CTAs, and
          conversion basics.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {guides.map((guide) => (
          <article
            key={guide.href}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6"
          >
            <h3 className="text-2xl font-semibold">{guide.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{guide.description}</p>
            <Link
              href={guide.href}
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-200"
            >
              Read guide
            </Link>
          </article>
        ))}
      </div>
      <AdSlot label="Content network ad" slot={process.env.NEXT_PUBLIC_ADSENSE_CONTENT_SLOT} className="mt-8" />
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-8 text-center text-slate-950 md:p-14">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Get a clearer landing page in minutes.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Run a free audit, review the quick wins, share the result, and improve
          the sections that create the most friction.
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
