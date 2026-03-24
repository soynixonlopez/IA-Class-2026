"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { clickReveal, whatIsAICards } from "@/data/site-content";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function WhatIsAISection() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <section id="que-es-ia" className="scroll-offset px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="1. ¿Qué es la IA?"
          title="Una explicación sencilla para secundaria"
          description="La IA es una herramienta que aprende de información para ayudarte a resolver tareas, recomendar contenido y responder preguntas."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {whatIsAICards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.08}>
                <article className="glass-card h-full rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-2 text-blue-700">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8">
          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <button
              type="button"
              className="flex w-full items-center justify-between text-left"
              onClick={() => setShowAnswer((prev) => !prev)}
              aria-expanded={showAnswer}
            >
              <span className="text-base font-bold text-violet-900">{clickReveal.question}</span>
              {showAnswer ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {showAnswer ? (
              <p className="mt-3 text-sm leading-relaxed text-violet-900">{clickReveal.answer}</p>
            ) : (
              <p className="mt-3 text-sm text-violet-700">Haz clic para descubrir la respuesta.</p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
