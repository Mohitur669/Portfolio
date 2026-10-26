import React from 'react';
import { OWNER_DATA } from '../../data/owner';
import { ArrowDown, FileDown, Mail, Github, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      aria-label="Introduction and Identity"
      className="relative pt-10 pb-16 md:py-20 lg:py-24 border-b border-paper-border dark:border-slate-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Identity & Personal Point of View */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6">

            {/* Status Callout */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-ink-graphite dark:text-slate-200 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-accent-teal dark:bg-teal-400 shrink-0" />
              <span>{OWNER_DATA.availability}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-serif font-normal tracking-tight text-ink dark:text-white leading-[1.15]">
               Engineering Distributed Backend & Cloud Systems with mathematical roots.
              </h1>
            </div>

            {/* Plain-Spoken Value Statement */}
            <p className="text-base sm:text-lg text-ink-graphite dark:text-slate-100 leading-relaxed font-sans max-w-2xl">
              I studied pure mathematics before writing software. Three years of proofs in linear algebra and real analysis gave me a preference for explicit state, clear invariants, and low-overhead services. I build backend services with <strong>Java / Spring Boot</strong> and <strong>Node.js</strong>, manage infrastructure on <strong>AWS</strong>, and build client applications in <strong>TypeScript</strong> and <strong>Swift</strong>.
            </p>

            {/* Restrained CTAs Container */}
            <div className="w-full max-w-2xl pt-1">
              <div className="w-full flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-2.5">
                <a
                  href="#projects"
                  className="flex-1 min-h-[44px] px-3 py-2.5 rounded-lg bg-ink dark:bg-white text-paper-canvas dark:text-slate-canvas text-xs font-mono font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <span>Project Notes</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#architecture"
                  className="flex-1 min-h-[44px] px-3 py-2.5 rounded-lg border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-ink dark:text-slate-100 text-xs font-mono hover:border-accent-teal dark:hover:border-teal-400 transition-colors flex items-center justify-center font-medium whitespace-nowrap"
                >
                  <span>How Systems Work</span>
                </a>

                <a
                  href={OWNER_DATA.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Mohd_Mohitur_Rahaman_Resume.pdf"
                  className="flex-1 min-h-[44px] px-3 py-2.5 rounded-lg border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-ink dark:text-slate-100 text-xs font-mono hover:border-accent-teal dark:hover:border-teal-400 transition-colors flex items-center justify-center gap-1.5 font-medium whitespace-nowrap"
                >
                  <FileDown className="w-3.5 h-3.5 text-ink-muted dark:text-slate-300" />
                  <span>Download Resume</span>
                </a>

                <a
                  href={`mailto:${OWNER_DATA.email}`}
                  className="flex-1 min-h-[44px] px-3 py-2.5 rounded-lg border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-ink dark:text-slate-100 text-xs font-mono hover:border-accent-teal dark:hover:border-teal-400 transition-colors flex items-center justify-center gap-1.5 font-medium whitespace-nowrap"
                  aria-label="Send direct email to Mohd Mohitur Rahaman"
                  title="Send direct email"
                >
                  <Mail className="w-3.5 h-3.5 text-ink-muted dark:text-slate-300" />
                  <span>Email Me</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Profile Card with Dark Midnight Bluish Tone */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-[460px] rounded-3xl border border-slate-200/90 dark:border-[#1a2942] bg-[#f8fafc] dark:bg-[#0b1322] p-6 sm:p-7 shadow-md">
              {/* Header: Identity Label & Verified Links */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80 dark:border-[#1a2942] text-xs font-mono">
                <div className="flex items-center gap-2 text-ink-graphite dark:text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-accent-teal dark:bg-teal-400" />
                  <span className="font-medium text-ink dark:text-white">Kolkata, WB, India</span>
                </div>

                <div className="flex items-center gap-1">
                  <a
                    href={OWNER_DATA.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded text-ink-muted dark:text-slate-300 hover:text-accent-teal dark:hover:text-teal-300 transition-colors"
                    aria-label="GitHub Profile (Mohitur669)"
                    title="GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={OWNER_DATA.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded text-ink-muted dark:text-slate-300 hover:text-accent-teal dark:hover:text-teal-300 transition-colors"
                    aria-label="LinkedIn Profile (mohitur02)"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={OWNER_DATA.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded text-ink-muted dark:text-slate-300 hover:text-accent-teal dark:hover:text-teal-300 transition-colors"
                    aria-label="X / Twitter (@mohitur02)"
                    title="X / Twitter"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Portrait Photo - Exact Size from mohitur.com */}
              <div className="flex flex-col items-center py-2">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-2 border-slate-200 dark:border-[#1e3050] bg-[#f1f5f9] dark:bg-[#070d18] shadow-inner">
                  <picture>
                    <source srcSet="/img/profile-circle.webp?v=7" type="image/webp" />
                    <source srcSet="/img/profile.webp?v=7" type="image/webp" />
                    <img
                      src="/img/profile.png?v=7"
                      alt="Mohd Mohitur Rahaman"
                      width="400"
                      height="400"
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  </picture>
                </div>

                {/* Identity Name inside Profile Card */}
                <div className="mt-4 text-center">
                  <h2 className="text-2xl sm:text-2xl font-serif font-medium text-ink dark:text-white tracking-tight">
                    myself, {OWNER_DATA.name}
                  </h2>
                </div>

                <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#101b30] border border-slate-200/80 dark:border-[#1e3050] text-xs font-mono shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-ink dark:text-white">Backend &amp; Cloud Systems</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-accent-teal dark:text-teal-400 font-semibold">Ready</span>
                </div>
              </div>

              {/* Focus Summary */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-200/80 dark:border-[#1a2942] text-xs font-mono text-center">
                <div className="p-2.5 rounded-lg bg-white/80 dark:bg-[#101b30] border border-slate-200/80 dark:border-[#1a2942] text-center flex flex-col items-center justify-center">
                  <span className="text-[10px] uppercase text-ink-muted dark:text-slate-400 block font-medium">Core Stack</span>
                  <span className="text-ink dark:text-white font-medium">Java • Spring Boot</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/80 dark:bg-[#101b30] border border-slate-200/80 dark:border-[#1a2942] text-center flex flex-col items-center justify-center">
                  <span className="text-[10px] uppercase text-ink-muted dark:text-slate-400 block font-medium">Cloud Infra</span>
                  <span className="text-ink dark:text-white font-medium">AWS • Docker</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
