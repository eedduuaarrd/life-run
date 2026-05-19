"use client";

import { FormEvent, useState } from "react";
import type { AuditResult } from "@/lib/audit";
import { AuditResultCard } from "./audit-result-card";

type AuditState =
  | { status: "idle"; result?: undefined; error?: undefined }
  | { status: "loading"; result?: undefined; error?: undefined }
  | { status: "success"; result: AuditResult; error?: undefined }
  | { status: "error"; result?: undefined; error: string };

const siteUrl = "https://veylora.app";

export function AuditConsole() {
  const [url, setUrl] = useState("https://example.com");
  const [audit, setAudit] = useState<AuditState>({ status: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAudit({ status: "loading" });

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const payload = (await response.json()) as AuditResult | { error?: string };

      if (!response.ok) {
        throw new Error(
          isAuditError(payload) ? payload.error : "The audit failed. Try another public URL.",
        );
      }

      if (!isAuditResult(payload)) {
        throw new Error("The audit returned an unexpected response. Try again.");
      }

      setAudit({ status: "success", result: payload });
    } catch (error) {
      setAudit({
        status: "error",
        error: error instanceof Error ? error.message : "The audit failed. Try again.",
      });
    }
  }

  return (
    <section
      id="audit"
      className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8"
    >
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
          Live audit
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Paste a landing page and get a revenue-focused diagnosis.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-300">
          Veylora checks the conversion basics that usually cost small teams the
          most: clarity, CTA strength, trust proof, SEO snippets, forms, and
          accessibility.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label htmlFor="url" className="text-sm font-medium text-slate-200">
            Public URL
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              className="min-h-12 flex-1 rounded-full border border-white/10 bg-slate-950 px-5 text-base text-white outline-none ring-cyan-300/30 transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-4"
              placeholder="https://your-site.com"
              inputMode="url"
              required
            />
            <button
              type="submit"
              disabled={audit.status === "loading"}
              className="min-h-12 rounded-full bg-cyan-300 px-7 text-sm font-bold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {audit.status === "loading" ? "Auditing..." : "Run audit"}
            </button>
          </div>
        </form>

        {audit.status === "error" ? (
          <div className="mt-5 rounded-2xl border border-rose-300/30 bg-rose-500/10 p-4 text-sm text-rose-100">
            {audit.error}
          </div>
        ) : null}

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {["No login", "No API key", "Public beta"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm font-medium text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-950 shadow-2xl shadow-cyan-950/20">
        {audit.status === "success" ? (
          <AuditResultCard
            result={audit.result}
            shareUrl={`${siteUrl}/audit?url=${encodeURIComponent(audit.result.url)}`}
          />
        ) : (
          <EmptyReport loading={audit.status === "loading"} />
        )}
      </div>
    </section>
  );
}

function isAuditError(payload: AuditResult | { error?: string }): payload is { error: string } {
  return "error" in payload && typeof payload.error === "string";
}

function isAuditResult(payload: AuditResult | { error?: string }): payload is AuditResult {
  return "score" in payload && "recommendations" in payload && Array.isArray(payload.recommendations);
}

function EmptyReport({ loading }: { loading: boolean }) {
  return (
    <div className="flex min-h-[560px] flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
            Sample output
          </p>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
            {loading ? "Scanning" : "Ready"}
          </span>
        </div>
        <div className="mt-10 rounded-3xl bg-slate-950 p-6 text-white">
          <p className="text-sm text-cyan-200">Conversion score</p>
          <div className="mt-4 flex items-end gap-3">
            <span className="text-7xl font-semibold tracking-tight">
              {loading ? "--" : "73"}
            </span>
            <span className="pb-3 text-lg text-slate-400">/100</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
            {loading
              ? "Fetching the page, extracting signals, and building recommendations."
              : "Run the audit to replace this preview with live recommendations."}
          </p>
        </div>
      </div>
      <div className="mt-8 space-y-3">
        {["Hero clarity", "CTA placement", "Trust proof"].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

