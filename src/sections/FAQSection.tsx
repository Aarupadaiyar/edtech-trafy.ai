import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionTag from "../components/SectionTag";

const faqs = [
  {
    q: "Is Trafy free to join?",
    a: "Yes. Creating a profile, taking your first assessment, and getting your Employability Index costs nothing. Trafy Premium is optional, for talent who want dedicated 1:1 mentorship.",
  },
  {
    q: "What happens if my Employability Index is below 80?",
    a: "You still get matched to companies, just without the placement guarantee. We'll show you exactly which factors (assessments, cohort completion, projects, LinkedIn branding) to improve to cross 80.",
  },
  {
    q: "How long does the assessment actually take?",
    a: "Most candidates finish in 60–90 minutes. It's adaptive, so the difficulty adjusts to your skill level in real time instead of wasting your time on tasks that are too easy or too hard.",
  },
  {
    q: "Do I need prior professional experience?",
    a: "No. We assess what you can actually do through real tasks, projects, and system design, not job titles or years on a resume. Self-taught engineers score just as high as senior hires.",
  },
  {
    q: "How does the 100% placement guarantee work?",
    a: "Cross an Employability Index of 80+ and our placement team works with you until you're hired: mock interviews, resume and LinkedIn polish, and direct introductions into our vetted hiring network.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-10 text-center">
        <div className="flex justify-center">
          <SectionTag color="blue">Questions</SectionTag>
        </div>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Everything you're wondering, answered.
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-sm font-semibold text-white sm:text-base">
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-white"
                >
                  <Plus size={14} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-white/55">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
