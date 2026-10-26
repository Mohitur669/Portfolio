import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useMotion } from '../context/MotionContext';
import { Sun, Moon, Sparkles, ArrowRight, Shield, Zap, Terminal } from 'lucide-react';

export const Styleguide: React.FC = () => {
  const { theme, resolvedTheme, toggleTheme } = useTheme();
  const { reducedMotion, toggleReducedMotion } = useMotion();

  return (
    <div className="min-h-screen bg-paper-canvas dark:bg-slate-canvas text-ink dark:text-slate-100 p-8 max-w-6xl mx-auto transition-colors duration-150">
      <header className="border-b border-paper-border dark:border-slate-border pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-accent-teal dark:text-teal-300 font-semibold">
            System Design Specification
          </span>
          <h1 className="text-3xl font-serif font-normal tracking-tight mt-1 text-ink dark:text-white">
            Living Design System &amp; Primitives
          </h1>
          <p className="text-sm font-sans text-ink-graphite dark:text-slate-100 mt-1 leading-relaxed">
            Token verification, typography scale, interaction states, and accessibility controls.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-sm font-mono text-slate-800 dark:text-slate-200 shadow-sm hover:border-accent-teal dark:hover:border-teal-400 transition-colors min-h-[44px]"
          >
            {resolvedTheme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
            <span>Mode: {theme}</span>
          </button>

          <button
            onClick={toggleReducedMotion}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-mono transition-colors min-h-[44px] ${
              reducedMotion
                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                : 'border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-slate-800 dark:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Reduced Motion: {reducedMotion ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </header>

      {/* 1. Typography Hierarchy */}
      <section className="mb-12">
        <h2 className="text-xl font-serif mb-4 text-ink dark:text-white flex items-center gap-2">
          <Terminal className="w-5 h-5 text-accent-teal dark:text-teal-400" /> Typography Scale
        </h2>
        <div className="space-y-4 p-6 rounded-xl border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface">
          <div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Display Serif</span>
            <p className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-ink dark:text-white">
              Backend services &amp; cloud systems
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Heading Serif</span>
            <p className="text-2xl md:text-3xl font-serif font-normal text-ink dark:text-white">
              From Proof-Based Mathematics to Scalable Backend Systems
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Body Standard</span>
            <p className="text-base text-ink-graphite dark:text-slate-100 font-sans leading-relaxed max-w-2xl">
              Software engineer with a foundation in pure mathematics and formal computer science, focusing on backend services in Java, Spring Boot, and AWS.
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Monospace Code Token</span>
            <p className="font-mono text-sm text-accent-teal dark:text-teal-300 bg-paper-subtle dark:bg-slate-canvas p-2 rounded border border-paper-border dark:border-slate-border inline-block">
              GET /api/v1/synthesis?model=polly-neural-v2
            </p>
          </div>
        </div>
      </section>

      {/* 2. Color Tokens */}
      <section className="mb-12">
        <h2 className="text-xl font-serif mb-4 text-ink dark:text-white flex items-center gap-2">
          <Zap className="w-5 h-5 text-accent-amber dark:text-amber-300" /> Color Tokens &amp; Swatches
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
          <div className="p-3 rounded-lg bg-teal-600 text-white text-xs font-mono font-medium">
            Teal 600<br />#0d9488
          </div>
          <div className="p-3 rounded-lg bg-emerald-600 text-white text-xs font-mono font-medium">
            Emerald 600<br />#059669
          </div>
          <div className="p-3 rounded-lg bg-amber-500 text-white text-xs font-mono font-medium">
            Amber 500<br />#f59e0b
          </div>
          <div className="p-3 rounded-lg bg-slate-900 text-white text-xs font-mono font-medium border border-white/20">
            Slate Canvas<br />#0d1117
          </div>
          <div className="p-3 rounded-lg bg-slate-800 text-white text-xs font-mono font-medium border border-white/20">
            Slate Surface<br />#161b22
          </div>
          <div className="p-3 rounded-lg bg-white text-slate-900 text-xs font-mono font-medium border border-slate-300">
            Paper Card<br />#ffffff
          </div>
        </div>
      </section>

      {/* 3. Button & Action Primitives */}
      <section className="mb-12">
        <h2 className="text-xl font-serif mb-4 text-ink dark:text-white flex items-center gap-2">
          <Shield className="w-5 h-5 text-emerald-500" /> Action &amp; Button Primitives
        </h2>
        <div className="flex flex-wrap items-center gap-4 p-6 rounded-xl border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface">
          <button className="px-5 py-2.5 rounded-lg bg-ink dark:bg-white text-paper-canvas dark:text-slate-canvas font-mono font-medium text-xs hover:opacity-90 transition-opacity flex items-center gap-2 min-h-[44px]">
            <span>Primary Action</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button className="px-5 py-2.5 rounded-lg border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-ink dark:text-slate-100 font-mono font-medium text-xs hover:border-accent-teal dark:hover:border-teal-400 transition-colors min-h-[44px]">
            Secondary Action
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 dark:border-emerald-400/20 text-xs font-mono text-emerald-700 dark:text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Work</span>
          </div>
        </div>
      </section>
    </div>
  );
};
