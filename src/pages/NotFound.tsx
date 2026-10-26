import React from 'react';
import { Terminal, Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper-canvas dark:bg-slate-canvas text-ink dark:text-slate-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full p-8 rounded-xl border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 rounded-xl bg-accent-teal/10 dark:bg-teal-400/10 text-accent-teal dark:text-teal-300 flex items-center justify-center mx-auto border border-accent-teal/20 dark:border-teal-400/20">
          <Terminal className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono uppercase text-accent-teal dark:text-teal-300 font-semibold">
            HTTP 404 // ROUTE_NOT_FOUND
          </span>
          <h1 className="text-3xl font-serif font-normal text-ink dark:text-white mt-1">
            Page Not Found
          </h1>
          <p className="text-sm font-sans text-ink-graphite dark:text-slate-100 mt-2 leading-relaxed">
            The requested path does not map to any active project or section in this portfolio.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-ink dark:bg-white text-paper-canvas dark:text-slate-canvas text-xs font-mono font-medium hover:opacity-90 transition-opacity min-h-[44px]"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </a>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-slate-800 dark:text-slate-200 text-xs font-mono font-medium hover:border-accent-teal dark:hover:border-teal-400 transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};
