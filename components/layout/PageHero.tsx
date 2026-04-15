"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  bgImage?: string;
};

export function PageHero({ eyebrow, title, description, bgImage }: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <Section ref={ref} className="relative overflow-hidden bg-primary py-24 md:py-32 lg:py-40">
      {bgImage && (
        <motion.div
          style={{ y: yBg }}
          className="absolute inset-0 z-0 h-[120%] w-full top-[-10%]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center brightness-[0.4] grayscale-[20%]"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/80" />
        </motion.div>
      )}
      {!bgImage && <div className="absolute inset-0 z-0 bg-primary/95" />}

      <div className="relative z-10 mx-auto max-w-4xl space-y-6 lg:text-center">
        <Badge
          variant="gold"
          className="bg-accent/10 border-accent/30 text-accent uppercase tracking-widest px-4 py-2 backdrop-blur-sm shadow-xl"
        >
          {eyebrow}
        </Badge>
        <h1 className="font-[var(--font-heading)] text-5xl font-bold tracking-tight text-white md:text-6xl leading-tight">
          {title}
        </h1>
        <p className="text-lg text-slate-300 md:text-xl lg:px-12 leading-relaxed">
          {description}
        </p>
      </div>
    </Section>
  );
}
