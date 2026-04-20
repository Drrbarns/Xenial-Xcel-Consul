import { Metadata } from "next";
import { FAQ } from "@/components/home/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCtaBand } from "@/components/layout/FinalCtaBand";
import { buildOgMeta } from "@/lib/seo";
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/lib/mockData";

export const metadata: Metadata = {
  ...buildOgMeta({
    title: "FAQ",
    description:
      "Frequently asked questions about overseas recruitment, visa processing, Australia sponsorship, sectors served, and how Xenium Xcel Consult operates from Ghana.",
    path: "/faq",
  }),
};

export default function FAQPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }]} />
      <FAQPageJsonLd faqs={faqs} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Common employer questions on process, industries, and digital update capability."
        bgImage="/images/hero_workspace_1776009199492.png"
      />
      <FAQ />
      <FinalCtaBand
        title="Need answers tailored to your requirement?"
        description="Connect with our team to discuss manpower quantity, timeline, and industry-specific needs."
      />
    </>
  );
}
