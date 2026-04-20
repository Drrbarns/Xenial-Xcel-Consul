import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Check,
  ClipboardList,
  Clock,
  FileSignature,
  GraduationCap,
  HeartPulse,
  IdCard,
  Languages,
  LifeBuoy,
  Mail,
  Phone,
  Plane,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Stamp,
  Target,
} from "lucide-react";
import { company, faqs as allFaqs } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCtaBand } from "@/components/layout/FinalCtaBand";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buildOgMeta } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  ...buildOgMeta({
    title: "Visa Processing",
    description:
      "Comprehensive overseas visa processing service from Xenium Xcel Consult — document preparation, application submission, interview coaching, and post-arrival support for individuals and businesses in Ghana.",
    path: "/services/visa-processing",
  }),
};

const requirements = [
  { icon: IdCard, label: "Valid passport" },
  { icon: ClipboardList, label: "Completed visa application form" },
  { icon: BadgeCheck, label: "National ID card" },
  { icon: Sparkles, label: "Recent passport photographs" },
  { icon: ScrollText, label: "Employment offer letter" },
  { icon: FileSignature, label: "Employment contract" },
  { icon: GraduationCap, label: "Educational and professional certificates" },
  { icon: ShieldCheck, label: "Police clearance certificate" },
  { icon: HeartPulse, label: "Medical test report" },
];

const steps = [
  {
    title: "Initial consultation",
    description:
      "We listen first — destination, role, family situation, and timeline — then map a clear, realistic visa pathway.",
    icon: Target,
  },
  {
    title: "Document preparation",
    description:
      "Comprehensive guidance for assembling and verifying every required document so submissions go in clean.",
    icon: ClipboardList,
  },
  {
    title: "Application submission",
    description:
      "Filing with the relevant embassy or visa centre using the correct lodgement channel for your category.",
    icon: FileSignature,
  },
  {
    title: "Application tracking",
    description:
      "Active monitoring of your file with the embassy and visa processing centre — you stay informed at every milestone.",
    icon: CalendarClock,
  },
  {
    title: "Interview preparation",
    description:
      "Coaching on commonly asked questions, document presentation, and tone so you arrive confident on interview day.",
    icon: Languages,
  },
  {
    title: "Medical test coordination",
    description:
      "Guidance on approved panel physicians, the test itself, and how the results connect to your application timeline.",
    icon: HeartPulse,
  },
  {
    title: "Visa decision & notification",
    description:
      "We track and confirm the decision the moment it lands, then explain the next-step letter from the embassy clearly.",
    icon: Stamp,
  },
  {
    title: "Pre-departure assistance",
    description:
      "Travel checklist, baggage policy, ticketing coordination, and country-specific cultural and legal briefings.",
    icon: Plane,
  },
  {
    title: "Post-arrival support",
    description:
      "Soft-landing follow-up — first-week check-ins, employer handover support, and continuity for renewals.",
    icon: LifeBuoy,
  },
];

const reasons = [
  {
    title: "Expert guidance",
    description:
      "Experienced consultants who actively work with multiple embassies and visa categories — not generic advice.",
  },
  {
    title: "Comprehensive support",
    description:
      "End-to-end help from first consultation through landing in your destination country and the first weeks beyond.",
  },
  {
    title: "Personalized service",
    description:
      "Every applicant is treated as an individual — your case file, timeline, and risk factors are unique to you.",
  },
  {
    title: "Efficient processing",
    description:
      "Disciplined file preparation and tracking shortens turnarounds and reduces avoidable rework.",
  },
  {
    title: "Compliance with regulations",
    description:
      "Applications are prepared to meet the legal standards of the destination jurisdiction — lowering rejection risk.",
  },
  {
    title: "Transparency",
    description:
      "Clear scope, clear fees, and clear timelines — no surprises, no hidden brokers in the chain.",
  },
  {
    title: "High success rate",
    description:
      "Our discipline on documentation and interview readiness shows up in our approval outcomes.",
  },
  {
    title: "Urgent application handling",
    description:
      "When timelines compress, we know which categories support expedited routes — and how to qualify for them.",
  },
  {
    title: "Dedicated customer support",
    description:
      "A real person responds — not a chatbot. Email, WhatsApp, and phone channels stay open through your case.",
  },
];

