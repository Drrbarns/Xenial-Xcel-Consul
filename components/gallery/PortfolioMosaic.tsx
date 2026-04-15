import Image from "next/image";
import Link from "next/link";
import { galleryPortfolio } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

function MosaicTile({
  item,
  index,
  className,
  minHeightClass,
}: {
  item: (typeof galleryPortfolio)[number];
  index: number;
  className?: string;
  minHeightClass?: string;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-primary/10 bg-primary shadow-[0_20px_50px_-28px_rgba(8,24,51,0.45)] ${minHeightClass ?? "min-h-[260px]"} ${className ?? ""}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent md:text-[11px]">
          {String(index + 1).padStart(2, "0")} — Portfolio
        </p>
        <h3 className="mt-2 font-[var(--font-heading)] text-xl font-bold text-white md:text-2xl">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-200 md:line-clamp-none md:text-[0.9375rem]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export function PortfolioMosaic() {
  const [featured, second, third, ...rest] = galleryPortfolio;

  return (
    <Section className="relative overflow-hidden bg-slate-50 bg-dot-pattern">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" aria-hidden />

      <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Portfolio mosaic</p>
        <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Where we operate alongside leadership
        </h2>
        <p className="mt-3 text-slate-600 md:text-lg">
          Six environments where our teams embed—each with distinct constraints, stakeholders, and delivery rhythms.
        </p>
      </div>

      <div className="mt-12 space-y-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
          <div className="relative min-h-[320px] flex-1 lg:min-h-[520px] lg:basis-[58%]">
            <MosaicTile item={featured} index={0} className="h-full min-h-[inherit]" minHeightClass="min-h-[320px] lg:min-h-full" />
          </div>
          <div className="flex flex-1 flex-col gap-4 lg:basis-[42%]">
            <div className="relative min-h-[240px] flex-1">
              <MosaicTile item={second} index={1} className="h-full min-h-[inherit]" minHeightClass="min-h-[240px]" />
            </div>
            <div className="relative min-h-[240px] flex-1">
              <MosaicTile item={third} index={2} className="h-full min-h-[inherit]" minHeightClass="min-h-[240px]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {rest.map((item, i) => (
            <div key={item.title} className="relative min-h-[240px]">
              <MosaicTile item={item} index={i + 3} className="h-full" minHeightClass="min-h-[240px]" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 border-t border-slate-200 pt-10 lg:justify-start">
        <Button asChild className="rounded-full px-8 shadow-premium">
          <Link href="/request">Request by category</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full border-primary/20">
          <Link href="/services">Explore services</Link>
        </Button>
      </div>
    </Section>
  );
}
