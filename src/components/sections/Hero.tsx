import { Download, Linkedin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import { profile, highlights } from '@/data/content';
import FloatingShapes from '@/components/FloatingShapes';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-radial-fade pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      <FloatingShapes />

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-[1.25fr_0.75fr] md:gap-12">
        {/* Left: introduction content */}
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-soft glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Data Analytics Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
          >
            Hi, I'm{' '}
            <span className="gradient-text-anim">Shravya Tagilapalli</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-base font-semibold sm:text-lg md:justify-start"
          >
            <span className="gradient-text-anim">Aspiring Data Analyst</span>
            <span className="text-primary/50" aria-hidden="true">|</span>
            <span className="text-foreground/80">Production Support Analyst</span>
            <span className="text-primary/50" aria-hidden="true">|</span>
            <span className="text-muted">Functional Consultant</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-1 grid w-full max-w-lg grid-cols-3 gap-3"
          >
            {highlights.map((h) => (
              <div
                key={h.label}
                className="gradient-border rounded-2xl bg-soft/60 p-4 text-center"
              >
                <div className="gradient-text font-display text-base font-bold sm:text-lg">
                  {h.value}
                </div>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-wide text-muted sm:text-[11px]">
                  {h.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 md:justify-start"
          >
            <button
              onClick={() => scrollTo('skills')}
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-pink"
            >
              Explore My Skills
              <Sparkles className="h-4 w-4" />
            </button>

            <a
              href={profile.resumeUrl}
              download="Shravya_Tagilapalli_Resume.docx"
              className="inline-flex items-center gap-2 rounded-xl border border-soft glass px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-soft glass px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </motion.div>

        </div>

        {/* Right: profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto flex w-full items-center justify-center md:mx-0"
        >
          <div className="absolute h-56 w-56 animate-glow rounded-full bg-gradient-to-tr from-primary/40 via-accent/30 to-highlight/30 blur-3xl" />
          <div className="relative aspect-square w-48 overflow-hidden rounded-full bg-gradient-to-tr from-primary via-accent to-highlight p-[3px] shadow-2xl shadow-primary/40 sm:w-56 md:w-60">
            <div className="h-full w-full overflow-hidden rounded-full bg-soft">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/shravya_professional.png`}
                alt="Shravya Tagilapalli"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
