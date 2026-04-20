import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Plane, Stamp } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

const highlights = [
  "Initial consultation & case mapping",
  "Document checklist & verification",
  "Embassy submission & application tracking",
  "Interview coaching & medical coordination",
  "Pre-departure briefings & ticketing support",
  "Post-arrival check-ins for soft landing",
];

export function VisaProcessingFeature() {
  return (
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
            {highlights.map((item) => (
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
  );
}
