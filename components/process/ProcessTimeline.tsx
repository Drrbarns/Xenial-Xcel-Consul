"use client";

import { processSteps } from "@/lib/mockData";
import { motion } from "framer-motion";

export function ProcessTimeline() {
  return (
    <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
      {processSteps.map((step, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          key={step.title}
          className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
        >
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-premium z-10">
            <span className="text-primary font-bold text-sm">{index + 1}</span>
          </div>
          
          {/* Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase font-bold tracking-widest text-accent mb-2">{`Phase 0${index + 1}`}</p>
            <h3 className="font-[var(--font-heading)] text-2xl font-bold text-primary mb-3">{step.title}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
