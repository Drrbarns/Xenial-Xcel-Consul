import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        alternateName: "Xenium Xcel Consult RL-1221",
        url: SITE_URL,
        logo: `${SITE_URL}/icon-512.png`,
        image: `${SITE_URL}/og-image.png`,
        description: SITE_DESCRIPTION,
        address: {
          "@type": "PostalAddress",
          streetAddress: "House No: 01, Road No: 95, Palladium Market, 2nd Floor",
          addressLocality: "Dhaka",
          postalCode: "1212",
          addressCountry: "BD",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+88-01711-565979",
            contactType: "customer service",
            availableLanguage: ["English", "Bengali"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+88-01971-565979",
            contactType: "customer service",
            availableLanguage: ["English", "Bengali"],
          },
        ],
        email: "info@gulfint-bd.com",
        sameAs: [],
        foundingDate: "2010",
        numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
        areaServed: ["Middle East", "Europe", "Asia", "Africa", "Australia"],
        knowsAbout: [
          "Manpower Recruitment",
          "Overseas Employment",
          "Construction Workers",
          "Manufacturing Workers",
          "Oil and Gas Recruitment",
          "Australia Sponsorship",
        ],
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png` },
        },
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/faq` },
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${SITE_URL}${item.href}`,
        })),
      }}
    />
  );
}

export function FAQPageJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: name,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        description,
        areaServed: ["Middle East", "Europe", "Asia", "Africa", "Australia"],
      }}
    />
  );
}
