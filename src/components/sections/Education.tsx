import { motion } from 'framer-motion';
import { Award, GraduationCap, CalendarDays, BookOpen } from 'lucide-react';

import SectionHeading from '@/components/SectionHeading';
import { education, certification } from '@/data/content';

export default function Education() {
  return (
    <section id="education" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading
          eyebrow="Education & Certifications"
          title={
            <>
              Academic <span className="gradient-text">Foundation</span>
            </>
          }
          subtitle="A formal foundation in Information Technology, paired with ongoing learning in Data Analytics."
        />

        <div className="mt-12 flex flex-col gap-6">
          {/* Certification — shown first */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl glass gradient-border p-8"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/25 to-accent/15 blur-3xl" />
            <div className="relative flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30">
                <Award className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-semibold leading-snug">
                    {certification.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                    <BookOpen className="h-3 w-3" />
                    {certification.status}
                  </span>
                </div>
                <p className="mt-2 text-base font-medium text-primary">
                  {certification.institute}
                </p>
                <p className="mt-1 text-sm text-muted">{certification.field}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-soft bg-soft/60 px-3 py-1.5 text-xs font-semibold">
                  <CalendarDays className="h-3.5 w-3.5 text-accent" />
                  {certification.duration}
                </div>
              </div>
            </div>
          </motion.div>

          {/* B.Tech — shown second */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl glass gradient-border p-8"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/25 to-accent/15 blur-3xl" />
            <div className="relative flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold leading-snug">
                  {education.degree}
                </h3>
                <p className="mt-2 text-base font-medium text-primary">
                  {education.institution}
                </p>
                <p className="mt-1 text-sm text-muted">{education.university}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-soft bg-soft/60 px-3 py-1.5 text-xs font-semibold">
                  <CalendarDays className="h-3.5 w-3.5 text-accent" />
                  Graduated: {education.graduated}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
