import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/skills';
import {
  Cpu,
  Code2,
  LineChart,
  PenTool,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';

// Recognizable Brand SVGs for the Tech-Stack Grid (from portfolio.mohitur.com)
interface TechItem {
  id: string;
  name: string;
  category: 'Backend' | 'Frontend' | 'Cloud' | 'Data' | 'Language' | 'DevOps';
  color: string;
  bgColor: string;
  usedIn: string;
  iconSvg?: React.ReactNode;
}

const TECH_STACK_ITEMS: TechItem[] = [
  {
    id: 'java',
    name: 'Java',
    category: 'Backend',
    color: '#ED8B00',
    bgColor: 'rgba(237, 139, 0, 0.1)',
    usedIn: 'SpeakIT Backend, Cloud Microservices',
    iconSvg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.85 16.84c0 .03.04.05.07.03 1.1-.73 2.82-.9 4.39-.37.38.13.78-.1.76-.5-.03-.43-.37-.77-.85-.89-1.63-.42-3.37-.16-4.37.73zM7.55 18.9c-.02.04.02.08.06.07 1.58-.6 3.69-.64 5.39.22.42.21.84-.04.79-.47-.06-.45-.42-.76-.94-.9-1.92-.51-4.22-.38-5.3.88zM12.92 11.2c.26.23.57.45.92.65 1.55.88 3.52.81 4.54-.42.27-.32.06-.75-.32-.82-1.3-.23-2.67-.05-3.83.47-.48.21-.73.66-.46.99.16.2.5.38.9.46.2.04.41.05.62.03.62-.06 1.25-.33 1.63-.79.08-.09.13-.19.16-.3-.39-.14-.85-.16-1.36-.08-.94.15-1.74.52-2.18.86zM5.5 21.5c1.4-.2 3.1-.3 4.8-.3 2.1 0 4.1.2 5.7.5.3.06.6-.14.6-.45 0-.36-.26-.64-.6-.7-1.7-.3-3.8-.5-6-.5-1.9 0-3.8.2-5.3.4-.3.05-.5.3-.5.6 0 .3.2.45.4.45zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
  },
  {
    id: 'spring',
    name: 'Spring Boot',
    category: 'Backend',
    color: '#6DB33F',
    bgColor: 'rgba(109, 179, 63, 0.1)',
    usedIn: 'SpeakIT Gateway, REST Microservices',
    iconSvg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.5 12c0 5.25-4.25 9.5-9.5 9.5S2.5 17.25 2.5 12 6.75 2.5 12 2.5c2.4 0 4.6.9 6.25 2.4l-1.5 1.5C15.4 5.2 13.8 4.6 12 4.6c-4.1 0-7.4 3.3-7.4 7.4s3.3 7.4 7.4 7.4 7.4-3.3 7.4-7.4c0-.9-.2-1.7-.5-2.5l1.7-1c.6 1.1.9 2.3.9 3.5z" />
      </svg>
    ),
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Data',
    color: '#3776AB',
    bgColor: 'rgba(55, 118, 171, 0.1)',
    usedIn: 'Data Science, Olympic Analytics, Modeling',
    iconSvg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9 2C8.6 2 6.6 2.5 6.6 4.3v2.2h5.4V8H4.6C2.8 8 2 9.6 2 12.3c0 2.6.9 4.3 2.6 4.3h1.7v-2.3c0-1.8 1.5-3.3 3.3-3.3h5.4c1.5 0 2.7-1.2 2.7-2.7V4.3C17.7 2.5 15.2 2 11.9 2zm-2.4 2.2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm2.6 17.8c3.3 0 5.3-.5 5.3-2.3v-2.2H12V16h7.4c1.8 0 2.6-1.6 2.6-4.3 0-2.6-.9-4.3-2.6-4.3h-1.7v2.3c0 1.8-1.5 3.3-3.3 3.3H9c-1.5 0-2.7 1.2-2.7 2.7v4c0 1.8 2.5 2.3 5.8 2.3zm2.4-2.2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
      </svg>
    ),
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend',
    color: '#F7DF1E',
    bgColor: 'rgba(247, 223, 30, 0.1)',
    usedIn: 'Full-Stack Web, Code Editor, Scripting',
    iconSvg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm13.7 14.5c1.4 0 2.3-.7 2.8-1.7l-1.6-1c-.3.5-.7.8-1.2.8-.7 0-1.1-.4-1.1-1.3v-5.1h-2v5.3c0 2 1.1 3 3.1 3zm-6.2-.1c1.2 0 2-.6 2.4-1.5l-1.6-1c-.2.4-.5.6-1 .6-.6 0-.9-.3-.9-.8 0-.6.4-.8 1.4-1.2 1.7-.7 2.4-1.4 2.4-2.8 0-1.6-1.2-2.7-3-2.7-1.6 0-2.6.8-3 1.9l1.6.9c.3-.5.7-.8 1.3-.8.6 0 .9.3.9.7 0 .5-.3.7-1.2 1.1-1.8.7-2.6 1.5-2.6 2.9 0 1.7 1.3 2.8 3.2 2.8z" />
      </svg>
    ),
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    color: '#3178C6',
    bgColor: 'rgba(49, 120, 198, 0.1)',
    usedIn: 'Code Editor, Type-Safe Web Architecture',
    iconSvg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm7.8 7.2v7.3H9v-7.3H6.8V8.7h6.2v1.5h-2.2zm4.5 7.4c1.4 0 2.4-.7 3-1.8l-1.5-.9c-.3.5-.7.8-1.4.8-.8 0-1.3-.4-1.3-1.1 0-.6.4-.9 1.4-1.3 1.8-.7 2.7-1.4 2.7-2.9 0-1.7-1.3-2.8-3.2-2.8-1.7 0-2.9.9-3.4 2.2l1.6.8c.3-.6.8-1 1.6-1 .8 0 1.3.4 1.3 1 0 .5-.4.8-1.3 1.2-1.9.8-2.8 1.6-2.8 3.1 0 1.8 1.3 2.7 3.3 2.7z" />
      </svg>
    ),
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    color: '#339933',
    bgColor: 'rgba(51, 153, 51, 0.1)',
    usedIn: 'Code Editor Server, WebSockets, APIs',
    iconSvg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l9 5.2v10.4L12 22l-9-4.4V7.2L12 2zm0 2.3L5 8.2v7.6l7 3.5 7-3.5V8.2l-7-3.9z" />
      </svg>
    ),
  },
  {
    id: 'swift',
    name: 'Swift / iOS',
    category: 'Frontend',
    color: '#F05138',
    bgColor: 'rgba(240, 81, 56, 0.1)',
    usedIn: 'SpeakIT Native iOS (SwiftUI, AVFoundation)',
    iconSvg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.2 16.5c-.3.4-.6.9-1 1.3-.8.9-1.8 1.6-3 2.1-.9.4-1.8.6-2.8.6-1.5 0-2.8-.4-4-1.2-1.3-.9-2.3-2.1-3-3.6-.8-1.5-1.1-3.2-.8-5 .2-1.1.7-2.2 1.4-3.1.9-1.1 2.1-2 3.5-2.5 1-.4 2-.5 3-.5 1.4 0 2.6.4 3.7 1.1 1.1.7 2 1.7 2.5 2.9-.6-.2-1.2-.4-1.8-.4-1.5 0-2.9.5-4 1.4-1.1.9-1.8 2.1-2.1 3.5-.3 1.4 0 2.8.8 4 .8 1.2 2 2 3.4 2.3 1.4.3 2.8 0 4-.8.4-.3.8-.6 1.2-1z" />
      </svg>
    ),
  },
  {
    id: 'aws',
    name: 'AWS Cloud',
    category: 'Cloud',
    color: '#FF9900',
    bgColor: 'rgba(255, 153, 0, 0.1)',
    usedIn: 'EC2, S3, IAM, Polly Neural Voice',
    iconSvg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.8 14.2c-2.3 1.7-5.5 2.6-8.8 2.6-4.6 0-8.8-1.7-12-4.6-.2-.2 0-.5.3-.4 3.7 2.1 8.2 3.3 12.8 3.3 3 0 6.2-.7 9-2 .5-.3.9.3.7.7zm1.6-1.5c-.3-.4-1.9-.2-2.9-.1-.3 0-.4-.2-.1-.4 1.6-1.1 4.2-.8 4.5-.4.3.4-.1 3-1.6 4.3-.2.2-.4.1-.3-.2.3-1.1.7-2.8.4-3.2z" />
      </svg>
    ),
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'DevOps',
    color: '#2496ED',
    bgColor: 'rgba(36, 150, 237, 0.1)',
    usedIn: 'Containerization, Microservice Packaging',
    iconSvg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 10.5h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6-3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm9 0h2v2h-2zM4.5 13.5c-.8 0-1.5.7-1.5 1.5 0 3.3 2.7 6 6 6 4.4 0 8.2-2.9 9.5-7.1.3 0 .7.1 1 .1 1.7 0 3-1.3 3-3 0-.4-.1-.8-.2-1.1-.9.3-1.8.5-2.8.5-1.5 0-2.8-.7-3.6-1.8-1.5-.2-2.9.3-3.9 1.4-1.3-.7-2.8-1-4.5-1v2.5h-1c-.8 0-1.5.7-1.5 1.5v.5h-.5z" />
      </svg>
    ),
  },
  {
    id: 'mysql',
    name: 'MySQL / SQL',
    category: 'Data',
    color: '#4479A1',
    bgColor: 'rgba(68, 121, 161, 0.1)',
    usedIn: 'Relational Schemas, Academic & Enterprise DBs',
    iconSvg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C6.5 3 2 4.8 2 7v10c0 2.2 4.5 4 10 4s10-1.8 10-4V7c0-2.2-4.5-4-10-4zm0 2c4.4 0 8 1.3 8 2s-3.6 2-8 2-8-1.3-8-2 3.6-2 8-2zm0 14c-4.4 0-8-1.3-8-2v-2.2c1.9 1.1 4.8 1.7 8 1.7s6.1-.6 8-1.7V17c0 .7-3.6 2-8 2zm0-5c-4.4 0-8-1.3-8-2V9.8c1.9 1.1 4.8 1.7 8 1.7s6.1-.6 8-1.7V12c0 .7-3.6 2-8 2z" />
      </svg>
    ),
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'DevOps',
    color: '#F05032',
    bgColor: 'rgba(240, 80, 50, 0.1)',
    usedIn: 'Distributed Version Control, GitHub Actions CI/CD',
    iconSvg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.4 10.3l-5.7-5.7c-.8-.8-2.1-.8-2.8 0L9.4 6.1l2.4 2.4c.6-.2 1.3-.1 1.8.4.5.5.7 1.2.5 1.8l2.3 2.3c.6-.2 1.3-.1 1.8.4.8.8.8 2.1 0 2.8-.8.8-2.1.8-2.8 0-.6-.6-.7-1.4-.4-2.1l-2.2-2.2v4.8c.4.3.7.8.7 1.4 0 1.1-.9 2-2 2s-2-.9-2-2c0-.6.3-1.1.7-1.4V9.6c-.4-.3-.7-.8-.7-1.4 0-.7.4-1.3 1-1.7L4.6 11.2c-.8.8-.8 2.1 0 2.8l5.7 5.7c.8.8 2.1.8 2.8 0l6.3-6.3c.8-.8.8-2.1 0-2.8z" />
      </svg>
    ),
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'DevOps',
    color: '#FCC624',
    bgColor: 'rgba(252, 198, 36, 0.1)',
    usedIn: 'Bash Scripting, Cloud Instance Administration',
    iconSvg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.2.4 2.3 1.1 3.1-.3.8-.6 1.7-.6 2.7 0 2.5 1.5 4.7 3.5 5.7-.3.7-.8 1.4-1.5 1.8-.7.4-1.5.6-2.5.6H7c-.6 0-1 .4-1 1s.4 1 1 1h.5c1.5 0 2.9-.4 4.1-1.1 1.2.7 2.6 1.1 4.1 1.1h.5c.6 0 1-.4 1-1s-.4-1-1-1h-.5c-1 0-1.8-.2-2.5-.6-.7-.4-1.2-1.1-1.5-1.8 2-1 3.5-3.2 3.5-5.7 0-1-.3-1.9-.6-2.7.7-.8 1.1-1.9 1.1-3.1C16.5 4 14.5 2 12 2zm-1.5 4c.4 0 .8.4.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8zm3 0c.4 0 .8.4.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8z" />
      </svg>
    ),
  },
];

