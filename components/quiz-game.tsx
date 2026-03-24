"use client";

import { SectionHeading } from "@/components/section-heading";
import { quizQuestions } from "@/data/site-content";
import { motion } from "framer-motion";
import { Heart, RotateCcw, Trophy, Zap } from "lucide-react";
import { useMemo, useState } from "react";

export function QuizGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];
  const finished = currentIndex >= quizQuestions.length;
  const gameOver = lives <= 0 && !finished;
  const progress = useMemo(
    () => (finished ? 100 : ((currentIndex + 1) / quizQuestions.length) * 100),
    [currentIndex, finished],
  );

  const submitAnswer = (optionIndex: number) => {
    if (!currentQuestion || showFeedback || gameOver) return;
    setSelectedOption(optionIndex);
    setShowFeedback(true);
    if (optionIndex === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
      setStreak((prev) => {
        const next = prev + 1;
        setBestStreak((best) => (next > best ? next : best));
        return next;
      });
    } else {
      setStreak(0);
      setLives((prev) => Math.max(0, prev - 1));
    }
  };

  const nextQuestion = () => {
    setCurrentIndex((prev) => prev + 1);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setLives(3);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const finalMessage = () => {
    const ratio = score / quizQuestions.length;
    if (ratio >= 0.85) return "Excelente: dominas muy bien el tema.";
    if (ratio >= 0.6) return "Muy bien: vas por buen camino.";
    return "Sigue practicando: cada intento te ayuda a mejorar.";
  };

  return (
    <section id="quiz-final" className="scroll-offset px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="9. Mini juego final"
          title="Misión IA: reto interactivo por niveles"
          description="Responde 13 preguntas, acumula racha de aciertos y cuida tus vidas para llegar al resultado final."
        />

        <div className="relative overflow-hidden rounded-3xl border border-violet-200 bg-white p-6 shadow-sm md:p-8">
          <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-violet-200/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-cyan-200/50 blur-3xl" />

          <div className="relative mb-4 grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Puntaje</p>
              <p className="text-2xl font-black text-slate-900">
                {score} / {quizQuestions.length}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Racha actual</p>
              <p className="inline-flex items-center gap-1 text-2xl font-black text-amber-600">
                <Zap size={20} />
                {streak}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Mejor racha</p>
              <p className="inline-flex items-center gap-1 text-2xl font-black text-violet-700">
                <Trophy size={20} />
                {bestStreak}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Vidas</p>
              <div className="mt-1 flex items-center gap-1">
                {[1, 2, 3].map((life) => (
                  <Heart
                    key={life}
                    size={20}
                    className={life <= lives ? "fill-rose-500 text-rose-500" : "text-slate-300"}
                    aria-hidden
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between text-sm font-medium text-slate-600">
            {!finished && !gameOver ? (
              <span>
                Nivel {currentIndex + 1} de {quizQuestions.length}
              </span>
            ) : gameOver ? (
              <span>Juego terminado por vidas agotadas</span>
            ) : (
              <span>Reto completado</span>
            )}
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 transition-all"
              style={{ width: `${progress}%` }}
              aria-hidden
            />
          </div>

          {!finished && !gameOver ? (
            <div className="relative mt-7">
              <h3 className="text-2xl font-black text-slate-900 md:text-3xl">{currentQuestion.question}</h3>
              <div className="mt-5 grid gap-3">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuestion.correctIndex;
                  const showState = showFeedback && (isSelected || isCorrect);

                  return (
                    <motion.button
                      key={option}
                      type="button"
                      onClick={() => submitAnswer(idx)}
                      disabled={showFeedback}
                      whileHover={{ scale: showFeedback ? 1 : 1.01 }}
                      className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                        showState && isCorrect
                          ? "border-emerald-300 bg-emerald-50 text-emerald-900 shadow-sm"
                          : showState && isSelected && !isCorrect
                            ? "border-rose-300 bg-rose-50 text-rose-900 shadow-sm"
                            : "border-slate-200 bg-white text-base text-slate-700 hover:bg-slate-50 md:text-lg"
                      } disabled:cursor-not-allowed`}
                    >
                      {option}
                    </motion.button>
                  );
                })}
              </div>

              {showFeedback ? (
                <div className="mt-4 rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-sm text-cyan-900 md:text-base">
                  <strong>
                    {selectedOption === currentQuestion.correctIndex ? "¡Correcto! " : "Respuesta: "}
                  </strong>
                  {currentQuestion.explanation}
                </div>
              ) : null}

              {showFeedback ? (
                <button
                  type="button"
                  onClick={nextQuestion}
                  className="mt-4 rounded-xl bg-slate-900 px-5 py-3 text-base font-semibold text-white transition hover:bg-slate-700"
                >
                  Siguiente pregunta
                </button>
              ) : null}
            </div>
          ) : gameOver ? (
            <div className="mt-7 rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-900">
              <h3 className="text-3xl font-black">Se agotaron tus vidas</h3>
              <p className="mt-2 text-base">
                Llegaste hasta el nivel <strong>{currentIndex + 1}</strong> con {score} aciertos.
                Reinicia y supera tu mejor racha.
              </p>
              <button
                type="button"
                onClick={restartQuiz}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-rose-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-rose-800"
              >
                <RotateCcw size={18} />
                Intentar de nuevo
              </button>
            </div>
          ) : (
            <div className="mt-7 rounded-2xl border border-violet-200 bg-violet-50 p-6 text-violet-900">
              <h3 className="text-3xl font-black">Resultado final</h3>
              <p className="mt-2 text-lg">
                Obtuviste <strong>{score}</strong> de {quizQuestions.length} puntos.
              </p>
              <p className="mt-2 text-base">{finalMessage()}</p>
              <button
                type="button"
                onClick={restartQuiz}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-violet-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-violet-800"
              >
                <RotateCcw size={18} />
                Jugar de nuevo
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
