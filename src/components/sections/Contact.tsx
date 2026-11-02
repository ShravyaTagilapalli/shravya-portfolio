import { useState } from 'react';
import { Mail, Linkedin, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/content';

type Errors = Partial<Record<'name' | 'email' | 'subject' | 'message', string>>;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email address.';
    if (!form.subject.trim()) e.subject = 'Please add a subject.';
    if (!form.message.trim()) e.message = 'Please write a message.';
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    const subject = encodeURIComponent(`[Portfolio] ${form.subject}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  const field = (
    name: keyof typeof form,
    label: string,
    type: 'text' | 'email' | 'textarea'
  ) => {
    const err = errors[name];
    const common =
      'w-full rounded-xl border bg-soft/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20';
    const borderCls = err ? 'border-accent/60' : 'border-soft';
    return (
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted">
          {label}
        </label>
        {type === 'textarea' ? (
          <textarea
            rows={5}
            value={form[name]}
            onChange={(e) => setForm({ ...form, [name]: e.target.value })}
            className={`${common} ${borderCls} resize-none`}
          />
        ) : (
          <input
            type={type}
            value={form[name]}
            onChange={(e) => setForm({ ...form, [name]: e.target.value })}
            className={`${common} ${borderCls}`}
          />
        )}
        {err && (
          <span className="flex items-center gap-1 text-xs text-accent">
            <AlertCircle className="h-3 w-3" />
            {err}
          </span>
        )}
      </div>
    );
  };

  return (
    <section id="contact" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's <span className="gradient-text">Connect</span>
            </>
          }
          subtitle="I'm open to opportunities in Data Analytics, Business Intelligence, SQL Reporting, and related fields."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 rounded-3xl glass gradient-border p-7"
          >
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-soft bg-soft/60 p-4 transition hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted">Email</div>
                <div className="font-medium transition group-hover:text-primary">
                  {profile.email}
                </div>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-soft bg-soft/60 p-4 transition hover:-translate-y-0.5 hover:border-accent/40"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted">LinkedIn</div>
                <div className="font-medium transition group-hover:text-accent">
                  View profile
                </div>
              </div>
            </a>

            <div className="mt-auto rounded-2xl border border-soft bg-soft/40 p-4 text-xs leading-relaxed text-muted">
              Prefer email? Clicking the contact form opens your email app
              pre-filled — no message is sent automatically.
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={onSubmit}
            className="flex flex-col gap-4 rounded-3xl glass gradient-border p-7"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {field('name', 'Your Name', 'text')}
              {field('email', 'Your Email', 'email')}
            </div>
            {field('subject', 'Subject', 'text')}
            {field('message', 'Message', 'textarea')}

            {opened && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2 rounded-xl border border-highlight/40 bg-highlight/10 p-3 text-sm text-muted"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-highlight" />
                <span>
                  Your email app should now be open with this message pre-filled.
                  Just press send from there to deliver it.
                </span>
              </motion.div>
            )}

            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-pink"
            >
              <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
              Get in Touch
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
