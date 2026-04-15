import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { concerns, stats } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCtaBand } from "@/components/layout/FinalCtaBand";
import { Button } from "@/components/ui/button";
import { buildOgMeta } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  ...buildOgMeta({
    title: "Our Concerns",
    description:
      "Supportive concerns that make Xenial Xcel Consult a one-stop partner — travel and ticketing, training center, 24/7 digital customer care, and legal compliance under RL-1221.",
    path: "/concerns",
  }),
};

const concernSteps = [
  {
    title: "Understand",
    text: "We map employer demand, timelines, and compliance so each concern plugs in without gaps.",
  },
  {
    title: "Prepare",
    text: "Workers and files move through medicals, orientation, ticketing, and digital checkpoints together.",
  },
  {
    title: "Deploy",
    text: "Mobilisation batches leave with clear handover packs for your receiving team abroad.",
  },
  {
    title: "Support",
    text: "Digital care stays available for status, rebooking, and documentation follow-ups.",
  },
];

export default function ConcernsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Our Concerns", href: "/concerns" }]} />
      <PageHero
        eyebrow="Our concerns"
        title="One-stop support around recruitment"
        description="Beyond selection and documentation, Xenium Xcel Consult operates supportive legal entities—travel for air ticketing, a training center, 24/7 digital customer care—so employers get efficient, accountable service end to end."
        bgImage="/images/hero_workspace_1776009199492.png"
      />

      <Section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Why this matters</p>
          <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Concerns that protect your programme
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Employers rarely fail on intent—they fail when travel, training, and compliance drift out of sync. Each
            concern below is a deliberate extension of our recruiting work, run with the same discipline as BMET and
            embassy submissions.
          </p>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid gap-8 lg:grid-cols-2">
          {concerns.map((concern) => (
            <article
              key={concern.slug}
              className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_12px_40px_-24px_rgba(8,24,51,0.2)] transition-shadow hover:shadow-[0_20px_50px_-28px_rgba(8,24,51,0.25)]"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Concern</p>
              <h3 className="mt-3 font-[var(--font-heading)] text-xl font-bold text-primary md:text-2xl">
                {concern.name}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">{concern.description}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 line-clamp-4 md:line-clamp-none">
                {concern.overview}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {concern.highlights.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3 w-3" aria-hidden />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 w-full rounded-full" variant="outline">
                <Link href={`/concerns/${concern.slug}`} className="inline-flex items-center justify-center gap-2">
                  Read details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/10 bg-primary/[0.03] p-8 md:p-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-accent">How we sequence</p>
          <h3 className="mt-3 text-center font-[var(--font-heading)] text-2xl font-bold text-primary md:text-3xl">
            From mandate to mobilisation
          </h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {concernSteps.map((step, i) => (
              <div key={step.title} className="relative rounded-xl border border-slate-200 bg-white p-5 text-left">
                <span className="text-xs font-bold tabular-nums text-accent">0{i + 1}</span>
                <p className="mt-2 font-[var(--font-heading)] text-lg font-semibold text-primary">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-slate-200 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <p className="font-[var(--font-heading)] text-3xl font-bold text-primary tabular-nums">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Button asChild className="rounded-full px-8 shadow-premium" size="lg">
            <Link href="/contact">Call or email us</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20">
            <Link href="/request">Request manpower</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="rounded-full text-primary">
            <Link href="/faq">FAQ</Link>
          </Button>
        </div>
      </Section>

      <FinalCtaBand
        title="Need ticketing, training, and care in one rhythm?"
        description="Tell us your mobilisation window and destination—we will show how each concern connects to your recruiting file."
      />
    </>
  );
}
