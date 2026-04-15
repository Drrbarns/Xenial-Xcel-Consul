import { stats } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";

export function StatsStrip() {
  return (
    <Section className="relative overflow-hidden bg-primary py-10 md:py-12">
      <div className="absolute inset-0 bg-dot-pattern opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]" />
      <div className="relative z-10 grid gap-6 md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="text-center text-primary-foreground">
            <p className="font-[var(--font-heading)] text-3xl font-semibold text-accent">
              {item.value}
            </p>
            <p className="mt-1 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
