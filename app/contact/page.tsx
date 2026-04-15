import Link from "next/link";
import { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company } from "@/lib/mockData";
import { ContactForm } from "@/components/forms/ContactForm";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCtaBand } from "@/components/layout/FinalCtaBand";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${company.name} for manpower inquiries, demand letters, and deployment support. Dhaka office with digital updates and 24/7 customer care.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Give us a call or send a message"
        description={`We endeavour to answer all inquiries within 24 hours on business days. ${company.name} serves employers and principals with RL-1221 compliance and transparent timelines.`}
        bgImage="/images/hero_workspace_1776009199492.png"
      />

      <Section className="bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Card className="overflow-hidden border-slate-200/80 shadow-[0_24px_60px_-32px_rgba(8,24,51,0.28)]">
              <CardContent className="p-6 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Inquiry</p>
                <h2 className="mt-3 font-[var(--font-heading)] text-2xl font-bold text-primary md:text-3xl">
                  Request a call back
                </h2>
                <p className="mt-3 text-slate-600 md:text-lg">
                  Share your name, phone number, and a short note about vacancies or deployment needs. Full name and
                  contact details help us respond faster.
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
                      href={`tel:${company.phoneLinks[0]}`}
                      className="group flex gap-4 rounded-xl border border-transparent p-2 transition-colors hover:border-primary/10 hover:bg-slate-50"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-accent">
                        <Phone className="h-5 w-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Primary
                        </span>
                        <span className="font-semibold text-primary group-hover:underline">{company.phones[0]}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${company.phoneLinks[1]}`}
                      className="group flex gap-4 rounded-xl border border-transparent p-2 transition-colors hover:border-primary/10 hover:bg-slate-50"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-accent">
                        <Phone className="h-5 w-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Alternate
                        </span>
                        <span className="font-semibold text-primary group-hover:underline">{company.phones[1]}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${company.email}`}
                      className="group flex gap-4 rounded-xl border border-transparent p-2 transition-colors hover:border-primary/10 hover:bg-slate-50"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-accent">
                        <Mail className="h-5 w-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Email</span>
                        <span className="break-all font-semibold text-primary group-hover:underline">
                          {company.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-accent shadow-sm">
                      <MapPin className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Headquarters
                      </span>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-slate-800">{company.address}</p>
                      <a
                        href={company.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex text-sm font-semibold text-primary hover:text-accent hover:underline"
                      >
                        Open in Google Maps
                      </a>
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
                    Saturday to Thursday, 10:00 AM – 6:00 PM (Dhaka). Messages outside hours are queued for the next
                    business day.
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
        <div className="space-y-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Location</p>
              <h2 className="mt-2 font-[var(--font-heading)] text-2xl font-bold text-primary md:text-3xl">
                Dhaka office
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Visit during office hours or call ahead. We are located at Palladium Market, 2nd Floor, Dhaka 1212.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full border-primary/20">
              <a href={company.mapUrl} target="_blank" rel="noreferrer">
                Larger map
              </a>
            </Button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/60">
            <iframe
              title={`${company.name} — Dhaka office map`}
              src={company.mapEmbedSrc}
              className="h-[min(420px,50vh)] w-full border-0 md:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-100 pt-10">
          <Button asChild className="rounded-full shadow-premium" size="lg">
            <Link href="/request">Request manpower</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20">
            <Link href="/faq">Read FAQ</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="rounded-full text-primary">
            <Link href="/process">Our methodology</Link>
          </Button>
        </div>
      </Section>

      <FinalCtaBand
        title="Have a demand letter ready?"
        description="Send quantities, roles, salary bands, and timeline—we will confirm feasibility and next steps under RL-1221 compliance."
      />
    </>
  );
}
