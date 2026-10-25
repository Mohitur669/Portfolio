import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useMotion } from '../context/MotionContext';
import { Sun, Moon, Sparkles, Check, ArrowRight, Shield, Zap, Terminal } from 'lucide-react';

export const Styleguide: React.FC = () => {
  const { theme, resolvedTheme, toggleTheme } = useTheme();
  const { reducedMotion, toggleReducedMotion } = useMotion();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-obsidian-950 text-slate-900 dark:text-slate-100 p-8 max-w-6xl mx-auto transition-colors duration-300">
      <header className="border-b border-slate-200 dark:border-white/10 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-cyan-600 dark:text-cyan-400">
            System Design Specification
          </span>
          <h1 className="text-3xl font-display font-extrabold tracking-tight mt-1">
            Living Design System & Primitives
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Token verification, typography scale, interaction states, and accessibility controls.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900 text-sm font-medium shadow-sm hover:border-cyan-500 transition-colors"
          >
            {resolvedTheme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            <span>Mode: {theme}</span>
          </button>

          <button
            onClick={toggleReducedMotion}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-medium transition-colors ${
              reducedMotion
                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                : 'border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Reduced Motion: {reducedMotion ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </header>

      {/* 1. Typography Hierarchy */}
      <section className="mb-12">
        <h2 className="text-xl font-bold font-display mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-cyan-500" /> Typography Scale
        </h2>
        <div className="space-y-4 p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md">
          <div>
            <span className="text-xs font-mono text-slate-400">Display (3.5rem / 56px, Bold 800)</span>
            <p className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-slate-950 dark:text-white">
              Architecting High-Throughput Systems
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400">Heading 1 (2.25rem / 36px, Bold 700)</span>
            <p className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-slate-100">
              Living Topology & Reactive Microservices
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400">Heading 2 (1.5rem / 24px, SemiBold 600)</span>
            <p className="text-xl font-display font-semibold text-slate-800 dark:text-slate-200">
              Sync Code — WebSocket Full-Duplex Broadcast
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400">Body Standard (1rem / 16px, Regular 400)</span>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Software engineer with a foundation in Pure Mathematics and Computer Applications, focusing on high-concurrency cloud systems, low-latency state synchronization, and practical AI pipelines.
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400">Monospace Code Token (0.875rem / 14px)</span>
            <p className="font-mono text-sm text-cyan-600 dark:text-cyan-400 bg-slate-100 dark:bg-black/40 p-2 rounded-lg inline-block">
              POST /api/v1/synthesis?model=polly-neural-v2
            </p>
          </div>
        </div>
      </section>

      {/* 2. Color Tokens */}
      <section className="mb-12">
        <h2 className="text-xl font-bold font-display mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-500" /> Color Tokens & Swatches
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
          <div className="p-3 rounded-xl bg-cyan-500 text-white text-xs font-mono font-medium">
            Cyan 500<br />#06b6d4 (Edge Accent)
          </div>
          <div className="p-3 rounded-xl bg-emerald-500 text-white text-xs font-mono font-medium">
            Emerald 500<br />#10b981 (Success/Live)
          </div>
          <div className="p-3 rounded-xl bg-amber-500 text-white text-xs font-mono font-medium">
            Amber 500<br />#f59e0b (Compute/Active)
          </div>
          <div className="p-3 rounded-xl bg-indigo-600 text-white text-xs font-mono font-medium">
            Indigo 600<br />#4f46e5 (AI / Logic)
          </div>
          <div className="p-3 rounded-xl bg-slate-900 text-white text-xs font-mono font-medium border border-white/20">
            Obsidian 900<br />#0b1120 (Deep Canvas)
          </div>
          <div className="p-3 rounded-xl bg-white text-slate-900 text-xs font-mono font-medium border border-slate-300">
            Surface Pure<br />#ffffff (Light Surface)
          </div>
        </div>
      </section>

      {/* 3. Button & Action Primitives */}
      <section className="mb-12">
        <h2 className="text-xl font-bold font-display mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <Shield className="w-5 h-5 text-emerald-500" /> Action & Button Primitives
        </h2>
        <div className="flex flex-wrap items-center gap-4 p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md">
          <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm shadow-glow hover:opacity-95 transition-all flex items-center gap-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none">
            <span>Primary Action</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm hover:border-cyan-500 transition-colors focus:ring-2 focus:ring-cyan-400 focus:outline-none">
            Secondary Action
          </button>

          <button className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5" />
            <span>Live Production</span>
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Work</span>
          </div>
        </div>
      </section>
    </div>
  );
};
