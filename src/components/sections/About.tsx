import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/content';

export default function About() {
  return (
    <section id="about" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Turning enterprise experience into <span className="gradient-text">analytical insight</span>
            </>
          }
        />

        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="glass gradient-border rounded-3xl p-7 sm:p-9"
          >
            {profile.about.split('\n\n').map((para, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed text-muted sm:text-lg ${
                  i > 0 ? 'mt-4' : ''
                }`}
              >
                {para}
              </p>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
