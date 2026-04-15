import { Metadata } from "next";
import { RequestManpowerWizard } from "@/components/forms/RequestManpowerWizard";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCtaBand } from "@/components/layout/FinalCtaBand";

export const metadata: Metadata = {
  title: "Request Manpower",
};

export default function RequestPage() {
  return (
    <>
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
