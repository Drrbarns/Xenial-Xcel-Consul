import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";

type FinalCtaBandProps = {
  title: string;
  description: string;
};

export function FinalCtaBand({ title, description }: FinalCtaBandProps) {
  return (
    <Section className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
      <div className="absolute inset-0 z-0 bg-[url('/images/abstract_pattern_1776009520629.png')] bg-cover bg-center brightness-[0.4] mix-blend-overlay" />
      <div className="absolute inset-0 z-0 bg-primary/20 backdrop-blur-sm" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-[var(--font-heading)] text-4xl font-bold tracking-tight text-white md:text-5xl">
              {title}
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed md:text-xl">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4 lg:pt-0">
            <Button asChild variant="gold" size="lg" className="rounded-full shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)] px-8 font-semibold">
              <Link href="/contact">Initiate Consultation</Link>
            </Button>
            <Button asChild size="lg" className="rounded-full px-8 font-semibold">
              <Link href="/apply-available-job">APPLY AVAILABLE JOB</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/30 bg-white/10 px-8 text-white backdrop-blur-md hover:bg-white/20"
            >
              <Link href="/process">Explore Methodology</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
