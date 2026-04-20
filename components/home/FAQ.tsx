import Link from "next/link";
import { HelpCircle, MessagesSquare, ShieldCheck } from "lucide-react";
import { company, faqs } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type FAQProps = {
  limit?: number;
};

export function FAQ({ limit }: FAQProps) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  const isFullPage = !limit;

  return (
    <Section
      className="relative overflow-hidden bg-slate-50 bg-dot-pattern"
      containerClassName="relative z-10"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />

      <div
        className={`grid gap-12 ${isFullPage ? "lg:grid-cols-12 lg:gap-14 lg:items-start" : ""}`}
      >
        <div className={isFullPage ? "lg:col-span-5 lg:sticky lg:top-28" : ""}>
          {isFullPage ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Frequently asked questions
              </p>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-primary md:text-4xl">
                Client queries on manpower recruiting
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
                An index of common questions and answers about overseas employment, recruitment, visa processing, and how{" "}
                {company.name} operates from Ghana.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-primary/10">
                    <MessagesSquare className="h-4 w-4 text-accent" aria-hidden />
                  </span>
                  <span>
                    <span className="font-semibold text-primary">Employers</span>
                    <span className="mt-0.5 block text-slate-600">
                      Vacancies, demand letters, mobilisation timelines, and what we need to start.
                    </span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-primary/10">
                    <ShieldCheck className="h-4 w-4 text-accent" aria-hidden />
                  </span>
                  <span>
                    <span className="font-semibold text-primary">Compliance</span>
                    <span className="mt-0.5 block text-slate-600">
                      Registration, regulation, contracts, and how workers move through legal recruitment and visa channels.
                    </span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-primary/10">
                    <HelpCircle className="h-4 w-4 text-accent" aria-hidden />
                  </span>
                  <span>
                    <span className="font-semibold text-primary">Still unsure?</span>
                    <span className="mt-0.5 block text-slate-600">
                      Ask a specific question—we respond on business days, typically within 24 hours.
                    </span>
                  </span>
                </li>
              </ul>
              <Button asChild variant="gold" className="mt-8 rounded-full px-8 shadow-premium">
                <Link href="/contact">Ask a question</Link>
              </Button>
            </>
          ) : (
            <>
              <h2 className="font-[var(--font-heading)] text-3xl font-semibold text-primary md:text-4xl">
                Frequently asked questions (FAQ)
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Questions and answers about manpower recruiting, visa processing, and how {company.name} operates from Ghana.
              </p>
            </>
          )}
        </div>

        <div className={isFullPage ? "lg:col-span-7" : ""}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {items.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
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

          {limit ? (
            <Button asChild variant="outline" className="mt-8 rounded-full border-primary/20">
              <Link href="/faq">View all questions</Link>
            </Button>
          ) : (
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild className="rounded-full shadow-premium">
                <Link href="/request">Request manpower</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-primary/20">
                <Link href="/contact">Contact our team</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
