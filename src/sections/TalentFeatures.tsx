import { Globe2, Building2, Gauge, LayoutTemplate } from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import SectionTag from "../components/SectionTag";

const features = [
  {
    icon: Globe2,
    title: "Remote-First, Global",
    description:
      "Work from anywhere in the world for AI-first companies. No relocation, no time-zone lock-in.",
    accent: "#e7e9fb",
  },
  {
    icon: Building2,
    title: "Top AI Tech Companies",
    description:
      "Get matched with vetted AI and deep-tech companies actively hiring global talent.",
    accent: "#ffe3f5",
  },
  {
    icon: Gauge,
    title: "Trafy Assessment Score",
    description:
      "A transparent skill score that shows companies exactly what you can do, improving your acceptance rate.",
    accent: "#fff1d9",
  },
  {
    icon: LayoutTemplate,
    title: "Free Portfolio Website",
    description:
      "Every candidate gets an auto-generated portfolio site to showcase projects and assessment scores.",
    accent: "#e1e7ff",
  },
];

export default function TalentFeatures() {
  return (
    <section id="talent" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <SectionTag>For Talent</SectionTag>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Everything you need to work remote for the best AI teams.
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <FeatureCard key={f.title} {...f} index={i} />
        ))}
      </div>
    </section>
  );
}
