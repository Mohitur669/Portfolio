export interface ArchitectureStage {
  step: string;
  name: string;
  role: string;
  tech: string;
  details: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'cloud-backend' | 'fullstack' | 'data-ai' | 'frontend';
  featured: boolean;
  flagship?: boolean;
  pinned?: boolean;
  stars?: number;
  forks?: number;
  status: 'live' | 'production-ready' | 'in-progress' | 'archived';
  description: string;
  architectureHighlights: string[];
  pipelineStages?: ArchitectureStage[];
  metrics?: string;
  techStack: string[];
  systemRole: string; // Used in architecture inspection
  links: {
    github: string;
    live?: string;
  };
  image: string;
  constraints?: string;
  decisions?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  items: {
    name: string;
    level: 'Core' | 'Advanced' | 'Exploring';
    iconName: string;
    usedIn: string[]; // project IDs or roles
  }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'education' | 'engineering';
  scoreOrResult?: string;
  highlights: string[];
  technologies?: string[];
}

export interface SystemNode {
  id: string;
  name: string;
  layer: 'client' | 'edge' | 'gateway' | 'compute' | 'data-ai';
  subtitle: string;
  description: string;
  projectIds: string[];
  icon: string;
}

export interface SystemPacketFlow {
  id: string;
  label: string;
  shortName?: string;
  systemName?: string;
  description: string;
  tradeoff?: string;
  nodesTraversed: string[];
  relatedProjectId: string;
}
