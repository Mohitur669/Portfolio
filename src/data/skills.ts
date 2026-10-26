import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Languages / Core',
    description: 'Foundational programming languages, relational schemas, computational complexity, and object modeling.',
    items: [
      { name: 'Java', level: 'Core', iconName: 'Coffee', usedIn: ['speakit', 'Enterprise Services', 'Backend APIs'] },
      { name: 'SQL (PostgreSQL)', level: 'Core', iconName: 'Database', usedIn: ['Relational Data', 'ACID Transactions', 'Complex Queries'] },
      { name: 'Data Structures & Algorithms', level: 'Core', iconName: 'Binary', usedIn: ['Algorithm Invariants', 'Optimal Complexity', 'Problem Solving'] },
      { name: 'Object-Oriented Programming (OOP)', level: 'Core', iconName: 'Box', usedIn: ['SOLID Principles', 'Design Patterns', 'Domain Modeling'] },
    ],
  },
  {
    name: 'Frameworks / Backend',
    description: 'Enterprise Java ecosystem, microservices design, authorization pipelines, and ORM persistence.',
    items: [
      { name: 'Spring Boot 3', level: 'Core', iconName: 'Server', usedIn: ['speakit', 'Microservices', 'REST Gateways'] },
      { name: 'Spring MVC', level: 'Core', iconName: 'Layers', usedIn: ['Dispatcher Servlets', 'REST Controllers', 'Model Binding'] },
      { name: 'Spring Security', level: 'Core', iconName: 'Shield', usedIn: ['JWT Validation', 'Role-Based Authorization', 'CORS/CSRF'] },
      { name: 'Hibernate ORM', level: 'Core', iconName: 'Database', usedIn: ['JPA Entities', 'Relational Mapping', 'Query Caching'] },
      { name: 'Microservices Architecture', level: 'Core', iconName: 'Network', usedIn: ['Distributed Systems', 'Service Discovery', 'Resilient Gateways'] },
    ],
  },
  {
    name: 'Cloud / DevOps',
    description: 'Cloud infrastructure, containerization, build lifecycles, and deployment automation.',
    items: [
      { name: 'AWS EC2', level: 'Core', iconName: 'Server', usedIn: ['Compute Instances', 'Production Deployment', 'Linux Host'] },
      { name: 'AWS S3', level: 'Core', iconName: 'Database', usedIn: ['speakit', 'Audio Storage', 'Presigned URLs', 'Static Assets'] },
      { name: 'AWS Lambda', level: 'Core', iconName: 'Zap', usedIn: ['Serverless Functions', 'Event Triggers', 'Microservices'] },
      { name: 'AWS IAM', level: 'Core', iconName: 'Shield', usedIn: ['Access Policies', 'Role Delegation', 'Least Privilege'] },
      { name: 'AWS SNS', level: 'Core', iconName: 'Bell', usedIn: ['Pub/Sub Messaging', 'Event Fan-Out', 'Notification Topics'] },
      { name: 'Docker', level: 'Core', iconName: 'Box', usedIn: ['Containerization', 'Local Dev', 'Service Isolation'] },
      { name: 'Git', level: 'Core', iconName: 'GitBranch', usedIn: ['All Projects', 'Version Control', 'Semantic Releases'] },
      { name: 'CI/CD', level: 'Core', iconName: 'RefreshCw', usedIn: ['Automated Builds', 'Test Verification', 'Continuous Delivery'] },
      { name: 'Maven', level: 'Core', iconName: 'Package', usedIn: ['Build Automation', 'Dependency Trees', 'Plugin Lifecycles'] },
    ],
  },
  {
    name: 'APIs / Web',
    description: 'Stateless API protocols, schema contracts, and interactive endpoint documentation.',
    items: [
      { name: 'RESTful APIs', level: 'Core', iconName: 'Globe', usedIn: ['speakit', 'code-editor', 'HTTP Contracts'] },
      { name: 'Swagger/OpenAPI', level: 'Core', iconName: 'FileText', usedIn: ['Contract Specifications', 'API Testing', 'Interactive Docs'] },
      { name: 'WebSockets', level: 'Core', iconName: 'Zap', usedIn: ['Sync Code', 'Full-Duplex Comms', 'Sub-50ms Sync', 'Real-time Events'] },
      { name: 'JWT / OAuth2', level: 'Core', iconName: 'Shield', usedIn: ['Stateless Auth', 'Spring Security', 'Token Verification', 'Role-Based Access'] },
    ],
  },
  {
    name: 'AI / GenAI',
    description: 'Enterprise generative AI integration, foundation models, and speech/audio pipelines.',
    items: [
      { name: 'AWS Bedrock', level: 'Core', iconName: 'Cpu', usedIn: ['Foundation Models', 'Prompt Pipelines', 'Generative Workflows'] },
      { name: 'AWS Polly', level: 'Core', iconName: 'Mic', usedIn: ['speakit', 'Neural Voice Synthesis', 'Streaming Audio'] },
      { name: 'LLM API Integration', level: 'Core', iconName: 'Code2', usedIn: ['Prompt Pipelines', 'Streaming Completions', 'Agentic Workflows'] },
      { name: 'ElevenLabs', level: 'Core', iconName: 'Mic', usedIn: ['Neural Voice Synthesis', 'Streaming Audio Generation'] },
      { name: 'Sarvam AI', level: 'Advanced', iconName: 'Globe', usedIn: ['Indic Language Models', 'Multilingual Speech Processing'] },
    ],
  },
  {
    name: 'Tools / Practices',
    description: 'Engineering workflows, API verification tooling, and design token styling.',
    items: [
      { name: 'Postman', level: 'Core', iconName: 'Send', usedIn: ['API Testing', 'Collection Runs', 'Environment Assertion'] },
      { name: 'Tailwind CSS', level: 'Core', iconName: 'Palette', usedIn: ['Portfolio', 'Design Tokens', 'Accessibility Standards'] },
      { name: 'JUnit 5 & Mockito', level: 'Core', iconName: 'CheckCircle', usedIn: ['Unit Testing', 'Spring Boot Tests', 'Mocking', 'Assertion Verification'] },
      { name: 'Linux / Bash', level: 'Core', iconName: 'Terminal', usedIn: ['EC2 Shell', 'Server Administration', 'Automation Scripts', 'System Ops'] },
      { name: 'Agile / Scrum', level: 'Core', iconName: 'RefreshCw', usedIn: ['Sprint Cycles', 'Iterative Delivery', 'Cross-Functional Teamwork'] },
    ],
  },
];
