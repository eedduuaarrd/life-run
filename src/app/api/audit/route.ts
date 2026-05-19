import { runAudit } from "@/lib/audit-runner";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { url?: unknown };
    return Response.json(await runAudit(body.url));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong while auditing this URL.";

    return Response.json({ error: message }, { status: 400 });
  }
}
