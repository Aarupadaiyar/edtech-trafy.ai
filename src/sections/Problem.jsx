const traditional = ['Watch Videos', 'Take Notes', 'Pass Quiz', 'Forget Everything'];
const trafy = ['Build Daily', 'Ship Weekly', 'Receive Feedback', 'Graduate With Portfolio'];

function StepList({ steps, active }) {
  return (
    <div className="flex flex-col">
      {steps.map((step, i) => (
        <div key={step}>
          <div className="flex items-center gap-4">
            <span className={`font-mono text-xs w-8 shrink-0 ${active ? 'text-[var(--lime-deep)]' : 'text-[var(--mist)]'}`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              className={`font-display text-xl md:text-2xl font-semibold ${active ? 'text-[var(--ink)]' : 'text-[var(--mist)] line-through decoration-1'}`}
            >
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="ml-[15px] my-2 h-8 w-px bg-[var(--line)]" />
          )}
        </div>
      ))}
    </div>
  );
}

export default function Problem() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--line)] bg-[var(--terracotta-soft)]">
      <div className="container-x">
        <div className="eyebrow mb-4 text-[var(--terracotta)]">The Problem</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05] text-[var(--ink)]">
          Finish the Course. Still Have Nothing to Show a Recruiter.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--charcoal)] mb-4">Traditional Courses</div>
            <div className="relative rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-8 md:p-10 h-full">
              <StepList steps={traditional} active={false} />
            </div>
          </div>

          <div className="flex flex-col h-full min-h-[420px]">
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--lime-deep)] mb-4">Trafy AI</div>
            <div className="relative rounded-2xl border-2 border-[var(--lime-deep)] bg-[var(--paper)] p-8 md:p-10 flex-1 min-h-0 flex flex-col justify-center">
              <StepList steps={trafy} active />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
