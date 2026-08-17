import { motion } from "framer-motion";
import Button from "../components/Button";

export default function CTASection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-20 text-center sm:px-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.08]" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-rose/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-green-hard/20 blur-3xl" />

        <div className="relative">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Score 80+. Get placed. Guaranteed.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Join 10,000+ AI professionals already assessed, scored, and matched
            with the world's top AI teams, free to start, no relocation
            required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="https://trafyassessment.vercel.app/" variant="primary">
              Get My Employability Index
            </Button>
            <Button href="mailto:hello@trafy.ai" variant="outline">
              Talk to Us
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
