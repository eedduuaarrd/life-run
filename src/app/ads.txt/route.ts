import { adsensePublisherId } from "@/lib/adsense";

export function GET() {
  const publisherId = adsensePublisherId.startsWith("pub-")
    ? adsensePublisherId
    : `pub-${adsensePublisherId}`;

  const body = publisherId
    ? `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`
    : "# Add GOOGLE_ADSENSE_PUBLISHER_ID=pub-XXXXXXXXXXXXXXXX to publish an ads.txt record.\n";

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
