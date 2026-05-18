import { analyzeLandingPage } from "@/lib/audit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

function normalizeUrl(value: unknown) {
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

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { url?: unknown };
    const url = normalizeUrl(body.url);

    const response = await fetch(url, {
      headers: {
        accept: "text/html,application/xhtml+xml",
        "user-agent": "VeyloraBot/0.1 (+https://veylora.app)",
      },
      signal: AbortSignal.timeout(9000),
    });

    if (!response.ok) {
      return Response.json(
        { error: `The page returned HTTP ${response.status}. Try another public URL.` },
        { status: 422 },
      );
    }

    const html = await response.text();

    if (html.length < 200) {
      return Response.json(
        { error: "The page did not return enough HTML to audit." },
        { status: 422 },
      );
    }

    return Response.json(analyzeLandingPage(url.toString(), html.slice(0, 1_500_000)));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong while auditing this URL.";

    return Response.json({ error: message }, { status: 400 });
  }
}
