import React from 'react';
import { OWNER_DATA } from '../../data/owner';
import { Github, Linkedin, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 py-6 sm:py-7 bg-white/50 dark:bg-obsidian-950/80 backdrop-blur-md text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Identity & Status */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-display font-extrabold text-sm text-slate-900 dark:text-white">
              {OWNER_DATA.name}
            </span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="font-mono text-[11px] text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Systems Online</span>
            </span>
          </div>

          {/* Socials & Resume */}
          <div className="flex items-center gap-4">
            <a
              href={OWNER_DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={OWNER_DATA.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={OWNER_DATA.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download="Mohd_Mohitur_Rahaman_Resume.pdf"
              className="font-mono text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors"
            >
              Resume PDF
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl border border-slate-200 dark:border-white/10 hover:border-cyan-500 text-slate-500 hover:text-cyan-500 transition-colors"
              aria-label="Scroll back to top of page"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Verification - Compact vertical space */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono">
          <p className="flex items-center gap-1">
            <span>© 2026 {OWNER_DATA.name}.</span>
          </p>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Zero Third-Party Tracking • Open Source MIT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
