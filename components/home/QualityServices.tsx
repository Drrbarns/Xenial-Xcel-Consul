import Link from "next/link";
import {
  BriefcaseBusiness,
  Cpu,
  Handshake,
  Headphones,
  ShieldCheck,
  Star,
} from "lucide-react";
import { qualityServices } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const qualityIcons = [ShieldCheck, Star, BriefcaseBusiness, Cpu, Headphones, Handshake];

export function QualityServices() {
  return (
    <Section>
      <div className="space-y-8">
        <div className="space-y-3 text-center">
          <Badge variant="gold">Quality services</Badge>
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold text-primary md:text-4xl">
            Professional services you can rely on
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Comprehensive and innovative support—documentation, deployment, and continuity—so employers stay protected
            from every eventuality.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {qualityServices.map((service, index) => {
            const Icon = qualityIcons[index % qualityIcons.length];
            return (
              <div
                key={service.title}
                className="premium-border premium-hover group flex flex-col rounded-xl p-6 transition-colors hover:border-primary/20 hover:bg-slate-50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-[var(--font-heading)] text-lg font-semibold text-primary">{service.title}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link href="/services">Explore services</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
