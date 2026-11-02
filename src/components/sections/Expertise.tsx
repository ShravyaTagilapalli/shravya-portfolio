import { motion } from 'framer-motion';

import SectionHeading from '@/components/SectionHeading';
import { expertise } from '@/data/content';
import { getIcon } from '@/components/icons';

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Expertise"
          title={
            <>
              What I Bring to the <span className="gradient-text">Table</span>
            </>
          }
          subtitle="Strengths honed through enterprise IT work, now amplified by modern analytics skills."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl glass gradient-border p-6"
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl transition group-hover:scale-150" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-primary via-accent to-highlight transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
