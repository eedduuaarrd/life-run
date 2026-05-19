import { z } from "zod";

const optionalString = z
  .string()
  .optional()
  .transform((v) => (v?.trim() ? v.trim() : undefined));

const businessEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: optionalString,
  VEYLORA_NAME: optionalString,
  VEYLORA_TAGLINE: optionalString,
  VEYLORA_DESCRIPTION: optionalString,
  VEYLORA_STREET_ADDRESS: optionalString,
  VEYLORA_ADDRESS_LOCALITY: optionalString,
  VEYLORA_ADDRESS_REGION: optionalString,
  VEYLORA_POSTAL_CODE: optionalString,
  VEYLORA_ADDRESS_COUNTRY: optionalString,
  VEYLORA_PHONE: optionalString,
  VEYLORA_EMAIL: optionalString,
  VEYLORA_LAT: optionalString,
  VEYLORA_LNG: optionalString,
  VEYLORA_GOOGLE_MAPS_URL: optionalString,
  VEYLORA_GOOGLE_PLACE_ID: optionalString,
  VEYLORA_OPENING_HOURS: optionalString,
  VEYLORA_PRICE_RANGE: optionalString,
  VEYLORA_CATEGORY: optionalString,
});

export type BusinessConfig = {
  siteUrl: string;
  name: string;
  tagline: string;
  description: string;
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry: string;
  phone?: string;
  email?: string;
  latitude?: number;
  longitude?: number;
  googleMapsUrl?: string;
  googlePlaceId?: string;
  openingHours?: string[];
  priceRange?: string;
  category: string;
  hasPhysicalAddress: boolean;
};

function parseOpeningHours(raw?: string): string[] | undefined {
  if (!raw?.trim()) return undefined;
  return raw
    .split("|")
    .map((line) => line.trim())
    .filter(Boolean);
}

function parseCoordinate(raw?: string): number | undefined {
  if (!raw?.trim()) return undefined;
  const value = Number.parseFloat(raw);
  return Number.isFinite(value) ? value : undefined;
}

export function getBusinessConfig(): BusinessConfig {
  const env = businessEnvSchema.parse(process.env);

  const siteUrl =
    env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://veylora.com";

  const streetAddress = env.VEYLORA_STREET_ADDRESS;
  const addressLocality = env.VEYLORA_ADDRESS_LOCALITY;
  const hasPhysicalAddress = Boolean(streetAddress && addressLocality);

  return {
    siteUrl,
    name: env.VEYLORA_NAME ?? "Veylora",
    tagline:
      env.VEYLORA_TAGLINE ??
      "El teu espai a Google Maps — troba’ns quan ens busquis",
    description:
      env.VEYLORA_DESCRIPTION ??
      "Veylora — descobreix-nos a Google Maps. Informació, horaris, contacte i ubicació actualitzats.",
    streetAddress,
    addressLocality,
    addressRegion: env.VEYLORA_ADDRESS_REGION,
    postalCode: env.VEYLORA_POSTAL_CODE,
    addressCountry: env.VEYLORA_ADDRESS_COUNTRY ?? "ES",
    phone: env.VEYLORA_PHONE,
    email: env.VEYLORA_EMAIL,
    latitude: parseCoordinate(env.VEYLORA_LAT),
    longitude: parseCoordinate(env.VEYLORA_LNG),
    googleMapsUrl: env.VEYLORA_GOOGLE_MAPS_URL,
    googlePlaceId: env.VEYLORA_GOOGLE_PLACE_ID,
    openingHours: parseOpeningHours(env.VEYLORA_OPENING_HOURS),
    priceRange: env.VEYLORA_PRICE_RANGE,
    category: env.VEYLORA_CATEGORY ?? "LocalBusiness",
    hasPhysicalAddress,
  };
}

export function formatFullAddress(config: BusinessConfig): string | null {
  const parts = [
    config.streetAddress,
    [config.postalCode, config.addressLocality].filter(Boolean).join(" "),
    config.addressRegion,
    config.addressCountry,
  ].filter(Boolean);

  return parts.length > 0 ? parts.join(", ") : null;
}
