"use client";

import { Reveal } from "@/components/reveal";
import { finalSummary } from "@/data/site-content";
import { ArrowUpCircle } from "lucide-react";

export function FooterSection() {
  return (
    <section className="px-4 pb-16 pt-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              10. Resumen final
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Lo que aprendiste hoy</h2>
            <p className="mt-2 max-w-3xl text-slate-600">
              Entendiste qué es la IA, cómo funciona paso a paso y cómo usarla de forma responsable para
              aprender mejor.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {finalSummary.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <span className="inline-flex rounded-xl bg-slate-900 p-2 text-white">
                      <Icon size={18} />
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <blockquote className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50 p-4 text-cyan-900">
              La IA puede abrirte muchas puertas, pero tu curiosidad, ética y pensamiento crítico son la
              llave principal.
            </blockquote>
          </article>
        </Reveal>
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-slate-700"
      >
        <ArrowUpCircle size={16} />
        Volver arriba
      </button>
    </section>
  );
}
