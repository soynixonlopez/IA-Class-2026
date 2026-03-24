"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { howItWorksSteps } from "@/data/site-content";
import { motion } from "framer-motion";
import { useState } from "react";

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(howItWorksSteps[0].id);
  const current = howItWorksSteps.find((step) => step.id === activeStep) ?? howItWorksSteps[0];

  return (
    <section id="como-funciona" className="scroll-offset px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="2. ¿Cómo funciona la IA?"
          title="Flujo simple paso a paso"
          description="La IA sigue una ruta parecida a estudiar: recibe información, identifica patrones, aprende con práctica y responde."
        />

        <div className="grid gap-6 md:grid-cols-[1.1fr_1.4fr]">
          <Reveal>
            <div className="glass-card rounded-2xl p-4">
              <div className="space-y-3">
                {howItWorksSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = step.id === activeStep;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveStep(step.id)}
                      className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition ${
                        isActive
                          ? "border-blue-300 bg-blue-50"
                          : "border-transparent bg-white hover:border-slate-200"
                      }`}
                    >
                      <span
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                        }`}
                        aria-hidden
                      >
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                        <p className="mt-0.5 text-xs text-slate-600">{step.description}</p>
                      </div>
                      <span className="ml-auto text-slate-500">
                        <Icon size={17} />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <motion.article
              key={current.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900">{current.title}</h3>
              <p className="mt-3 text-slate-600">{current.description}</p>
              <p className="mt-4 rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-sm text-cyan-900">
                {current.example}
              </p>
            </motion.article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
