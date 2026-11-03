import { motion } from 'framer-motion';
import { Briefcase, Code2, GraduationCap, LineChart, Server, Database } from 'lucide-react';

import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/content';

const background = [
  'Oracle Retail application support across production incidents and service requests.',
  'SQL-based troubleshooting, data validation, and discrepancy analysis.',
  'Functional consulting, requirements gathering, and reporting solutions.',
  'Stakeholder communication across business and technical teams.',
];

const learning = [
  'Full Stack Development Program (FSDP) at The Data Analytics Institute (TDAI), in progress.',
  'Excel, PivotTables, and Power BI for dashboard development.',
  'Python and PySpark, with Data Engineering concepts.',
  'AI-assisted application development using Claude.',
];

const journey = [
  { label: 'Enterprise IT Experience', icon: Server },
  { label: 'SQL & Reporting', icon: Database },
  { label: 'Data Analytics', icon: LineChart },
  { label: 'Modern Data Engineering', icon: Code2 },
];

const highlightPattern = /(Shravya Tagilapalli|Data Analytics)/;

function highlightTerms(text: string) {
  return text.split(highlightPattern).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-accent-text">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              From enterprise support to <span className="gradient-text">data analytics</span>
            </>
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-[1.75] text-muted sm:text-lg"
        >
          {profile.about.split('\n\n').map((paragraph) => (
            <p key={paragraph}>{highlightTerms(paragraph)}</p>
          ))}
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="card-surface rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-white dark:bg-primary dark:text-ink">
                <Briefcase className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-text">Professional Background</p>
                <h3 className="font-display text-lg font-bold">Enterprise IT Experience</h3>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {background.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="card-surface rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-accent-text">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-text">Current Learning Journey</p>
                <h3 className="font-display text-lg font-bold">Currently Learning</h3>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {learning.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-soft pt-4 text-xs leading-relaxed text-muted">
              Coursework and practice assignments are shown as learning, not as commercial project experience.
            </p>
          </motion.div>
        </div>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((step, i) => (
            <li
              key={step.label}
              className="flex items-center gap-3 rounded-xl border border-soft bg-[var(--bg-soft)] px-4 py-3"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-accent-text">
                <step.icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold">
                <span className="mr-1.5 text-muted">{i + 1}.</span>
                {step.label}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
