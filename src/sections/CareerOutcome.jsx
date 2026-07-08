const flow = [
  { label: 'Build', detail: '48 shipped projects, weekly' },
  { label: 'Portfolio', detail: 'Live, deployed, documented' },
  { label: 'Employability Index', detail: 'Your score, updated after every mission', hero: true },
  { label: 'Company Visibility', detail: 'Surfaced to hiring partners actively scouting builders' },
  { label: 'Interview', detail: 'Walk in with a demo, not a certificate' }
];

export default function CareerOutcome() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--ink-line)] relative overflow-hidden">
      <div className="container-x">
        <div className="eyebrow mb-4">Career Outcome</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          We don't sell placement assistance. We build your Employability Index.
        </h2>
        <p className="mt-5 text-[var(--mist)] max-w-2xl">
          Every mission you ship raises one number — a live, portfolio-backed score of what
          you can actually build, visible to the companies looking for builders instead of certificates.
        </p>
      </div>

      <div className="mt-16 container-x">
        <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-2">
          {flow.map((step, i) => (
            <div key={step.label} className="flex md:items-center flex-1">
              <div
                className={`w-full rounded-2xl border p-6 md:p-7 ${step.hero ? 'border-[var(--amber)] bg-gradient-to-br from-[var(--amber)]/15 to-transparent' : 'border-[var(--ink-line)] bg-[var(--ink-raised)]'}`}
              >
                <div className="font-mono text-[11px] text-[var(--mist)] mb-2">{String(i + 1).padStart(2, '0')}</div>
                <div className={`font-display text-xl mb-1 ${step.hero ? 'text-[var(--amber)]' : 'text-[var(--bone)]'}`}>{step.label}</div>
                <div className="text-xs text-[var(--mist)] leading-relaxed">{step.detail}</div>
              </div>
              {i < flow.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-8 shrink-0 text-[var(--ink-line)]">→</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[var(--ink-line)] bg-[var(--ink-raised)] p-8 md:p-12 grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-center">
          <div>
            <div className="font-mono text-xs text-[var(--mist)] uppercase tracking-widest mb-2">Live Employability Index</div>
            <div className="font-display text-7xl md:text-8xl text-[var(--amber)] leading-none">87<span className="text-3xl text-[var(--mist)]">/100</span></div>
            <div className="font-mono text-[11px] text-[var(--shipped)] mt-2">↑ 34 pts since Week 1</div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 font-mono text-xs text-[var(--mist)]">
            <div>
              <div className="text-[var(--bone)] font-display text-2xl mb-1">8/8</div>
              major projects shipped
            </div>
            <div>
              <div className="text-[var(--bone)] font-display text-2xl mb-1">48/48</div>
              mini builds completed
            </div>
            <div>
              <div className="text-[var(--bone)] font-display text-2xl mb-1">12</div>
              hiring partners viewing this profile
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
