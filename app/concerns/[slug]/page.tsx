import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { concerns } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCtaBand } from "@/components/layout/FinalCtaBand";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return concerns.map((concern) => ({ slug: concern.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const concern = concerns.find((item) => item.slug === slug);
  if (!concern) return { title: "Our concerns" };

  return {
    title: `${concern.name} | Our concerns`,
    description: concern.description,
  };
}

export default async function ConcernDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concern = concerns.find((item) => item.slug === slug);

  if (!concern) notFound();

  const others = concerns.filter((c) => c.slug !== concern.slug);

  return (
    <>
      <PageHero
        eyebrow="Our concerns"
        title={concern.name}
        description={concern.description}
        bgImage="/images/hero_workspace_1776009199492.png"
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-primary md:text-3xl">Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">{concern.overview}</p>
            </div>
            <div>
              <h3 className="font-[var(--font-heading)] text-xl font-semibold text-primary">What we focus on</h3>
              <ul className="mt-4 space-y-3">
                {concern.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3 w-3" aria-hidden />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h3 className="font-[var(--font-heading)] text-xl font-semibold text-primary">Who this is for</h3>
              <p className="mt-3 leading-relaxed text-slate-700">{concern.idealFor}</p>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Outcomes</p>
              <ul className="mt-4 space-y-4">
                {concern.outcomes.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-slate-800">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Related concerns</p>
              <ul className="mt-4 space-y-3">
                {others.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/concerns/${c.slug}`}
                      className="text-sm font-semibold text-primary hover:text-accent hover:underline"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild className="w-full rounded-full shadow-premium">
                <Link href="/contact">Discuss this concern</Link>
              </Button>
              <Button asChild variant="outline" className="w-full rounded-full border-primary/20">
                <Link href="/concerns">All concerns</Link>
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      <FinalCtaBand
        title="Ready to wire this into your next batch?"
        description="Share your demand letter or mobilisation plan—we will show how this concern fits your timeline and compliance path."
      />
    </>
  );
}
