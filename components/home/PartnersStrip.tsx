import { partners } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";

export function PartnersStrip() {
  return (
    <Section className="py-12 md:py-20">
      <div className="space-y-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-accent">Our partners</p>
        <h2 className="text-center font-[var(--font-heading)] text-2xl font-semibold text-primary">
          Employers &amp; principals we serve
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex h-20 items-center justify-center rounded-xl border border-primary/10 bg-slate-50/50 px-4 text-center text-xs font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-primary"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
