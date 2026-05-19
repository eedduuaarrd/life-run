export const SITE_URL = "https://veylora.app";
export const SITE_NAME = "Veylora";
export const SITE_EMAIL = "hello@veylora.app";

export const DEFAULT_TITLE = "Veylora | Free landing page conversion audit";
export const DEFAULT_DESCRIPTION =
  "Veylora is a free landing page audit tool. Paste any public URL and get prioritized fixes for headlines, CTAs, trust, SEO snippets, and accessibility.";

export const BRAND_KEYWORDS = [
  "Veylora",
  "veylora",
  "free landing page audit",
  "landing page conversion audit",
  "website audit tool",
  "conversion rate optimization",
  "landing page CTA",
  "SEO snippet checker",
] as const;

export function absoluteUrl(path = ""): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
