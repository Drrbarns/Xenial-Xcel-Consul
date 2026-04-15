"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Cpu,
  HeartPulse,
  Landmark,
  PackageCheck,
  Sparkles,
} from "lucide-react";
import { pipelineSteps } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const practiceAreas = [
  {
    name: "Tech & AI",
    subtitle: "Platforms, data, and intelligent automation",
    description:
      "AI adoption strategy, data architecture modernization, and execution support for digital operating models.",
    icon: Cpu,
  },
  {
    name: "Financial Services",
    subtitle: "Capital markets, fintech, and risk-aware growth",
    description:
      "Risk-aware growth programs for fintech, private capital, and high-trust financial institutions.",
    icon: Landmark,
  },
  {
    name: "Global Logistics",
    subtitle: "Networks, planning, and multi-region scale",
    description:
      "Network optimization and predictive planning across multi-region supply chain ecosystems.",
    icon: PackageCheck,
  },
  {
    name: "Healthcare",
    subtitle: "Providers, biotech, and regulated innovation",
    description:
      "Operational transformation for providers, biotech teams, and regulated healthcare innovators.",
    icon: HeartPulse,
  },
  {
    name: "SaaS Leaders",
    subtitle: "GTM, retention, and revenue architecture",
    description:
      "Scalable go-to-market frameworks, retention loops, and revenue architecture for SaaS growth.",
    icon: Sparkles,
  },
  {
    name: "Real Estate",
    subtitle: "Portfolios, capital, and institutional assets",
    description:
      "Portfolio intelligence and capital deployment strategy for commercial and institutional assets.",
    icon: Building2,
  },
];

export function GlobalPracticeAreas() {
  const [active, setActive] = useState(0);
  const current = practiceAreas[active];
  const Icon = current.icon;

  return (
    <Section className="relative overflow-hidden border-y border-white/10 bg-primary py-24 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/abstract_pattern_1776009520629.png')] bg-cover bg-center opacity-[0.08] mix-blend-overlay"
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Sector depth</p>
          <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.6rem] lg:leading-tight">
            Global practice areas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
            Pick a sector to see how we translate the same execution backbone into industry-specific plays—from
            first board conversation through rollout.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-b border-white/10 pb-10 md:gap-3">
          {pipelineSteps.slice(0, 6).map((step, i) => (
            <span key={step} className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-slate-400 md:text-xs">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-accent">
                {i + 1}
              </span>
              {step}
              {i < 5 && <span className="hidden text-accent/50 sm:inline">→</span>}
            </span>
          ))}
          <span className="self-center text-xs text-slate-500">…</span>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-8">
          <div className="flex flex-col lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Select a focus</p>
            <nav className="mt-4 flex flex-col gap-1" aria-label="Practice areas">
              {practiceAreas.map((area, index) => {
                const ItemIcon = area.icon;
                const isActive = index === active;
                return (
                  <button
                    key={area.name}
                    type="button"
                    onClick={() => setActive(index)}
                    className={cn(
                      "flex w-full items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-all md:px-5 md:py-4",
                      isActive
                        ? "border-accent/50 bg-white/10 shadow-[0_0_32px_-12px_rgba(200,164,93,0.35)]"
                        : "border-transparent bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.06]",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                        isActive ? "bg-accent/25 text-accent" : "bg-white/5 text-slate-400",
                      )}
                    >
                      <ItemIcon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="font-[var(--font-heading)] text-base font-semibold text-white md:text-lg">
                        {area.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-400 md:text-sm">
                        {area.subtitle}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "text-xs font-bold tabular-nums",
                        isActive ? "text-accent" : "text-slate-600",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-white/15 shadow-[0_28px_80px_-32px_rgba(0,0,0,0.75)] sm:min-h-[400px] lg:min-h-[520px]">
              <Image
                src="/images/services_strategy_1776009302724.png"
                alt="Strategy session and enterprise planning"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
              <div className="absolute left-4 top-4 md:left-6 md:top-6">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                  Live lens · {String(active + 1).padStart(2, "0")} / {String(practiceAreas.length).padStart(2, "0")}
                </span>
              </div>
              <div className="absolute inset-x-4 bottom-4 md:inset-x-8 md:bottom-8">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl md:p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-2xl font-bold text-white md:text-3xl">
                    {current.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200 md:text-base">{current.description}</p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center text-sm font-semibold text-accent hover:text-white"
                  >
                    Discuss this sector with a partner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-10">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full border-0 bg-white px-8 font-semibold text-primary hover:bg-slate-100"
          >
            <Link href="/contact">Initiate Briefing</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 rounded-full border-white/20 bg-white/5 px-8 text-white backdrop-blur-md hover:bg-white/10"
          >
            <Link href="/process">
              Explore Full Methodology
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
