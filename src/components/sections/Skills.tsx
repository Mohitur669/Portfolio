import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/skills';
import { ArrowUpRight, Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Stack Topology"
      className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Capability Matrix</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical Stack & Applied Tools
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Grouped by architectural domain. Every listed skill is tied to real production code, distributed systems, or verified academic projects.
          </p>
        </div>

        {/* 4-Domain Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.name}
              className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-obsidian-900/80 backdrop-blur-xl shadow-lg space-y-6"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>{category.name}</span>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                    {category.items.length} Technologies
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.items.map((item) => {
                  const isSelected = selectedTech === item.name;

                  return (
                    <button
                      key={item.name}
                      onClick={() => setSelectedTech(isSelected ? null : item.name)}
                      className={`text-left p-3.5 rounded-2xl border transition-all text-xs ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-500/10 shadow-glow ring-1 ring-cyan-500/50'
                          : 'border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-900/60 hover:border-slate-400 dark:hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {item.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
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

                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-2">
                        <span>Used in:</span>
                        <span className="text-cyan-600 dark:text-cyan-400 font-medium truncate">
                          {item.usedIn.join(', ')}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Tech Callout */}
        {selectedTech && (
          <div className="mt-8 p-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md flex items-center justify-between text-xs font-mono">
            <span className="text-slate-700 dark:text-slate-300">
              Selected Skill: <strong className="text-cyan-500 font-bold">{selectedTech}</strong> — Cross-referenced in project architectures.
            </span>
            <a
              href="#projects"
              className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <span>View Related Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
