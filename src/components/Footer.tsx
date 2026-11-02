import { Mail, Linkedin, ArrowUp } from 'lucide-react';
import { profile, navItems } from '@/data/content';

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-soft py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_0.8fr]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent text-white">
                S
              </span>
              <span>
                Shravya<span className="gradient-text">.T</span>
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Aspiring Data Analyst | SQL & Reporting | Enterprise IT
              Experience
            </p>
            <p className="text-xs italic text-muted">
              Bridging Enterprise Technology and Data Analytics.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Navigate
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  className="text-sm text-muted transition hover:text-primary"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Connect
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-soft glass transition hover:-translate-y-0.5 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-soft glass transition hover:-translate-y-0.5 hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
                className="grid h-10 w-10 place-items-center rounded-full border border-soft glass transition hover:-translate-y-0.5 hover:text-primary"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-soft pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} Shravya Tagilapalli. All rights
            reserved.
          </p>
          <p>Built with React, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
