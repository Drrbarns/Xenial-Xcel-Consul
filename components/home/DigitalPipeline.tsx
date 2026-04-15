"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { pipelineSteps } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function DigitalPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <Section ref={ref} className="relative overflow-hidden bg-primary py-32 text-primary-foreground">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 z-0 h-[130%] w-full top-[-15%]"
      >
        <div 
          className="absolute inset-0 bg-[url('/images/portfolio_dashboard_1776009561040.png')] bg-cover bg-center brightness-[0.6] grayscale-[20%]" 
        />
        {/* 30% Dark Overlay */}
        <div className="absolute inset-0 bg-[#081833]/30" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-4xl space-y-6">
          <Badge variant="gold" className="bg-accent/20 text-white uppercase tracking-widest px-4 py-2 text-xs font-semibold backdrop-blur-sm border-accent/30">
            Algorithmic Precision
          </Badge>
          <h2 className="font-[var(--font-heading)] text-4xl font-bold text-white tracking-tight md:text-5xl lg:text-6xl">
            The Transformation <span className="text-white">Architecture</span>
          </h2>
          <p className="max-w-2xl text-lg text-slate-300 leading-relaxed">
            Our exclusive 10-step proprietary roadmap to scale your enterprise. Track multi-billion dollar strategic realignments with quantitative digital precision in real time.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 pt-2">
          <Button asChild variant="gold" size="lg" className="h-14 rounded-full px-8 font-semibold text-primary shadow-premium">
            <Link href="/process">Explore Deep Methodology</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full h-14 px-8 border-white/20 text-white hover:bg-white/10 backdrop-blur-md"
          >
            <Link href="/contact">Engage Leadership</Link>
          </Button>
        </div>
        
        <div className="relative mt-20">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 lg:block opacity-50" />
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {pipelineSteps.slice(0, 5).map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border border-accent bg-primary lg:block shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
                
                {/* Active pulse on first item to show "live" status */}
                {index === 0 && (
                  <div className="absolute -left-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 animate-ping rounded-full bg-accent opacity-75 lg:block" />
                )}

                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-accent/40 group-hover:bg-white/10 group-hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.2)]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{`Phase 0${index + 1}`}</p>
                  <p className="text-base font-semibold text-white tracking-wide">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {pipelineSteps.slice(5, 10).map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: (index + 5) * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="absolute -left-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border border-accent bg-primary lg:block shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-accent/40 group-hover:bg-white/10 group-hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.2)]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{`Phase ${index + 6 < 10 ? '0' : ''}${index + 6}`}</p>
                  <p className="text-base font-semibold text-white tracking-wide">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
