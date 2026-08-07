import { motion } from "framer-motion";
import { ClipboardCheck, GraduationCap, FolderGit2 } from "lucide-react";
import SectionTag from "../components/SectionTag";

function LinkedInGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const factors = [
  {
    icon: ClipboardCheck,
    label: "Assessments",
    detail: "Every skill assessment you take and pass.",
    points: 40,
  },
  {
    icon: GraduationCap,
    label: "Cohort Completion",
    detail: "Structured, mentor-led cohorts you finish.",
    points: 20,
  },
  {
    icon: FolderGit2,
    label: "Project Portfolio",
    detail: "Real projects reviewed for quality and impact.",
    points: 25,
  },
  {
    icon: LinkedInGlyph,
    label: "LinkedIn Branding",
    detail: "How well your public profile represents your work.",
    points: 15,
  },
];

const SCORE = 87;
const RADIUS = 70;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function EmployabilityIndex() {
  return (
    <section id="employability" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionTag color="rose">Employability Index</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            One score that tells companies you're worth hiring.
          </h2>
          <p className="mt-5 max-w-lg text-white/65">
            After every assessment you take and every cohort you complete, Trafy
            scores you out of 100, based on your assessments, your projects,
            and your LinkedIn branding. Companies use your Employability Index
            to screen you in, before they ever see a resume.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {factors.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-mild text-ink/80">
                  <f.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">{f.label}</p>
                  <p className="text-xs text-white/50">{f.detail}</p>
                </div>
                <span className="shrink-0 font-display text-sm font-bold text-white/40">
                  {f.points} pts
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-white/10 bg-[#14123a] px-8 py-12 text-center"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-rose/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-green-hard/20 blur-3xl" />

          <p className="relative text-xs font-semibold uppercase tracking-widest text-white/40">
            Your Employability Index
          </p>

          <div className="relative">
            <svg width="180" height="180" viewBox="0 0 180 180" className="-rotate-90">
              <circle cx="90" cy="90" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
              <motion.circle
                cx="90"
                cy="90"
                r={RADIUS}
                fill="none"
                stroke="url(#gaugeGradient)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                initial={{ strokeDashoffset: CIRCUMFERENCE }}
                whileInView={{ strokeDashoffset: CIRCUMFERENCE * (1 - SCORE / 100) }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              />
              <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff5ec4" />
                  <stop offset="100%" stopColor="#4c56e8" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-4xl font-bold text-white">{SCORE}</span>
              <span className="text-[11px] font-medium text-white/40">out of 100</span>
            </div>
          </div>

          <div className="relative rounded-full bg-green-hard px-4 py-1.5 text-xs font-semibold text-white">
            Excellent · Top 12% of applicants
          </div>

          <p className="relative max-w-[240px] text-xs leading-relaxed text-white/45">
            80+ unlocks Trafy's Placement Assurance. See how below.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
