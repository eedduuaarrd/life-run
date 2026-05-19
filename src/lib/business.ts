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
  VEYLORA_PHONE: optionalString,
  VEYLORA_EMAIL: optionalString,
  VEYLORA_SOCIAL_URLS: optionalString,
});

export type BusinessConfig = {
  siteUrl: string;
  name: string;
  tagline: string;
  description: string;
  phone?: string;
  email?: string;
  socialUrls: string[];
};

export const BRAND_KEYWORD = "Veylora";

export function getBusinessConfig(): BusinessConfig {
  const env = businessEnvSchema.parse(process.env);

  const siteUrl =
    env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://veylora.com";

  const name = env.VEYLORA_NAME ?? BRAND_KEYWORD;

  return {
    siteUrl,
    name,
    tagline:
      env.VEYLORA_TAGLINE ??
      "Lloc web oficial de Veylora — troba’ns quan busquis «Veylora» a Google",
    description:
      env.VEYLORA_DESCRIPTION ??
      "Veylora és la web oficial de la marca Veylora. Aquí trobaràs informació, contacte i novetats quan cerquis «Veylora» a Google.",
    phone: env.VEYLORA_PHONE,
    email: env.VEYLORA_EMAIL,
    socialUrls: env.VEYLORA_SOCIAL_URLS
      ? env.VEYLORA_SOCIAL_URLS.split("|").map((u) => u.trim()).filter(Boolean)
      : [],
  };
}

export function buildPageTitle(page?: string, config = getBusinessConfig()): string {
  if (!page) return config.name;
  return `${page} | ${config.name}`;
}
