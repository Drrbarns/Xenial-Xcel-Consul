/** Production canonical origin (www). Override with NEXT_PUBLIC_SITE_URL in env if needed. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.xeniumxcel.com"
).replace(/\/$/, "");

export const SITE_NAME = "Xenial Xcel Consult";

export const SITE_DESCRIPTION =
  "Xenial Xcel Consult (RL-1221) is a trusted international employer-oriented manpower recruitment agency in Bangladesh — MOEWOE consented, BAIRA member — delivering skilled and unskilled workers for employers worldwide.";

export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const KEYWORDS = [
  "manpower recruitment agency Bangladesh",
  "Xenial Xcel Consult",
  "RL-1221",
  "BAIRA member recruitment",
  "MOEWOE consented agency",
  "overseas employment Bangladesh",
  "skilled workers recruitment",
  "international manpower supply",
  "oil and gas recruitment",
  "Australia sponsorship jobs",
  "construction workers Bangladesh",
  "manufacturing workers recruitment",
  "recruitment agency Dhaka",
  "employer-oriented recruitment",
  "workforce deployment",
  "demand letter processing",
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
