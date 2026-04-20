"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { company } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export function HomeCta() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <Section ref={ref} className="relative bg-primary text-primary-foreground overflow-hidden py-32">
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 z-0 h-[130%] w-full top-[-15%]"
      >
        <div className="absolute inset-0 bg-[url('/images/abstract_pattern_1776009520629.png')] bg-cover bg-center brightness-[0.5] mix-blend-overlay" />
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" />
      </motion.div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-8">
            <h2 className="font-[var(--font-heading)] text-4xl font-bold md:text-5xl lg:text-6xl text-white">
              Request a call back <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">or visit our office</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              Send us a message or schedule a call—we endeavour to answer all inquiries within one business day.
              Office hours: Monday to Friday, 9am–6pm GMT.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild variant="gold" size="lg" className="h-14 px-8 rounded-full shadow-[0_0_40px_-5px_rgba(234,179,8,0.4)]">
                <Link href="/contact">Contact us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 rounded-full border-white/20 bg-white/5 px-8 text-white backdrop-blur-md hover:bg-white/10"
              >
                <Link href="/request">Request manpower</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent blur-2xl rounded-full" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-[var(--font-heading)] font-semibold text-white mb-4">Direct lines</h3>
              <p className="text-slate-300 mb-6 font-medium leading-relaxed">{company.address}</p>
              <div className="space-y-4">
                <Button asChild className="w-full bg-white/10 hover:bg-white/20 text-white justify-start border border-white/10">
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </Button>
                <Button asChild className="w-full bg-white/10 hover:bg-white/20 text-white justify-start border border-white/10">
                  <a href={`tel:${company.phoneLinks[0]}`}>{company.phones[0]}</a>
                </Button>
                <Button asChild className="w-full bg-white/10 hover:bg-white/20 text-white justify-start border border-white/10">
                  <a href={`tel:${company.phoneLinks[1]}`}>{company.phones[1]}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