const visaFaqs = [
  {
    question: "How long does the visa processing take?",
    answer:
      "Processing time varies by country and visa category. Typical timelines range from a few weeks to a couple of months. We submit promptly and actively track progress to minimise delays.",
  },
  {
    question: "Can you help with urgent visa applications?",
    answer:
      "Yes — where the visa category supports an expedited route, we will assess eligibility, prepare the file with priority, and coordinate appointment scheduling accordingly.",
  },
  {
    question: "How does Xenium Xcel Consult ensure compliance with visa regulations?",
    answer:
      "We prepare every application to the legal and procedural standards of the destination country, verify documentation against the latest embassy checklists, and disclose all fees and timelines transparently.",
  },
  {
    question: "What support is provided if a visa application is rejected?",
    answer:
      "We review the refusal letter with you, identify the cause (documentary gap, eligibility issue, interview concern), and advise on the most appropriate next step — appeal, reapplication, or alternative category.",
  },
  {
    question: "How can I track the status of my visa application?",
    answer:
      "Once your file is lodged, we monitor the embassy and visa centre updates and proactively share milestone updates. You can also reach out at any time and we will confirm current status the same business day.",
  },
];

const combinedFaqs = [...visaFaqs, ...allFaqs.filter((f) => /visa/i.test(f.question))];

