import { Metadata } from "next";
import { FAQ } from "@/components/home/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCtaBand } from "@/components/layout/FinalCtaBand";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FAQPage() {
  return (
    <>
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
