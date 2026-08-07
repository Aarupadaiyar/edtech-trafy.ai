import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  accent?: string;
};

export default function FeatureCard({ icon: Icon, title, description, index = 0, accent = "#e7e9fb" }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-white/20"
    >
      <div
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ backgroundColor: accent }}
      >
        <Icon size={20} className="text-ink" strokeWidth={2} />
      </div>
      <h3 className="mb-2 font-display text-lg font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/60">{description}</p>
    </motion.div>
  );
}
