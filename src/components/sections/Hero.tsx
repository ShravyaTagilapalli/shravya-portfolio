import { ArrowRight, Download, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

import { profile } from '@/data/content';

const stats = [
  { value: '6.5+ Years', label: 'Professional Experience' },
  { value: '3 Companies', label: 'Career Journey' },
  { value: 'Data Analytics', label: 'Current Focus' },
];

const titleParts = [
  { text: 'Aspiring Data Analyst', highlight: true },
  { text: 'Production Support Analyst', highlight: false },
  { text: 'Functional Consultant', highlight: false },
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
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 md:grid-cols-[auto_1fr] md:gap-14 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64 md:mx-0 md:h-60 md:w-60 lg:h-72 lg:w-72"
        >
          <span aria-hidden="true" className="absolute -inset-3 rounded-full border border-primary/30" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[var(--bg-soft)] shadow-xl shadow-secondary/20 ring-1 ring-primary/40">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/shravya_professional.png`}
              alt="Professional portrait of Shravya Tagilapalli"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-6 text-center md:text-left">
          <motion.p {...fadeUp(0)} className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-text">
            Hello, I'm
          </motion.p>

          <motion.h1
            {...fadeUp(0.06)}
            className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-[var(--text)] sm:text-5xl md:text-4xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p {...fadeUp(0.12)} className="font-display text-base font-semibold leading-relaxed text-[var(--text)] sm:text-lg">
            {titleParts.map((part, i) => (
              <span key={part.text}>
                {i > 0 && <span className="px-2 text-muted">|</span>}
                <span className={part.highlight ? 'text-accent-text' : undefined}>{part.text}</span>
              </span>
            ))}
          </motion.p>

          <motion.div {...fadeUp(0.18)} className="flex flex-wrap justify-center gap-3 md:justify-start">
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

          <motion.dl {...fadeUp(0.24)} className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card-surface group relative overflow-hidden rounded-2xl p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-primary" />
                <dd className="font-display text-2xl font-extrabold leading-tight tracking-tight text-[var(--text)] sm:text-xl lg:text-2xl">
                  {s.value}
                </dd>
                <dt className="mt-2 text-xs font-medium leading-snug text-muted sm:text-sm">{s.label}</dt>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
