import {
  type BusinessConfig,
  formatFullAddress,
  getBusinessConfig,
} from "@/lib/business";

function buildLocalBusinessSchema(config: BusinessConfig) {
  const address = config.hasPhysicalAddress
    ? {
        "@type": "PostalAddress",
        streetAddress: config.streetAddress,
        addressLocality: config.addressLocality,
        addressRegion: config.addressRegion,
        postalCode: config.postalCode,
        addressCountry: config.addressCountry,
      }
    : undefined;

  const geo =
    config.latitude != null && config.longitude != null
      ? {
          "@type": "GeoCoordinates",
          latitude: config.latitude,
          longitude: config.longitude,
        }
      : undefined;

  const sameAs = [
    config.googleMapsUrl,
    config.googlePlaceId
      ? `https://www.google.com/maps/place/?q=place_id:${config.googlePlaceId}`
      : undefined,
  ].filter((url): url is string => Boolean(url));

  return {
    "@context": "https://schema.org",
    "@type": config.category,
    "@id": `${config.siteUrl}/#organization`,
    name: config.name,
    description: config.description,
    url: config.siteUrl,
    image: `${config.siteUrl}/opengraph-image`,
    telephone: config.phone,
    email: config.email,
    priceRange: config.priceRange,
    address,
    geo,
    openingHours: config.openingHours,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    hasMap: config.googleMapsUrl,
  };
}

function buildWebSiteSchema(config: BusinessConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${config.siteUrl}/#website`,
    url: config.siteUrl,
    name: config.name,
    description: config.description,
    publisher: { "@id": `${config.siteUrl}/#organization` },
    inLanguage: "ca",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${config.siteUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function LocalBusinessJsonLd() {
  const config = getBusinessConfig();
  const fullAddress = formatFullAddress(config);

  const graph = [
    buildWebSiteSchema(config),
    buildLocalBusinessSchema(config),
    fullAddress
      ? {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${config.siteUrl}/#webpage`,
          url: config.siteUrl,
          name: `${config.name} — Google Maps i contacte`,
          description: config.description,
          isPartOf: { "@id": `${config.siteUrl}/#website` },
          about: { "@id": `${config.siteUrl}/#organization` },
          inLanguage: "ca",
        }
      : null,
  ].filter(Boolean);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@graph": graph }) }}
    />
  );
}
