import { motion } from "framer-motion";
import { Video, FileEdit, UserCheck, Handshake } from "lucide-react";
import Button from "../components/Button";

const support = [
  {
    icon: Video,
    title: "Mock Interviews",
    description: "Practice with real hiring-bar interviewers before it counts.",
  },
  {
    icon: FileEdit,
    title: "Resume & LinkedIn Polish",
    description: "1:1 review of your resume, portfolio and public branding.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Placement Team",
    description: "A human who tracks your applications, not a bot.",
  },
  {
    icon: Handshake,
    title: "Direct Employer Intros",
    description: "Warm introductions into our vetted hiring network.",
  },
];

export default function PlacementAssurance() {
  return (
    <section id="placement" className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.06]" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-rose/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-green-hard" />
              Training &amp; Placement Assistance
            </span>

            <h2 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
              <span className="bg-gradient-to-r from-rose to-green-hard bg-clip-text text-transparent">
                100% placement
              </span>
              <br />
              guaranteed.
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/60">
              Cross an Employability Index of{" "}
              <span className="font-semibold text-white">80+</span> and Trafy
              guarantees your placement, backed by real training, real
              mentors, and a placement team that doesn't stop until you're
              hired.
            </p>

            <div className="mt-8">
              <Button href="https://app.trafy.ai" variant="primary">
                Check My Eligibility
              </Button>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {support.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <s.icon size={18} className="text-white" />
                </div>
                <h3 className="font-display text-sm font-bold">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/50">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
