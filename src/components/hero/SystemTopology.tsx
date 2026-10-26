import React, { useState } from 'react';
import { SYSTEM_NODES, SYSTEM_FLOWS } from '../../data/topology';
import { PROJECTS } from '../../data/projects';
import { SystemNode, Project } from '../../types';
import {
  Server,
  Shield,
  Monitor,
  Smartphone,
  Volume2,
  Cpu,
  Database,
  Layers,
  ArrowRight,
  ExternalLink,
  Code2,
  CheckCircle2,
  Network,
} from 'lucide-react';

export const SystemTopology: React.FC = () => {
  const [selectedFlowId, setSelectedFlowId] = useState<string>(SYSTEM_FLOWS[0]!.id);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const activeFlow = SYSTEM_FLOWS.find((f) => f.id === selectedFlowId) || SYSTEM_FLOWS[0]!;
  const relatedProject: Project | undefined = PROJECTS.find((p) => p.id === activeFlow.relatedProjectId);

  // Ordered list of nodes traversed in this flow
  const flowNodes: SystemNode[] = activeFlow.nodesTraversed
    .map((id) => SYSTEM_NODES.find((n) => n.id === id))
    .filter((n): n is SystemNode => Boolean(n));

  const activeNode = selectedNodeId
    ? SYSTEM_NODES.find((n) => n.id === selectedNodeId) || flowNodes[0]!
    : flowNodes[0]!;

  const getNodeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-4 h-4" aria-hidden="true" />;
      case 'Smartphone':
        return <Smartphone className="w-4 h-4" aria-hidden="true" />;
      case 'Shield':
        return <Shield className="w-4 h-4" aria-hidden="true" />;
      case 'Radio':
        return <Server className="w-4 h-4" aria-hidden="true" />;
      case 'Zap':
        return <Code2 className="w-4 h-4" aria-hidden="true" />;
      case 'Volume2':
        return <Volume2 className="w-4 h-4" aria-hidden="true" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" aria-hidden="true" />;
      case 'Database':
        return <Database className="w-4 h-4" aria-hidden="true" />;
      default:
        return <Layers className="w-4 h-4" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="architecture"
      aria-label="Systems Architecture Walkthrough"
      className="py-16 md:py-24 border-b border-paper-border dark:border-slate-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-ink-graphite dark:text-slate-200 text-xs font-mono mb-3">
            <Network className="w-3.5 h-3.5 text-accent-teal dark:text-teal-400" />
            <span className="text-accent-amber dark:text-amber-300 uppercase tracking-wider font-semibold">
              Architecture Walkthrough
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-normal text-ink dark:text-white tracking-tight">
            How the Systems Work
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-graphite dark:text-slate-100 font-sans leading-relaxed">
            Inspect how real requests traverse client interfaces, API controllers, cloud workers, and storage buffers across projects.
          </p>
        </div>

        <div className="p-5 sm:p-7 rounded-xl border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface shadow-sm">
          
          {/* System Selector Tabs */}
          <div className="mb-6">
            <label htmlFor="system-flow-selector" className="sr-only">
              Select system pipeline
            </label>
            
            {/* Mobile dropdown selector */}
            <div className="sm:hidden mb-3">
              <select
                id="system-flow-selector"
                value={selectedFlowId}
                onChange={(e) => {
                  setSelectedFlowId(e.target.value);
                  setSelectedNodeId(null);
                }}
                className="w-full px-3 py-2.5 rounded-lg border border-paper-border dark:border-slate-border bg-paper-subtle dark:bg-slate-canvas text-xs font-mono text-ink dark:text-white focus:ring-1 focus:ring-accent-teal focus:outline-none min-h-[44px]"
              >
                {SYSTEM_FLOWS.map((flow) => (
                  <option key={flow.id} value={flow.id}>
                    {flow.shortName || flow.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop & tablet pill tabs */}
            <div
              role="tablist"
              aria-label="System architecture pipelines"
              className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5"
            >
              {SYSTEM_FLOWS.map((flow) => {
                const isSelected = flow.id === activeFlow.id;
                return (
                  <button
                    key={flow.id}
                    role="tab"
                    id={`tab-${flow.id}`}
                    aria-selected={isSelected}
                    aria-controls={`panel-${flow.id}`}
                    onClick={() => {
                      setSelectedFlowId(flow.id);
                      setSelectedNodeId(null);
                    }}
                    className={`p-3 rounded-lg border text-left text-xs font-mono transition-colors min-h-[44px] flex flex-col justify-center ${
                      isSelected
                        ? 'border-accent-teal dark:border-teal-400 bg-accent-teal/10 dark:bg-teal-400/10 text-accent-teal dark:text-teal-300 font-semibold'
                        : 'border-paper-border dark:border-slate-border bg-paper-subtle dark:bg-slate-canvas text-ink-graphite dark:text-slate-200 hover:border-accent-teal/40 dark:hover:border-teal-400/40'
                    }`}
                  >
                    <span className="font-semibold truncate block">
                      {flow.shortName || flow.label}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-300 truncate block mt-0.5">
                      {flow.nodesTraversed.length} pipeline stages
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Pipeline Content */}
          <div
            id={`panel-${activeFlow.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeFlow.id}`}
            className="space-y-6"
          >
            {/* Overview Card */}
            <div className="p-4 rounded-lg border border-paper-border dark:border-slate-border bg-paper-subtle dark:bg-slate-canvas">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 mb-2 border-b border-paper-border dark:border-slate-border">
                <h3 className="text-xs sm:text-sm font-mono font-semibold text-ink dark:text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-teal dark:bg-teal-400" />
                  <span>{activeFlow.systemName || activeFlow.label}</span>
                </h3>
                {relatedProject && (
                  <a
                    href={`#${relatedProject.id}`}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-accent-teal dark:text-teal-300 hover:underline self-start sm:self-auto font-medium"
                  >
                    <span>Read case note</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <p className="text-xs sm:text-sm font-sans text-ink-graphite dark:text-slate-100 leading-relaxed">
                {activeFlow.description}
              </p>
            </div>

            {/* Stepper Grid - Column Wise Presentation */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300 font-semibold">
                  Execution Path (Step-by-Step)
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Select stage column to inspect
                </span>
              </div>

              {/* Responsive 4-column layout for stages (all in one row on desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 items-stretch">
                {flowNodes.map((node, idx) => {
                  const isSelected = activeNode.id === node.id;
                  const isLast = idx === flowNodes.length - 1;

                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setSelectedNodeId(node.id)}
                      aria-pressed={isSelected}
                      className={`h-full text-left p-4 rounded-xl border transition-all flex flex-col justify-between min-h-[140px] relative group ${
                        isSelected
                          ? 'border-accent-teal dark:border-teal-400 bg-accent-teal/10 dark:bg-teal-400/10 ring-2 ring-accent-teal/40 dark:ring-teal-400/40 shadow-sm'
                          : 'border-paper-border dark:border-slate-border bg-paper-canvas dark:bg-slate-canvas hover:border-accent-teal/40 dark:hover:border-teal-400/40'
                      }`}
                    >
                      {/* Column Top: Step Number Badge + Icon + Next Arrow */}
                      <div className="flex items-center justify-between w-full mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-7 h-7 rounded-lg font-mono text-xs flex items-center justify-center shrink-0 font-bold ${
                              isSelected
                                ? 'bg-accent-teal text-white dark:bg-teal-400 dark:text-slate-950'
                                : 'bg-paper-subtle dark:bg-slate-surface text-ink-graphite dark:text-slate-200 border border-paper-border dark:border-slate-border'
                            }`}
                          >
                            0{idx + 1}
                          </span>
                          <span
                            className={`p-1 rounded-md ${
                              isSelected
                                ? 'text-accent-teal dark:text-teal-300'
                                : 'text-slate-500 dark:text-slate-400'
                            }`}
                          >
                            {getNodeIcon(node.icon)}
                          </span>
                        </div>

                        <div className="flex items-center">
                          {isSelected ? (
                            <CheckCircle2 className="w-4 h-4 text-accent-teal dark:text-teal-400 shrink-0" />
                          ) : !isLast ? (
                            <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 hidden lg:block shrink-0" />
                          ) : null}
                        </div>
                      </div>

                      {/* Column Middle: Layer, Name & Subtitle */}
                      <div className="space-y-1 my-auto">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300 block font-medium">
                          {node.layer}
                        </span>
                        <h4 className="font-serif font-medium text-sm text-ink dark:text-white leading-snug">
                          {node.name}
                        </h4>
                        <p className="text-[11px] font-mono text-slate-600 dark:text-slate-300 leading-normal line-clamp-2">
                          {node.subtitle}
                        </p>
                      </div>

                      {/* Column Bottom: Stage indicator */}
                      <div className="pt-3 mt-3 border-t border-paper-border/60 dark:border-slate-border/60 flex items-center justify-between text-[10px] font-mono">
                        <span className={isSelected ? 'text-accent-teal dark:text-teal-300 font-semibold' : 'text-slate-500 dark:text-slate-400'}>
                          {isSelected ? 'Active Selection' : 'Click to inspect'}
                        </span>
                        <span className="text-slate-400 dark:text-slate-500">Stage {idx + 1}/{flowNodes.length}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Node Inspector & Architectural Trade-off */}
            <div className="p-4 rounded-lg border border-accent-teal/30 dark:border-teal-400/30 bg-paper-subtle dark:bg-slate-canvas text-xs space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-paper-border dark:border-slate-border">
                <div className="font-mono text-xs text-accent-teal dark:text-teal-300 font-semibold flex items-center gap-1.5">
                  <span>Inspecting Node:</span>
                  <span className="text-ink dark:text-white font-bold">{activeNode.name}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-600 dark:text-slate-300 uppercase">
                  Layer: {activeNode.layer}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-sans text-ink-graphite dark:text-slate-100 leading-relaxed">
                {activeNode.description}
              </p>

              {activeFlow.tradeoff && (
                <div className="pt-2 border-t border-paper-border dark:border-slate-border text-xs font-mono text-ink-graphite dark:text-slate-200">
                  <span className="text-accent-amber dark:text-amber-300 font-semibold block mb-1">
                    Architectural Trade-off:
                  </span>
                  <span className="leading-relaxed block">{activeFlow.tradeoff}</span>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
