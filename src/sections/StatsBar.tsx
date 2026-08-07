import { motion } from "framer-motion";

const stats = [
  { value: "10,000+", label: "Verified AI professionals" },
  { value: "30+", label: "Countries represented" },
  { value: "100%", label: "Placement above 80 Index" },
  { value: "4 yrs", label: "Building the AI talent layer" },
];

export default function StatsBar() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center sm:text-left"
          >
            <p className="bg-gradient-to-r from-white to-white/60 bg-clip-text font-display text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-widest text-white/40 sm:text-[11px]">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
