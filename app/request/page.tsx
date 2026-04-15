import { Metadata } from "next";
import { RequestManpowerWizard } from "@/components/forms/RequestManpowerWizard";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCtaBand } from "@/components/layout/FinalCtaBand";
import { buildOgMeta } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  ...buildOgMeta({
    title: "Request Manpower",
    description:
      "Submit your manpower requirement to Xenial Xcel Consult. Multi-step form for company info, sector, roles, quantity, and timeline. Response within one business day.",
    path: "/request",
  }),
};

export default function RequestPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Request Manpower", href: "/request" }]} />
      <PageHero
        eyebrow="Request Manpower"
        title="Tell Us Your Requirement"
        description="Complete this form to begin manpower planning. Our team will align shortlist, interview, and deployment steps with your timeline."
        bgImage="/images/hero_workspace_1776009199492.png"
      />
      <Section>
        <div className="mx-auto max-w-4xl">
          <RequestManpowerWizard />
        </div>
      </Section>
      <FinalCtaBand
        title="Need immediate support?"
        description="Contact our team directly if you want faster requirement review or process clarification."
      />
    </>
  );
}
