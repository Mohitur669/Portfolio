import React from 'react';
import { EXPERIENCES, CERTIFICATIONS } from '../../data/experience';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Education and Experience Timeline"
      className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Path</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & Verified Milestones
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A track record of academic distinction in both Computer Science and Pure Mathematics.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {EXPERIENCES.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-50 dark:border-obsidian-950 group-hover:scale-125 transition-transform" />

              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-obsidian-900/80 backdrop-blur-xl shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  {item.scoreOrResult && (
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold">
                      {item.scoreOrResult}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                  {item.role}
                </h3>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-1 mb-4">
                  <span className="font-semibold">{item.organization}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4">
                  {item.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-white/5">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-[11px] font-mono text-slate-700 dark:text-slate-300"
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
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10">
          <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span>Certifications & Honours</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md flex items-start gap-3"
              >
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    Issued by {cert.issuer}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"
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
