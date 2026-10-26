import React from 'react';
import { OWNER_DATA } from '../../data/owner';
import { Github, Linkedin, ArrowUp, ShieldCheck, Twitter, Instagram, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-paper-border dark:border-slate-border py-8 bg-paper-card/60 dark:bg-slate-canvas text-xs text-slate-700 dark:text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Status */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-serif font-normal text-sm text-ink dark:text-white">
              {OWNER_DATA.name}
            </span>
            <span className="hidden sm:inline text-slate-400 dark:text-slate-500">•</span>
            <span className="font-mono text-[11px] text-accent-teal dark:text-teal-300 flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available for backend &amp; systems engineering</span>
            </span>
          </div>

          {/* Crawlable Socials & Resume */}
          <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-3">
            <a
              href={OWNER_DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-200 hover:text-accent-teal dark:hover:text-teal-300 hover:bg-paper-subtle dark:hover:bg-slate-subtle transition-colors"
              aria-label="GitHub Profile (@Mohitur669)"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={OWNER_DATA.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-200 hover:text-accent-teal dark:hover:text-teal-300 hover:bg-paper-subtle dark:hover:bg-slate-subtle transition-colors"
              aria-label="LinkedIn Profile (@mohitur02)"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={OWNER_DATA.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-200 hover:text-accent-teal dark:hover:text-teal-300 hover:bg-paper-subtle dark:hover:bg-slate-subtle transition-colors"
              aria-label="X / Twitter Profile (@mohitur02)"
              title="X / Twitter Profile"
            >
              <Twitter className="w-4 h-4" />
            </a>

            <a
              href={OWNER_DATA.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-200 hover:text-accent-teal dark:hover:text-teal-300 hover:bg-paper-subtle dark:hover:bg-slate-subtle transition-colors"
              aria-label="Instagram Profile (@mohitur02)"
              title="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={OWNER_DATA.socials.blog}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-200 hover:text-accent-teal dark:hover:text-teal-300 hover:bg-paper-subtle dark:hover:bg-slate-subtle transition-colors"
              aria-label="Technical Blog"
              title="Technical Blog"
            >
              <BookOpen className="w-4 h-4" />
            </a>

            <a
              href={OWNER_DATA.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download="Mohd_Mohitur_Rahaman_Resume.pdf"
              className="px-3 py-2 min-h-[44px] flex items-center font-mono text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-accent-teal dark:hover:text-teal-300 transition-colors"
            >
              Resume PDF
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-paper-border dark:border-slate-border hover:border-accent-teal dark:hover:border-teal-400 text-slate-700 dark:text-slate-200 hover:text-accent-teal dark:hover:text-teal-300 transition-colors"
              aria-label="Scroll back to top of page"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Verification */}
        <div className="mt-6 pt-4 border-t border-paper-border dark:border-slate-border flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-600 dark:text-slate-300">
          <p className="flex items-center gap-1">
            <span>© 2026 {OWNER_DATA.name}. Kolkata, West Bengal, India.</span>
          </p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Zero Third-Party Tracking • Open Source MIT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
