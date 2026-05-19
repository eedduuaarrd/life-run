import type { AuditResult } from "@/lib/audit";

const metricLabels: Record<keyof AuditResult["metrics"], string> = {
  titleLength: "Title chars",
  descriptionLength: "Meta chars",
  h1Count: "H1s",
  ctaCount: "CTA signals",
  formCount: "Forms",
  imageCount: "Images",
  imagesMissingAlt: "Images missing alt",
  trustMentions: "Trust signals",
  pricingMentions: "Pricing signals",
  wordCount: "Words",
};

const priorityStyles = {
  high: "bg-rose-500/10 text-rose-700 ring-rose-500/20",
  medium: "bg-amber-500/10 text-amber-700 ring-amber-500/20",
  low: "bg-emerald-500/10 text-emerald-700 ring-emerald-500/20",
};

type AuditResultCardProps = {
  result: AuditResult;
  shareUrl: string;
};

export function AuditResultCard({ result, shareUrl }: AuditResultCardProps) {
  const encodedShareUrl = encodeURIComponent(shareUrl);
  const shareText = encodeURIComponent(
    `This landing page scored ${result.score}/100 on Veylora.`,
  );

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
            Audit result
          </p>
          <h2 className="mt-3 max-w-lg text-2xl font-semibold tracking-tight">
            {result.summary}
          </h2>
          <p className="mt-2 break-all text-sm text-slate-500">{result.url}</p>
        </div>
        <div className="rounded-3xl bg-slate-950 px-6 py-5 text-white">
          <p className="text-sm text-slate-400">Score</p>
          <div className="mt-2 flex items-end gap-2">
            <span className="text-6xl font-semibold">{result.score}</span>
            <span className="pb-2 text-xl text-cyan-200">{result.grade}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-3 rounded-3xl border border-cyan-100 bg-cyan-50 p-4 sm:grid-cols-3">
        <a
          href={shareUrl}
          className="rounded-full bg-slate-950 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-cyan-700"
        >
          Open share link
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodedShareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-slate-950 ring-1 ring-cyan-200 transition hover:bg-cyan-100"
        >
          Share score
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-slate-950 ring-1 ring-cyan-200 transition hover:bg-cyan-100"
        >
          Share on LinkedIn
        </a>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
        {(Object.entries(result.metrics) as [keyof AuditResult["metrics"], number][]).map(
          ([key, value]) => (
            <div key={key} className="rounded-2xl bg-slate-100 p-3">
              <p className="text-xs font-medium text-slate-500">{metricLabels[key]}</p>
              <p className="mt-1 text-xl font-semibold">{value}</p>
            </div>
          ),
        )}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">Quick wins</h3>
        <div className="mt-3 grid gap-3">
          {result.quickWins.map((win) => (
            <div key={win} className="rounded-2xl border border-cyan-100 bg-cyan-50 p-4">
              {win}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">Recommendations</h3>
        <div className="mt-3 space-y-3">
          {result.recommendations.map((recommendation) => (
            <article
              key={`${recommendation.category}-${recommendation.title}`}
              className="rounded-2xl border border-slate-200 p-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-600">
                  {recommendation.category}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ring-1 ${priorityStyles[recommendation.priority]}`}
                >
                  {recommendation.priority}
                </span>
              </div>
              <h4 className="mt-3 font-semibold">{recommendation.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">{recommendation.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
