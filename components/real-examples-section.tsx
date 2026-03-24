import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { realExamples } from "@/data/site-content";
import Image from "next/image";

export function RealExamplesSection() {
  return (
    <section id="ejemplos-reales" className="scroll-offset px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="6. Ejemplos reales"
          title="Dónde ves IA en tu vida diaria"
          description="La IA ya está en redes, mapas, correo, educación y muchas apps que usas todos los días."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {realExamples.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="relative h-60 w-full md:h-72">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-base text-slate-600">{item.description}</p>
                  <p className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-3 text-sm text-blue-900 md:text-base">
                    <strong>Por qué es IA:</strong> {item.why}
                  </p>
                  <p className="mt-2 rounded-xl border border-cyan-100 bg-cyan-50 p-3 text-sm text-cyan-900 md:text-base">
                    <strong>Cómo ayuda:</strong> {item.help}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
