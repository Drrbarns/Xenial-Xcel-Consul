"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HardHat, Users } from "lucide-react";
import { company, manpowerRoleTags } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ManpowerRoles() {
  return (
    <Section className="border-y border-slate-100 bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="gold" className="mb-4">
          Skilled &amp; unskilled manpower
        </Badge>
        <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Are you looking for manpower?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {company.name} is an independent, registered recruitment and travel agency in Ghana. Our motto is to supply
          the right people, with the right skills, at the right time and place — from trades on site to support roles
          across industries.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 space-y-4 rounded-2xl border border-primary/10 bg-primary/[0.03] p-8"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Users className="h-6 w-6" aria-hidden />
          </div>
          <h3 className="font-[var(--font-heading)] text-xl font-semibold text-primary">Skilled manpower</h3>
          <p className="text-sm leading-relaxed text-slate-600">
            Companies need qualified employees for residential, industrial, and specialist projects—we connect you with
            vetted, role-ready candidates.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="lg:col-span-4 space-y-4 rounded-2xl border border-primary/10 bg-primary/[0.03] p-8"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <HardHat className="h-6 w-6" aria-hidden />
          </div>
          <h3 className="font-[var(--font-heading)] text-xl font-semibold text-primary">Unskilled manpower</h3>
          <p className="text-sm leading-relaxed text-slate-600">
            We create employment pathways through orientation and training so workers can perform safely and
            productively in commercial and industrial workplaces.
          </p>
        </motion.div>
        <div className="flex flex-col justify-center gap-4 lg:col-span-4">
          <Button asChild className="rounded-full shadow-premium" size="lg">
            <Link href="/request">Request manpower</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20">
            <Link href="/contact">Speak with recruitment</Link>
          </Button>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-accent">
          Roles we routinely supply
        </p>
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {manpowerRoleTags.map((role) => (
            <li
              key={role}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-800"
            >
              {role}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
