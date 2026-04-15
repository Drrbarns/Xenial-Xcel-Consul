"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, Target } from "lucide-react";
import { commitmentTrio } from "@/lib/mockData";
import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const icons = [Target, Activity, ShieldCheck];

export function ValueTrio() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-3">
        {commitmentTrio.map((item, index) => {
          const Icon = icons[index];
          return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Card className="premium-border premium-hover group h-full rounded-2xl">
              <CardContent className="space-y-4 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-accent">{`0${index + 1}`}</p>
                  <CardTitle className="font-[var(--font-heading)] text-2xl text-primary">
                    {item.title}
                  </CardTitle>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                <Link
                  href="/about"
                  className="mt-3 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Know us better
                </Link>
              </CardContent>
            </Card>
          </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
