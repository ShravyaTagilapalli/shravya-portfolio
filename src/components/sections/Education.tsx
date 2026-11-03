import { motion } from 'framer-motion';
import { Award, GraduationCap, CalendarDays, BookOpen } from 'lucide-react';

import SectionHeading from '@/components/SectionHeading';
import { education, certification } from '@/data/content';

export default function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="Education & Certifications"
          title={
            <>
              Academic <span className="gradient-text">Foundation</span>
            </>
          }
          subtitle="A formal foundation in Information Technology, paired with ongoing learning in Data Analytics."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="card-surface flex flex-col rounded-2xl p-7 shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-accent-text">
                <Award className="h-6 w-6" />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
                <BookOpen className="h-3 w-3" />
                {certification.status}
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold leading-snug text-[var(--text)]">
              {certification.title}
            </h3>
            <p className="mt-2 text-base font-medium text-accent-text">
              {certification.institute}
            </p>
            <p className="mt-1 text-sm text-muted">{certification.field}</p>
            <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-soft bg-[var(--bg-soft)] px-3 py-1.5 text-xs font-semibold">
              <CalendarDays className="h-3.5 w-3.5 text-accent-text" />
              {certification.duration}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-surface flex flex-col rounded-2xl p-7 shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-accent-text">
                <GraduationCap className="h-6 w-6" />
              </div>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold leading-snug text-[var(--text)]">
              {education.degree}
            </h3>
            <p className="mt-2 text-base font-medium text-accent-text">
              {education.institution}
            </p>
            <p className="mt-1 text-sm text-muted">{education.university}</p>
            <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-soft bg-[var(--bg-soft)] px-3 py-1.5 text-xs font-semibold">
              <CalendarDays className="h-3.5 w-3.5 text-accent-text" />
              Graduated: {education.graduated}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
