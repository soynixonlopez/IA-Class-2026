import { AIAdventureGame } from "@/components/ai-adventure-game";

export default function Home() {
  return (
    <div className="section-shell min-h-screen">
      <main className="mx-auto w-full">
        <AIAdventureGame />
      </main>
      <footer className="border-t border-slate-200 bg-white/80 px-4 py-5 text-center text-sm text-slate-700 backdrop-blur sm:px-6">
        Sitio diseñado con mucho amor{" "}
        <span className="text-emerald-600" aria-hidden>
          &#10084;
        </span>{" "}
        por{" "}
        <a
          href="https://www.nixonlopez.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-700 underline-offset-2 hover:underline"
        >
          NixDev
        </a>{" "}
        para Grupo Freshman 2026.
      </footer>
    </div>
  );
}
