import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTag from "../components/SectionTag";

const milestones = [
  { year: "2022", event: "Trafy founded on August 11, with a vision to make AI hiring merit-based and borderless." },
  { year: "2023", event: "First cohort of assessed AI talent matched with global companies." },
  { year: "2024", event: "Trafy Assessment launched: AI-powered, skill-based candidate evaluation." },
  { year: "2025", event: "Trafy Cohort and the Employability Index launched." },
  { year: "2026", event: "Turning 4, and now serving AI talent and companies across 30+ countries." },
];

export default function CompanyHistory() {
  return (
    <section id="story" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionTag color="blue">Our Story</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Founded August 11, 2022. Four years in, still building.
          </h2>
          <p className="mt-5 max-w-md text-white/65">
            Trafy started with one belief: skills should matter more than
            pedigree or postcode. Four years later, that belief is a platform
            connecting global AI talent with international employers every
            day.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white transition-colors hover:text-rose"
          >
            Read our full story →
          </Link>
        </div>

        <div className="flex flex-col gap-0">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year + i}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex gap-5 pb-7 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-hard text-[11px] font-bold text-white">
                  '{m.year.slice(-2)}
                </div>
                {i < milestones.length - 1 && <div className="w-px flex-1 bg-white/10" />}
              </div>
              <div className="pt-1.5">
                <p className="text-sm leading-relaxed text-white/70">{m.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
