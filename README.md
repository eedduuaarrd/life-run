# Veylora

Veylora is an ad-supported conversion audit site for public landing pages. It
fetches a submitted URL, scores the page across conversion, SEO, trust, and
accessibility signals, then turns useful free audits and organic guides into
monetizable pageviews.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production checks

```bash
npm run lint
npm run build
```

## Deployment

Deploy to Vercel as a standard Next.js app. No paid infrastructure is required
for the current MVP.

Production is configured for `https://veylora.app`.

For ad monetization, set these optional Vercel environment variables after
Google AdSense approves `veylora.app`:

```bash
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
GOOGLE_ADSENSE_PUBLISHER_ID=pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_ADSENSE_TOP_SLOT=
NEXT_PUBLIC_ADSENSE_IN_FEED_SLOT=
NEXT_PUBLIC_ADSENSE_CONTENT_SLOT=
NEXT_PUBLIC_ADSENSE_GUIDE_SLOT=
NEXT_PUBLIC_SPONSOR_URL=
```

Without those values, ad slots render sponsor fallback cards and `/ads.txt`
returns a setup comment.

## Audit endpoint

`POST /api/audit`

```json
{ "url": "https://example.com" }
```

The endpoint blocks obvious private and local URLs, fetches public HTML, and
returns a structured conversion audit.
