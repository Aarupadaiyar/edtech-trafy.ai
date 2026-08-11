import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import Button from "../components/Button";
import SectionTag from "../components/SectionTag";

const perks = [
  "A dedicated 1:1 mentor matched to your career track",
  "Weekly personal check-ins and a custom growth roadmap",
  "Priority review of your Employability Index and portfolio",
  "Hands-on placement assistance until you're hired",
];

export default function PremiumMentorship() {
  return (
    <section id="premium" className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-rose/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-green-hard/15 blur-3xl" />

        <div className="relative grid gap-12 p-10 lg:grid-cols-2 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionTag color="rose">Trafy Premium</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Personalised 1:1 mentorship, all the way to placement.
            </h2>
            <p className="mt-5 max-w-md text-white/65">
              Trafy Premium pairs you with a dedicated mentor for personalised
              guidance and hands-on placement assistance, for talent who want
              a human in their corner, not just a platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="mailto:aaru@trafy.ai" variant="primary">
                Talk to a Mentor
              </Button>
              <Button href="https://trafy-assessment.vercel.app/" variant="outline">
                Explore Trafy Premium
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-green-light p-8"
          >
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <Crown size={16} className="text-green-hard" />
              </div>
              <span className="font-display text-sm font-bold text-white">Premium Membership</span>
            </div>

            <ul className="flex flex-col gap-4">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-hard">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-white/70">{perk}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
