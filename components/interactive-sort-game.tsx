"use client";

import { SectionHeading } from "@/components/section-heading";
import { sortItems } from "@/data/site-content";
import { RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

type Choice = "positivo" | "incorrecto";

export function InteractiveSortGame() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [lastWasCorrect, setLastWasCorrect] = useState<boolean | null>(null);
  const [answered, setAnswered] = useState(false);

  const currentItem = sortItems[index];
  const isFinished = index >= sortItems.length;
  const progress = useMemo(() => ((index + 1) / sortItems.length) * 100, [index]);

  const handleChoice = (choice: Choice) => {
    if (!currentItem || answered) return;
    const isCorrect = choice === currentItem.category;
    setLastWasCorrect(isCorrect);
    if (isCorrect) setScore((prev) => prev + 1);
    setFeedback(currentItem.reason);
    setAnswered(true);
  };

  const nextItem = () => {
    setAnswered(false);
    setFeedback(null);
    setLastWasCorrect(null);
    setIndex((prev) => prev + 1);
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
    setFeedback(null);
    setLastWasCorrect(null);
    setAnswered(false);
  };

  return (
    <section id="actividad-clasificar" className="scroll-offset px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          badge="8. Actividad interactiva"
          title="Clasifica cada caso: uso positivo o incorrecto"
          description="Lee cada situación y decide su categoría. Recibirás retroalimentación inmediata para aprender mejor."
        />

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between text-sm text-slate-600">
            <span>
              Puntaje: <strong>{score}</strong> / {sortItems.length}
            </span>
            {!isFinished ? <span>Caso {index + 1}</span> : <span>Actividad completada</span>}
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all"
              style={{ width: `${isFinished ? 100 : progress}%` }}
              aria-hidden
            />
          </div>

          {!isFinished ? (
            <div className="mt-6">
              <p className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-800">
                {currentItem.statement}
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => handleChoice("positivo")}
                  disabled={answered}
                  className="rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Es uso positivo
                </button>
                <button
                  type="button"
                  onClick={() => handleChoice("incorrecto")}
                  disabled={answered}
                  className="rounded-xl bg-rose-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Es uso incorrecto
                </button>
              </div>

              {feedback ? (
                <div
                  className={`mt-4 rounded-xl p-4 text-sm ${
                    lastWasCorrect
                      ? "border border-emerald-200 bg-emerald-50 text-emerald-900"
                      : "border border-amber-200 bg-amber-50 text-amber-900"
                  }`}
                  role="status"
                >
                  <strong>{lastWasCorrect ? "Correcto. " : "Intenta de nuevo mentalmente. "}</strong>
                  {feedback}
                </div>
              ) : null}

              {answered ? (
                <button
                  type="button"
                  onClick={nextItem}
                  className="mt-4 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Siguiente caso
                </button>
              ) : null}
            </div>
          ) : (
            <div className="mt-6 rounded-xl border border-cyan-200 bg-cyan-50 p-5 text-cyan-900">
              <h3 className="text-xl font-bold">¡Excelente trabajo!</h3>
              <p className="mt-1 text-sm">
                Terminaste la actividad con <strong>{score}</strong> aciertos de {sortItems.length}. Lo
                importante es entender por qué cada caso es correcto o incorrecto.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-cyan-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-800"
              >
                <RotateCcw size={16} />
                Repetir actividad
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
