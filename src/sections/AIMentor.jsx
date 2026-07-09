const flow = [
  'Live Session With Your Mentor',
  'Same Day Build',
  'AI Reviews Every Commit',
  'Flags Before You Ship',
  'Next Live Session, Ahead'
];

export default function AIMentor() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--ink-line)]">
      <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
        <div>
          <div className="eyebrow mb-4">Live Mentor Sessions, Reviewed by AI</div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl leading-[1.05]">
            A real mentor teaches you live, every day.
          </h2>
          <p className="mt-6 text-[var(--mist)] text-lg leading-relaxed max-w-md">
            Your mentor runs a live one hour session every weekday. Between sessions, an AI code
            reviewer checks every commit you push and flags what a hiring engineer would flag, so
            you get feedback in seconds instead of waiting for the next class.
          </p>
        </div>

        <div className="relative rounded-2xl border-2 border-[var(--amber)] bg-[var(--ink-raised)] p-8 md:p-10 font-mono">
          <div className="text-[11px] text-[var(--mist)] mb-6">// mentor.log</div>
          <div className="flex flex-col">
            {flow.map((step, i) => (
              <div key={step} className="flex items-start gap-4">
                <div className="flex flex-col items-center pt-1">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: i === 2 ? 'var(--amber)' : 'var(--circuit)' }} />
                  {i < flow.length - 1 && <span className="w-px flex-1 my-1 h-8" style={{ background: 'var(--ink-line)' }} />}
                </div>
                <div className="pb-6">
                  <div className="text-sm text-[var(--bone)]">{step}</div>
                  {i === 2 && <div className="text-[11px] text-[var(--mist)] mt-1">response time: seconds, not a full day</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
