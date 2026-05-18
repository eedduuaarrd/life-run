# Veylora

Veylora is a low-cost conversion audit micro-SaaS for public landing pages. It
fetches a submitted URL, scores the page across conversion, SEO, trust, and
accessibility signals, then returns prioritized recommendations that can become
paid reports or done-for-you landing page work.

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

For monetization, replace the pricing mailto links in `src/app/page.tsx` with
Stripe Payment Links or a Checkout route once live Stripe products are ready.

## Audit endpoint

`POST /api/audit`

```json
{ "url": "https://example.com" }
```

The endpoint blocks obvious private and local URLs, fetches public HTML, and
returns a structured conversion audit.
