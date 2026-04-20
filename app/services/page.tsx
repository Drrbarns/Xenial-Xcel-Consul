import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, BadgeCheck, Plane, Stamp } from "lucide-react";
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
      "Comprehensive recruitment and visa processing services across oil & gas, manufacturing, construction, hospitality, and engineering. Independent Ghana-based agency.",
    path: "/services",
  }),
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />
      <ServiceJsonLd name="International Manpower Recruitment & Visa Processing" description="End-to-end recruitment and overseas visa processing services from demand letter to deployment across oil & gas, manufacturing, construction, hospitality, and engineering sectors." />
      <PageHero
        eyebrow="Our Expertise"
        title="Recruitment, deployment & visa processing"
        description="A complete service stack from first demand letter to landing in your destination country — recruitment, training, ticketing, and a dedicated visa processing practice."
        bgImage="/images/hero_workspace_1776009199492.png"
      />

      {/* Featured: Visa Processing */}
      <Section className="bg-white">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              <Stamp className="h-3.5 w-3.5" />
              Featured service
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Overseas visa processing — handled end to end
            </h2>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              From the first consultation through document preparation, embassy submission, interview coaching, decision
              notification, and post-arrival support — our visa processing practice gives individuals and businesses a
              dependable, fast, and personalised path abroad.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Initial consultation & case mapping",
                "Document checklist & verification",
                "Embassy submission & tracking",
                "Interview coaching",
                "Medical coordination",
                "Pre-departure & post-arrival support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <BadgeCheck className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-full shadow-premium" variant="gold">
                <Link href="/services/visa-processing">
                  Explore visa processing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary/20 px-8">
                <Link href="/contact">Schedule a meeting</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative">
              <div
                className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-primary/10 to-transparent opacity-70 blur-2xl"
                aria-hidden
              />
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2rem] border border-primary/10 shadow-[0_28px_70px_-24px_rgba(8,24,51,0.35)]">
                <Image
                  src="/images/visa_processing_hero.png"
                  alt="Visa processing — passport, visa sticker, and embassy stamp"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    <Plane className="h-3.5 w-3.5 text-accent" />
                    From consultation to landing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

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
