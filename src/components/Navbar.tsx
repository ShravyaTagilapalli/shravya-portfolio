import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { navItems, profile } from '@/data/content';
import ThemeToggle from './ThemeToggle';
import { useActiveSection } from '@/hooks/useActiveSection';

type Props = {
  theme: 'light' | 'dark';
  toggle: () => void;
};

export default function Navbar({ theme, toggle }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-[var(--bg-soft)] transition-shadow duration-300 ${
        scrolled ? 'border-soft shadow-sm shadow-black/5' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <button
          onClick={() => go('home')}
          aria-label="Back to top"
          className="flex items-center gap-2.5 rounded-lg font-display text-base font-bold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-secondary text-sm text-white dark:bg-primary dark:text-ink">
            ST
          </span>
          <span className="hidden text-[var(--text)] sm:inline">{profile.name}</span>
        </button>

        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                aria-current={active === item.id ? 'true' : undefined}
                className={`relative rounded-md px-2.5 py-2 text-[13px] font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                  active === item.id ? 'text-[var(--text)]' : 'text-muted hover:text-[var(--text)]'
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-2.5 -bottom-1 h-0.5 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download="Shravya_Tagilapalli_Resume.docx"
            className="hidden items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary md:inline-flex dark:bg-primary dark:text-ink dark:hover:bg-primary-300"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-soft text-[var(--text)] xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-soft bg-[var(--bg-soft)] px-5 pb-5 pt-2 xl:hidden"
          >
            <ul className="grid gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => go(item.id)}
                    aria-current={active === item.id ? 'true' : undefined}
                    className={`flex min-h-11 w-full items-center rounded-lg px-4 text-left text-sm font-medium transition ${
                      active === item.id
                        ? 'bg-primary/10 text-[var(--text)]'
                        : 'text-muted hover:bg-primary/5 hover:text-[var(--text)]'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <a
              href={profile.resumeUrl}
              download="Shravya_Tagilapalli_Resume.docx"
              className="mt-3 flex min-h-11 items-center justify-center gap-2 rounded-lg bg-secondary text-sm font-semibold text-white dark:bg-primary dark:text-ink"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
