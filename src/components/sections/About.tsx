import React from 'react';
import { OWNER_DATA } from '../../data/owner';
import { Brain, Cpu, Database, Award, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About the Engineer"
      className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-2">
            <Brain className="w-3.5 h-3.5" />
            <span>Engineering Narrative</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
            Rooted in Mathematics. Built for Scale.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            How mathematical thinking informs distributed backend engineering, cloud reliability, and modern GenAI architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Element: About Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900/50 p-3 shadow-xl">
              <picture>
                <source srcSet="/img/about.webp?v=2" type="image/webp" />
                <img
                  src="/img/about.png?v=2"
                  alt="Mohd Mohitur Rahaman - Full Stack, Cloud & AI Systems Engineer"
                  width="380"
                  height="380"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-square rounded-2xl object-cover object-top"
                />
              </picture>
              <div className="p-3 text-center">
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                  KIIT University MCA • Malda College B.Sc
                </span>
              </div>
            </div>
          </div>

          {/* Core Copy & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
              <p>
                My path into engineering began through pure mathematics. Completing a <strong>B.Sc. in Mathematics with Honours (CGPA 8.92)</strong> gave me an appreciation for formal proofs, linear algebra, graph theory, and algorithmic complexity. That mathematical foundation directly translates into how I approach software: deterministic state transitions, low-overhead distributed systems, and clean architectural boundaries.
              </p>
              <p>
                During my <strong>Master of Computer Applications at KIIT Bhubaneswar (CGPA 9.04)</strong>, I channeled this foundation into full-stack and cloud engineering. I designed low-latency collaborative systems using WebSockets, integrated cloud services like AWS Polly for real-time neural audio conversion, and developed statistical analytics dashboards for massive historical sports data.
              </p>
              <p>
                Today, I am actively channeling this backend and data background toward <strong>AI and GenAI engineering</strong> — exploring vector retrieval pipelines, LLM agent orchestration, and pairing Java/Spring Boot microservices with intelligent model layers to solve real-world problems.
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md">
                <Database className="w-5 h-5 text-cyan-500 mb-2" />
                <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                  Distributed Systems
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  Full-duplex WebSockets, Spring Boot APIs, and sub-50ms synchronization.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md">
                <Cpu className="w-5 h-5 text-emerald-500 mb-2" />
                <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                  Cloud & Infrastructure
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  AWS (EC2, S3, IAM, Polly), Docker containerization, and Cloudflare edge.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md">
                <Award className="w-5 h-5 text-amber-500 mb-2" />
                <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                  Data & GenAI
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  Python analytics (Pandas, Streamlit) and emerging LLM integration workflows.
                </p>
              </div>
            </div>

            {/* Verified Technical Blog Link */}
            <div className="pt-2">
              <a
                href={OWNER_DATA.socials.blog}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline font-semibold"
              >
                <span>Read engineering notes & technical essays on Blogspot</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
