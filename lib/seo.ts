/** Production canonical origin (www). Override with NEXT_PUBLIC_SITE_URL in env if needed. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.xeniumxcel.com"
).replace(/\/$/, "");

export const SITE_NAME = "Xenial Xcel Consult";

export const SITE_DESCRIPTION =
  "Xenium Xcel Consult is a Ghana-based recruitment and travel agency connecting qualified candidates with overseas employers across oil & gas, construction, hospitality, and engineering — independent, registered, and regulated for over five years.";

export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const KEYWORDS = [
  "recruitment agency Ghana",
  "Xenium Xcel Consult",
  "Xenial Xcel Consult",
  "travel and recruitment agency Accra",
  "overseas employment Ghana",
  "Australia sponsorship jobs",
  "oil and gas recruitment Ghana",
  "visa processing Ghana",
  "international manpower supply",
  "skilled workers recruitment",
  "construction workers Ghana",
  "hospitality workers recruitment",
  "engineering jobs abroad",
  "employer-oriented recruitment",
  "workforce deployment",
  "overseas job placement",
];

export function buildOgMeta({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — Recruitment Excellence` }],
      locale: "en_US",
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
