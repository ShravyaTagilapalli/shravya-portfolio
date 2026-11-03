import { ArrowRight, Download, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

import { profile } from '@/data/content';

const stats = [
  { value: '6.5+', label: 'Years Experience' },
  { value: '3', label: 'Companies' },
  { value: 'In Progress', label: 'Data Analytics' },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden bg-radial-fade pt-32 pb-20 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <motion.p {...fadeUp(0)} className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-text">
            Hello, I'm
          </motion.p>

          <motion.h1
            {...fadeUp(0.06)}
            className="font-display text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p {...fadeUp(0.12)} className="font-display text-lg font-semibold text-[var(--text)] sm:text-xl">
            IT Professional <span className="text-primary">|</span> Application Support{' '}
            <span className="text-primary">|</span> Data Analytics
          </motion.p>

          <motion.p {...fadeUp(0.18)} className="mx-auto max-w-xl text-base leading-[1.6] text-muted sm:text-lg md:mx-0">
            6.5+ years of experience supporting enterprise retail applications, developing SQL-based solutions, and
            solving complex business and technical problems. Currently expanding my expertise in Data Analytics and
            modern data technologies.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="flex flex-wrap justify-center gap-3 md:justify-start">
            <button
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:bg-primary dark:text-ink dark:hover:bg-primary-300"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <a
              href={profile.resumeUrl}
              download="Shravya_Tagilapalli_Resume.docx"
              className="inline-flex items-center gap-2 rounded-lg border border-soft bg-[var(--bg-soft)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-soft bg-[var(--bg-soft)] text-[var(--text)] transition hover:-translate-y-0.5 hover:border-primary hover:text-accent-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm md:max-w-none"
        >
          <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl border border-primary/40" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl bg-secondary p-3 shadow-xl shadow-secondary/20 dark:bg-[var(--card)]">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/shravya_professional.png`}
              alt="Professional portrait of Shravya Tagilapalli"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
            />
          </div>
        </motion.div>
      </div>

      <motion.dl
        {...fadeUp(0.3)}
        className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 px-5 sm:px-8 md:mt-16 md:grid-cols-3 md:gap-6"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="card-surface group relative overflow-hidden rounded-2xl p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 lg:p-7"
          >
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-primary" />
            <dd
              className={`font-display font-extrabold leading-none tracking-tight text-[var(--text)] ${
                s.value.length > 4 ? 'text-2xl lg:text-3xl' : 'text-4xl lg:text-5xl'
              }`}
            >
              {s.value}
            </dd>
            <dt className="mt-3 text-sm font-medium text-muted">{s.label}</dt>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
