import LightPillar from '../components/LightPillar';
import { cohortInfo } from '../data/cohort';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden border-b border-[var(--ink-line)]">
      <div className="absolute inset-0">
        <LightPillar
          topColor="#e2ffa0"
          bottomColor="#c6ff33"
          intensity={1.05}
          rotationSpeed={0.6}
          glowAmount={0.006}
          pillarWidth={1.7}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={0}
          interactive
          mixBlendMode="screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--ink)]/40 to-[var(--ink)]" />
      </div>

      <div className="container-x relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="eyebrow mb-6 flex items-center gap-3">
          <span className="w-6 h-px bg-[var(--amber)]" />
          {cohortInfo.cohortLabel} · APPLICATIONS OPEN
        </div>

        <h1 className="font-display font-semibold text-[12vw] leading-[0.95] md:text-[6.2vw] md:leading-[0.98] tracking-tight max-w-5xl">
          We Don't Teach AI.
          <br />
          <span className="text-[var(--amber)]">We Build</span> AI Engineers.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-[var(--mist)] leading-relaxed">
          In 8 weeks of daily live mentor led sessions, build 48 real AI applications and ship 8
          industry grade projects, so you graduate with proof of what you can build, not just what
          you've studied.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a href="#get-pricing" className="inline-flex items-center gap-2 bg-[var(--amber)] text-[#0a0b0e] font-display font-semibold px-7 py-4 rounded-full hover:brightness-110 transition">
            Get Cohort Details
          </a>
          <a href="#curriculum" className="font-mono text-sm text-[var(--mist)] hover:text-[var(--amber)] transition underline underline-offset-4 decoration-[var(--ink-line)] hover:decoration-[var(--amber)]">
            Checkout the curriculum →
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 max-w-lg font-mono text-sm">
          <div>
            <div className="text-2xl text-[var(--bone)] font-display">48</div>
            <div className="text-[var(--mist)] text-xs mt-1">apps built</div>
          </div>
          <div>
            <div className="text-2xl text-[var(--bone)] font-display">08</div>
            <div className="text-[var(--mist)] text-xs mt-1">major projects</div>
          </div>
          <div>
            <div className="text-2xl text-[var(--bone)] font-display">01</div>
            <div className="text-[var(--mist)] text-xs mt-1">portfolio, live</div>
          </div>
        </div>
      </div>
    </section>
  );
}
