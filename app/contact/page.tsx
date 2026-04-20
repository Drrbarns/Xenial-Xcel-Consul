import Link from "next/link";
import { Metadata } from "next";
import { Clock, Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { company } from "@/lib/mockData";
import { ContactForm } from "@/components/forms/ContactForm";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCtaBand } from "@/components/layout/FinalCtaBand";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildOgMeta } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  ...buildOgMeta({
    title: "Contact",
    description: `Reach ${company.name} for recruitment inquiries, visa processing, and Australia sponsorship support. Email ${company.email} — based in Accra, Ghana.`,
    path: "/contact",
  }),
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Talk to our team"
        description={`We endeavour to answer all inquiries within one business day. ${company.name} serves overseas employers and candidates from Ghana with transparent timelines.`}
        bgImage="/images/hero_workspace_1776009199492.png"
      />

      <Section className="bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Card className="overflow-hidden border-slate-200/80 shadow-[0_24px_60px_-32px_rgba(8,24,51,0.28)]">
              <CardContent className="p-6 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Inquiry</p>
                <h2 className="mt-3 font-[var(--font-heading)] text-2xl font-bold text-primary md:text-3xl">
                  Send us a message
                </h2>
                <p className="mt-3 text-slate-600 md:text-lg">
                  Share your name, email, and a short note about your role, vacancies, or visa processing question.
                  Attach a file if it helps us understand the context faster.
                </p>
                <div className="mt-8 border-t border-slate-100 pt-8">
                  <ContactForm />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <Card className="border-slate-200/80 shadow-lg shadow-slate-200/50">
              <CardContent className="space-y-5 p-6 md:p-8">
                <h3 className="font-[var(--font-heading)] text-xl font-bold text-primary md:text-2xl">
                  Direct lines
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`mailto:${company.email}`}
                      className="group flex gap-4 rounded-xl border border-transparent p-2 transition-colors hover:border-primary/10 hover:bg-slate-50"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-accent">
                        <Mail className="h-5 w-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Email (preferred)
                        </span>
                        <span className="break-all font-semibold text-primary group-hover:underline">
                          {company.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${company.phoneLinks[0]}`}
                      className="group flex gap-4 rounded-xl border border-transparent p-2 transition-colors hover:border-primary/10 hover:bg-slate-50"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-accent">
                        <Phone className="h-5 w-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Phone
                        </span>
                        <span className="font-semibold text-primary group-hover:underline">{company.phones[0]}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-accent shadow-sm">
                      <MapPin className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Based in
                      </span>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-slate-800">{company.address}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Office walk-ins by appointment only — please email or message ahead.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200/80">
              <CardContent className="flex gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Clock className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h4 className="font-[var(--font-heading)] font-semibold text-primary">Office hours</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    Monday to Friday, 9:00 AM – 6:00 PM (GMT). Messages outside hours are queued for the next business
                    day.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/15 bg-primary/[0.03]">
              <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-3">
                  <MessageCircle className="h-6 w-6 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="font-semibold text-primary">WhatsApp</p>
                    <p className="text-sm text-slate-600">Short questions and scheduling pings welcome.</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="shrink-0 rounded-full border-primary/25">
                  <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="rounded-2xl border border-dashed border-primary/20 bg-white px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Standards</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {company.trustBadges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="flex flex-wrap gap-4">
          <Button asChild className="rounded-full shadow-premium" size="lg">
            <Link href="/request">Request manpower</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20">
            <Link href="/services/visa-processing">Visa processing</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="rounded-full text-primary">
            <Link href="/faq">Read FAQ</Link>
          </Button>
        </div>
      </Section>

      <FinalCtaBand
        title="Have a hiring requirement ready?"
        description="Send roles, quantities, salary bands, and timeline — we will confirm feasibility and next steps."
      />
    </>
  );
}
