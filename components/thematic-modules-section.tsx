"use client";

import { SectionHeading } from "@/components/section-heading";
import { thematicModules } from "@/data/site-content";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function ThematicModulesSection() {
  const [activeId, setActiveId] = useState(thematicModules[0].id);
  const active = thematicModules.find((module) => module.id === activeId) ?? thematicModules[0];

  return (
    <section id="ruta-tematica" className="scroll-offset px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="5. Ruta temática interactiva"
          title="Cambia de tema y carga contenido por categoría"
          description="Elige una temática para explorar usos de IA en conversación, creatividad, modelos abiertos y herramientas móviles."
        />

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
          <div className="flex flex-wrap gap-2">
            {thematicModules.map((module) => (
              <button
                key={module.id}
                type="button"
                onClick={() => setActiveId(module.id)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition md:text-base ${
                  module.id === activeId
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {module.title}
              </button>
            ))}
          </div>

          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_1fr]"
          >
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">{active.subtitle}</p>
              <h3 className="mt-2 text-3xl font-black text-slate-900">{active.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-700">{active.description}</p>

              <div className="mt-4">
                <h4 className="text-base font-bold text-slate-900">Herramientas clave</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {active.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800 md:text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-5 rounded-2xl border border-violet-200 bg-violet-50 p-4 text-sm leading-relaxed text-violet-900 md:text-base">
                <strong>Situación real:</strong> {active.example}
              </p>
            </article>

            <div className="relative min-h-72 overflow-hidden rounded-2xl border border-slate-200">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
