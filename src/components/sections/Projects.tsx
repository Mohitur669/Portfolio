import React, { useState } from 'react';
import { PROJECTS } from '../../data/projects';
import { Project, ArchitectureStage } from '../../types';
import {
  ExternalLink,
  Github,
  Layers,
  CheckCircle2,
  Filter,
  ChevronDown,
  ChevronUp,
  Cpu,
  Star,
  GitFork,
  Pin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Server,
  Zap,
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
      aria-label="Verified Technical Projects and Architecture Studies"
      className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-2 border border-cyan-500/20">
              <Layers className="w-3.5 h-3.5" />
              <span>Production Code &amp; Verified Systems</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
              Verified Technical Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Authentic software engineered for production and open source. Click any project card to inspect its real architectural pipelines, constraints, and verified outcomes.
            </p>
          </div>

          {/* Category Filter: Compact Dropdown on Mobile (< md), Pill Row on Desktop (>= md) */}
          <div className="md:hidden relative w-full max-w-full">
            <div className="relative flex items-center w-full max-w-full">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none flex items-center">
                <Filter className="w-3.5 h-3.5" />
              </span>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                aria-label="Filter projects by category"
                className="w-full max-w-full appearance-none pl-9 pr-9 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 text-xs font-mono shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 truncate"
              >
                <option value="all">All Projects (5)</option>
                <option value="cloud-backend">Cloud &amp; Backend</option>
                <option value="fullstack">Full-Stack</option>
                <option value="data-ai">Data &amp; Analytics</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Desktop Category Filter Pills */}
          <div className="hidden md:flex shrink-0 items-center gap-1.5 p-1 rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md overflow-x-auto no-scrollbar text-xs font-mono shadow-sm">
            <span className="px-2 text-slate-400 flex items-center gap-1">
              <Filter className="w-3 h-3" />
            </span>
            {[
              { id: 'all', label: 'All Projects (5)' },
              { id: 'cloud-backend', label: 'Cloud & Backend' },
              { id: 'fullstack', label: 'Full-Stack' },
              { id: 'data-ai', label: 'Data & Analytics' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  filter === tab.id
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {filteredProjects.map((project: Project) => {
            const isExpanded = expandedProjectId === project.id;
            const activeTab = getActiveTab(project.id);
            const activeStage = getSelectedStage(project.id, project.pipelineStages);
            const activeStageIdx = selectedStageIndexByProject[project.id] ?? 0;

            return (
              <article
                key={project.id}
                onClick={() => toggleExpand(project.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(project.id);
                  }
                }}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden backdrop-blur-xl cursor-pointer ${
                  project.flagship
                    ? isExpanded
                      ? 'border-cyan-400/80 bg-white dark:bg-slate-900 shadow-2xl ring-2 ring-cyan-500/30'
                      : 'border-cyan-500/40 bg-white dark:bg-slate-900 shadow-xl hover:border-cyan-400'
                    : isExpanded
                    ? 'border-cyan-500/50 bg-white dark:bg-slate-900 shadow-xl ring-1 ring-cyan-500/20'
                    : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 bg-white/90 dark:bg-slate-900/90 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Main Card Header Summary */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row gap-6 lg:items-start justify-between">
                    
                    {/* Thumbnail Screenshot */}
                    <div className="w-full lg:w-64 shrink-0 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-950 aspect-[16/10] relative group">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                        <span className="text-[11px] font-mono text-white/90 truncate font-medium">
                          {project.systemRole}
                        </span>
                      </div>
                    </div>

                    {/* Middle: Details & Meta */}
                    <div className="space-y-3 flex-1 min-w-0">
                      
                      {/* Status Badges Row */}
                      <div className="flex flex-wrap items-center gap-2">
                        {project.flagship && (
                          <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold shadow-glow flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                            <span>★ Flagship System</span>
                          </span>
                        )}

                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{project.status === 'live' ? 'LIVE IN PRODUCTION' : project.status.toUpperCase()}</span>
                        </span>

                        {project.pinned && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 flex items-center gap-1 font-semibold">
                            <Pin className="w-3 h-3" />
                            <span>Pinned Repo</span>
                          </span>
                        )}

                        {project.stars !== undefined && project.stars > 0 && (
                          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1 font-semibold">
                            <Star className="w-3 h-3 fill-amber-400" />
                            <span>{project.stars} Stars</span>
                          </span>
                        )}

                        {project.forks !== undefined && project.forks > 0 && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 flex items-center gap-1 font-semibold">
                            <GitFork className="w-3 h-3" />
                            <span>{project.forks} Forks</span>
                          </span>
                        )}
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Direct Actions & Expand Toggle */}
                    <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-white/5 shrink-0">
                      <div className="flex items-center gap-2">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 transition-colors shadow-sm"
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>

                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-white text-xs font-bold transition-all shadow-glow ${
                              project.flagship
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 ring-2 ring-cyan-400/50'
                                : 'bg-cyan-600 hover:bg-cyan-500'
                            }`}
                            aria-label={`Open live deployment for ${project.title}`}
                          >
                            <span>Visit</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold py-1">
                        <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Expanded Architectural Deep Dive */}
                {isExpanded && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="border-t border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-950/60 p-6 sm:p-8 space-y-6 cursor-default transition-all"
                  >
                    {/* Architectural Navigation Tabs */}
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 gap-4 flex-wrap">
                      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full pb-1">
                        <button
                          type="button"
                          onClick={() => setActiveTab(project.id, 'pipeline')}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                            activeTab === 'pipeline'
                              ? 'bg-cyan-600 text-white font-bold shadow-sm'
                              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 border border-slate-200 dark:border-white/10'
                          }`}
                        >
                          <Zap className="w-3.5 h-3.5" />
                          <span className="sm:hidden">Pipeline Flow</span>
                          <span className="hidden sm:inline">System Flow &amp; Pipeline</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setActiveTab(project.id, 'decisions')}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                            activeTab === 'decisions'
                              ? 'bg-cyan-600 text-white font-bold shadow-sm'
                              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 border border-slate-200 dark:border-white/10'
                          }`}
                        >
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span className="sm:hidden">Decisions &amp; Trade-offs</span>
                          <span className="hidden sm:inline">Engineering Rationale &amp; Trade-offs</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setActiveTab(project.id, 'stack')}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                            activeTab === 'stack'
                              ? 'bg-cyan-600 text-white font-bold shadow-sm'
                              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 border border-slate-200 dark:border-white/10'
                          }`}
                        >
                          <Server className="w-3.5 h-3.5" />
                          <span>Production Highlights</span>
                        </button>
                      </div>

                      {project.metrics && (
                        <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg shrink-0">
                          ⚡ {project.metrics}
                        </div>
                      )}
                    </div>

                    {/* Tab 1: System Pipeline Flow Diagram */}
                    {activeTab === 'pipeline' && (
                      <div className="space-y-6">
                        
                        {/* Interactive Visual Flow Stepper */}
                        {project.pipelineStages && project.pipelineStages.length > 0 && (
                          <div className="space-y-4">
                            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                              <span>Step-by-Step Architecture Pipeline</span>
                              <span className="text-[11px] text-cyan-600 dark:text-cyan-400 font-normal">
                                (Click any node to inspect data flow)
                              </span>
                            </div>

                            {/* Flow Stage Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
                                    className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                                      isStageSelected
                                        ? 'border-cyan-500 bg-cyan-500/10 dark:bg-cyan-950/40 shadow-sm ring-1 ring-cyan-500/30'
                                        : 'border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 hover:border-cyan-500/40'
                                    }`}
                                  >
                                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-1.5">
                                      <span className="font-bold text-cyan-600 dark:text-cyan-400">STAGE {stage.step}</span>
                                      {idx < (project.pipelineStages?.length || 0) - 1 && (
                                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden lg:block" />
                                      )}
                                    </div>
                                    <h5 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                                      {stage.name}
                                    </h5>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                                      {stage.role}
                                    </p>
                                    <span className="inline-block mt-2 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-700 dark:text-slate-300 truncate max-w-full">
                                      {stage.tech}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>

                            {/* Active Stage Inspection Callout */}
                            {activeStage && (
                              <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
                                <div className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-2">
                                  <span>STAGE {activeStage.step}: {activeStage.name} — {activeStage.role}</span>
                                  <span className="text-slate-400">•</span>
                                  <span className="text-slate-500 dark:text-slate-400">{activeStage.tech}</span>
                                </div>
                                <p className="leading-relaxed">
                                  {activeStage.details}
                                </p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Bullet Highlights */}
                        <div className="space-y-3 pt-2">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1.5">
                            <Cpu className="w-4 h-4" /> Core Architecture Highlights
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            {project.architectureHighlights.map((hl, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0"></span>
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    )}

                    {/* Tab 2: Engineering Rationale & Decisions */}
                    {activeTab === 'decisions' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.constraints && (
                          <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs sm:text-sm space-y-2">
                            <div className="text-amber-700 dark:text-amber-400 font-mono text-xs uppercase font-bold flex items-center gap-1.5">
                              <ShieldCheck className="w-4 h-4" />
                              <span>Engineering Constraint</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                              {project.constraints}
                            </p>
                          </div>
                        )}

                        {project.decisions && (
                          <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 text-xs sm:text-sm space-y-2">
                            <div className="text-cyan-700 dark:text-cyan-400 font-mono text-xs uppercase font-bold flex items-center gap-1.5">
                              <Cpu className="w-4 h-4" />
                              <span>Key Architecture Decision &amp; Trade-off</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                              {project.decisions}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tab 3: Stack & Verified Outcomes */}
                    {activeTab === 'stack' && (
                      <div className="space-y-4">
                        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 space-y-3">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
                            Full Technology Ecosystem
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-800 dark:text-slate-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition-opacity"
                          >
                            <Github className="w-4 h-4" />
                            <span>View Repository on GitHub</span>
                          </a>

                          {project.links.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 text-white text-xs font-semibold hover:bg-cyan-500 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Open Live Deployment</span>
                            </a>
                          )}
                        </div>
                      </div>
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
