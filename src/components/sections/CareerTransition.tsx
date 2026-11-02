import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { transitionSteps } from '@/data/content';
import { getIcon } from '@/components/icons';

export default function CareerTransition() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl glass gradient-border p-8 sm:p-12">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-soft bg-soft/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Career Transition
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Bridging Enterprise Technology and{' '}
              <span className="gradient-text">Data Analytics</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              My journey from enterprise application support to Data Analytics
              combines business process understanding, technical
              problem-solving, and growing expertise in analytical tools. I'm
              excited to use these strengths to uncover meaningful insights and
              support data-driven decisions.
            </p>
          </motion.div>

          <div className="relative mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            {transitionSteps.map((step, i) => {
              const Icon = getIcon(step.icon);
              return (
                <div
                  key={step.label}
                  className="flex items-center gap-3 sm:flex-1 sm:flex-col sm:gap-2"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="flex w-full items-center gap-3 rounded-2xl border border-soft bg-soft/60 p-4 sm:flex-col sm:text-center"
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-semibold">{step.label}</div>
                  </motion.div>
                  {i < transitionSteps.length - 1 && (
                    <ArrowRight className="hidden h-5 w-5 shrink-0 text-accent sm:rotate-0 md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
