import React from 'react';
import { OWNER_DATA } from '../../data/owner';
import { Brain, Database, Cpu, Award, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About the Engineer"
      className="py-16 md:py-24 border-b border-paper-border dark:border-slate-border relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="w-full max-w-5xl xl:max-w-none mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-ink-graphite dark:text-slate-200 text-xs font-mono mb-3">
            <Brain className="w-3.5 h-3.5 text-accent-teal dark:text-teal-400" />
            <span className="text-accent-amber dark:text-amber-300 uppercase tracking-wider font-semibold">
              Engineering Narrative &amp; Background
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-ink dark:text-white tracking-tight lg:whitespace-nowrap">
            From Proof-Based Mathematics to Scalable Backend Systems
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-graphite dark:text-slate-100 font-sans leading-relaxed max-w-2xl">
            How formal mathematical training shaped a preference for explicit state, clear invariants, and predictable error handling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Rule 5: Non-negotiable Profile Card & Photo (Preserved on all viewports - Prominent Size) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-lg sm:max-w-xl lg:max-w-none rounded-2xl overflow-hidden border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface p-4 sm:p-5 shadow-sm">
              <picture>
                <source srcSet="/img/about.webp?v=3" type="image/webp" />
                <img
                  src="/img/about.png?v=3"
                  alt="Mohd Mohitur Rahaman"
                  width="540"
                  height="540"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-square rounded-xl object-cover object-top"
                />
              </picture>
              <div className="pt-3.5 pb-1 px-1 flex items-center justify-between text-xs font-mono text-slate-700 dark:text-slate-200">
                <span className="font-semibold text-ink dark:text-white">Kolkata, West Bengal</span>
                <span className="text-slate-600 dark:text-slate-300">MCA (KIIT) • B.Sc Math</span>
              </div>
            </div>

            {/* Academic Field Note Below Photo */}
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-none mt-4 p-4 rounded-xl border border-paper-border dark:border-slate-border bg-paper-subtle dark:bg-slate-surface text-xs font-mono text-ink-graphite dark:text-slate-200">
              <span className="text-accent-amber dark:text-amber-300 block mb-1 font-semibold">
                [Academic Field Note]
              </span>
              <span className="leading-relaxed">
                Malda College (B.Sc Hons, 8.92 CGPA) → KIIT Bhubaneswar (MCA, 9.04 CGPA). Formally trained in linear algebra, real analysis, and discrete mathematics before building production systems.
              </span>
            </div>
          </div>

          {/* Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-base sm:text-lg text-ink-graphite dark:text-slate-100 font-sans leading-relaxed space-y-5">
              <p>
                My entry into engineering wasn’t through bootcamps or web design tutorials; it began with three years of proof-based pure mathematics at Malda College. Proving theorems in real analysis, linear algebra, and topology forces you to think in definitions, invariants, and counterexamples.
              </p>
              <p>
                When I transitioned to computer applications during my Master's at KIIT Bhubaneswar, that formal rigor carried directly into how I design software. In a distributed backend, as in mathematics, you cannot rely on wishful thinking. A WebSocket channel will disconnect, an external speech API will throttle or fail, and memory allocations in dataframes will leak if boundaries are unclear.
              </p>
              <p>
                Today I focus on building backend services with <strong>Java / Spring Boot</strong> and <strong>Node.js</strong>, hosting infrastructure on <strong>AWS</strong>, and writing client tools with <strong>TypeScript</strong> and <strong>Swift</strong>. I care about readable code, predictable error handling, and architectures where components have clear, isolated responsibilities.
              </p>
            </div>

            {/* Strategic Pillars (mohitur.com style) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-paper-border dark:border-slate-border">
              <div className="p-4 rounded-xl border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface">
                <Database className="w-5 h-5 text-accent-teal dark:text-teal-400 mb-2" />
                <h3 className="font-mono font-bold text-sm text-ink dark:text-white">
                  Distributed Systems
                </h3>
                <p className="text-xs text-ink-graphite dark:text-slate-300 mt-1 leading-snug font-sans">
                  Full-duplex WebSockets, Spring Boot APIs, and sub-50ms synchronization.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface">
                <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
                <h3 className="font-mono font-bold text-sm text-ink dark:text-white">
                  Cloud &amp; Infrastructure
                </h3>
                <p className="text-xs text-ink-graphite dark:text-slate-300 mt-1 leading-snug font-sans">
                  AWS (EC2, S3, IAM, Polly), Docker containerization, and Cloudflare edge.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface">
                <Award className="w-5 h-5 text-accent-amber dark:text-amber-400 mb-2" />
                <h3 className="font-mono font-bold text-sm text-ink dark:text-white">
                  Data &amp; GenAI
                </h3>
                <p className="text-xs text-ink-graphite dark:text-slate-300 mt-1 leading-snug font-sans">
                  Python analytics (Pandas, Streamlit) and emerging LLM integration workflows.
                </p>
              </div>
            </div>

            {/* Technical Blog Link */}
            <div className="pt-2">
              <a
                href={OWNER_DATA.socials.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-mono text-accent-teal dark:text-teal-300 hover:underline font-medium"
              >
                <span>Read engineering notes &amp; technical essays on here</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
