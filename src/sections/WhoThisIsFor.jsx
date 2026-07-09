const forList = [
  'You can commit 1 hour a day, live, Monday through Friday',
  'You want to break into an AI engineering role, not collect certificates',
  'You have basic coding curiosity, prior AI/ML experience not required',
  'You want a portfolio of 8 shipped, deployed products, not lecture notes'
];

const notForList = [
  'You want a self paced course you can binge whenever',
  'You are only after a certificate to add to a resume',
  'You cannot commit to daily sessions for 8 weeks',
  'You want someone to build it for you'
];

export default function WhoThisIsFor() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--line)] bg-[var(--cream)]">
      <div className="container-x">
        <div className="eyebrow mb-4 text-[var(--charcoal)]">Fit Check</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05] text-[var(--ink)]">
          Who this cohort is for, and who it isn't.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div className="rounded-2xl border border-[var(--lime-deep)] bg-[var(--paper)] p-8 md:p-10">
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--lime-deep)] mb-6">This is for you if</div>
            <div className="flex flex-col gap-4">
              {forList.map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span className="font-mono text-sm text-[var(--lime-deep)] mt-0.5">✓</span>
                  <span className="text-[var(--ink)] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-8 md:p-10">
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--mist)] mb-6">Not for you if</div>
            <div className="flex flex-col gap-4">
              {notForList.map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span className="font-mono text-sm text-[var(--mist)] mt-0.5">✕</span>
                  <span className="text-[var(--charcoal)] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
