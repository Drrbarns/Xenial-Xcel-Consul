"use client";

import Link from "next/link";
import { Quote } from "lucide-react";
import { company, testimonials } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  return (
    <Section className="relative overflow-hidden bg-primary py-24">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/images/testimonials_bg_1776009350248.png')] bg-cover bg-fixed bg-center brightness-[0.4] grayscale-[30%]"
      />
      <div className="absolute inset-0 z-0 bg-primary/60" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent/90">Our clients</p>
            <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-5xl">
              Testimonial
            </h2>
            <p className="text-slate-300">
              What employers say about working with {company.name} RL-1221—transparency, skilled placements, and
              long-run relationships.
            </p>
          </div>
          <Button asChild variant="gold" size="lg" className="rounded-full">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="relative overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl">
              <CardContent className="flex h-full flex-col justify-between space-y-8 p-8">
                <div className="space-y-4">
                  <Quote className="h-10 w-10 text-accent/50" />
                  <p className="text-base leading-relaxed text-slate-200">“{item.quote}”</p>
                </div>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary font-[var(--font-heading)] font-bold text-lg shadow-inner">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-accent">{item.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
