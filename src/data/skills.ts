import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Backend & Systems',
    description: 'Scalable services, REST APIs, WebSocket engines, and data stores.',
    items: [
      { name: 'Java / Spring Boot', level: 'Core', iconName: 'Coffee', usedIn: ['Enterprise Backend', 'speakit', 'Cloud APIs'] },
      { name: 'Node.js (APIs & Microservices)', level: 'Core', iconName: 'Server', usedIn: ['code-editor', 'speakit'] },
      { name: 'Socket.io / WebSockets', level: 'Advanced', iconName: 'Radio', usedIn: ['code-editor'] },
      { name: 'PostgreSQL / MySQL', level: 'Core', iconName: 'Database', usedIn: ['Relational Data', 'Academic Systems', 'Cloud Apps'] },
      { name: 'REST API Design', level: 'Core', iconName: 'Globe', usedIn: ['speakit', 'code-editor'] },
    ],
  },
  {
    name: 'Cloud, DevOps & Edge',
    description: 'Infrastructure orchestration, automated deployment, and distributed edge.',
    items: [
      { name: 'AWS (EC2, S3, IAM, ELB, VPC, RDS)', level: 'Core', iconName: 'Cloud', usedIn: ['Cloud Infrastructure', 'speakit'] },
      { name: 'AWS Polly (Neural Voice)', level: 'Advanced', iconName: 'Mic', usedIn: ['speakit'] },
      { name: 'Docker & Containers', level: 'Core', iconName: 'Box', usedIn: ['Containerization', 'Microservices'] },
      { name: 'Linux / Bash Scripting', level: 'Core', iconName: 'Terminal', usedIn: ['Server Management', 'CI/CD'] },
      { name: 'Git & GitHub Actions', level: 'Core', iconName: 'GitBranch', usedIn: ['All Projects', 'Version Control'] },
      { name: 'Cloudflare / Edge CDN', level: 'Exploring', iconName: 'Shield', usedIn: ['DNS, Caching & Edge'] },
    ],
  },
  {
    name: 'Frontend & Mobile Engineering',
    description: 'Modern, reactive, accessible interfaces with deterministic state across web and iOS.',
    items: [
      { name: 'Swift / iOS (SwiftUI)', level: 'Core', iconName: 'Smartphone', usedIn: ['speakit'] },
      { name: 'TypeScript', level: 'Core', iconName: 'FileCode', usedIn: ['code-editor', 'Portfolio V2'] },
      { name: 'JavaScript (ESNext)', level: 'Core', iconName: 'Code2', usedIn: ['code-editor', 'speakit'] },
      { name: 'Tailwind CSS & Modern UI', level: 'Core', iconName: 'Palette', usedIn: ['Portfolio V2', 'code-editor'] },
    ],
  },
  {
    name: 'Data Science & AI Transition',
    description: 'Statistical modeling, analytics pipelines, and emerging GenAI integration.',
    items: [
      { name: 'Python (Pandas, NumPy)', level: 'Core', iconName: 'FileSpreadsheet', usedIn: ['olympic-analysis', 'amazon-scraper'] },
      { name: 'Streamlit', level: 'Core', iconName: 'BarChart2', usedIn: ['olympic-analysis'] },
      { name: 'Tableau BI', level: 'Core', iconName: 'PieChart', usedIn: ['covid-tracker'] },
      { name: 'Web Scraping (BeautifulSoup)', level: 'Advanced', iconName: 'Search', usedIn: ['amazon-scraper'] },
      { name: 'AI / LLM Orchestration', level: 'Exploring', iconName: 'Cpu', usedIn: ['RAG Explorations', 'GenAI Workflows'] },
      { name: 'Mathematical Modeling', level: 'Core', iconName: 'Activity', usedIn: ['B.Sc Mathematics Hons', 'Algorithm Design'] },
    ],
  },
];
