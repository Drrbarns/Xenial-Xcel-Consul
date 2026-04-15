import Link from "next/link";
import {
  Building,
  BriefcaseBusiness,
  HardHat,
  Leaf,
  Sprout,
  Wrench,
} from "lucide-react";
import { expertiseCards } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

const expertiseIcons = [
  Building,
  BriefcaseBusiness,
  HardHat,
  Leaf,
  Sprout,
  Wrench,
];

export function ExpertiseGrid() {
  return (
    <Section className="bg-slate-100">
      <div className="space-y-5">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold text-primary md:text-4xl">
          Our area of expertise
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {expertiseCards.map((item, index) => {
            const Icon = expertiseIcons[index];
            return (
            <div
              key={item.title}
              className="premium-border premium-hover group rounded-2xl p-8 transition-colors hover:border-primary/20"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-[var(--font-heading)] text-xl font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
            );
          })}
        </div>
        <div className="pt-2">
          <Button asChild size="lg">
            <Link href="/services">See Industry Recruitment Services</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
