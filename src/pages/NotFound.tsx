import React from 'react';
import { Terminal, Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-obsidian-950 text-slate-900 dark:text-slate-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-obsidian-900/80 backdrop-blur-xl text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mx-auto border border-cyan-500/20">
          <Terminal className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-semibold">
            HTTP 404 // ROUTE_NOT_FOUND
          </span>
          <h1 className="text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
            System Node Unreachable
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            The requested path does not map to any active distributed service in this showcase.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 text-white text-xs font-semibold shadow-glow hover:bg-cyan-500 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </a>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-cyan-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};
