"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Globe2, MoveRight, Users, FileCheck2 } from "lucide-react";
import { company } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section 
      ref={ref}
      className="relative flex min-h-[95vh] items-center overflow-hidden bg-primary/90 pt-24"
    >
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 z-0 h-full w-full"
      >
        <div 
          className="absolute inset-0 bg-[url('/images/hero_workspace_1776009199492.png')] bg-cover bg-center brightness-[0.6] grayscale-[20%]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Badge variant="outline" className="border-accent/40 bg-accent/10 px-4 py-2 font-medium text-accent backdrop-blur-sm tracking-wide uppercase text-xs">
                {company.tagline}
              </Badge>
            </motion.div>
            
            <h1 className="font-[var(--font-heading)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Recruitment<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Excellence</span>
            </h1>
            
            <p className="mx-auto max-w-md text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl lg:mx-0 lg:max-w-xl">
              Licensed RL-1221, MOEWOE consented, BAIRA member — your accountable partner from selection to deployment.
            </p>
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-3 pt-2 sm:gap-4 lg:justify-start"
            >
              <Button asChild size="lg" className="h-12 rounded-full bg-accent px-6 text-sm font-semibold text-primary shadow-[0_0_40px_-5px_rgba(234,179,8,0.4)] hover:bg-accent/90 transition-all hover:scale-105 sm:h-14 sm:px-8 sm:text-base">
                <Link href="/contact">
                  Contact us
                  <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-slate-600 bg-white/5 px-6 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 sm:h-14 sm:px-8 sm:text-base">
                <Link href="/request">
                  Request manpower
                </Link>
              </Button>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-3 pt-4 opacity-80 sm:gap-4 sm:pt-6 lg:justify-start">
              {company.trustBadges.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-xs text-slate-400 sm:gap-2 sm:text-sm">
                  <BadgeCheckIcon />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent to-accent/30 opacity-20 blur-2xl" />
            <Card className="relative overflow-hidden rounded-2xl border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">
              <CardContent className="p-8">
                <h3 className="mb-6 font-[var(--font-heading)] text-2xl font-semibold text-white">Employer snapshot</h3>
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="flex shrink-0 items-center justify-center rounded-lg bg-accent/20 p-3 text-accent">
                      <FileCheck2 className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Government-approved file path</p>
                      <p className="text-sm text-slate-300">RL-1221 recruiting license with MOEWOE consent and BAIRA alignment on every deployment.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex shrink-0 items-center justify-center rounded-lg bg-accent/20 p-3 text-accent">
                      <Globe2 className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Destination coverage</p>
                      <p className="text-sm text-slate-300">Active programmes across {company.destinationCountries.join(", ")}—aligned to embassy and employer rules.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex shrink-0 items-center justify-center rounded-lg bg-accent/20 p-3 text-accent">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Skilled &amp; unskilled pools</p>
                      <p className="text-sm text-slate-300">Screening, orientation, and training support so workers arrive ready for your supervision model.</p>
                    </div>
                  </div>

                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button asChild variant="ghost" className="w-full justify-between text-white hover:text-accent group hover:bg-white/5">
                    <Link href="/services" className="inline-flex w-full items-center justify-between">
                      View services &amp; sectors
                      <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function BadgeCheckIcon() {
  return (
    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}
