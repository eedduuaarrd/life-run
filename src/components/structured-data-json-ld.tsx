import { BRAND_KEYWORD, getBusinessConfig } from "@/lib/business";

export function StructuredDataJsonLd() {
  const config = getBusinessConfig();

  const organization = {
    "@type": "Organization",
    "@id": `${config.siteUrl}/#organization`,
    name: config.name,
    alternateName: BRAND_KEYWORD,
    description: config.description,
    url: config.siteUrl,
    logo: `${config.siteUrl}/icon`,
    image: `${config.siteUrl}/opengraph-image`,
    email: config.email,
    telephone: config.phone,
    sameAs: config.socialUrls.length > 0 ? config.socialUrls : undefined,
  };

  const website = {
    "@type": "WebSite",
    "@id": `${config.siteUrl}/#website`,
    url: config.siteUrl,
    name: config.name,
    alternateName: BRAND_KEYWORD,
    description: config.description,
    publisher: { "@id": `${config.siteUrl}/#organization` },
    inLanguage: "ca",
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${config.siteUrl}/#webpage`,
    url: config.siteUrl,
    name: `${config.name} — web oficial`,
    description: config.description,
    isPartOf: { "@id": `${config.siteUrl}/#website` },
    about: { "@id": `${config.siteUrl}/#organization` },
    inLanguage: "ca",
    primaryImageOfPage: `${config.siteUrl}/opengraph-image`,
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website, webpage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
