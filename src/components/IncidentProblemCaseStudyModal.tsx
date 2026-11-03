import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Clipboard,
  ClipboardCheck,
  Database,
  GitBranch,
  Lightbulb,
  LucideIcon,
  ShieldAlert,
  TrendingUp,
  X,
  Workflow,
  Wrench,
  CheckCircle2,
  Search,
  FileSearch,
  Code2,
  FlaskConical,
  ClipboardCheck as TestIcon,
  Rocket,
  Eye,
} from 'lucide-react';

import { ipmCaseStudy } from '@/data/content';

const workflowIcons: LucideIcon[] = [
  AlertTriangle,
  Search,
  FileSearch,
  GitBranch,
  Wrench,
  TestIcon,
  FlaskConical,
  ShieldAlert,
  Rocket,
  CheckCircle2,
  Eye,
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-display text-lg font-semibold tracking-tight sm:text-xl">{children}</h4>
  );
}

function toneClass(tone: string) {
  if (tone === 'primary') return 'text-primary';
  if (tone === 'accent') return 'text-accent';
  return 'text-muted';
}

function KpiCard({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="rounded-2xl glass gradient-border p-5 text-center">
      <div className={`gradient-text font-display text-2xl font-bold sm:text-3xl ${toneClass(tone)}`}>
        {value}
      </div>
      <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-muted sm:text-xs">
        {label}
      </div>
    </div>
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
            <div className="flex items-center justify-between bg-[var(--bg-soft)]/80 px-5 py-2 text-[11px] uppercase tracking-wider text-muted">
              <span>SQL</span>
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center gap-1.5 rounded-lg border border-soft bg-[var(--bg-soft)] px-2.5 py-1.5 text-xs font-medium text-muted transition hover:border-primary/40 hover:text-accent-text"
              >
                {copied ? <ClipboardCheck className="h-3.5 w-3.5 text-accent" /> : <Clipboard className="h-3.5 w-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
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

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-soft glass p-5">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted">{title}</div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function BarRow({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-24 shrink-0 text-xs text-muted">{label}</div>
      <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-[var(--bg-soft)]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(value / max) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
      <div className="w-10 shrink-0 text-right text-xs font-semibold">{value}</div>
    </div>
  );
}

type Props = { open: boolean; onClose: () => void };

export default function IncidentProblemCaseStudyModal({ open, onClose }: Props) {
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

  const c = ipmCaseStudy;
  const maxModule = Math.max(...c.charts.moduleComparison.series[0].points.map((p) => p.value));
  const maxPriority = Math.max(...c.charts.priorityDistribution.points.map((p) => p.value));
  const maxRootCause = Math.max(...c.charts.rootCauseCategory.points.map((p) => p.value));
  const maxAvg = Math.max(...c.charts.avgResolutionTime.points.map((p) => p.value));
  const maxTrend = Math.max(...c.charts.incidentTrend.points.map((p) => p.value));
  const slaTotal = c.charts.slaCompliance.withinSla + c.charts.slaCompliance.breaches;
  const openClosedTotal = c.charts.openVsResolved.resolved + c.charts.openVsResolved.open;

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
            className="relative my-6 w-full max-w-5xl rounded-3xl glass gradient-border p-6 shadow-2xl shadow-primary/20 sm:p-8"
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
              <span className="text-xs font-medium text-muted">{c.type}</span>
            </div>

            <h3 className="mt-4 pr-10 font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              {c.title}
            </h3>
            <p className="mt-1 text-sm font-semibold text-primary sm:text-base">{c.subtitle}</p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{c.overview}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {c.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-soft bg-[var(--bg-soft)] px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Executive Dashboard */}
            <section className="mt-8">
              <SectionTitle>Executive Dashboard</SectionTitle>
              <p className="mt-2 text-sm text-muted">Simulated monthly operational metrics.</p>

              <div className="mt-4">
                <div className="text-xs font-bold uppercase tracking-wider text-primary">
                  Incident Management KPIs
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
                  {c.incidentKpis.map((kpi) => (
                    <KpiCard key={kpi.label} label={kpi.label} value={kpi.value} tone={kpi.tone} />
                  ))}
                </div>
                <p className="mt-2 text-xs italic text-muted">{c.incidentKpiNote}</p>
              </div>

              <div className="mt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-accent">
                  Problem Management KPIs
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {c.problemKpis.map((kpi) => (
                    <KpiCard key={kpi.label} label={kpi.label} value={kpi.value} tone={kpi.tone} />
                  ))}
                </div>
              </div>
            </section>

            {/* Incident Management */}
            <section className="mt-8">
              <SectionTitle>Incident Management — Service Restoration &amp; Operational Continuity</SectionTitle>
              <ol className="mt-4 space-y-2">
                {c.incidentActivities.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 rounded-2xl border border-soft glass p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <Workflow className="h-4 w-4" /> Incident Resolution Workflow
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {c.incidentWorkflow.map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="rounded-xl bg-gradient-to-r from-primary/15 to-accent/15 px-3 py-2 text-xs font-semibold ring-1 ring-primary/20"
                      >
                        {step}
                      </motion.div>
                      {i < c.incidentWorkflow.length - 1 && (
                        <ArrowRight className="h-3.5 w-3.5 text-primary/60" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Incident Analytics */}
            <section className="mt-8">
              <SectionTitle>Incident Analytics</SectionTitle>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <ChartCard title={c.charts.moduleComparison.title}>
                  <div className="space-y-3">
                    {c.charts.moduleComparison.series[0].points.map((p, i) => (
                      <div key={p.label}>
                        <div className="text-xs font-medium">{p.label}</div>
                        <BarRow label="Received" value={p.value} max={maxModule} color={c.charts.moduleComparison.series[0].color} />
                        <div className="mt-1">
                          <BarRow label="Resolved" value={c.charts.moduleComparison.series[1].points[i].value} max={maxModule} color={c.charts.moduleComparison.series[1].color} />
                        </div>
                      </div>
                    ))}
                  </div>
                </ChartCard>

                <ChartCard title={c.charts.priorityDistribution.title}>
                  <div className="space-y-3">
                    {c.charts.priorityDistribution.points.map((p) => (
                      <BarRow key={p.label} label={p.label} value={p.value} max={maxPriority} color="from-primary to-accent" />
                    ))}
                  </div>
                </ChartCard>

                <ChartCard title={c.charts.rootCauseCategory.title}>
                  <div className="space-y-3">
                    {c.charts.rootCauseCategory.points.map((p) => (
                      <BarRow key={p.label} label={p.label} value={p.value} max={maxRootCause} color="from-accent to-highlight" />
                    ))}
                  </div>
                </ChartCard>

                <ChartCard title={c.charts.slaCompliance.title}>
                  <div className="flex h-40 items-end justify-center">
                    <div className="relative h-36 w-36">
                      <svg viewBox="0 0 36 36" className="h-full w-full">
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeWidth="3.5" className="text-soft" />
                        <motion.circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="url(#slaGrad)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeDasharray={`${(c.charts.slaCompliance.withinSla / slaTotal) * 97.4} 97.4`}
                          transform="rotate(-90 18 18)"
                          initial={{ strokeDasharray: '0 97.4' }}
                          whileInView={{ strokeDasharray: `${(c.charts.slaCompliance.withinSla / slaTotal) * 97.4} 97.4` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: 'easeOut' }}
                        />
                        <defs>
                          <linearGradient id="slaGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#7c3aed" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="gradient-text font-display text-xl font-bold">98.11%</div>
                        <div className="text-[10px] text-muted">SLA Met</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-center gap-4 text-xs text-muted">
                    <span><span className="font-semibold text-primary">{c.charts.slaCompliance.withinSla}</span> Within SLA</span>
                    <span><span className="font-semibold text-muted">{c.charts.slaCompliance.breaches}</span> Breaches</span>
                  </div>
                </ChartCard>

                <ChartCard title={c.charts.avgResolutionTime.title}>
                  <div className="space-y-3">
                    {c.charts.avgResolutionTime.points.map((p) => (
                      <BarRow key={p.label} label={p.label} value={p.value} max={maxAvg} color="from-primary to-accent" />
                    ))}
                  </div>
                </ChartCard>

                <ChartCard title={c.charts.openVsResolved.title}>
                  <div className="flex h-32 items-end justify-center gap-4">
                    <div className="flex flex-col items-center">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(c.charts.openVsResolved.resolved / openClosedTotal) * 120}px` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="w-16 rounded-t-lg bg-gradient-to-t from-primary to-accent"
                      />
                      <div className="mt-2 text-xs font-semibold">{c.charts.openVsResolved.resolved}</div>
                      <div className="text-[10px] text-muted">Resolved</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(c.charts.openVsResolved.open / openClosedTotal) * 120}px` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="w-16 rounded-t-lg bg-[var(--bg-soft)] ring-1 ring-[var(--border)]"
                      />
                      <div className="mt-2 text-xs font-semibold">{c.charts.openVsResolved.open}</div>
                      <div className="text-[10px] text-muted">Open</div>
                    </div>
                  </div>
                </ChartCard>

                <ChartCard title={c.charts.incidentTrend.title}>
                  <div className="flex h-32 items-end justify-between gap-1.5">
                    {c.charts.incidentTrend.points.map((p, i) => (
                      <motion.div
                        key={p.label}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(p.value / maxTrend) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.05, ease: 'easeOut' }}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-primary/70 via-accent/70 to-highlight/70"
                        title={`${p.label}: ${p.value}`}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] text-muted">
                    {c.charts.incidentTrend.points.map((p) => (
                      <span key={p.label}>{p.label}</span>
                    ))}
                  </div>
                </ChartCard>
              </div>
            </section>

            {/* Problem Management */}
            <section className="mt-8">
              <SectionTitle>Problem Management — Eliminating Recurring Production Issues</SectionTitle>
              <p className="mt-3 rounded-2xl border border-soft bg-[var(--bg-soft)] p-4 text-sm leading-relaxed text-muted">
                {c.problemSummary}
              </p>

              <div className="mt-5 space-y-4">
                {c.problemActivities.map((group, gi) => (
                  <motion.div
                    key={group.heading}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: gi * 0.05 }}
                    className="rounded-2xl border border-soft glass p-5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-xs font-bold text-primary">
                        {gi + 1}
                      </span>
                      <h5 className="font-display text-sm font-semibold">{group.heading}</h5>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {group.details.map((d, di) => (
                        <li key={di} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-soft glass p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                  <Workflow className="h-4 w-4" /> Problem Management Workflow
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  {c.problemWorkflow.map((step, i) => {
                    const Icon = workflowIcons[i] ?? Activity;
                    return (
                      <div key={step}>
                        <motion.div
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35, delay: i * 0.05 }}
                          className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary/15 to-accent/15 px-4 py-2.5 ring-1 ring-primary/20"
                        >
                          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-ink">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <div className="text-[10px] uppercase tracking-wider text-muted">Step {i + 1}</div>
                            <div className="text-sm font-semibold">{step}</div>
                          </div>
                        </motion.div>
                        {i < c.problemWorkflow.length - 1 && (
                          <div className="flex justify-center py-1 text-primary/50">
                            <ArrowRight className="h-4 w-4 rotate-90" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Problem Management Performance */}
            <section className="mt-8">
              <SectionTitle>Problem Management Performance</SectionTitle>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {c.problemPerformance.map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="rounded-2xl glass gradient-border p-5"
                  >
                    <div className="gradient-text font-display text-base font-bold">{p.label}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.detail}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* SQL Investigation & Reporting */}
            <section className="mt-8">
              <SectionTitle>SQL Investigation &amp; Reporting</SectionTitle>
              <p className="mt-2 text-xs text-muted">
                Simplified demonstration database schema. These tables are not actual Oracle RMS v10 application tables.
              </p>
              <div className="mt-4 space-y-3">
                {c.sql.map((item, i) => (
                  <SqlBlock key={item.label} item={item} index={i} />
                ))}
              </div>
            </section>

            {/* Incident-to-Problem Relationship */}
            <section className="mt-8">
              <SectionTitle>Incident-to-Problem Relationship</SectionTitle>
              <ol className="mt-4 space-y-3">
                {c.incidentProblemRelationship.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-3 rounded-2xl border border-soft glass p-4"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed">{step}</span>
                  </motion.li>
                ))}
              </ol>
            </section>

            {/* Business Value */}
            <section className="mt-8">
              <SectionTitle>Business Value Delivered by the Support Process</SectionTitle>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {c.businessValue.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3 rounded-2xl border border-soft glass p-4"
                  >
                    <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed">{v}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Skills Demonstrated */}
            <section className="mt-8">
              <SectionTitle>Skills Demonstrated</SectionTitle>
              <div className="mt-3 flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-soft bg-[var(--bg-soft)] px-3 py-1.5 text-xs font-medium text-muted transition hover:border-primary/40 hover:text-accent-text"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </section>

            <div className="mt-8 flex items-start gap-2 rounded-2xl border border-soft bg-[var(--bg-soft)] p-4 text-xs leading-relaxed text-muted">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{c.disclaimer}</span>
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
