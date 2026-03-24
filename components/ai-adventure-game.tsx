"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Lock,
  PlayCircle,
  RotateCcw,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";
import { gameStages, rankByScore } from "@/data/game-content";
import { useMemo, useState } from "react";

type Mode = "intro" | "map" | "learn" | "quiz" | "stageClear" | "gameOver" | "victory";

export function AIAdventureGame() {
  const [mode, setMode] = useState<Mode>("intro");
  const [stageIndex, setStageIndex] = useState(0);
  const [unlockedStage, setUnlockedStage] = useState(0);
  const [completedStages, setCompletedStages] = useState<string[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [correct, setCorrect] = useState<boolean | null>(null);

  const stage = gameStages[stageIndex];
  const currentQuestion = stage.questions[questionIndex];
  const progress = useMemo(
    () => (mode === "victory" ? 100 : (completedStages.length / gameStages.length) * 100),
    [completedStages.length, mode],
  );
  const rank = useMemo(
    () => rankByScore.find((item) => score >= item.min)?.label ?? "Aprendiz IA",
    [score],
  );

  const resetQuestionState = () => {
    setSelectedOption(null);
    setFeedback("");
    setCorrect(null);
  };

  const resetGame = () => {
    setMode("intro");
    setStageIndex(0);
    setUnlockedStage(0);
    setCompletedStages([]);
    setQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setLives(3);
    resetQuestionState();
  };

  const startAdventure = () => {
    setMode("map");
  };

  const openMission = (index: number) => {
    if (index > unlockedStage) return;
    setStageIndex(index);
    setQuestionIndex(0);
    resetQuestionState();
    setMode("learn");
  };

  const startMissionQuiz = () => {
    setMode("quiz");
    resetQuestionState();
  };

  const onAnswer = (optionIndex: number) => {
    if (selectedOption !== null || mode !== "quiz") return;

    const isCorrect = optionIndex === currentQuestion.correctIndex;
    setSelectedOption(optionIndex);
    setCorrect(isCorrect);
    setFeedback(currentQuestion.explanation);

    if (isCorrect) {
      setScore((prev) => prev + 10);
      setStreak((prev) => {
        const next = prev + 1;
        setBestStreak((best) => (next > best ? next : best));
        return next;
      });
      return;
    }

    setStreak(0);
    setLives((prev) => {
      const nextLives = Math.max(0, prev - 1);
      if (nextLives === 0) {
        setMode("gameOver");
      }
      return nextLives;
    });
  };

  const continueAfterAnswer = () => {
    if (correct) {
      if (questionIndex < stage.questions.length - 1) {
        setQuestionIndex((prev) => prev + 1);
        resetQuestionState();
        return;
      }
      setMode("stageClear");
      return;
    }

    resetQuestionState();
  };

  const finishStage = () => {
    const alreadyCompleted = completedStages.includes(stage.id);

    if (!alreadyCompleted) {
      const nextCompleted = [...completedStages, stage.id];
      setCompletedStages(nextCompleted);
      if (stageIndex === gameStages.length - 1 && nextCompleted.length === gameStages.length) {
        setMode("victory");
        return;
      }
    }

    if (stageIndex < gameStages.length - 1) {
      setUnlockedStage((prev) => Math.max(prev, stageIndex + 1));
    }

    setQuestionIndex(0);
    resetQuestionState();
    setMode("map");
  };

  return (
    <div className="mx-auto w-full max-w-380 px-4 pb-12 pt-24 sm:px-6">
      <div className="relative overflow-hidden rounded-4xl border border-blue-200 bg-white/90 p-5 shadow-xl md:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-violet-200/50 blur-3xl" />

        <div className="relative grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Misiones completas</p>
            <p className="text-xl font-black text-slate-900">
              {completedStages.length} / {gameStages.length}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Puntaje</p>
            <p className="text-xl font-black text-blue-700">{score}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Racha</p>
            <p className="inline-flex items-center gap-1 text-xl font-black text-amber-600">
              <Zap size={18} />
              {streak} (max {bestStreak})
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Vidas</p>
            <div className="mt-1 flex gap-1">
              {[1, 2, 3].map((life) => (
                <Heart
                  key={life}
                  size={20}
                  className={life <= lives ? "fill-rose-500 text-rose-500" : "text-slate-300"}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-linear-to-r from-blue-500 via-violet-500 to-cyan-500 transition-all"
            style={{ width: `${mode === "victory" ? 100 : progress}%` }}
            aria-hidden
          />
        </div>

        {mode === "intro" ? (
          <motion.section
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]"
          >
            <article className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <p className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-bold text-blue-700">
                Antes de iniciar
              </p>
              <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
                Bienvenido a la Aventura IA
              </h1>
              <p className="mt-3 text-lg leading-relaxed text-slate-700">
                Vas a aprender jugando. Primero eliges una mision, luego ves contenido basico (imagen + mini
                video) y despues completas un reto con preguntas para desbloquear la siguiente etapa.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-3 text-cyan-900">
                  1) Entra al mapa y selecciona la mision disponible.
                </div>
                <div className="rounded-xl border border-violet-100 bg-violet-50 p-3 text-violet-900">
                  2) Lee el contenido basico y mira el recurso visual.
                </div>
                <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-emerald-900">
                  3) Supera el reto para desbloquear la siguiente mision.
                </div>
              </div>

              <button
                type="button"
                onClick={startAdventure}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-base font-bold text-white transition hover:bg-blue-700"
              >
                <PlayCircle size={20} />
                Ir al mapa de misiones
              </button>
            </article>

            <div className="relative min-h-92 overflow-hidden rounded-3xl border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"
                alt="Estudiantes iniciando una aventura educativa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.section>
        ) : null}

        {mode === "map" ? (
          <motion.section
            key="map"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mt-6"
          >
            <article className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="text-3xl font-black text-slate-900 md:text-4xl">Mapa de misiones</h2>
              <p className="mt-2 text-base text-slate-700 md:text-lg">
                Selecciona una mision desbloqueada. Cada mision te muestra contenido base y luego su reto.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {gameStages.map((mission, index) => {
                  const Icon = mission.icon;
                  const isUnlocked = index <= unlockedStage;
                  const isCompleted = completedStages.includes(mission.id);

                  return (
                    <button
                      key={mission.id}
                      type="button"
                      onClick={() => openMission(index)}
                      disabled={!isUnlocked}
                      className={`rounded-2xl border p-5 text-left transition ${
                        !isUnlocked
                          ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400"
                          : isCompleted
                            ? "border-emerald-200 bg-emerald-50 hover:-translate-y-1"
                            : "border-blue-200 bg-blue-50 hover:-translate-y-1"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="inline-flex rounded-xl bg-white p-2 text-slate-800">
                          <Icon size={18} />
                        </span>
                        {!isUnlocked ? (
                          <span className="inline-flex items-center gap-1 text-xs font-bold">
                            <Lock size={14} />
                            Bloqueada
                          </span>
                        ) : isCompleted ? (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                            <CheckCircle2 size={14} />
                            Completada
                          </span>
                        ) : (
                          <span className="text-xs font-bold text-blue-700">Disponible</span>
                        )}
                      </div>
                      <p className="mt-4 text-sm font-bold uppercase tracking-wide">{mission.mission}</p>
                      <h3 className="mt-1 text-xl font-black">{mission.title}</h3>
                      <p className="mt-1 text-sm opacity-90">{mission.subtitle}</p>
                    </button>
                  );
                })}
              </div>
            </article>
          </motion.section>
        ) : null}

        {mode === "learn" ? (
          <motion.section
            key={`${stage.id}-learn`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mt-6 grid gap-6 xl:grid-cols-[1.2fr_1fr]"
          >
            <article className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <p className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-bold text-blue-700">
                {stage.mission}
              </p>
              <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">{stage.title}</h1>
              <p className="mt-2 text-lg font-semibold text-violet-700">{stage.subtitle}</p>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">{stage.description}</p>

              <ul className="mt-6 space-y-3">
                {stage.bullets.map((item) => (
                  <li key={item} className="rounded-xl border border-cyan-100 bg-cyan-50 p-3 text-base text-cyan-900">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={startMissionQuiz}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-base font-bold text-white transition hover:bg-blue-700"
                >
                  <Sparkles size={18} />
                  Iniciar reto de esta mision
                </button>
                <button
                  type="button"
                  onClick={() => setMode("map")}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-base font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  Volver al mapa
                </button>
              </div>
            </article>

            <div className="space-y-4">
              <div className="relative min-h-64 overflow-hidden rounded-3xl border border-slate-200">
                <Image
                  src={stage.image}
                  alt={stage.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900">
                <iframe
                  className="aspect-video w-full"
                  src={stage.videoEmbedUrl}
                  title={stage.videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.section>
        ) : null}

        {mode === "quiz" ? (
          <motion.section
            key={`${stage.id}-quiz-${questionIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"
          >
            <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
              {stage.mission} - Pregunta {questionIndex + 1} de {stage.questions.length}
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">{currentQuestion.question}</h2>

            <div className="mt-6 grid gap-3">
              {currentQuestion.options.map((option, idx) => {
                const isCorrectOption = idx === currentQuestion.correctIndex;
                const isSelected = idx === selectedOption;

                const variant =
                  selectedOption === null
                    ? "border-slate-200 bg-white hover:bg-slate-50"
                    : isCorrectOption
                      ? "border-emerald-300 bg-emerald-50 text-emerald-900"
                      : isSelected
                        ? "border-rose-300 bg-rose-50 text-rose-900"
                        : "border-slate-200 bg-white opacity-75";

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => onAnswer(idx)}
                    disabled={selectedOption !== null}
                    className={`rounded-2xl border px-4 py-4 text-left text-base font-semibold transition md:text-lg ${variant}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {selectedOption !== null ? (
              <div
                className={`mt-5 rounded-2xl p-4 text-base ${
                  correct ? "border border-emerald-200 bg-emerald-50 text-emerald-900" : "border border-amber-200 bg-amber-50 text-amber-900"
                }`}
              >
                <strong>{correct ? "Correcto. " : "Respuesta para aprender. "}</strong>
                {feedback}
              </div>
            ) : null}

            {selectedOption !== null ? (
              <button
                type="button"
                onClick={continueAfterAnswer}
                className="mt-5 rounded-xl bg-slate-900 px-5 py-3 text-base font-bold text-white transition hover:bg-slate-700"
              >
                {correct ? "Continuar" : "Intentar otra vez"}
              </button>
            ) : null}
          </motion.section>
        ) : null}

        {mode === "stageClear" ? (
          <motion.section
            key={`${stage.id}-clear`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8"
          >
            <h2 className="text-3xl font-black text-emerald-900">Mision completada</h2>
            <p className="mt-2 text-base text-emerald-900">
              Excelente. Terminaste <strong>{stage.title}</strong>. Ahora puedes volver al mapa para elegir la
              siguiente mision desbloqueada.
            </p>
            <button
              type="button"
              onClick={finishStage}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-base font-bold text-white transition hover:bg-emerald-800"
            >
              Volver al mapa
              <ArrowRight size={18} />
            </button>
          </motion.section>
        ) : null}

        {mode === "gameOver" ? (
          <motion.section
            key="game-over"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mt-6 rounded-3xl border border-rose-200 bg-rose-50 p-6 md:p-8"
          >
            <h2 className="text-3xl font-black text-rose-900">Se acabaron tus vidas</h2>
            <p className="mt-2 text-base text-rose-900">
              Llegaste hasta la mision {stageIndex + 1}. Reinicia para mejorar tu racha y subir tu rango.
            </p>
            <button
              type="button"
              onClick={resetGame}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-rose-700 px-5 py-3 text-base font-bold text-white transition hover:bg-rose-800"
            >
              <RotateCcw size={18} />
              Reintentar aventura
            </button>
          </motion.section>
        ) : null}

        {mode === "victory" ? (
          <motion.section
            key="victory"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mt-6 rounded-3xl border border-violet-200 bg-violet-50 p-6 md:p-8"
          >
            <h2 className="text-4xl font-black text-violet-900">Victoria educativa</h2>
            <p className="mt-2 text-lg text-violet-900">
              Completaste toda la aventura de IA. Ahora sabes usar IA de forma inteligente y responsable.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-violet-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Puntaje final</p>
                <p className="text-2xl font-black text-slate-900">{score}</p>
              </div>
              <div className="rounded-xl border border-violet-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Mejor racha</p>
                <p className="text-2xl font-black text-amber-600">{bestStreak}</p>
              </div>
              <div className="rounded-xl border border-violet-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Rango</p>
                <p className="inline-flex items-center gap-2 text-2xl font-black text-violet-700">
                  <Trophy size={20} />
                  {rank}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={resetGame}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-700 px-5 py-3 text-base font-bold text-white transition hover:bg-violet-800"
            >
              <RotateCcw size={18} />
              Jugar de nuevo
            </button>
          </motion.section>
        ) : null}
      </div>
    </div>
  );
}
