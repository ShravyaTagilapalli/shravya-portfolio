import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, Download, ExternalLink, FileSpreadsheet, FlaskConical, Maximize2, ShieldCheck } from 'lucide-react';

import SectionHeading from '@/components/SectionHeading';
import CaseStudyModal from '@/components/CaseStudyModal';
import IncidentProblemCaseStudyModal from '@/components/IncidentProblemCaseStudyModal';
import RejectShopCaseStudyModal from '@/components/RejectShopCaseStudyModal';
import DashboardLightbox from '@/components/DashboardLightbox';
import { rmsCaseStudy, ipmCaseStudy } from '@/data/content';
import { rejectShopCaseStudy, rejectShopDashboardImage } from '@/data/rejectShopCaseStudy';

function InventoryIllustration() {
  const before = 95;
  const after = 120;
  return (
    <div className="relative mx-auto w-full max-w-md rounded-2xl glass p-5">
      <div className="flex items-center justify-between">
        <div className="text-[10px] font-medium uppercase tracking-wider text-muted">
          RMS vs Physical Stock
        </div>
        <Database className="h-4 w-4 text-accent-text" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-soft bg-[var(--bg-soft)] p-4">
          <div className="text-[10px] uppercase text-muted">Before</div>
          <div className="mt-2 flex items-end gap-2">
            <div className="text-sm font-semibold">RMS</div>
            <div className="font-display text-2xl font-bold text-rose-400">{before}</div>
          </div>
          <div className="mt-1 flex items-end gap-2">
            <div className="text-sm font-semibold">Physical</div>
            <div className="font-display text-2xl font-bold">{after}</div>
          </div>
          <div className="mt-2 text-xs text-muted">Variance: 25 units</div>
        </div>

        <div className="rounded-xl border border-soft bg-[var(--bg-soft)] p-4">
          <div className="text-[10px] uppercase text-muted">Projected After</div>
          <div className="mt-2 flex items-end gap-2">
            <div className="text-sm font-semibold">RMS</div>
            <div className="gradient-text font-display text-2xl font-bold">{after}</div>
          </div>
          <div className="mt-1 flex items-end gap-2">
            <div className="text-sm font-semibold">Physical</div>
            <div className="font-display text-2xl font-bold">{after}</div>
          </div>
          <div className="mt-2 text-xs text-accent-text">Variance: 0 units</div>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-soft bg-[var(--bg-soft)] p-3">
        <div className="flex items-center justify-between text-[11px] text-muted">
          <span>SKU1001 receipt blocked</span>
          <span className="text-accent-text">+25 units pending</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[var(--bg-soft)]">
          <motion.div
            initial={{ width: '62%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-highlight"
          />
        </div>
        <div className="mt-2 text-[10px] text-muted">Projected reconciliation after batch recovery</div>
      </div>
    </div>
  );
}

function IpmIllustration() {
  const kpis = [
    { label: 'Incidents', value: '500', tone: 'text-accent-text' },
    { label: 'Resolution', value: '95%', tone: 'text-accent-text' },
    { label: 'SLA', value: '98%', tone: 'text-accent-text' },
    { label: 'PB Logs', value: '4', tone: 'text-accent-text' },
  ];
  const trend = [42, 48, 55, 60, 58, 52, 47, 40];
  const maxTrend = Math.max(...trend);
  return (
    <div className="relative mx-auto w-full max-w-md rounded-2xl glass p-5">
      <div className="flex items-center justify-between">
        <div className="text-[10px] font-medium uppercase tracking-wider text-muted">
          Incident &amp; Problem Dashboard
        </div>
        <Activity className="h-4 w-4 text-accent-text" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl border border-soft bg-[var(--bg-soft)] p-3">
            <div className="text-[10px] uppercase text-muted">{k.label}</div>
            <div className={`mt-1 font-display text-xl font-bold ${k.tone}`}>{k.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex h-24 items-end justify-between gap-1.5 rounded-xl border border-soft bg-[var(--bg-soft)] p-3">
        {trend.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${(h / maxTrend) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: 'easeOut' }}
            className="flex-1 rounded-t-md bg-gradient-to-t from-primary/70 via-accent/70 to-highlight/70"
          />
        ))}
      </div>
      <div className="mt-2 text-[10px] text-muted">Weekly incident trend (synthetic data)</div>

      <div className="mt-3 flex items-center justify-between rounded-xl border border-soft bg-[var(--bg-soft)] p-3 text-xs">
        <div className="flex items-center gap-2 text-muted">
          <ShieldCheck className="h-4 w-4 text-accent-text" />
          <span>3 permanent fixes deployed</span>
        </div>
        <span className="font-semibold text-accent-text">1 under investigation</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [ipmOpen, setIpmOpen] = useState(false);
  const [rejectShopOpen, setRejectShopOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  return (
    <section id="projects" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              My <span className="gradient-text">Projects</span>
            </>
          }
        />

        <div className="mt-14">
          <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            Featured <span className="gradient-text">Case Studies</span>
          </h3>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mt-6 grid gap-6 overflow-hidden rounded-3xl glass gradient-border p-6 md:grid-cols-[1.1fr_0.9fr] md:p-7"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink">
                  <FlaskConical className="h-3.5 w-3.5" />
                  Simulated Case Study
                </span>
                <span className="text-xs font-medium text-muted">{rmsCaseStudy.type}</span>
              </div>

              <h4 className="font-display text-lg font-semibold leading-snug sm:text-xl">
                {rmsCaseStudy.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted">
                {rmsCaseStudy.overview}
              </p>

              <div className="flex flex-wrap gap-2">
                {rmsCaseStudy.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-soft bg-[var(--bg-soft)] px-3 py-1.5 text-xs font-medium text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-ink shadow-md shadow-primary/20 transition hover:-translate-y-0.5"
                >
                  View Case Study
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>

            <InventoryIllustration />
          </motion.article>
        </div>

        <CaseStudyModal open={open} onClose={() => setOpen(false)} />

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-6 grid gap-6 overflow-hidden rounded-3xl glass gradient-border p-6 md:grid-cols-[1.1fr_0.9fr] md:p-7"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink">
                <ShieldCheck className="h-3.5 w-3.5" />
                Simulated Case Study
              </span>
              <span className="text-xs font-medium text-muted">{ipmCaseStudy.type}</span>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold leading-snug sm:text-xl">
                {ipmCaseStudy.title}
              </h4>
              <p className="mt-1 text-sm font-semibold text-accent-text">{ipmCaseStudy.cardSubtitle}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              {ipmCaseStudy.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {ipmCaseStudy.keyMetrics.map((m) => (
                <span
                  key={m.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-accent-text ring-1 ring-primary/20"
                >
                  {m.value} <span className="font-normal text-muted">{m.label}</span>
                </span>
              ))}
            </div>

            <div className="mt-auto">
              <button
                type="button"
                onClick={() => setIpmOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-ink shadow-md shadow-primary/20 transition hover:-translate-y-0.5"
              >
                View Complete Case Study
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>

          <IpmIllustration />
        </motion.article>

        <IncidentProblemCaseStudyModal open={ipmOpen} onClose={() => setIpmOpen(false)} />

        <div className="mt-14">
          <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            Data Analytics <span className="gradient-text">Projects</span>
          </h3>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mt-6 grid gap-6 overflow-hidden rounded-3xl glass gradient-border p-6 md:grid-cols-[1.1fr_0.9fr] md:p-7"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink">
                  <FileSpreadsheet className="h-3.5 w-3.5" />
                  {rejectShopCaseStudy.category}
                </span>
                <span className="text-xs font-medium text-muted">{rejectShopCaseStudy.projectType}</span>
              </div>

              <div>
                <h4 className="font-display text-lg font-semibold leading-snug sm:text-xl">
                  {rejectShopCaseStudy.title}
                </h4>
                <p className="mt-1 text-sm font-semibold text-accent-text">{rejectShopCaseStudy.cardSubtitle}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {rejectShopCaseStudy.cardDescription}
              </p>
              <p className="text-xs font-medium tracking-wide text-muted">{rejectShopCaseStudy.academicNote}</p>

              <div className="flex flex-wrap gap-2">
                {rejectShopCaseStudy.cardBadges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent-text ring-1 ring-accent/20"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setRejectShopOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-ink shadow-md shadow-primary/20 transition hover:-translate-y-0.5"
                >
                  View Project
                  <ExternalLink className="h-4 w-4" />
                </button>
                <a
                  href={rejectShopCaseStudy.workbookPath}
                  download={rejectShopCaseStudy.workbookFileName}
                  className="inline-flex items-center gap-2 rounded-xl border border-soft bg-[var(--bg-soft)] px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-text"
                >
                  Download Excel Dashboard
                  <Download className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setDashboardOpen(true)}
                aria-label="View dashboard screenshot enlarged"
                className="group relative block w-full overflow-hidden rounded-2xl border border-soft bg-[var(--bg-soft)] transition hover:border-accent/40"
              >
                <img
                  src={rejectShopDashboardImage.src}
                  alt={rejectShopDashboardImage.alt}
                  loading="lazy"
                  className="w-full"
                />
                <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white opacity-0 transition group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </button>
              <button
                type="button"
                onClick={() => setDashboardOpen(true)}
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-soft bg-[var(--bg-soft)] px-4 py-2 text-xs font-semibold transition hover:border-accent/40 hover:text-accent-text"
              >
                <Maximize2 className="h-3.5 w-3.5" />
                View Dashboard
              </button>
            </div>
          </motion.article>
        </div>

        <RejectShopCaseStudyModal open={rejectShopOpen} onClose={() => setRejectShopOpen(false)} />
        <DashboardLightbox
          open={dashboardOpen}
          onClose={() => setDashboardOpen(false)}
          src={rejectShopDashboardImage.src}
          alt={rejectShopDashboardImage.alt}
        />
      </div>
    </section>
  );
}
