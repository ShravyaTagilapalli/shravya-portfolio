import { motion } from 'framer-motion';
import {
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
} from 'lucide-react';

import SectionHeading from '@/components/SectionHeading';
import { experience } from '@/data/content';

export default function Experience() {
  return (
    <section id="experience" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="Work Experience"
          title={
            <>
              A career built on <span className="gradient-text">enterprise technology</span>
            </>
          }
          subtitle="Six and a half years across production support, functional consulting, and enterprise retail applications."
        />

        <div className="relative mt-14 pl-7 sm:pl-10">
          <div className="absolute bottom-5 left-2 top-2 w-px bg-gradient-to-b from-primary via-accent to-highlight sm:left-4" />

          <ul className="space-y-8 sm:space-y-10">
            {experience.map((job, i) => (
              <li key={job.company} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[1.15rem] top-8 z-10 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/40 ring-4 ring-[var(--bg)] sm:-left-10"
                >
                  <span className="text-xs font-bold">{i + 1}</span>
                </span>

                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.06 }}
                  className="rounded-3xl glass gradient-border p-5 shadow-xl shadow-primary/5 transition hover:-translate-y-1 sm:p-7"
                >
                  <div className="flex flex-col gap-5 border-b border-soft pb-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                          {job.company}
                        </h3>
                        <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary">
                          <Briefcase className="h-4 w-4" />
                          {job.title}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium text-muted sm:pt-1">
                      <CalendarDays className="h-4 w-4 text-accent" />
                      {job.period}
                    </div>
                  </div>

                  {job.context && (
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-muted ring-1 ring-primary/20">
                      <span className="font-semibold text-primary">{job.contextLabel}:</span>
                      {job.context}
                    </div>
                  )}

                  <div className="mt-6">
                    <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-primary">
                      Key Responsibilities &amp; Contributions
                    </h4>
                    <ul className="mt-4 space-y-4">
                      {job.responsibilities.map((responsibility) => (
                        <li key={responsibility.heading} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                            <strong className="font-semibold text-foreground">
                              {responsibility.heading}:
                            </strong>{' '}
                            {responsibility.detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 border-t border-soft pt-5">
                    <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-primary">
                      Technologies &amp; Skills
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-soft bg-soft/70 px-3 py-1.5 text-xs font-medium text-muted transition hover:border-primary/40 hover:text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
