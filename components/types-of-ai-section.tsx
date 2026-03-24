"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { aiTypes } from "@/data/site-content";
import { useState } from "react";

export function TypesOfAISection() {
  const [selectedType, setSelectedType] = useState(aiTypes[0].name);

  return (
    <section id="tipos-ia" className="scroll-offset px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="3. Tipos básicos de IA"
          title="Cinco clases clave para entender su uso diario"
          description="Estos tipos de IA aparecen en apps y plataformas que usas todos los días."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {aiTypes.map((type, index) => {
            const Icon = type.icon;
            const selected = selectedType === type.name;
            return (
              <Reveal key={type.name} delay={index * 0.06}>
                <button
                  type="button"
                  onClick={() => setSelectedType(type.name)}
                  className={`h-full w-full rounded-2xl border p-5 text-left transition ${
                    selected
                      ? "border-violet-300 bg-violet-50 shadow-sm"
                      : "border-slate-200 bg-white hover:-translate-y-1 hover:shadow-sm"
                  }`}
                >
                  <span
                    className={`inline-flex rounded-xl p-2 ${
                      selected ? "bg-violet-600 text-white" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{type.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{type.description}</p>
                  <p className="mt-3 text-sm font-medium text-blue-700">{type.example}</p>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
