import Link from "next/link";
import { galleryPortfolio } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export function GalleryPreview() {
  return (
    <Section>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold text-primary md:text-4xl">
            Gallery
          </h2>
          <p className="mt-2 text-slate-600">Workers categories</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/gallery">View Full Gallery</Link>
        </Button>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryPortfolio.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl bg-slate-100 min-h-[300px] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
              <h3 className="font-[var(--font-heading)] text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-200 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild className="rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
          <Link href="/request">Request Workforce by Category</Link>
        </Button>
      </div>
    </Section>
  );
}
