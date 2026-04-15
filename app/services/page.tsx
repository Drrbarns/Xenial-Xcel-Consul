import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { pipelineSteps } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCtaBand } from "@/components/layout/FinalCtaBand";
import { GlobalPracticeAreas } from "@/components/services/GlobalPracticeAreas";
import { Button } from "@/components/ui/button";
import { buildOgMeta } from "@/lib/seo";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  ...buildOgMeta({
    title: "Services",
    description:
      "Comprehensive manpower recruitment services across manufacturing, construction, service industries, plantation, agriculture, and engineering. RL-1221 licensed agency.",
    path: "/services",
  }),
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />
      <ServiceJsonLd name="International Manpower Recruitment" description="End-to-end manpower recruitment services from demand letter to deployment across manufacturing, construction, service industries, plantation, agriculture, and engineering sectors." />
      <PageHero
        eyebrow="Our Expertise"
        title="Multidimensional Strategic Execution"
        description="We provide comprehensive advisory, data analytics, and operational alignment to propel your enterprise past its apex capability."
        bgImage="/images/hero_workspace_1776009199492.png"
      />

      <Section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold tracking-tight text-primary">
            The Transformation Architecture
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pipelineSteps.slice(0, 6).map((step, index) => (
              <div key={step} className="rounded-2xl border border-primary/10 bg-white p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all hover:-translate-y-1">
                <p className="text-xs uppercase tracking-widest text-accent font-semibold">{`Phase 0${index + 1}`}</p>
                <p className="mt-4 text-xl font-bold text-primary flex items-center justify-between">
                  {step}
                  <ArrowRight className="h-5 w-5 text-accent" />
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full shadow-premium h-14 px-8" variant="gold">
              <Link href="/process">Explore Full Methodology</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 border-primary/20 text-primary hover:bg-primary/5">
              <Link href="/faq">Review Strategic FAQ</Link>
            </Button>
          </div>
        </div>
      </Section>

      <GlobalPracticeAreas />

      <Section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_-35px_rgba(8,24,51,0.6)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Decision Support</p>
            <div className="mt-4 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <p className="max-w-3xl text-base leading-relaxed text-slate-700">
                Not sure which practice path fits your objective? We run a structured discovery to identify
                the fastest route to measurable business outcomes.
              </p>
              <Button asChild variant="gold" size="lg" className="h-12 rounded-full px-6">
                <Link href="/contact">Book Strategy Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <FinalCtaBand
        title="Ascend to Absolute Supremacy."
        description="Deploy our strike teams of quantitative analysts and strategists directly into your organization today."
      />
    </>
  );
}
