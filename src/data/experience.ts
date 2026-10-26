import { ExperienceItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'kiit-mca',
    period: '08/2022 — 08/2024',
    role: 'Master of Computer Applications (MCA)',
    organization: 'Kalinga Institute of Industrial Technology (KIIT)',
    location: 'Bhubaneswar, Odisha, India',
    type: 'education',
    scoreOrResult: 'CGPA: 9.04 / 10',
    highlights: [
      'Advanced coursework in Distributed Systems, Data Structures & Algorithms, Cloud Computing, and Database Management.',
      'Built and deployed full-stack cloud projects including Sync Code (WebSockets) and SpeakIT (AWS Polly + Spring Boot).',
      'Secured 3rd Position in the Interdepartmental Technical Debate Competition.',
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'AWS', 'Docker', 'SQL', 'Algorithms'],
  },
  {
    id: 'malda-bsc',
    period: '08/2019 — 08/2022',
    role: 'B.Sc. Mathematics (Honours)',
    organization: 'Malda College',
    location: 'Malda, West Bengal, India',
    type: 'education',
    scoreOrResult: 'CGPA: 8.92 / 10',
    highlights: [
      'Proof-based curriculum in Linear Algebra, Real Analysis, Discrete Mathematics, Probability & Abstract Algebra.',
      'Formed the foundational logical reasoning and invariant analysis that informs how I design and debug software.',
    ],
    technologies: ['Pure Mathematics', 'Linear Algebra', 'Real Analysis', 'Probability', 'Python'],
  },
  {
    id: 'malda-hs',
    period: '07/2018 — 05/2019',
    role: 'Higher Secondary (Class XII)',
    organization: 'Malda Zilla School',
    location: 'Malda, West Bengal, India',
    type: 'education',
    scoreOrResult: 'Score: 83.0%',
    highlights: ['Focus in Pure Sciences (Physics, Chemistry, Mathematics).'],
  },
  {
    id: 'rkm-secondary',
    period: '02/2016 — 05/2017',
    role: 'Secondary School (Class X)',
    organization: 'Ramakrishna Mission Vivekananda Vidyamandir',
    location: 'Malda, West Bengal, India',
    type: 'education',
    scoreOrResult: 'Score: 86.57%',
    highlights: ['Secondary education with focus on science and mathematics.'],
  },
];

export const CERTIFICATIONS = [
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google Career Certificates',
    skills: ['Data Analysis', 'SQL', 'R / Python', 'Spreadsheets', 'Data Modeling'],
  },
];