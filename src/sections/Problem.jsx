const traditional = ['Watch Videos', 'Take Notes', 'Pass Quiz', 'Forget Everything'];
const trafy = ['Build Daily', 'Ship Weekly', 'Receive Feedback', 'Graduate With Portfolio'];

function Flow({ steps, tone }) {
  const active = tone === 'amber';
  return (
    <div className={`relative rounded-2xl border p-8 md:p-10 h-full ${active ? 'border-[var(--amber)]/40 bg-[var(--ink-raised)]' : 'border-[var(--ink-line)] bg-transparent'}`}>
      <div className="flex flex-col">
        {steps.map((step, i) => (
          <div key={step}>
            <div className="flex items-center gap-4">
              <span className={`font-mono text-xs w-8 shrink-0 ${active ? 'text-[var(--amber)]' : 'text-[var(--mist)]'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={`font-display text-xl md:text-2xl ${active ? 'text-[var(--bone)]' : 'text-[var(--mist)] line-through decoration-1'}`}>
                {step}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="ml-[15px] my-2 h-8 w-px" style={{ background: active ? 'var(--amber-dim)' : 'var(--ink-line)' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Problem() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--ink-line)]">
      <div className="container-x">
        <div className="eyebrow mb-4">The Problem</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          Most AI courses end where the learning should begin.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--mist)] mb-4">Traditional Courses</div>
            <Flow steps={traditional} tone="mist" />
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--amber)] mb-4">Trafy AI</div>
            <Flow steps={trafy} tone="amber" />
          </div>
        </div>
      </div>
    </section>
  );
}
