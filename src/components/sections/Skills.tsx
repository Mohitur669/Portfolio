import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/skills';
import { Filter, ChevronDown, Layers } from 'lucide-react';

export const TECH_ICON_MAP: Record<string, string> = {
  // Languages / Core
  'Java': '/img/tech/java.svg',
  'SQL (PostgreSQL)': '/img/tech/postgresql.svg',
  'Data Structures & Algorithms': '/img/tech/dsa.svg',
  'Object-Oriented Programming (OOP)': '/img/tech/oop.svg',

  // Frameworks / Backend
  'Spring Boot 3': '/img/tech/spring.svg',
  'Spring MVC': '/img/tech/spring-mvc.svg',
  'Spring Security': '/img/tech/spring-security.svg',
  'Hibernate ORM': '/img/tech/hibernate.svg',
  'Microservices Architecture': '/img/tech/microservices.svg',

  // Cloud / DevOps
  'AWS (EC2, S3, Lambda, IAM, SNS)': '/img/tech/aws.svg',
  'AWS (EC2, S3, Lambda, IAM, SNS, CloudWatch, Polly, Bedrock)': '/img/tech/aws.svg',
  'AWS': '/img/tech/aws.svg',
  'AWS EC2': '/img/tech/aws-ec2.svg',
  'AWS S3': '/img/tech/aws-s3.svg',
  'AWS Lambda': '/img/tech/aws-lambda.svg',
  'AWS IAM': '/img/tech/aws-iam.svg',
  'AWS SNS': '/img/tech/aws-sns.svg',
  'AWS CloudWatch': '/img/tech/aws-cloudwatch.svg',
  'AWS Polly': '/img/tech/aws-polly.svg',
  'Docker': '/img/tech/docker.svg',
  'Git': '/img/tech/git.svg',
  'CI/CD': '/img/tech/cicd.svg',
  'Maven': '/img/tech/maven.svg',

  // APIs / Web
  'RESTful APIs': '/img/tech/rest-api.svg',
  'Swagger/OpenAPI': '/img/tech/swagger.svg',

  // AI / GenAI
  'AWS Bedrock': '/img/tech/bedrock.svg',
  'LLM API Integration': '/img/tech/llm.svg',
  'ElevenLabs': '/img/tech/elevenlabs.svg',
  'Sarvam AI': '/img/tech/sarvam.svg',

  // Tools / Practices
  'Postman': '/img/tech/postman.svg',
  'Tailwind CSS': '/img/tech/tailwind.svg',
};

export interface SelectedSkillContext {
  name: string;
  level: 'Core' | 'Advanced' | 'Exploring';
  iconName: string;
  usedIn: string[];
  category: string;
}

export const Skills: React.FC = () => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<SelectedSkillContext | null>(null);

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeCategoryFilter === 'all') return true;
    return cat.name.toLowerCase().includes(activeCategoryFilter.toLowerCase());
  });

  return (
    <section
      id="skills"
      aria-label="Technical Capabilities and Stack"
      className="py-16 md:py-24 border-b border-paper-border dark:border-slate-border relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-ink-graphite dark:text-slate-200 text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5 text-accent-teal dark:text-teal-400" />
              <span className="text-accent-amber dark:text-amber-300 uppercase tracking-wider font-semibold">
                Applied Context &amp; Tools
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-ink dark:text-white tracking-tight">
              Technologies &amp; Working Stack
            </h2>
            <p className="mt-2 text-sm sm:text-base text-ink-graphite dark:text-slate-100 font-sans leading-relaxed">
              Every tool in this stack is grounded in actual production and academic engineering—organized across core domains with dedicated architectural responsibilities.
            </p>
          </div>

          {/* Category Filter Dropdown */}
          <div className="w-full sm:w-72 lg:w-80 shrink-0">
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-500 dark:text-slate-400 pointer-events-none flex items-center">
                <Filter className="w-3.5 h-3.5" />
              </span>
              <select
                id="tech-stack-category-filter"
                value={activeCategoryFilter}
                onChange={(e) => {
                  setActiveCategoryFilter(e.target.value);
                  setSelectedSkill(null);
                }}
                aria-label="Filter tech stack by domain"
                className="w-full appearance-none pl-9 pr-9 py-2.5 rounded-lg border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-ink dark:text-slate-100 text-xs font-mono shadow-sm focus:outline-none focus:ring-1 focus:ring-accent-teal cursor-pointer min-h-[44px]"
              >
                <option value="all">All Domains ({SKILL_CATEGORIES.length})</option>
                {SKILL_CATEGORIES.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name} ({cat.items.length})
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 dark:text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Selected Skill Detail Note */}
        {selectedSkill && (
          <div className="p-4 rounded-xl border border-accent-teal/30 bg-accent-teal/5 dark:bg-teal-400/10 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono animate-fadeIn">
            <div className="flex items-center gap-2.5">
              <img
                src={TECH_ICON_MAP[selectedSkill.name] || '/img/tech/aws.svg'}
                alt=""
                className="w-5 h-5 object-contain shrink-0"
              />
              <span className="text-ink dark:text-slate-100">
                <strong className="text-accent-teal dark:text-teal-400 font-bold">{selectedSkill.name}</strong>{' '}
                <span className="text-slate-500 dark:text-slate-400">[{selectedSkill.category}]</span>: {selectedSkill.usedIn.join(' • ')}
              </span>
            </div>
            <button
              onClick={() => setSelectedSkill(null)}
              className="text-slate-500 dark:text-slate-400 hover:text-ink dark:hover:text-white text-[11px] underline self-end sm:self-auto font-mono shrink-0"
            >
              Close details
            </button>
          </div>
        )}

        {/* Unified Domain Taxonomy Grid with Icon on the Left of each Item */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((cat) => (
            <div
              key={cat.name}
              className="p-5 sm:p-6 rounded-xl border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface flex flex-col h-full shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              {/* Header block with uniform fixed height so tags start at the exact same height across all cards */}
              <div className="space-y-1.5 h-auto md:h-[86px] flex flex-col justify-start shrink-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-medium text-lg text-ink dark:text-white">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-paper-subtle dark:bg-slate-canvas border border-paper-border dark:border-slate-border text-slate-600 dark:text-slate-300">
                    {cat.items.length}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-sans text-slate-700 dark:text-slate-200 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Items container: Starts at identical vertical height across all cards in each row */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-paper-border/60 dark:border-slate-border/60">
                {cat.items.map((skill) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  const iconUrl = TECH_ICON_MAP[skill.name] || '/img/tech/aws.svg';

                  return (
                    <button
                      key={skill.name}
                      onClick={() =>
                        setSelectedSkill(
                          isSelected ? null : { ...skill, category: cat.name }
                        )
                      }
                      className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border text-xs font-mono transition-all text-left max-w-full ${
                        isSelected
                          ? 'border-accent-teal bg-accent-teal/10 dark:bg-teal-400/10 shadow-sm ring-1 ring-accent-teal dark:ring-teal-400'
                          : 'border-paper-border dark:border-slate-border bg-paper-subtle dark:bg-slate-canvas hover:border-accent-teal/50 dark:hover:border-teal-400/50 hover:bg-paper-card dark:hover:bg-slate-800 text-ink dark:text-slate-100'
                      }`}
                      aria-pressed={isSelected}
                      title={`Click to view applied context for ${skill.name}`}
                    >
                      <img
                        src={iconUrl}
                        alt=""
                        className="w-4 h-4 object-contain shrink-0 pointer-events-none select-none"
                        loading="lazy"
                      />
                      <span className="font-medium text-left leading-tight break-words">{skill.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
