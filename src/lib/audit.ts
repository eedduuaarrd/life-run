export type AuditCategory = "conversion" | "seo" | "trust" | "accessibility";

export type AuditRecommendation = {
  category: AuditCategory;
  title: string;
  detail: string;
  priority: "high" | "medium" | "low";
};

export type AuditResult = {
  url: string;
  score: number;
  grade: "A" | "B" | "C" | "D";
  summary: string;
  metrics: {
    titleLength: number;
    descriptionLength: number;
    h1Count: number;
    ctaCount: number;
    formCount: number;
    imageCount: number;
    imagesMissingAlt: number;
    trustMentions: number;
    pricingMentions: number;
    wordCount: number;
  };
  quickWins: string[];
  recommendations: AuditRecommendation[];
};

const ctaTerms = [
  "book",
  "buy",
  "call",
  "contact",
  "demo",
  "free",
  "get started",
  "join",
  "learn more",
  "reserve",
  "schedule",
  "sign up",
  "start",
  "trial",
  "subscribe",
  "comprar",
  "contacta",
  "comença",
  "demo",
  "gratis",
  "prova",
];

const trustTerms = [
  "customer",
  "testimonial",
  "review",
  "case study",
  "trusted",
  "clients",
  "rating",
  "verified",
  "secure",
  "privacy",
  "testimoni",
  "clients",
  "ressenyes",
  "segur",
];

const pricingTerms = [
  "pricing",
  "price",
  "plan",
  "subscription",
  "month",
  "€",
  "$",
  "preu",
  "plans",
  "subscripció",
  "mes",
];

function stripTags(html: string) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ");
}

function countMatches(value: string, terms: string[]) {
  return terms.reduce((count, term) => count + (value.includes(term) ? 1 : 0), 0);
}

function getMetaContent(html: string, name: string) {
  const pattern = new RegExp(
    `<meta[^>]+(?:name|property)=["']${name}["'][^>]+content=["']([^"']+)["'][^>]*>|<meta[^>]+content=["']([^"']+)["'][^>]+(?:name|property)=["']${name}["'][^>]*>`,
    "i",
  );
  const match = html.match(pattern);
  return match?.[1] ?? match?.[2] ?? "";
}

function gradeFor(score: number): AuditResult["grade"] {
  if (score >= 85) return "A";
  if (score >= 70) return "B";
  if (score >= 50) return "C";
  return "D";
}

export function analyzeLandingPage(url: string, html: string): AuditResult {
  const lowerHtml = html.toLowerCase();
  const text = stripTags(lowerHtml).replace(/\s+/g, " ").trim();
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "";
  const description = getMetaContent(html, "description").trim();
  const h1Count = html.match(/<h1[\s>]/gi)?.length ?? 0;
  const formCount = html.match(/<form[\s>]/gi)?.length ?? 0;
  const imageCount = html.match(/<img[\s>]/gi)?.length ?? 0;
  const imagesMissingAlt =
    html.match(/<img(?![^>]*\salt=["'][^"']+["'])[^>]*>/gi)?.length ?? 0;
  const ctaCount = countMatches(text, ctaTerms);
  const trustMentions = countMatches(text, trustTerms);
  const pricingMentions = countMatches(text, pricingTerms);
  const wordCount = text ? text.split(/\s+/).filter(Boolean).length : 0;

  const recommendations: AuditRecommendation[] = [];
  let score = 100;

  if (title.length < 30 || title.length > 65) {
    score -= 12;
    recommendations.push({
      category: "seo",
      priority: "medium",
      title: "Rewrite the page title around one clear outcome",
      detail:
        "Aim for 30-65 characters and include the buyer, pain point, and result in plain language.",
    });
  }

  if (description.length < 90 || description.length > 160) {
    score -= 10;
    recommendations.push({
      category: "seo",
      priority: "medium",
      title: "Add a sharper meta description",
      detail:
        "Use 90-160 characters to explain the promise, audience, and next step shown in search results.",
    });
  }

  if (h1Count !== 1) {
    score -= 14;
    recommendations.push({
      category: "conversion",
      priority: "high",
      title: "Use exactly one strong H1",
      detail:
        "The first headline should say who this is for, what changes, and why the visitor should care now.",
    });
  }

  if (ctaCount < 2) {
    score -= 16;
    recommendations.push({
      category: "conversion",
      priority: "high",
      title: "Repeat one primary call to action",
      detail:
        "Put the same action above the fold and after the main proof section so visitors never have to hunt.",
    });
  }

  if (formCount === 0) {
    score -= 9;
    recommendations.push({
      category: "conversion",
      priority: "medium",
      title: "Capture intent directly on the page",
      detail:
        "Add a short form, booking link, or email capture near the strongest CTA to convert warm traffic.",
    });
  }

  if (trustMentions < 2) {
    score -= 13;
    recommendations.push({
      category: "trust",
      priority: "high",
      title: "Add proof close to the claim",
      detail:
        "Place testimonials, client logos, ratings, case studies, or security/privacy signals near the hero and pricing.",
    });
  }

  if (pricingMentions === 0) {
    score -= 7;
    recommendations.push({
      category: "conversion",
      priority: "low",
      title: "Reduce price uncertainty",
      detail:
        "Show a starting price, package range, or 'from' price so qualified buyers know whether to continue.",
    });
  }

  if (imageCount > 0 && imagesMissingAlt / imageCount > 0.25) {
    score -= 8;
    recommendations.push({
      category: "accessibility",
      priority: "medium",
      title: "Fix missing image alt text",
      detail:
        "Describe meaningful images and leave decorative images empty so screen readers get a clean page.",
    });
  }

  if (wordCount < 180) {
    score -= 8;
    recommendations.push({
      category: "conversion",
      priority: "medium",
      title: "Explain the offer with more buying context",
      detail:
        "Add sections for the problem, outcome, proof, process, and objections so visitors can decide faster.",
    });
  }

  const boundedScore = Math.max(12, Math.min(100, score));
  const topIssues = recommendations.slice(0, 3).map((item) => item.title.toLowerCase());
  const summary =
    topIssues.length > 0
      ? `This page is leaving conversions on the table: ${topIssues.join(", ")}.`
      : "This page has the core conversion basics in place and is ready for deeper testing.";

  return {
    url,
    score: boundedScore,
    grade: gradeFor(boundedScore),
    summary,
    metrics: {
      titleLength: title.length,
      descriptionLength: description.length,
      h1Count,
      ctaCount,
      formCount,
      imageCount,
      imagesMissingAlt,
      trustMentions,
      pricingMentions,
      wordCount,
    },
    quickWins: [
      "Rewrite the hero headline as: audience + painful problem + measurable outcome.",
      "Use one primary CTA label everywhere, such as 'Get my free audit' or 'Book a demo'.",
      "Move proof above the fold: logos, testimonials, numbers, or a specific customer result.",
    ],
    recommendations,
  };
}