export const Skills: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const filteredTech = TECH_STACK_ITEMS.filter((t) => {
    if (activeCategoryFilter === 'all') return true;
    return t.category.toLowerCase() === activeCategoryFilter.toLowerCase();
  });

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Applied Tooling"
      className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-2 border border-cyan-500/20">
              <Cpu className="w-3.5 h-3.5" />
              <span>Full-Stack &amp; Cloud Tooling</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
              Tech-Stacks &amp; Tools I Work With
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Proficient in an enterprise tech stack spanning Java, Spring Boot, WebSockets, AWS cloud architecture, and modern JavaScript/TypeScript ecosystems.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md text-xs font-mono no-scrollbar">
            {['all', 'Backend', 'Frontend', 'Cloud', 'Data', 'DevOps'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  activeCategoryFilter === cat
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat === 'all' ? `All (${TECH_STACK_ITEMS.length})` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Interactive Tech Stack Grid (from portfolio.mohitur.com) */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {filteredTech.map((item) => {
              const isSelected = selectedTech?.id === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedTech(isSelected ? null : item)}
                  className={`group relative p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col items-center justify-center gap-2.5 ${
                    isSelected
                      ? 'border-cyan-500 bg-cyan-500/10 shadow-lg ring-2 ring-cyan-500/40 -translate-y-1'
                      : 'border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 hover:border-slate-400 dark:hover:border-white/20 hover:-translate-y-0.5 shadow-sm'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div
                    className="p-3 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ color: item.color, backgroundColor: item.bgColor }}
                  >
                    {item.iconSvg}
                  </div>

                  <div className="text-center">
                    <span className="block font-display font-bold text-sm text-slate-900 dark:text-white">
                      {item.name}
                    </span>
                    <span className="inline-block mt-0.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                      {item.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tech Callout */}
          {selectedTech && (
            <div className="mt-5 p-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-slate-700 dark:text-slate-300">
                  <strong className="text-cyan-600 dark:text-cyan-400 font-bold">{selectedTech.name}</strong> ({selectedTech.category}): {selectedTech.usedIn}
                </span>
              </div>
              <button
                onClick={() => setSelectedTech(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-[11px] underline self-end sm:self-auto"
              >
                Close details
              </button>
            </div>
          )}
        </div>

        {/* 2. Core Engineering Pillars (from portfolio.mohitur.com: Web Dev, Data Analytics, Technical Writing) */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Core Engineering Domains</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1: Web Development */}
            <div className="p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-obsidian-900/80 backdrop-blur-xl shadow-lg space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-extrabold text-slate-900 dark:text-white">
                  Full-Stack &amp; Web Systems
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Proficient in building responsive, scalable full-stack applications with <strong>Java / Spring Boot</strong>, <strong>Node.js</strong>, and <strong>TypeScript</strong>. Experienced with full-duplex WebSockets, stateless JWT auth, and containerized deployments.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">Java</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">Spring Boot</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">TypeScript</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">WebSockets</span>
              </div>
            </div>

            {/* Pillar 2: Data Analytics & Modeling */}
            <div className="p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-obsidian-900/80 backdrop-blur-xl shadow-lg space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-extrabold text-slate-900 dark:text-white">
                  Data Analytics &amp; Modeling
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Backed by an 8.92 CGPA in pure mathematics. I extract actionable insights from multi-dimensional datasets using <strong>Python (Pandas, NumPy)</strong>, <strong>Tableau BI</strong>, and statistical hypothesis testing.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">Python</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">Pandas</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">Tableau</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">Statistics</span>
              </div>
            </div>

            {/* Pillar 3: Technical Writing & Architecture */}
            <div className="p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-obsidian-900/80 backdrop-blur-xl shadow-lg space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center border border-purple-500/20">
                  <PenTool className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-extrabold text-slate-900 dark:text-white">
                  Technical Writing &amp; Systems
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Active technical blogger writing on distributed backend patterns, cloud architecture, and data engineering on <strong>Blogspot</strong>. Experienced in designing transparent system request pipelines.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <a
                  href="https://rahamanmohitur.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline font-semibold"
                >
                  <span>Read Blog Articles</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Detailed Taxonomy Breakdown */}
        <div className="space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <Layers className="w-3.5 h-3.5 text-cyan-500" />
            <span>Architecture Breakdown by Domain</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((category) => (
              <div
                key={category.name}
                className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md space-y-3"
              >
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between">
                  <span>{category.name}</span>
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                    {category.items.length}
                  </span>
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                  {category.description}
                </p>

                <div className="space-y-1.5 pt-1">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between text-xs py-1 border-b border-slate-100 dark:border-white/5 last:border-0"
                    >
                      <span className="text-slate-700 dark:text-slate-300 font-medium truncate max-w-[150px]">
                        {item.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          item.level === 'Core'
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            : item.level === 'Advanced'
                            ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                            : 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                        }`}
                      >
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
