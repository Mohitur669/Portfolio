import React from 'react';
import { EXPERIENCES, CERTIFICATIONS } from '../../data/experience';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Education and Experience Timeline"
      className="py-16 md:py-24 border-b border-paper-border dark:border-slate-border relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-ink-graphite dark:text-slate-200 text-xs font-mono mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-accent-teal dark:text-teal-400" />
            <span className="text-accent-amber dark:text-amber-300 uppercase tracking-wider font-semibold">Academic &amp; Technical Record</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-normal tracking-tight text-ink dark:text-white">
            Education &amp; Milestones
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-graphite dark:text-slate-100 font-sans max-w-2xl leading-relaxed">
            Formative grounding in pure mathematics and formal computer science, applied to distributed backend systems and engineering workflows.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-paper-border dark:border-slate-border ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {EXPERIENCES.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-accent-teal dark:bg-teal-400 border-4 border-paper-canvas dark:border-slate-canvas group-hover:scale-125 transition-transform" />

              <div className="p-6 sm:p-8 rounded-xl border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-accent-teal dark:text-teal-300 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  {item.scoreOrResult && (
                    <span className="self-start sm:self-auto px-3 py-1 rounded-md bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 dark:border-emerald-400/20 text-xs font-mono font-bold">
                      {item.scoreOrResult}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink dark:text-white">
                  {item.role}
                </h3>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-1 mb-4 font-sans">
                  <span className="font-semibold text-ink dark:text-white">{item.organization}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-ink-graphite dark:text-slate-100 font-sans mb-4">
                  {item.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-teal dark:bg-teal-400 mt-2 shrink-0" />
                      <span className="leading-relaxed">{hl}</span>
                    </li>
                  ))}
                </ul>

                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-paper-border dark:border-slate-border">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-paper-subtle dark:bg-slate-canvas border border-paper-border dark:border-slate-border text-[11px] font-mono text-slate-800 dark:text-slate-200 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Certifications & Co-Curricular Badges */}
        <div className="mt-16 pt-8 border-t border-paper-border dark:border-slate-border">
          <h3 className="text-lg font-serif font-normal text-ink dark:text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-accent-amber dark:text-amber-300" />
            <span>Certifications &amp; Foundations</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="p-5 rounded-xl border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface flex items-start gap-3.5"
              >
                <div className="p-2 rounded-lg bg-accent-amber/10 dark:bg-amber-400/10 text-accent-amber dark:text-amber-300 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-sm text-ink dark:text-white">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-600 dark:text-slate-300 mt-0.5">
                    Issued by {cert.issuer}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-paper-subtle dark:bg-slate-canvas text-slate-800 dark:text-slate-200 border border-paper-border dark:border-slate-border font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
