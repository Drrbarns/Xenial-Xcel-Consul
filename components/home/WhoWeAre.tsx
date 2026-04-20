"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function WhoWeAre() {
  return (
    <Section className="relative overflow-hidden bg-slate-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge variant="gold" className="px-3 py-1 text-xs font-semibold tracking-widest uppercase">
              Who we are
            </Badge>
            <h2 className="font-[var(--font-heading)] text-4xl font-bold tracking-tight text-primary md:text-5xl lg:leading-tight">
              A reliable gateway from <br/>
              <span className="text-accent">Ghana to the world</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              {company.name} is an independent recruitment and travel agency based in Ghana. We connect skilled,
              semi-skilled, and unskilled workers to overseas employers — registered and regulated for more than five
              years.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Our goal is to supply the right person, with the right skills, at the right time and place. Supportive
              concerns—air ticketing, training, 24/7 digital customer care—give employers one-stop service effectively
              and efficiently.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full shadow-premium">
                <Link href="/about">Know us better</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-primary/5">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(8,24,51,0.2)]">
              <Image 
                src="/images/about_team_1776009217710.png"
                alt={`${company.name} team`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                  <h3 className="font-[var(--font-heading)] text-xl font-semibold text-white">
                    One-stop employer support
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Recruitment, training, ticketing, and digital care under one accountable team.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-8 -top-8 -z-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl opacity-50" />
            <div className="absolute -bottom-12 -left-12 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl opacity-50" />
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
