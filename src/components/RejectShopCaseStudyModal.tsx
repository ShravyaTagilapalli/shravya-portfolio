import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Lightbulb, Maximize2, ShieldAlert, X } from 'lucide-react';

import DashboardLightbox from '@/components/DashboardLightbox';
import { rejectShopCaseStudy, rejectShopDashboardImage } from '@/data/rejectShopCaseStudy';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h4 className="font-display text-lg font-semibold tracking-tight sm:text-xl">{children}</h4>;
}

function DashboardPreview() {
  const [enlarged, setEnlarged] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setEnlarged(true)}
        aria-label="Enlarge dashboard preview"
        className="group relative mt-4 block w-full overflow-hidden rounded-2xl border border-soft bg-soft/40 transition hover:border-primary/40"
      >
        <img src={rejectShopDashboardImage.src} alt={rejectShopDashboardImage.alt} className="w-full" loading="lazy" />
        <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white opacity-0 transition group-hover:opacity-100">
          <Maximize2 className="h-4 w-4" />
        </span>
      </button>
      <DashboardLightbox
        open={enlarged}
        onClose={() => setEnlarged(false)}
        src={rejectShopDashboardImage.src}
        alt={rejectShopDashboardImage.alt}
      />
    </>
  );
}

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function RejectShopCaseStudyModal({ open, onClose }: Props) {
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

  const c = rejectShopCaseStudy;

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
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-soft bg-soft/60 text-muted transition hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-highlight px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                <Lightbulb className="h-3.5 w-3.5" />
                {c.category}
              </span>
              <span className="text-xs font-medium text-muted">{c.projectType}</span>
            </div>

            <h3 className="mt-4 pr-10 font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              {c.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-muted">
              {c.institute} · {c.course} · {c.status}
            </p>

            <section className="mt-8">
              <SectionTitle>Problem Statement</SectionTitle>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{c.problemStatement}</p>
              <p className="mt-3 rounded-2xl border border-soft bg-soft/40 p-4 text-sm leading-relaxed text-muted">
                {c.overview}
              </p>
            </section>

            <section className="mt-8">
              <SectionTitle>Analytical Workflow</SectionTitle>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {c.workflow.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-xl bg-gradient-to-r from-accent/15 to-highlight/15 px-3 py-2 text-xs font-semibold ring-1 ring-accent/30">
                      {step}
                    </span>
                    {i < c.workflow.length - 1 && <span className="text-xs text-accent/70">→</span>}
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {c.stages.map((stage, i) => (
                  <div key={stage.title} className="rounded-2xl border border-soft glass p-5">
                    <div className="flex items-center gap-2">
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-accent to-highlight text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <h5 className="font-display text-sm font-semibold">{stage.title}</h5>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {stage.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted">The completed workbook contains {c.pivotTableCount} PivotTables.</p>
            </section>

            <section className="mt-8">
              <SectionTitle>Verified KPI Summary</SectionTitle>
              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                {c.kpis.map((kpi) => (
                  <div key={kpi.label} className="rounded-2xl glass gradient-border p-4 text-center">
                    <div className="gradient-text font-display text-xl font-bold sm:text-2xl">{kpi.value}</div>
                    <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-muted">{kpi.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs italic text-muted">{c.kpiNote}</p>
            </section>

            <section className="mt-8">
              <SectionTitle>Dashboard Preview</SectionTitle>
              <p className="mt-2 text-sm text-muted">
                Preview of the original Excel workbook. The interactive dashboard is built in Microsoft Excel, not on this website.
              </p>
              <DashboardPreview />
            </section>

            <section className="mt-8">
              <SectionTitle>Visualization Overview</SectionTitle>
              <p className="mt-2 text-sm text-muted">Seven native Excel charts supported the dashboard.</p>
              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                {c.charts.map((chart, i) => (
                  <li key={chart.title} className="flex items-start gap-3 rounded-2xl border border-soft glass p-4">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent/20 to-highlight/20 text-xs font-bold text-accent">
                      {i + 1}
                    </span>
                    <div>
                      <div className="text-sm font-semibold">{chart.title}</div>
                      <div className="text-xs leading-relaxed text-muted">{chart.description}</div>
                    </div>
                  </li>
                ))}
              </ol>
              {c.supportingViews.map((v) => (
                <p key={v} className="mt-3 rounded-xl border border-soft bg-soft/40 p-3 text-xs text-muted">
                  Also included: {v}
                </p>
              ))}
            </section>

            <section className="mt-8">
              <SectionTitle>Interactive Analysis (Excel Slicers)</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Slicers filter the connected PivotTables and dashboard components, so each view can be narrowed to a specific segment.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {c.slicers.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-soft glass p-4">
                    <div className="text-sm font-semibold">{s.label}</div>
                    <div className="mt-1 text-xs leading-relaxed text-muted">{s.description}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <SectionTitle>Business Questions Addressed</SectionTitle>
              <ol className="mt-4 space-y-2">
                {c.businessQuestions.map((q, i) => (
                  <li key={q} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                      {i + 1}
                    </span>
                    <span>{q}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-8">
              <SectionTitle>Tools Used</SectionTitle>
              <div className="mt-3 flex flex-wrap gap-2">
                {c.tools.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-full border border-soft bg-soft/60 px-3 py-1.5 text-xs font-medium text-muted"
                  >
                    <FileSpreadsheet className="h-3.5 w-3.5 text-accent" />
                    {t}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <SectionTitle>What I Learned</SectionTitle>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {c.learningOutcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 rounded-2xl border border-soft glass p-4 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8">
              <SectionTitle>Skills Demonstrated</SectionTitle>
              <div className="mt-3 flex flex-wrap gap-2">
                {c.skillBadges.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-soft bg-soft/60 px-3 py-1.5 text-xs font-medium text-muted transition hover:border-accent/40 hover:text-accent"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </section>

            <div className="mt-8 flex items-start gap-2 rounded-2xl border border-soft bg-soft/40 p-4 text-xs leading-relaxed text-muted">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{c.disclaimer}</span>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5"
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
