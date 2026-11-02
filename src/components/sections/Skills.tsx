import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import SectionHeading from '@/components/SectionHeading';
import { skillCategories } from '@/data/content';
import { getIcon } from '@/components/icons';

export default function Skills() {
  return (
    <section id="skills" className="relative py-14 sm:py-20">
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
          {skillCategories.map((cat, i) => {
            const prominent = cat.name === 'Data Analytics';
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-2xl glass gradient-border p-6 ${
                  prominent ? 'ring-1 ring-primary/30' : ''
                }`}
              >
                {prominent && (
                  <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    <Sparkles className="h-3 w-3" /> Current Focus
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-semibold">{cat.name}</h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                      cat.status === 'established'
                        ? 'bg-secondary/15 text-secondary'
                        : 'bg-accent/15 text-accent'
                    }`}
                  >
                    {cat.status === 'established' ? 'Established' : 'Developing'}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => {
                    const Icon = getIcon(skill.icon);
                    return (
                      <div
                        key={skill.name}
                        className="group/chip inline-flex items-center gap-2 rounded-xl border border-soft bg-soft/60 px-3 py-2 text-sm font-medium transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                      >
                        <Icon className="h-4 w-4 text-primary transition group-hover/chip:scale-110" />
                        {skill.name}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
