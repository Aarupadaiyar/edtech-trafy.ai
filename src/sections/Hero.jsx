import LightPillar from '../components/LightPillar';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden border-b border-[var(--ink-line)]">
      <div className="absolute inset-0">
        <LightPillar
          topColor="#d4ff5c"
          bottomColor="#b6eb30"
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
          COHORT 04 · APPLICATIONS OPEN
        </div>

        <h1 className="font-display font-semibold text-[12vw] leading-[0.95] md:text-[6.2vw] md:leading-[0.98] tracking-tight max-w-5xl">
          We Don't Teach AI.
          <br />
          <span className="text-[var(--amber)]">We Build</span> AI Engineers.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-[var(--mist)] leading-relaxed">
          Build 48 real AI applications, complete 8 industry-grade projects, and graduate
          with proof of what you can build — not just what you've studied.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="https://forms.gle/AJ2ujkYJBDRVKTug6" target="_blank" rel="noopener noreferrer" className="cursor-target inline-flex items-center gap-2 bg-[var(--amber)] text-[var(--ink)] font-display font-semibold px-7 py-4 rounded-full hover:brightness-110 transition">
            Join the Cohort
          </a>
          <a href="#curriculum" className="cursor-target inline-flex items-center gap-2 border border-[var(--ink-line)] text-[var(--bone)] font-mono text-sm px-7 py-4 rounded-full hover:border-[var(--amber)] hover:text-[var(--amber)] transition">
            Checkout the Curriculum →
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
