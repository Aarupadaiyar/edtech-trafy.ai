export default function CareerOutcome() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--line)] relative overflow-hidden bg-[var(--cream)]">
      <div className="container-x">
        <div className="eyebrow mb-4 text-[var(--ink)]">Career Outcome</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05] text-[var(--ink)]">
          Your Employability Index Hits 95+ by Week 8.
        </h2>
        <p className="mt-5 text-[var(--ink)] max-w-2xl">
          It is the one number every hiring partner sees. A live, portfolio backed score of what you
          can actually build, updated after every shipped project. This is what replaces the certificate.
        </p>
      </div>

      <div className="mt-16 container-x">
        <div className="rounded-3xl border border-[var(--lime-deep)] bg-[var(--paper)] p-8 md:p-14">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
            <div>
              <div className="font-mono text-xs text-[var(--ink)] uppercase tracking-widest mb-2">Live Employability Index</div>
              <div className="font-display text-8xl md:text-9xl text-[var(--lime-deep)] leading-none">
                95<span className="text-4xl align-top">+</span><span className="text-3xl text-[var(--ink)]">/100</span>
              </div>
              <div className="font-mono text-[11px] text-[var(--lime-deep)] mt-3">↑ 42 pts since Week 1</div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 font-mono text-xs text-[var(--ink)]">
              <div className="border-l-2 border-[var(--line)] pl-4">
                <div className="text-[var(--ink)] font-display text-2xl mb-1">8/8</div>
                major projects shipped and mentor reviewed
              </div>
              <div className="border-l-2 border-[var(--line)] pl-4">
                <div className="text-[var(--ink)] font-display text-2xl mb-1">48/48</div>
                mini builds completed
              </div>
              <div className="border-l-2 border-[var(--line)] pl-4">
                <div className="text-[var(--ink)] font-display text-2xl mb-1">12</div>
                production tools mastered
              </div>
              <div className="border-l-2 border-[var(--line)] pl-4">
                <div className="text-[var(--ink)] font-display text-2xl mb-1">12</div>
                hiring partners viewing this profile
              </div>
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-[var(--line)] grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-display text-lg text-[var(--ink)] mb-2">How it is calculated</div>
              <p className="text-sm text-[var(--ink)] leading-relaxed">
                Every mentor reviewed project, mini build, and tool you ship adds points. Watching a
                lecture does not move the number. Only shipped, working code does.
              </p>
            </div>
            <div>
              <div className="font-display text-lg text-[var(--ink)] mb-2">What recruiters see</div>
              <p className="text-sm text-[var(--ink)] leading-relaxed">
                A live link to your score and portfolio, not a static PDF. Hiring partners can open it,
                click into any project, and read the code before they ever call you.
              </p>
            </div>
            <div>
              <div className="font-display text-lg text-[var(--ink)] mb-2">Why it moves every week</div>
              <p className="text-sm text-[var(--ink)] leading-relaxed">
                The score updates after every mentor review, so by week 8 it reflects exactly what you
                can build today, not a grade you earned once and forgot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
