export type Guide = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  keyword: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
};

export const guides: Guide[] = [
  {
    slug: "landing-page-conversion-audit",
    title: "Landing page conversion audit checklist",
    description:
      "A practical landing page conversion audit checklist for founders, freelancers, and small SaaS teams.",
    intro:
      "Use this checklist to find the leaks that stop visitors from becoming leads, trials, bookings, or customers.",
    keyword: "landing page conversion audit",
    sections: [
      {
        title: "Clarify the hero promise",
        body: "Your first headline should name the audience, the problem, and the outcome. Avoid clever lines that do not explain the value.",
      },
      {
        title: "Repeat one primary CTA",
        body: "Use the same action above the fold, after proof, and near pricing. Different CTA labels create hesitation.",
      },
      {
        title: "Move proof close to claims",
        body: "Testimonials, logos, numbers, reviews, and case studies should appear next to the promise they support.",
      },
      {
        title: "Remove price uncertainty",
        body: "A starting price, package range, or clear next step helps qualified buyers decide whether to continue.",
      },
      {
        title: "Fix SEO snippets",
        body: "A strong title and meta description improve search clicks and make shared links easier to understand.",
      },
    ],
  },
  {
    slug: "website-audit-checklist",
    title: "Website audit checklist for small businesses",
    description:
      "A simple website audit checklist for small businesses that need more calls, bookings, and qualified leads.",
    intro:
      "Small business websites win when they make trust and next steps obvious. Use this checklist before buying ads.",
    keyword: "website audit checklist",
    sections: [
      {
        title: "Make the local value clear",
        body: "State who you help, where you operate, and what outcome visitors can expect before they scroll.",
      },
      {
        title: "Put contact paths everywhere",
        body: "Phone, booking, email, and quote CTAs should be visible on mobile and repeated after service proof.",
      },
      {
        title: "Show proof before services get detailed",
        body: "Reviews, before-and-after work, customer logos, and real outcomes make service pages more believable.",
      },
      {
        title: "Check mobile speed and readability",
        body: "Most local intent happens on phones. Keep paragraphs short, buttons large, and pages easy to scan.",
      },
    ],
  },
  {
    slug: "landing-page-cta-examples",
    title: "Landing page CTA examples that convert",
    description:
      "Call-to-action examples for SaaS, service businesses, agencies, and lead generation landing pages.",
    intro:
      "The best CTA tells visitors exactly what happens next and lowers the perceived risk of clicking.",
    keyword: "landing page CTA examples",
    sections: [
      {
        title: "Use action plus outcome",
        body: "Replace vague labels like Learn More with specific labels like Get my free audit or Book a 15-minute demo.",
      },
      {
        title: "Match CTA to visitor intent",
        body: "Cold traffic may need a free checklist or audit. Warm traffic may be ready for a demo, quote, or trial.",
      },
      {
        title: "Keep one primary CTA",
        body: "Multiple equal-weight CTAs split attention. Use one primary action and one quieter secondary link.",
      },
      {
        title: "Add expectation copy",
        body: "Microcopy below the button can reduce friction: No credit card required, Takes 60 seconds, or Reply within one day.",
      },
    ],
  },
  {
    slug: "conversion-rate-optimization-basics",
    title: "Conversion rate optimization basics",
    description:
      "A beginner-friendly CRO guide for improving landing pages before spending more on traffic.",
    intro:
      "Conversion rate optimization is not just testing button colors. It is about removing confusion, doubt, and friction.",
    keyword: "conversion rate optimization basics",
    sections: [
      {
        title: "Start with message clarity",
        body: "Visitors should understand the offer, audience, outcome, and next step within a few seconds.",
      },
      {
        title: "Find the biggest hesitation",
        body: "Most pages lose conversions because visitors do not trust the promise, price, proof, or next step.",
      },
      {
        title: "Improve one variable at a time",
        body: "Change headlines, CTA placement, proof, or form length deliberately so you can learn what helped.",
      },
      {
        title: "Measure qualified actions",
        body: "Track CTA clicks, form completions, demos booked, and qualified leads instead of only total traffic.",
      },
    ],
  },
  {
    slug: "free-landing-page-audit-tool",
    title: "Free landing page audit tool: what to expect",
    description:
      "How a free landing page audit tool works, what signals it checks, and how to turn results into higher conversions.",
    intro:
      "A good free audit should be fast, specific, and focused on revenue-impacting fixes—not vanity scores.",
    keyword: "free landing page audit tool",
    sections: [
      {
        title: "Paste a public URL",
        body: "The tool should analyze live HTML from a public page without requiring login or installing code first.",
      },
      {
        title: "Score the conversion basics",
        body: "Look for feedback on headlines, CTA clarity, proof placement, pricing uncertainty, and form friction.",
      },
      {
        title: "Prioritize fixes by impact",
        body: "The best tools rank recommendations so teams know what to change before redesigning the whole page.",
      },
      {
        title: "Re-run after changes",
        body: "Compare scores after each update to confirm the page is clearer and easier to act on.",
      },
    ],
  },
  {
    slug: "landing-page-seo-checklist",
    title: "Landing page SEO checklist",
    description:
      "A practical landing page SEO checklist for titles, meta descriptions, headings, and snippet quality.",
    intro:
      "SEO for landing pages is mostly about clarity in search snippets and on-page structure—not keyword stuffing.",
    keyword: "landing page SEO checklist",
    sections: [
      {
        title: "Write a specific title tag",
        body: "Include the primary keyword and outcome. Avoid generic titles that could apply to any product.",
      },
      {
        title: "Match the meta description to intent",
        body: "Explain who the page is for, what they get, and why they should click from search results.",
      },
      {
        title: "Use one clear H1",
        body: "The visible headline should align with the title tag and the promise visitors expect from search.",
      },
      {
        title: "Add internal links to related content",
        body: "Link to guides, case studies, or tools that support the same topic cluster and help crawlers understand context.",
      },
    ],
  },
  {
    slug: "improve-landing-page-conversion-rate",
    title: "How to improve landing page conversion rate",
    description:
      "Step-by-step ways to improve landing page conversion rate without buying more traffic first.",
    intro:
      "Higher conversion rate usually comes from clearer messaging, stronger proof, and fewer decision points—not more animations.",
    keyword: "improve landing page conversion rate",
    sections: [
      {
        title: "Audit the hero first",
        body: "If visitors cannot understand the offer in five seconds, nothing below the fold will save the page.",
      },
      {
        title: "Reduce CTA competition",
        body: "One primary action per section beats three equal buttons that split attention.",
      },
      {
        title: "Place proof beside claims",
        body: "Reviews, logos, and outcomes should sit next to the promise they support, not only in the footer.",
      },
      {
        title: "Test mobile readability",
        body: "Short paragraphs, large tap targets, and fast loads matter because most landing page traffic is mobile.",
      },
    ],
  },
];

export function getRelatedGuides(slug: string, limit = 3): Guide[] {
  return guides.filter((guide) => guide.slug !== slug).slice(0, limit);
}

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
