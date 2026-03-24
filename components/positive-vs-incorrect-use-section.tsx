import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { incorrectUses, positiveUses, responsibleKeys } from "@/data/site-content";
import { Check, X } from "lucide-react";

export function PositiveVsIncorrectUseSection() {
  return (
    <section id="uso-responsable" className="scroll-offset px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="7. Uso positivo vs uso incorrecto"
          title="La IA te ayuda más cuando la usas con responsabilidad"
          description="Comparar ambos enfoques te permite usar IA para aprender mejor, evitar trampas y proteger tu pensamiento crítico."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-emerald-900">
                <Check size={22} />
                Uso positivo
              </h3>
              <ul className="mt-4 space-y-3">
                {positiveUses.map((item) => (
                  <li key={item.text} className="rounded-xl bg-white/80 p-3 text-sm text-emerald-900">
                    {item.text}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="h-full rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-rose-900">
                <X size={22} />
                Uso incorrecto o irresponsable
              </h3>
              <ul className="mt-4 space-y-3">
                {incorrectUses.map((item) => (
                  <li key={item.text} className="rounded-xl bg-white/80 p-3 text-sm text-rose-900">
                    {item.text}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">Ideas clave para recordar</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {responsibleKeys.map((item) => (
                <li key={item} className="rounded-lg bg-slate-50 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
