import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Globe2 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCtaBand } from "@/components/layout/FinalCtaBand";
import {
  company,
  expertiseCards,
  missionVisionPassion,
  pipelineSteps,
  stats,
} from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { buildOgMeta } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  ...buildOgMeta({
    title: "About Us",
    description:
      "Learn about Xenium Xcel Consult — an independent, Ghana-based recruitment and travel agency, registered and regulated for over five years, with 20 core team members and 500+ employer partners.",
    path: "/about",
  }),
};

const phaseBlurbs = [
  "Align on mandate, stakeholders, and the decisions that must be true before work scales.",
  "Unify systems of record and signals so models and leadership share one source of truth.",
  "Stress-test assumptions, exposure, and operational bottlenecks with quantitative rigor.",
  "Translate insight into a phased plan with owners, capital, and risk boundaries.",
  "Secure executive sponsorship and governance so execution survives calendar churn.",
  "Launch the first high-leverage workstreams with clear success metrics and feedback loops.",
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "About Us", href: "/about" }]} />
      <PageHero
        eyebrow="About us"
        title="Know us better"
        description={`${company.positioning} Your accountable partner for ethical overseas placements and visa processing.`}
        bgImage="/images/hero_workspace_1776009199492.png"
      />

      <Section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Who we are
              </p>
              <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-bold tracking-tight text-primary">
                Who we are
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                {company.name} is an independent recruitment and travel agency based in Ghana — a reliable gateway for
                skilled, semi-skilled, and unskilled workers matched to overseas employer demand.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                We are gaining recognition for professional service to valued clients. Supportive concerns—air ticketing,
                training, 24/7 digital customer care—mean employers receive one-stop support effectively and efficiently.
              </p>
              <div className="grid gap-4 pt-2 sm:grid-cols-2">
                <div className="rounded-2xl border border-primary/10 bg-primary/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">What we solve</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Overseas hiring readiness, visa processing, mobilisation batches, and transparent status for principals.
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/10 bg-primary/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">How we deliver</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Registered, regulated operations and digital tools so updates are visible with one click — from
                    Accra to your destination country.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-primary/10 to-transparent opacity-70 blur-2xl"
                aria-hidden
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-primary/10 shadow-[0_28px_70px_-24px_rgba(8,24,51,0.35)] sm:aspect-[3/4] lg:aspect-[4/5]">
                <Image
                  src="/images/about_team_1776009217710.png"
                  alt={`${company.name} — leadership and advisory collaboration`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 md:inset-x-8 md:bottom-8">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md md:p-8">
                    <h3 className="font-[var(--font-heading)] text-xl font-bold text-white md:text-2xl">
                      Execution Snapshot
                    </h3>
                    <p className="mt-2 text-sm text-slate-200">
                      Standards every engagement is measured against.
                    </p>
                    <ul className="mt-5 space-y-3">
                      {company.trustBadges.map((badge, idx) => (
                        <li key={badge} className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/25 text-sm font-bold text-accent">
                            {idx + 1}
                          </div>
                          <span className="text-sm font-semibold text-white md:text-base">{badge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Capabilities</p>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-primary md:text-4xl">
                What We Bring to the Table
              </h2>
            </div>
            <Button asChild variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
              <Link href="/services">View Full Service Portfolio</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expertiseCards.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_-20px_rgba(8,24,51,0.45)]"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">Practice</p>
                <h3 className="mt-3 font-[var(--font-heading)] text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {missionVisionPassion.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white bg-white p-8 shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-2 hover:shadow-2xl">
                <h3 className="font-[var(--font-heading)] text-2xl font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600 font-medium">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full shadow-premium h-14 px-8" variant="gold">
              <Link href="/services">View Our Expertise</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 border-primary/20 text-primary hover:bg-primary/5">
              <Link href="/process">Explore Methodology</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        <div
          className="pointer-events-none absolute inset-0 bg-[url('/images/abstract_pattern_1776009520629.png')] bg-cover bg-center opacity-[0.12] mix-blend-overlay"
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-accent/15 blur-3xl" aria-hidden />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Operating model
            </p>
            <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              One spine. Six opening moves. Measurable outcomes.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300 lg:mx-0">
              Instead of a loose set of workshops, we run a single execution spine—so executives, operators, and
              data teams see the same sequence, the same gates, and the same definition of done.
            </p>
          </div>

          <div className="mt-14 grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="relative pl-8 sm:pl-10">
                <div
                  className="absolute left-[0.65rem] top-3 bottom-3 w-px bg-gradient-to-b from-accent via-accent/40 to-white/10 sm:left-[0.7rem]"
                  aria-hidden
                />
                <ol className="space-y-0">
                  {pipelineSteps.slice(0, 6).map((step, index) => (
                    <li key={step} className="relative pb-10 last:pb-0 sm:pb-12">
                      <span
                        className="absolute -left-1 top-1 flex h-3.5 w-3.5 -translate-x-[0.125rem] items-center justify-center sm:h-4 sm:w-4"
                        aria-hidden
                      >
                        <span className="absolute h-full w-full rounded-full bg-accent/40 blur-[2px]" />
                        <span className="relative h-2.5 w-2.5 rounded-full border-2 border-accent bg-primary shadow-[0_0_14px_rgba(200,164,93,0.45)] sm:h-3 sm:w-3" />
                      </span>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                        Phase {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1 font-[var(--font-heading)] text-lg font-semibold text-white sm:text-xl">
                        {step}
                      </p>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
                        {phaseBlurbs[index]}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8">
                <Button
                  asChild
                  variant="gold"
                  className="rounded-full px-6 shadow-[0_0_28px_-8px_rgba(200,164,93,0.5)]"
                >
                  <Link href="/process">See all 10 phases</Link>
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-semibold text-white/90 transition-colors hover:text-accent"
                >
                  Request a regional briefing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 shadow-[0_32px_80px_-28px_rgba(0,0,0,0.65)]">
                  <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                    <Image
                      src="/images/portfolio_dashboard_1776009561040.png"
                      alt="Operations dashboard and strategic metrics"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/20" />
                    <div className="absolute left-4 right-4 top-4 md:left-5 md:right-5 md:top-5">
                      <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                        <Globe2 className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                        <span className="line-clamp-2 md:line-clamp-none">
                          {company.destinationCountries.join(" · ")} — Accra coordination hub
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                      <p className="font-[var(--font-heading)] text-lg font-semibold text-white md:text-xl">
                        Proof in the field
                      </p>
                      <p className="mt-1 text-xs text-slate-300 md:text-sm">
                        Outcomes we track from sprint zero—not slide decks at the finish line.
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
                        {stats.map((item) => (
                          <div
                            key={item.label}
                            className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 backdrop-blur-md md:px-4 md:py-3.5"
                          >
                            <p className="text-lg font-bold tabular-nums text-white md:text-xl">{item.value}</p>
                            <p className="mt-0.5 text-[10px] font-medium uppercase leading-tight tracking-wide text-slate-300 md:text-[11px]">
                              {item.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-slate-400 lg:text-left">
                  Active delivery across {company.destinationCountries.join(", ")}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <FinalCtaBand
        title="Ready to redefine your market trajectory?"
        description="Engage with our senior partners to formulate an unbreakable strategy and scalable execution roadmap."
      />
    </>
  );
}
