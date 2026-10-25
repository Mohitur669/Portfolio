import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/skills';
import { Layers, Filter, ChevronDown } from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  category: 'Backend' | 'Frontend' | 'Cloud' | 'Data' | 'DevOps';
  iconUrl: string;
  usedIn: string;
}

const TECH_STACK_ITEMS: TechItem[] = [
  {
    id: 'java',
    name: 'Java',
    category: 'Backend',
    iconUrl: 'img/tech/java.svg',
    usedIn: 'SpeakIT Backend, Cloud Microservices & OOP Architecture',
  },
  {
    id: 'spring',
    name: 'Spring Boot',
    category: 'Backend',
    iconUrl: 'img/tech/spring.svg',
    usedIn: 'SpeakIT Gateway, RESTful Microservices, Dependency Injection',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Data',
    iconUrl: 'img/tech/python.svg',
    usedIn: 'Olympic Data Analysis, Web Scraping, Data Modeling',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend',
    iconUrl: 'img/tech/javascript.svg',
    usedIn: 'Full-Stack Web, Code Editor, DOM APIs, Asynchronous I/O',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    iconUrl: 'img/tech/typescript.svg',
    usedIn: 'Code Editor, Type-Safe Architecture, Static Type Verification',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    iconUrl: 'img/tech/nodejs.svg',
    usedIn: 'Code Editor Server, WebSockets, Real-time APIs',
  },
  {
    id: 'swift',
    name: 'Swift / iOS',
    category: 'Frontend',
    iconUrl: 'img/tech/swift.svg',
    usedIn: 'SpeakIT Native iOS, SwiftUI, AVFoundation & Audio Pipelines',
  },
  {
    id: 'aws',
    name: 'AWS Cloud',
    category: 'Cloud',
    iconUrl: 'img/tech/aws.svg',
    usedIn: 'EC2, S3, IAM, Polly Neural Voice, Cloud Deployments',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'DevOps',
    iconUrl: 'img/tech/docker.svg',
    usedIn: 'Containerization, Microservice Packaging, Multi-Stage Builds',
  },
  {
    id: 'mysql',
    name: 'MySQL / SQL',
    category: 'Data',
    iconUrl: 'img/tech/mysql.svg',
    usedIn: 'Relational Schemas, Index Optimization, Academic & Enterprise DBs',
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'DevOps',
    iconUrl: 'img/tech/git.svg',
    usedIn: 'Distributed Version Control, Branching, GitHub Actions CI/CD',
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'DevOps',
    iconUrl: 'img/tech/linux.svg',
    usedIn: 'Bash Scripting, System Administration, Cloud Server Ops',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-2 border border-cyan-500/20">
              <Layers className="w-3.5 h-3.5" />
              <span>Skills &amp; Technology Stack</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
              Tech-Stacks &amp; Tools I Work With
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Proficient in an enterprise tech stack spanning Java, Spring Boot, WebSockets, AWS cloud architecture, and modern JavaScript/TypeScript ecosystems.
            </p>
          </div>

          {/* Tech Stack Filter: Compact Dropdown on Mobile (< md), Pill Row on Desktop (>= md) */}
          <div className="md:hidden relative w-full max-w-full">
            <div className="relative flex items-center w-full max-w-full">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none flex items-center">
                <Filter className="w-3.5 h-3.5" />
              </span>
              <select
                value={activeCategoryFilter}
                onChange={(e) => setActiveCategoryFilter(e.target.value)}
                aria-label="Filter tech stack by category"
                className="w-full max-w-full appearance-none pl-9 pr-9 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 text-xs font-mono shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 truncate"
              >
                {['all', 'Backend', 'Frontend', 'Cloud', 'Data', 'DevOps'].map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? `All Tech (${TECH_STACK_ITEMS.length})` : cat}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Desktop Category Filter Pills */}
          <div className="hidden md:flex shrink-0 items-center gap-1.5 p-1 rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md overflow-x-auto text-xs font-mono no-scrollbar">
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

        {/* 1. Interactive Classic Tech Stack Grid (using classic Devicon icons) */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredTech.map((item) => {
              const isSelected = selectedTech?.id === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedTech(isSelected ? null : item)}
                  className={`group relative p-5 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-center gap-3 ${
                    isSelected
                      ? 'border-cyan-500 bg-cyan-500/10 shadow-lg ring-2 ring-cyan-500/40 -translate-y-1'
                      : 'border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 hover:-translate-y-1 shadow-sm hover:shadow-md'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="w-14 h-14 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                    <img
                      src={item.iconUrl}
                      alt={item.name}
                      className="w-12 h-12 object-contain drop-shadow-sm pointer-events-none select-none"
                      loading="lazy"
                    />
                  </div>

                  <div className="space-y-0.5">
                    <span className="block text-xs font-bold text-slate-900 dark:text-white font-mono group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {item.name}
                    </span>
                    <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  {/* Active highlight indicator */}
                  {isSelected && (
                    <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-cyan-500 border-2 border-white dark:border-slate-950 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Tech Callout */}
          {selectedTech && (
            <div className="mt-5 p-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono animate-fadeIn">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
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

        {/* 2. Detailed Taxonomy Breakdown */}
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