export default function VisaProcessingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Visa Processing", href: "/services/visa-processing" },
        ]}
      />
      <ServiceJsonLd
        name="Overseas Visa Processing"
        description="Comprehensive overseas visa processing — initial consultation, document preparation, application submission, tracking, interview coaching, medical coordination, decision notification, pre-departure, and post-arrival support."
      />
      <FAQPageJsonLd faqs={combinedFaqs} />

      <PageHero
        eyebrow="Visa processing"
        title="Overseas visa processing service in Ghana"
        description="Navigating an international visa can be complex. Xenium Xcel Consult provides complete, dependable, and personalised visa processing for individuals and businesses — designed for a hassle-free experience from consultation through arrival."
        bgImage="/images/visa_processing_hero.png"
      />

      {/* Intro band with image and key promise */}
      <Section className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              A trusted partner for your visa
            </p>
            <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Comprehensive visa processing — designed for clarity and speed
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              As a recognised recruitment and visa processing agency in Ghana, Xenium Xcel Consult provides end-to-end
              visa coordination so individuals and businesses can move forward without second-guessing the process. Our
              skilled team is committed to dependable, fast, and personalised service — making us a trustworthy partner
              for all your visa needs.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Whether you are pursuing employment abroad, mobilising a workforce, or relocating with your family, we
              translate the rules into a calm, ordered plan you can actually follow.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-full shadow-premium" variant="gold">
                <Link href="/contact">Schedule a meeting today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary/20 px-8">
                <a href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hello, I would like to discuss visa processing.")}`} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-primary/10 to-transparent opacity-70 blur-2xl"
                aria-hidden
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-primary/10 shadow-[0_28px_70px_-24px_rgba(8,24,51,0.35)]">
                <Image
                  src="/images/visa_processing_consultation.png"
                  alt="Visa consultant reviewing overseas visa documents"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                    <p className="font-[var(--font-heading)] text-lg font-semibold text-white">
                      Personal case officer
                    </p>
                    <p className="mt-1 text-sm text-slate-200">
                      One named contact owns your file from consultation to landing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Requirements */}
      <Section className="bg-slate-50">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Requirements</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Documents you will need
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Overseas employees and applicants must navigate a detailed process. To ensure a smooth and successful
              application, here are the standard requirements we will help you prepare and verify.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-primary/10 shadow-[0_24px_60px_-32px_rgba(8,24,51,0.28)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/visa_processing_requirements.png"
                  alt="Visa application document checklist arranged on a desk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {requirements.map((req) => {
                const Icon = req.icon;
                return (
                  <li
                    key={req.label}
                    className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_-20px_rgba(8,24,51,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(8,24,51,0.4)]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-[var(--font-heading)] text-base font-semibold text-primary">{req.label}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Verified against current embassy checklists before submission.
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/[0.03] p-5 text-sm leading-relaxed text-slate-700">
              <span className="font-semibold text-primary">Note: </span>
              The exact list varies by destination country and visa category. During your consultation we tailor a
              checklist specifically for your application.
            </div>
          </div>
        </div>
      </Section>

      {/* Process / Steps */}
      <Section className="relative overflow-hidden bg-primary py-24 text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[url('/images/abstract_pattern_1776009520629.png')] bg-cover bg-center opacity-[0.1] mix-blend-overlay"
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Our procedure</p>
            <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.6rem] lg:leading-tight">
              Steps for overseas visa processing
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
              The visa application procedure can be complex and time-consuming. Here is the calm, step-by-step path we
              walk with every applicant — from first consultation through post-arrival support.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-accent/30 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-[var(--font-heading)] text-2xl font-bold text-white/15 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-[var(--font-heading)] text-lg font-semibold text-white md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-white/10 pt-10">
            <Button asChild size="lg" className="h-14 rounded-full bg-accent px-8 font-semibold text-primary hover:bg-accent/90">
              <Link href="/contact">Start your visa pathway</Link>
            </Button>
            <Link
              href="/process"
              className="inline-flex items-center text-sm font-semibold text-white/90 transition-colors hover:text-accent"
            >
              See our full recruitment process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Why choose us */}
      <Section className="bg-white">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Why us</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Why choose Xenium Xcel Consult for visa processing?
            </h2>
          </div>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            We stand out as a reliable partner for navigating the complexity of visa applications. Our consultants
            provide structured guidance throughout — applications submitted by us are designed to meet legal standards,
            lowering the possibility of visa rejection.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_rgba(8,24,51,0.35)]"
            >
              <span className="absolute right-4 top-4 text-xs font-bold tabular-nums text-accent/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/[0.06] text-accent">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-[var(--font-heading)] text-lg font-semibold text-primary">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{reason.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-full shadow-premium" variant="gold">
            <Link href="/contact">Call for details</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-primary/20 px-8">
            <a href={`mailto:${company.email}?subject=Visa%20processing%20inquiry`}>
              <Mail className="mr-2 h-4 w-4" />
              Email us
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="rounded-full text-primary">
            <a href={`tel:${company.phoneLinks[0]}`}>
              <Phone className="mr-2 h-4 w-4" />
              {company.phones[0]}
            </a>
          </Button>
        </div>
      </Section>

      {/* Highlights strip */}
      <Section className="border-y border-slate-100 bg-slate-50 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Clock, label: "Same business day responses" },
            { icon: ShieldCheck, label: "Independent & registered agency" },
            { icon: Sparkles, label: "Personal case officer" },
            { icon: LifeBuoy, label: "Post-arrival continuity" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <p className="font-[var(--font-heading)] text-sm font-semibold text-primary md:text-base">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">FAQ</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
              Common questions on visa processing timelines, urgent applications, compliance, refusals, and tracking.
            </p>
            <Button asChild variant="gold" className="mt-8 rounded-full px-8 shadow-premium">
              <Link href="/contact">Ask a specific question</Link>
            </Button>
          </div>
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {visaFaqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`visa-faq-${index}`}
                  className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_8px_28px_-14px_rgba(8,24,51,0.18)] transition-shadow data-[state=open]:border-accent/35 data-[state=open]:shadow-[0_14px_40px_-18px_rgba(8,24,51,0.22)] border-b-0"
                >
                  <AccordionTrigger className="px-5 py-5 text-left hover:bg-slate-50/90 hover:no-underline [&[data-state=open]]:bg-slate-50/60">
                    <span className="flex w-full items-start gap-4 pr-2">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-xs font-bold tabular-nums text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-[var(--font-heading)] text-base font-semibold leading-snug text-primary md:text-lg">
                        {faq.question}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="border-t border-slate-100 bg-slate-50/40 px-5 text-slate-600">
                    <div className="pb-5 pl-[3.25rem] pt-4 text-sm leading-relaxed md:text-base">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      <FinalCtaBand
        title="Ready to start your visa application?"
        description="Schedule a meeting today — we will assess your case, build a personalised plan, and walk you through every step until you land safely abroad."
      />
    </>
  );
}
