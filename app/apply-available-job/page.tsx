import { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { FinalCtaBand } from "@/components/layout/FinalCtaBand";
import { ApplicationWizard } from "./ApplicationWizard";
import { buildOgMeta } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  ...buildOgMeta({
    title: "Apply Available Job",
    description:
      "Apply for Oil & Gas employment opportunities in Australia through Xenial Xcel Consult. Employer sponsorship available with structured repayment terms.",
    path: "/apply-available-job",
  }),
};

export default function ApplyAvailableJobPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Apply Available Job", href: "/apply-available-job" }]} />
      <PageHero
        eyebrow="Apply Available Job"
        title="Oil & Gas Employment Application"
        description="Complete this step-by-step questionnaire carefully. Selected applicants may receive employer sponsorship for relocation to Australia."
        bgImage="/images/hero_workspace_1776009199492.png"
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <ApplicationWizard />
        </div>
      </Section>

      <FinalCtaBand
        title="Need support with your application?"
        description="Our team can guide you through documents, sponsorship terms, and next steps."
      />
    </>
  );
}
