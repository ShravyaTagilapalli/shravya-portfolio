import { useEffect, useState } from 'react';
import {
  AlertTriangle,
  ArrowDown,
  Check,
  CheckCircle2,
  Clipboard,
  ClipboardCheck,
  Database,
  FileSearch,
  GitBranch,
  Lightbulb,
  ListChecks,
  LucideIcon,
  PackageCheck,
  Search,
  ShieldAlert,
  TrendingDown,
  X,
  Zap,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import { rmsCaseStudy } from '@/data/content';

const stageIcons: LucideIcon[] = [Search, Database, Zap, FileSearch, GitBranch, AlertTriangle];

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex items-center gap-1.5 rounded-lg border border-soft bg-[var(--bg-soft)] px-2.5 py-1.5 text-xs font-medium text-muted transition hover:border-primary/40 hover:text-accent-text"
    >
      {children}
    </button>
  );
}

function SqlBlock({ item, index }: { item: { label: string; description: string; query: string }; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(item.query);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-soft glass">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
            <Database className="h-4 w-4" />
          </span>
          <div>
            <div className="font-display text-sm font-semibold">{item.label}</div>
            <div className="text-xs text-muted">{item.description}</div>
          </div>
        </div>
        <span className="text-xs font-medium text-primary">{open ? 'Hide' : 'Show'}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-soft"
          >
            <div className="flex items-center justify-between bg-[var(--bg-soft)] px-5 py-2 text-[11px] uppercase tracking-wider text-muted">
              <span>SQL</span>
              <IconButton label="Copy SQL" onClick={copy}>
                {copied ? <ClipboardCheck className="h-3.5 w-3.5 text-accent" /> : <Clipboard className="h-3.5 w-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </IconButton>
            </div>
            <pre className="overflow-x-auto px-5 py-4 text-xs leading-relaxed text-foreground sm:text-sm">
              <code>{item.query}</code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CaseStudyModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-6 w-full max-w-4xl rounded-3xl glass gradient-border p-6 shadow-2xl shadow-primary/20 sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-soft bg-[var(--bg-soft)] text-muted transition hover:text-accent-text"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink">
                <Lightbulb className="h-3.5 w-3.5" />
                Simulated Case Study
              </span>
              <span className="text-xs font-medium text-muted">{rmsCaseStudy.type}</span>
            </div>

            <h3 className="mt-4 pr-10 font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              {rmsCaseStudy.title}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
              {rmsCaseStudy.overview}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {rmsCaseStudy.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-soft bg-[var(--bg-soft)] px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-soft bg-[var(--bg-soft)] p-4 text-sm leading-relaxed text-muted">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Scenario
              </div>
              {rmsCaseStudy.scenario}
            </div>

            {/* Section 1 — Business Problem */}
            <section className="mt-8">
              <h4 className="font-display text-lg font-semibold">1. Business Problem</h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {rmsCaseStudy.problem.kpis.map((kpi, i) => (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="rounded-2xl glass gradient-border p-5 text-center"
                  >
                    <div className="text-xs uppercase tracking-wider text-muted">{kpi.label}</div>
                    <div className="mt-2 gradient-text font-display text-3xl font-bold">
                      {kpi.value}
                    </div>
                    <div className="text-xs text-muted">{kpi.unit}</div>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {rmsCaseStudy.problem.description}
              </p>
            </section>

            {/* Section 2 — Investigation Process */}
            <section className="mt-8">
              <h4 className="font-display text-lg font-semibold">2. Investigation Process</h4>
              <ol className="mt-4 space-y-3">
                {rmsCaseStudy.investigation.map((step, i) => {
                  const Icon = stageIcons[i] ?? Search;
                  return (
                    <motion.li
                      key={step}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex items-center gap-3 rounded-2xl border border-soft glass p-4"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-primary">{i + 1}</span>
                        <span className="text-sm font-medium">{step}</span>
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </section>

            {/* Section 3 — SQL Investigation */}
            <section className="mt-8">
              <h4 className="font-display text-lg font-semibold">3. SQL Investigation</h4>
              <p className="mt-2 text-xs text-muted">
                Simplified demonstration tables: inventory, purchase_orders, receipts, batch_runs,
                item_locations. These are not Oracle RMS v10 base tables.
              </p>
              <div className="mt-4 space-y-3">
                {rmsCaseStudy.sql.map((item, i) => (
                  <SqlBlock key={item.label} item={item} index={i} />
                ))}
              </div>
            </section>

            {/* Section 4 — Root Cause Analysis */}
            <section className="mt-8">
              <h4 className="font-display text-lg font-semibold">4. Root Cause Analysis</h4>
              <div className="mt-4 flex flex-col items-stretch gap-3">
                {rmsCaseStudy.rootCause.map((node, i) => (
                  <div key={node.label}>
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="rounded-2xl bg-gradient-to-r from-primary/15 via-accent/10 to-highlight/15 p-4 ring-1 ring-primary/20"
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-xs font-bold text-ink">
                          {i + 1}
                        </span>
                        <div>
                          <div className="font-display text-sm font-semibold">{node.label}</div>
                          <div className="text-xs text-muted">{node.detail}</div>
                        </div>
                      </div>
                    </motion.div>
                    {i < rmsCaseStudy.rootCause.length - 1 && (
                      <div className="flex justify-center py-1 text-primary/60">
                        <ArrowDown className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-3 rounded-xl border border-soft bg-[var(--bg-soft)] p-3 text-xs italic text-muted">
                {rmsCaseStudy.rootCauseNote}
              </p>
            </section>

            {/* Section 5 — Resolution Approach */}
            <section className="mt-8">
              <h4 className="font-display text-lg font-semibold">5. Resolution Approach</h4>
              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                {rmsCaseStudy.resolution.map((step, i) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3 rounded-2xl border border-soft glass p-4"
                  >
                    <ListChecks className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <span className="text-xs font-bold text-primary">{i + 1}.</span>{' '}
                      <span className="text-sm">{step}</span>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </section>

            {/* Section 6 — Illustrative Outcome */}
            <section className="mt-8">
              <h4 className="font-display text-lg font-semibold">6. Illustrative Outcome</h4>
              <p className="mt-2 text-xs italic text-muted">{rmsCaseStudy.outcome.note}</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-soft glass p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-muted">
                    <TrendingDown className="h-4 w-4 text-rose-400" /> Before
                  </div>
                  <div className="mt-3 space-y-2">
                    {rmsCaseStudy.outcome.before.map((row) => (
                      <div key={row.label} className="flex items-center justify-between text-sm">
                        <span className="text-muted">{row.label}</span>
                        <span className="font-display font-bold">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl glass gradient-border p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <PackageCheck className="h-4 w-4 text-accent" /> Projected After
                  </div>
                  <div className="mt-3 space-y-2">
                    {rmsCaseStudy.outcome.after.map((row) => (
                      <div key={row.label} className="flex items-center justify-between text-sm">
                        <span className="text-muted">{row.label}</span>
                        <span className="gradient-text font-display font-bold">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 — Skills Demonstrated */}
            <section className="mt-8">
              <h4 className="font-display text-lg font-semibold">7. Skills Demonstrated</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {rmsCaseStudy.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-soft bg-[var(--bg-soft)] px-3 py-1.5 text-xs font-medium text-muted transition hover:border-primary/40 hover:text-accent-text"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </section>

            {/* Modules */}
            <section className="mt-8">
              <h4 className="font-display text-lg font-semibold">Modules Covered</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {rmsCaseStudy.modules.map((m) => (
                  <span
                    key={m}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary ring-1 ring-primary/20"
                  >
                    <Check className="h-3.5 w-3.5" />
                    {m}
                  </span>
                ))}
              </div>
            </section>

            <div className="mt-8 flex items-start gap-2 rounded-2xl border border-soft bg-[var(--bg-soft)] p-4 text-xs leading-relaxed text-muted">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{rmsCaseStudy.disclaimer}</span>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-ink shadow-md shadow-primary/20 transition hover:-translate-y-0.5"
              >
                <CheckCircle2 className="h-4 w-4" />
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
