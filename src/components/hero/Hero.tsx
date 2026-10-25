import React from 'react';
import { OWNER_DATA } from '../../data/owner';
import { ArrowDown, FileDown, Mail, ShieldCheck, Terminal, Award, Github, Linkedin } from 'lucide-react';
import { useMotion } from '../../context/MotionContext';

export const Hero: React.FC = () => {
  const { reducedMotion } = useMotion();

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative pt-8 pb-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Core Identity & Messaging */}
          <div className="lg:col-span-7 space-y-6">

            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                {!reducedMotion && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                )}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{OWNER_DATA.availability}</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
                Hi, I'm {OWNER_DATA.name}
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500">Distributed Cloud Systems</span> & Modern Interfaces.
              </h1>
            </div>

            {/* Concise Value Statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Software engineer with a foundation in <strong>Pure Mathematics (B.Sc Hons, 8.92 CGPA)</strong> and <strong>Computer Applications (MCA KIIT, 8.92 CGPA)</strong>. I build production-ready systems with Java / Spring Boot and Node.js, orchestrate AWS cloud infrastructure, and craft cross-platform web and mobile experiences.
            </p>

            {/* Verified Credentials Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300">
                <Award className="w-3.5 h-3.5 text-cyan-500" />
                <span>KIIT MCA • 8.92 CGPA</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>B.Sc Math Hons • 8.92 CGPA</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-amber-500" />
                <span>AWS Cloud & WebSockets</span>
              </div>
            </div>

            {/* Clear Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-glow hover:opacity-95 transition-all flex items-center gap-2 group focus:ring-2 focus:ring-cyan-400"
              >
                <span>View Projects &amp; Architecture</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-cyan-500 transition-colors flex items-center gap-2"
              >
                <span>Let's Talk</span>
              </a>

              <a
                href={OWNER_DATA.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Mohd_Mohitur_Rahaman_Resume.pdf"
                className="px-5 py-3 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-cyan-500 transition-colors flex items-center gap-2"
              >
                <FileDown className="w-4 h-4 text-slate-400" />
                <span>Resume</span>
              </a>

              <a
                href={`mailto:${OWNER_DATA.email}`}
                className="p-3 rounded-xl border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:border-cyan-500 transition-colors"
                aria-label="Direct Email Contact"
                title="Direct Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Portrait with Minimalistic Light Gray Border */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-[460px]">

              {/* Minimalist Card Container */}
              <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-lg overflow-hidden">

                {/* Header Meta: ENGINEER_NODE + Social Links */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                    <span>ENGINEER_NODE</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-400">
                    <a
                      href={OWNER_DATA.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-slate-400 hover:text-cyan-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      aria-label="GitHub Profile"
                      title="GitHub Profile"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={OWNER_DATA.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-slate-400 hover:text-cyan-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      aria-label="LinkedIn Profile"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Prominent Large Circular Profile Cutout with Minimalist Light Gray Border */}
                <div className="flex flex-col items-center py-2">
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-950 shadow-md">
                    <picture>
                      <source srcSet="/img/profile-circle.webp?v=6" type="image/webp" />
                      <source srcSet="/img/profile.webp?v=6" type="image/webp" />
                      <img
                        src="/img/profile.png?v=6"
                        alt="Mohd Mohitur Rahaman - Full Stack & Cloud Systems Developer"
                        width="400"
                        height="400"
                        fetchPriority="high"
                        decoding="async"
                        className="w-full h-full object-cover object-top"
                      />
                    </picture>
                  </div>

                  {/* Clean Status Pill Badge Below Circle */}
                  <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-semibold">Full-Stack &amp; Cloud</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-cyan-600 dark:text-cyan-400">Ready</span>
                  </div>
                </div>

                {/* Mini Stats Bar */}
                <div className="grid grid-cols-2 gap-2 pt-4 font-mono text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Primary Core</span>
                    <strong className="text-slate-900 dark:text-slate-100 font-semibold">Java • Spring • React</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Cloud Infra</span>
                    <strong className="text-slate-900 dark:text-slate-100 font-semibold">AWS • Docker • Edge</strong>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
