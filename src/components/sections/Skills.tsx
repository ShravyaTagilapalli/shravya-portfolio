import { motion } from 'framer-motion';

import SectionHeading from '@/components/SectionHeading';
import { skillCategories } from '@/data/content';
import { getIcon } from '@/components/icons';

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Technical Toolkit"
          title={
            <>
              My <span className="gradient-text">Technical Toolkit</span>
            </>
          }
          subtitle="A blend of established enterprise expertise and developing analytics capabilities."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-surface flex flex-col rounded-2xl p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-bold leading-tight text-[var(--text)]">
                  {cat.name}
                </h3>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    cat.status === 'established'
                      ? 'bg-primary/15 text-accent-text'
                      : 'bg-[var(--bg-soft)] text-muted'
                  }`}
                >
                  {cat.status === 'established' ? 'Established' : 'Developing'}
                </span>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);
                  return (
                    <li
                      key={skill.name}
                      className="group inline-flex items-center gap-2 rounded-lg border border-soft bg-[var(--bg-soft)] px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:border-primary/50 hover:text-accent-text"
                    >
                      <Icon className="h-4 w-4 text-primary transition group-hover:scale-110" />
                      {skill.name}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
