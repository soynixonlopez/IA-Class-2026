"use client";

import { navSections } from "@/data/site-content";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export function SectionProgress() {
  const [activeSection, setActiveSection] = useState<string>(navSections[0].id);
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const sectionIds = useMemo(() => navSections.map((section) => section.id), []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.45 },
      );

      observer.observe(section);
      observers.push(observer);
    });

    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionIds]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 transition-all duration-200"
        style={{ width: `${progress}%` }}
        aria-hidden
      />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/30 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#inicio" className="text-base font-black tracking-wide text-slate-800">
            IA EN SECUNDARIA
          </a>

          <button
            type="button"
            className="rounded-xl border border-slate-200 p-2 text-slate-700 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Abrir navegación"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navSections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => goTo(section.id)}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                  activeSection === section.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100"
                }`}
                aria-current={activeSection === section.id ? "location" : undefined}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>

        {isOpen ? (
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 pb-4 md:hidden">
            {navSections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => goTo(section.id)}
                className={`rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                  activeSection === section.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        ) : null}
      </header>
    </>
  );
}
