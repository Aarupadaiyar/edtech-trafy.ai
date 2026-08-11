import { motion } from "framer-motion";
import { CornerDownRight } from "lucide-react";
import Button from "../components/Button";
import SectionTag from "../components/SectionTag";
import AssessmentMockup from "../components/AssessmentMockup";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="pointer-events-none absolute right-6 top-6 hidden rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white/40 sm:block">
          Remote · Global · AI
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <SectionTag>For AI Talent &amp; Global Employers</SectionTag>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl"
            >
              Connecting AI Developers to{" "}
              <span className="relative inline-block rounded-lg bg-green-hard px-2 py-0.5 text-white">
                Global Employers
              </span>
              <span className="caret h-[0.85em] translate-y-1" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-white/65"
            >
              Get assessed, scored, and matched with top international companies. Work remotely from anywhere.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href="https://trafy-assessment.vercel.app/" variant="primary">
                Get Started as Talent
              </Button>
              <Button href="#companies" variant="light">
                Hire Talent
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 flex items-center gap-2 text-xs font-medium text-white/45"
            >
              <CornerDownRight size={14} />
              No relocation. No borders. Just work.
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-space sm:h-[420px] lg:h-[460px]"
          >
            <div className="pointer-events-none absolute inset-0 bg-stars animate-twinkle" />
            <AssessmentMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
