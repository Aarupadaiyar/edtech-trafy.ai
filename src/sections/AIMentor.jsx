const flow = ['AI Mentor', 'Instant Feedback', 'Code Review', 'Project Suggestions', 'Learning Path'];

export default function AIMentor() {
  return (
    <section data-splash-zone className="py-24 md:py-32 border-b border-[var(--ink-line)]">
      <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
        <div>
          <div className="eyebrow mb-4">Not Live Classes</div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl leading-[1.05]">
            Your mentor is on call at 2am, not on a schedule.
          </h2>
          <p className="mt-6 text-[var(--mist)] text-lg leading-relaxed max-w-md">
            Live classes lock learning to a timetable. Trafy AI's mentor doesn't —
            it reviews every commit, flags what a hiring engineer would flag, and
            resequences your path the moment you fall behind or pull ahead.
          </p>
        </div>

        <div className="relative rounded-2xl border border-[var(--ink-line)] bg-[var(--ink-raised)] p-8 md:p-10 font-mono">
          <div className="text-[11px] text-[var(--mist)] mb-6">// mentor.log</div>
          <div className="flex flex-col">
            {flow.map((step, i) => (
              <div key={step} className="flex items-start gap-4">
                <div className="flex flex-col items-center pt-1">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: i === 1 ? 'var(--amber)' : 'var(--circuit)' }} />
                  {i < flow.length - 1 && <span className="w-px flex-1 my-1 h-8" style={{ background: 'var(--ink-line)' }} />}
                </div>
                <div className="pb-6">
                  <div className="text-sm text-[var(--bone)]">{step}</div>
                  {i === 1 && <div className="text-[11px] text-[var(--mist)] mt-1">response time: seconds, not office hours</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
