import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
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
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled ? 'glass shadow-lg shadow-black/5' : 'glass'
        } mx-4 sm:mx-auto`}
      >
        <button
          onClick={() => go('home')}
          className="group flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent text-white shadow-md">
            S
          </span>
          <span className="hidden lg:inline">
            Shravya<span className="gradient-text">.T</span>
          </span>
        </button>

        <div className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`relative whitespace-nowrap rounded-full px-2 py-1.5 text-[12px] font-medium transition lg:px-2.5 lg:text-[13px] ${
                active === item.id
                  ? 'text-primary'
                  : 'text-muted hover:text-primary'
              }`}
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-primary/10 ring-1 ring-primary/30"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-soft glass md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl glass p-2 shadow-xl md:hidden"
          >
            <ul className="grid gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => go(item.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                      active === item.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="px-4 py-2 text-xs text-muted">
                {profile.subtitle}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
