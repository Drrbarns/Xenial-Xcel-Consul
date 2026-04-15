import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCtaBand } from "@/components/layout/FinalCtaBand";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { Button } from "@/components/ui/button";
import { buildOgMeta } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  ...buildOgMeta({
    title: "Recruitment Process",
    description:
      "Step-by-step recruitment process from demand letter to deployment — shortlist, interview, medical, BMET, visa, orientation, ticketing, and arrival handover.",
    path: "/process",
  }),
};

export default function ProcessPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Process", href: "/process" }]} />
      <PageHero
        eyebrow="How we work"
        title="Recruitment process — demand to deployment"
        description="A disciplined sequence from demand letter through BMET, medicals, training, ticketing, and arrival—so employers get predictable batches and workers get legal, dignified movement."
        bgImage="/images/hero_workspace_1776009199492.png"
      />
      <Section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16 mx-auto text-center">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-tight text-primary">Mobilisation timeline</h2>
            <p className="mt-4 text-slate-600 font-medium">Trace exactly how we architect supremacy from preliminary data sweeps to continuous scaling ops.</p>
          </div>
          <ProcessTimeline />
          <div className="mt-16 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full shadow-premium h-14 px-8" variant="gold">
              <Link href="/contact">Engage Leadership</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 border-primary/20 text-primary hover:bg-primary/5">
              <Link href="/services">Review Practice Areas</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="rounded-full h-14 px-8 text-slate-600 hover:text-primary">
              <Link href="/faq">Strategic FAQ</Link>
            </Button>
          </div>
        </div>
      </Section>
      <FinalCtaBand
        title="Deploy our methodology into your boardroom."
        description="Our elite strike teams are standing by to initiate Phase 01. Brief us on your objective today."
      />
    </>
  );
}
