import { analyzeLandingPage } from "./audit";

const privateHostPatterns = [
  /^localhost$/i,
  /^0\.0\.0\.0$/,
  /^127\./,
  /^10\./,
  /^192\.168\./,
  /^169\.254\./,
  /^172\.(1[6-9]|2\d|3[01])\./,
  /^::1$/,
];

export function normalizeAuditUrl(value: unknown) {
  if (typeof value !== "string") {
    throw new Error("URL is required.");
  }

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  const url = new URL(withProtocol);

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Only public HTTP and HTTPS URLs can be audited.");
  }

  if (privateHostPatterns.some((pattern) => pattern.test(url.hostname))) {
    throw new Error("Private or local URLs cannot be audited.");
  }

  url.hash = "";
  return url;
}

export async function runAudit(value: unknown) {
  const url = normalizeAuditUrl(value);
  const response = await fetch(url, {
    headers: {
      accept: "text/html,application/xhtml+xml",
      "user-agent": "VeyloraBot/0.1 (+https://veylora.app)",
    },
    signal: AbortSignal.timeout(9000),
  });

  if (!response.ok) {
    throw new Error(`The page returned HTTP ${response.status}. Try another public URL.`);
  }

  const html = await response.text();

  if (html.length < 200) {
    throw new Error("The page did not return enough HTML to audit.");
  }

  return analyzeLandingPage(url.toString(), html.slice(0, 1_500_000));
}
