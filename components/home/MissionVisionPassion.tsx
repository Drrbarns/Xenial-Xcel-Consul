import { missionVisionPassion } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";

export function MissionVisionPassion() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-3">
        {missionVisionPassion.map((item) => (
          <div
            key={item.title}
            className="premium-border premium-hover group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-50 p-8 transition-colors hover:border-primary/20"
          >
            {/* Decorative background shape */}
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/[0.03] transition-transform duration-500 group-hover:scale-150" />
            
            <h3 className="relative z-10 font-[var(--font-heading)] text-2xl font-semibold text-primary">
              {item.title}
            </h3>
            <p className="relative z-10 mt-4 text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
