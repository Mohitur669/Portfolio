import React, { useState } from 'react';
import { SYSTEM_NODES, SYSTEM_FLOWS } from '../../data/topology';
import { PROJECTS } from '../../data/projects';
import { SystemNode, SystemPacketFlow, Project } from '../../types';
import { useMotion } from '../../context/MotionContext';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
  Github,
  Zap,
  Server,
  Shield,
  Monitor,
  Volume2,
  Cpu,
  Database,
  X,
  Layers,
} from 'lucide-react';

export const SystemTopology: React.FC = () => {
  const { reducedMotion } = useMotion();
  const [activeFlow, setActiveFlow] = useState<SystemPacketFlow | null>(null);
  const [activeNodeId, setActiveNodeId] = useState<string>('node-compute-polly');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationStep, setSimulationStep] = useState<number>(-1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(PROJECTS[0] || null);

  const activeNode = SYSTEM_NODES.find((n) => n.id === activeNodeId) || SYSTEM_NODES[0]!;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      case 'Radio':
        return <Server className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Volume2':
        return <Volume2 className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const runSimulation = (flow: SystemPacketFlow) => {
    setActiveFlow(flow);
    setIsSimulating(true);
    setSimulationStep(0);
    setActiveNodeId(flow.nodesTraversed[0] ?? 'node-client');

    if (reducedMotion) {
      // Instant execution without delay
      const lastIndex = flow.nodesTraversed.length - 1;
      setSimulationStep(lastIndex);
      setActiveNodeId(flow.nodesTraversed[lastIndex] ?? 'node-client');
      setIsSimulating(false);
      const proj = PROJECTS.find((p) => p.id === flow.relatedProjectId);
      if (proj) setSelectedProject(proj);
      return;
    }

    // Step-by-step animation
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep += 1;
      if (currentStep < flow.nodesTraversed.length) {
        setSimulationStep(currentStep);
        const nextNode = flow.nodesTraversed[currentStep];
        if (nextNode) setActiveNodeId(nextNode);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        const proj = PROJECTS.find((p) => p.id === flow.relatedProjectId);
        if (proj) setSelectedProject(proj);
      }
    }, 600);
  };

  const handleSelectNode = (node: SystemNode) => {
    setActiveNodeId(node.id);
    if (node.projectIds.length > 0) {
      const proj = PROJECTS.find((p) => p.id === node.projectIds[0]);
      if (proj) setSelectedProject(proj);
    }
  };

  const resetFlow = () => {
    setActiveFlow(null);
    setIsSimulating(false);
    setSimulationStep(-1);
    setActiveNodeId('node-compute-polly');
    setSelectedProject(PROJECTS[0] || null);
  };

  return (
    <section
      id="system"
      aria-label="Interactive Cloud Architecture Topology"
      className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Signature Interaction</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
              The Living Distributed System
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              An interactive visual map of how I design client layers, cloud gateways, WebSocket synchronization, and data pipelines. <strong>Select a simulation</strong> below to trace live packet flow.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {activeFlow && (
              <button
                onClick={resetFlow}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset View</span>
              </button>
            )}
          </div>
        </div>

        {/* Simulation Selector Bar */}
        <div className="mb-8 p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 backdrop-blur-md">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 font-semibold flex items-center gap-2">
            <Play className="w-3 h-3 text-cyan-500" />
            <span>Select a Systems Request Scenario:</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SYSTEM_FLOWS.map((flow) => {
              const isSelected = activeFlow?.id === flow.id;
              return (
                <button
                  key={flow.id}
                  onClick={() => runSimulation(flow)}
                  disabled={isSimulating}
                  className={`text-left p-3.5 rounded-xl border transition-all text-xs flex flex-col justify-between ${
                    isSelected
                      ? 'border-cyan-500 bg-cyan-500/10 text-cyan-900 dark:text-cyan-100 shadow-glow'
                      : 'border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300'
                  } ${isSimulating ? 'opacity-70 cursor-wait' : ''}`}
                >
                  <div className="flex items-center justify-between font-semibold mb-1">
                    <span>{flow.label}</span>
                    <Play className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400 fill-cyan-400' : 'text-slate-400'}`} />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {flow.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Topology Grid & Inspector Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: The Visual Topology Board */}
          <div className="lg:col-span-8 p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-obsidian-900/90 backdrop-blur-xl shadow-xl relative">
            
            {/* Live Packet Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-slate-700 dark:text-slate-300 font-semibold">
                  TOPOLOGY STATUS: {isSimulating ? 'PROCESSING PACKET FLOW' : 'INTERACTIVE / READY'}
                </span>
              </div>
              <span className="text-cyan-600 dark:text-cyan-400">
                {activeFlow ? `ACTIVE: ${activeFlow.label}` : 'CLICK ANY NODE TO INSPECT'}
              </span>
            </div>

            {/* Architecture Node Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative">
              {SYSTEM_NODES.map((node) => {
                const isSelected = activeNodeId === node.id;
                const inCurrentFlow = activeFlow?.nodesTraversed.includes(node.id);
                const stepIndex = activeFlow?.nodesTraversed.indexOf(node.id) ?? -1;
                const isCurrentlyActiveStep = stepIndex === simulationStep;

                return (
                  <button
                    key={node.id}
                    onClick={() => handleSelectNode(node)}
                    aria-pressed={isSelected}
                    className={`relative p-4 rounded-2xl border text-left transition-all ${
                      isCurrentlyActiveStep
                        ? 'border-cyan-400 bg-cyan-500/20 shadow-glow scale-[1.03] ring-2 ring-cyan-400'
                        : isSelected
                        ? 'border-cyan-500 bg-cyan-500/10 shadow-md ring-1 ring-cyan-500/40'
                        : inCurrentFlow
                        ? 'border-emerald-500/50 bg-emerald-500/5 text-slate-800 dark:text-slate-200'
                        : 'border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/80 hover:border-slate-400 dark:hover:border-white/30 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {/* Step Badge if in flow */}
                    {inCurrentFlow && stepIndex !== -1 && (
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan-500 text-white font-mono text-xs flex items-center justify-center font-bold shadow-md">
                        {stepIndex + 1}
                      </span>
                    )}

                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-xl ${
                        isSelected || isCurrentlyActiveStep
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-100 dark:bg-white/10 text-cyan-600 dark:text-cyan-400'
                      }`}>
                        {getIcon(node.icon)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                          {node.layer}
                        </span>
                        <h3 className="text-sm font-bold font-display text-slate-900 dark:text-white leading-tight">
                          {node.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-1 mb-2">
                      {node.subtitle}
                    </p>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2">
                      {node.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Connection Flow Visual Guide */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 gap-2">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span> Client ➔ Edge ➔ Gateway ➔ Compute ➔ Persistence
              </span>
              <span>WCAG 2.2 AA Compliant Full Keyboard Navigation</span>
            </div>

          </div>

          {/* Right: Architecture Inspector & Linked Project */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Active Node Detail Card */}
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-white/10">
                <span className="text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-semibold">
                  Node Telemetry
                </span>
                <span className="text-xs font-mono text-emerald-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Healthy
                </span>
              </div>

              <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white mb-1">
                {activeNode.name}
              </h3>
              <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-3">
                {activeNode.subtitle}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activeNode.description}
              </p>

              {/* Linked Projects for this Node */}
              {activeNode.projectIds.length > 0 && (
                <div className="pt-3 border-t border-slate-200 dark:border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                    Employed in Real Projects:
                  </span>
                  <div className="space-y-2">
                    {activeNode.projectIds.map((pid) => {
                      const proj = PROJECTS.find((p) => p.id === pid);
                      if (!proj) return null;
                      return (
                        <button
                          key={pid}
                          onClick={() => setSelectedProject(proj)}
                          className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/30 hover:border-cyan-500/50 transition-colors flex items-center justify-between text-xs"
                        >
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {proj.title}
                          </span>
                          <span className="font-mono text-cyan-500 flex items-center gap-1 text-[11px]">
                            Inspect <ExternalLink className="w-3 h-3" />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Selected Project Quick Drawer */}
            {selectedProject && (
              <div className="p-6 rounded-3xl border border-cyan-500/40 bg-cyan-500/5 dark:bg-cyan-950/20 backdrop-blur-xl shadow-glow relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white"
                  aria-label="Close project preview"
                >
                  <X className="w-4 h-4" />
                </button>

                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold block mb-1">
                  Verified Real Project
                </span>
                <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-1">
                  {selectedProject.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                  {selectedProject.description}
                </p>

                {selectedProject.metrics && (
                  <div className="p-2.5 rounded-xl bg-black/30 border border-white/5 font-mono text-xs text-emerald-400 mb-4">
                    ⚡ {selectedProject.metrics}
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                  {selectedProject.links.live && (
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-cyan-600 text-white text-xs font-semibold hover:bg-cyan-500 transition-colors"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
