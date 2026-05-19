import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "../../components/ad-slot";
import { getGuide, guides } from "../guide-content";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `https://veylora.app/guides/${guide.slug}`,
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white lg:px-8">
      <article className="mx-auto max-w-4xl">
        <Link href="/guides" className="text-sm font-semibold text-cyan-200 transition hover:text-white">
          ← All guides
        </Link>
        <p className="mt-16 text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
          {guide.keyword}
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
          {guide.title}
        </h1>
        <p className="mt-6 text-xl leading-9 text-slate-300">{guide.intro}</p>

        <div className="mt-10 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
          <h2 className="text-2xl font-semibold">Fastest way to start</h2>
          <p className="mt-3 leading-7 text-slate-200">
            Run a free Veylora audit first, then use this guide to prioritize
            which changes to make next.
          </p>
          <Link
            href="/#audit"
            className="mt-6 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-white"
          >
            Audit my page
          </Link>
        </div>

        <AdSlot
          label={`${guide.title} ad`}
          slot={process.env.NEXT_PUBLIC_ADSENSE_GUIDE_SLOT}
          className="mt-10"
        />

        <section className="mt-12 space-y-5">
          {guide.sections.map((section, index) => (
            <div
              key={section.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6"
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
                Step {index + 1}
              </span>
              <h2 className="mt-4 text-2xl font-semibold">{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{section.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-[2rem] bg-white p-6 text-slate-950">
          <h2 className="text-3xl font-semibold">Keep improving with Veylora</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Run another audit after each change. The goal is not a perfect score;
            it is a clearer page that turns more visitors into qualified action.
          </p>
          <Link
            href="/#audit"
            className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-cyan-700"
          >
            Run a free audit
          </Link>
        </section>
      </article>
    </main>
  );
}
