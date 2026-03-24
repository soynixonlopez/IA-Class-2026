"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { aiTools } from "@/data/site-content";

export function AIToolsSection() {
  return (
    <section id="modelos-populares" className="scroll-offset px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="4. Modelos y herramientas populares"
          title="ChatGPT, Claude, Gemini, Llama, DeepSeek, Sora y más"
          description="Conoce para qué sirve cada herramienta en lenguaje sencillo y con ejemplos cercanos a estudiantes de secundaria."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {aiTools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <Reveal key={tool.name} delay={index * 0.05}>
                <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="inline-flex rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 p-3 text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-2xl font-black text-slate-900">{tool.name}</h3>
                  <p className="mt-1 inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                    {tool.category}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-slate-700">
                    <strong>Para qué sirve:</strong> {tool.use}
                  </p>
                  <p className="mt-3 rounded-2xl border border-violet-100 bg-violet-50 p-3 text-sm text-violet-900">
                    <strong>Ejemplo real:</strong> {tool.realLife}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
