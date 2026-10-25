import { describe, it, expect } from 'vitest';
import { SYSTEM_NODES, SYSTEM_FLOWS } from '../data/topology';
import { PROJECTS } from '../data/projects';

describe('Signature Interaction: Topology Flow Engine', () => {
  it('defines valid distributed systems layers', () => {
    expect(SYSTEM_NODES.length).toBeGreaterThanOrEqual(5);
    const layers = new Set(SYSTEM_NODES.map((n) => n.layer));
    expect(layers.has('client')).toBe(true);
    expect(layers.has('edge')).toBe(true);
    expect(layers.has('gateway')).toBe(true);
    expect(layers.has('compute')).toBe(true);
    expect(layers.has('data-ai')).toBe(true);
  });

  it('ensures each simulation flow traverses valid nodes and links to existing projects', () => {
    expect(SYSTEM_FLOWS.length).toBeGreaterThanOrEqual(4);
    SYSTEM_FLOWS.forEach((flow) => {
      expect(flow.nodesTraversed.length).toBeGreaterThanOrEqual(3);
      flow.nodesTraversed.forEach((nodeId) => {
        expect(SYSTEM_NODES.some((n) => n.id === nodeId)).toBe(true);
      });

      const linkedProject = PROJECTS.find((p) => p.id === flow.relatedProjectId);
      expect(linkedProject).toBeDefined();
    });
  });
});
