"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownCircle, Sparkles } from "lucide-react";

export function HeroSection() {
  const startLearning = () => {
    document.getElementById("que-es-ia")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="inicio" className="scroll-offset px-4 pt-24 sm:px-6">
      <div className="section-shell relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-100 px-6 py-14 shadow-sm md:px-12 md:py-18">
        <motion.div
          className="absolute -right-14 -top-16 h-48 w-48 rounded-full bg-cyan-300/30 blur-3xl"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <motion.div
          className="absolute -bottom-16 -left-14 h-52 w-52 rounded-full bg-violet-300/30 blur-3xl"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-1 text-xs font-semibold text-cyan-700">
              <Sparkles size={14} />
              Experiencia educativa interactiva
            </span>
            <h1 className="mt-5 text-balance text-5xl font-black leading-tight text-slate-900 md:text-6xl">
              Descubre el mundo de la <span className="tech-gradient-text">Inteligencia Artificial</span>
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg text-slate-600 md:text-2xl">
              Aprende qué es la IA, cómo funciona y cómo usarla con responsabilidad en tu vida diaria.
              Explora ejemplos reales, actividades interactivas y un quiz final para retarte.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={startLearning}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Comenzar
                <ArrowDownCircle size={18} />
              </button>
              <a
                href="#quiz-final"
                className="rounded-xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Ir al quiz final
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/60 bg-white/85 p-3">
                <p className="text-2xl font-black text-blue-700">13</p>
                <p className="text-sm font-medium text-slate-600">Preguntas en mini juego</p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/85 p-3">
                <p className="text-2xl font-black text-violet-700">9+</p>
                <p className="text-sm font-medium text-slate-600">Herramientas IA explicadas</p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/85 p-3">
                <p className="text-2xl font-black text-cyan-700">100%</p>
                <p className="text-sm font-medium text-slate-600">Interactivo y responsive</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -left-6 top-4 h-20 w-20 rounded-2xl bg-cyan-200/70 blur-2xl" aria-hidden />
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
              alt="Estudiantes aprendiendo con tecnología e inteligencia artificial"
              width={900}
              height={650}
              className="h-[360px] w-full rounded-2xl border border-white/60 object-cover shadow-lg md:h-[470px]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
