import { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { FinalCtaBand } from "@/components/layout/FinalCtaBand";
import { ApplicationWizard } from "./ApplicationWizard";

export const metadata: Metadata = {
  title: "Apply Available Job",
  description:
    "Xenial Xcel Consult Oil & Gas Employment Application Questionnaire for Australia sponsorship.",
};

export default function ApplyAvailableJobPage() {
  return (
    <>
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
