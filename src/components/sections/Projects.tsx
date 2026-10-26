import React, { useState } from 'react';
import { PROJECTS } from '../../data/projects';
import { ArchitectureStage } from '../../types';
import {
  ExternalLink,
  Github,
  Filter,
  ChevronDown,
  ChevronUp,
  Star,
  ArrowRight,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [activeTabByProject, setActiveTabByProject] = useState<Record<string, 'pipeline' | 'decisions' | 'stack'>>({
    speakit: 'pipeline',
    'code-editor': 'pipeline',
  });
  const [selectedStageIndexByProject, setSelectedStageIndexByProject] = useState<Record<string, number>>({});

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  const getActiveTab = (projectId: string) => {
    return activeTabByProject[projectId] || 'pipeline';
  };

  const setActiveTab = (projectId: string, tab: 'pipeline' | 'decisions' | 'stack') => {
    setActiveTabByProject((prev) => ({ ...prev, [projectId]: tab }));
  };

  const getSelectedStage = (projectId: string, stages?: ArchitectureStage[]) => {
    if (!stages || stages.length === 0) return null;
    const idx = selectedStageIndexByProject[projectId] ?? 0;
    return stages[idx] || stages[0];
  };

  const setSelectedStage = (projectId: string, index: number) => {
    setSelectedStageIndexByProject((prev) => ({ ...prev, [projectId]: index }));
  };

  return (
    <section
      id="projects"
      aria-label="Software Engineering Projects"
      className="py-16 md:py-24 border-b border-paper-border dark:border-slate-border relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-ink-graphite dark:text-slate-200 text-xs font-mono mb-3">
              <span className="w-2 h-2 rounded-full bg-accent-teal dark:bg-teal-400" />
              <span className="text-accent-amber dark:text-amber-300 uppercase tracking-wider font-semibold">
                Systems &amp; Applications
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-ink dark:text-white tracking-tight">
              Project Notes &amp; Architecture
            </h2>
            <p className="mt-2 text-sm sm:text-base text-ink-graphite dark:text-slate-100 font-sans leading-relaxed">
              Concrete implementations examining API gateways, audio streaming pipelines, WebSocket rooms, and data processing.
            </p>
          </div>

          {/* Category Filter: Mobile Dropdown (< md) */}
          <div className="md:hidden relative w-full max-w-full min-w-0">
            <div className="relative flex items-center w-full max-w-full min-w-0">
              <span className="absolute left-3.5 text-slate-500 dark:text-slate-400 pointer-events-none flex items-center">
                <Filter className="w-3.5 h-3.5" />
              </span>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                aria-label="Filter projects by domain"
                className="w-full max-w-full box-border appearance-none pl-9 pr-9 py-2.5 rounded-lg border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-ink dark:text-slate-100 text-xs font-mono shadow-sm focus:outline-none focus:ring-1 focus:ring-accent-teal min-h-[44px]"
              >
                <option value="all">All Projects (5)</option>
                <option value="cloud-backend">Cloud &amp; Backend</option>
                <option value="fullstack">Full-Stack</option>
                <option value="data-ai">Data &amp; Analytics</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 dark:text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Category Filter: Desktop Row (>= md) */}
          <div className="hidden md:flex shrink-0 items-center gap-1.5 p-1 rounded-lg border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-xs font-mono">
            {[
              { id: 'all', label: 'All Projects (5)' },
              { id: 'cloud-backend', label: 'Cloud & Backend' },
              { id: 'fullstack', label: 'Full-Stack' },
              { id: 'data-ai', label: 'Data & Analytics' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1.5 rounded-md transition-colors min-h-[36px] ${
                  filter === cat.id
                    ? 'bg-ink dark:bg-white text-paper-canvas dark:text-slate-canvas font-semibold'
                    : 'text-slate-700 dark:text-slate-200 hover:text-ink dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project List: Editorial Style */}
        <div className="space-y-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            const activeTab = getActiveTab(project.id);
            const selectedStage = getSelectedStage(project.id, project.pipelineStages);
            const activeStageIdx = selectedStageIndexByProject[project.id] ?? 0;

            return (
              <article
                key={project.id}
                id={project.id}
                className="rounded-xl border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface shadow-sm overflow-hidden transition-all duration-150"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    
                    {/* Left: Thumbnail & System Role */}
                    <div className="relative w-full lg:w-64 h-40 rounded-lg overflow-hidden border border-paper-border dark:border-slate-border bg-paper-subtle dark:bg-slate-canvas shrink-0">
                      <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                        <span className="text-[11px] font-mono text-white truncate font-medium">
                          {project.systemRole}
                        </span>
                      </div>
                    </div>

                    {/* Middle: Details */}
                    <div className="space-y-2.5 flex-1 min-w-0">
                      
                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase text-accent-teal dark:text-teal-300 bg-accent-teal/10 dark:bg-teal-400/10 border border-accent-teal/20 dark:border-teal-400/20 font-semibold">
                          {project.status === 'live' ? 'Live System' : 'Repository Ready'}
                        </span>

                        {project.pinned && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-600 dark:text-slate-300 border border-paper-border dark:border-slate-border">
                            Pinned Repo
                          </span>
                        )}

                        {project.stars !== undefined && project.stars > 0 && (
                          <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-accent-amber/10 dark:bg-amber-400/10 text-accent-amber dark:text-amber-300 border border-accent-amber/20 dark:border-amber-400/20 flex items-center gap-1 font-semibold">
                            <Star className="w-3 h-3 fill-current" />
                            <span>{project.stars} stars</span>
                          </span>
                        )}

                        {project.forks !== undefined && project.forks > 0 && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-600 dark:text-slate-300 border border-paper-border dark:border-slate-border flex items-center gap-1">
                            <span>{project.forks} forks</span>
                          </span>
                        )}
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-slate-700 dark:text-slate-200 mt-0.5 font-medium">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-ink-graphite dark:text-slate-100 font-sans leading-relaxed max-w-3xl">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded bg-paper-subtle dark:bg-slate-canvas border border-paper-border dark:border-slate-border text-[11px] font-mono text-slate-800 dark:text-slate-200 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Right: Actions */}
                    <div className="flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-3 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-paper-border dark:border-slate-border">
                      <div className="flex items-center gap-2">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="min-h-[36px] px-2.5 py-1.5 rounded-md border border-paper-border dark:border-slate-border text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-ink dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 hover:bg-paper-subtle dark:hover:bg-slate-800/40 transition-colors flex items-center gap-1.5 font-normal"
                        >
                          <Github className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                          <span aria-hidden="true">Code</span>
                          <span className="sr-only">: {project.title} on GitHub</span>
                        </a>

                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noreferrer"
                            className="min-h-[36px] px-2.5 py-1.5 rounded-md border border-paper-border dark:border-slate-border text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-ink dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 hover:bg-paper-subtle dark:hover:bg-slate-800/40 transition-colors flex items-center gap-1.5 font-normal"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                            <span>Live</span>
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => toggleExpand(project.id)}
                        aria-expanded={isExpanded}
                        className="min-h-[44px] text-xs font-mono text-accent-teal dark:text-teal-300 hover:underline flex items-center gap-1 self-end lg:self-auto font-medium"
                      >
                        <span>{isExpanded ? 'Hide case notes' : 'Inspect case notes'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                    </div>

                  </div>
                </div>

                {/* Expanded Inspector Drawer */}
                {isExpanded && (
                  <div className="border-t border-paper-border dark:border-slate-border bg-paper-subtle dark:bg-slate-canvas p-5 sm:p-7 space-y-6">
                    {/* Drawer Header Tabs */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-paper-border dark:border-slate-border">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveTab(project.id, 'pipeline')}
                          className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                            activeTab === 'pipeline'
                              ? 'bg-ink dark:bg-white text-paper-canvas dark:text-slate-canvas font-semibold'
                              : 'bg-paper-card dark:bg-slate-surface text-slate-700 dark:text-slate-200 border border-paper-border dark:border-slate-border'
                          }`}
                        >
                          Pipeline Stages
                        </button>

                        <button
                          onClick={() => setActiveTab(project.id, 'decisions')}
                          className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                            activeTab === 'decisions'
                              ? 'bg-ink dark:bg-white text-paper-canvas dark:text-slate-canvas font-semibold'
                              : 'bg-paper-card dark:bg-slate-surface text-slate-700 dark:text-slate-200 border border-paper-border dark:border-slate-border'
                          }`}
                        >
                          Decisions &amp; Constraints
                        </button>

                        <button
                          onClick={() => setActiveTab(project.id, 'stack')}
                          className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                            activeTab === 'stack'
                              ? 'bg-ink dark:bg-white text-paper-canvas dark:text-slate-canvas font-semibold'
                              : 'bg-paper-card dark:bg-slate-surface text-slate-700 dark:text-slate-200 border border-paper-border dark:border-slate-border'
                          }`}
                        >
                          Architecture Highlights
                        </button>
                      </div>

                      {project.metrics && (
                        <div className="text-[11px] font-mono text-slate-600 dark:text-slate-300 font-medium">
                          {project.metrics}
                        </div>
                      )}
                    </div>

                    {/* Tab 1: Pipeline Flow */}
                    {activeTab === 'pipeline' && (
                      <div className="space-y-4">
                        {project.pipelineStages && project.pipelineStages.length > 0 && (
                          <div className="space-y-3">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300 font-medium block">
                              Architecture Pipeline Stages (Click to inspect)
                            </span>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                              {project.pipelineStages.map((stage, idx) => {
                                const isStageSelected = activeStageIdx === idx;
                                return (
                                  <div
                                    key={stage.step}
                                    onClick={() => setSelectedStage(project.id, idx)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setSelectedStage(project.id, idx);
                                      }
                                    }}
                                    className={`p-3 rounded-lg border text-left cursor-pointer transition-colors min-h-[44px] ${
                                      isStageSelected
                                        ? 'border-accent-teal dark:border-teal-400 bg-accent-teal/10 dark:bg-teal-400/10'
                                        : 'border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface'
                                    }`}
                                  >
                                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-600 dark:text-slate-300 mb-1">
                                      <span className="font-bold text-accent-teal dark:text-teal-300">STAGE {stage.step}</span>
                                      {idx < (project.pipelineStages?.length || 0) - 1 && (
                                        <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-400 hidden lg:block" />
                                      )}
                                    </div>
                                    <h5 className="font-serif font-medium text-xs sm:text-sm text-ink dark:text-white truncate">
                                      {stage.name}
                                    </h5>
                                    <p className="text-[11px] font-mono text-slate-600 dark:text-slate-300 truncate mt-0.5">
                                      {stage.tech}
                                    </p>
                                  </div>
                                );
                              })}
                            </div>

                            {selectedStage && (
                              <div className="p-4 rounded-lg border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-xs sm:text-sm font-sans text-ink-graphite dark:text-slate-100">
                                <span className="font-mono text-xs text-accent-teal dark:text-teal-300 font-semibold block mb-1.5">
                                  Stage {selectedStage.step}: {selectedStage.name} ({selectedStage.role})
                                </span>
                                <p className="leading-relaxed">
                                  {selectedStage.details}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tab 2: Decisions & Constraints */}
                    {activeTab === 'decisions' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
                        <div className="p-4 rounded-lg border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface space-y-2">
                          <span className="font-mono text-xs uppercase tracking-wider text-accent-amber dark:text-amber-300 font-semibold block">
                            Architecture Decision &amp; Rationale
                          </span>
                          <p className="text-ink-graphite dark:text-slate-100 leading-relaxed">
                            {project.decisions || 'Architectural decisions documented in repository.'}
                          </p>
                        </div>

                        <div className="p-4 rounded-lg border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface space-y-2">
                          <span className="font-mono text-xs uppercase tracking-wider text-accent-teal dark:text-teal-300 font-semibold block">
                            Key Engineering Constraint
                          </span>
                          <p className="text-ink-graphite dark:text-slate-100 leading-relaxed">
                            {project.constraints || 'Engineering constraints documented in repository.'}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Highlights */}
                    {activeTab === 'stack' && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm font-sans text-ink-graphite dark:text-slate-100">
                        {project.architectureHighlights.map((hl, idx) => (
                          <li
                            key={idx}
                            className="p-3 rounded-lg border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface flex items-start gap-2.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-teal dark:bg-teal-400 mt-2 shrink-0" />
                            <span className="leading-relaxed">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
