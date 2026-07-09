const before = ['Resume', 'Certificate', 'One Chatbot'];
const after = [
  '48 Mini Projects',
  '8 Major Projects',
  'GitHub, 48 repositories',
  'Live Portfolio',
  '8 Live Deployments',
  'Weekly Technical Blog on Medium & other publications',
  'LinkedIn Posts & Personal Brand'
];

export default function PortfolioBeforeAfter() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--ink-line)] relative overflow-hidden">
      <div className="container-x">
        <div className="eyebrow mb-4">The Difference</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          What "I finished a course" looks like, before and after.
        </h2>
      </div>

      <div className="mt-16 relative">
        <div className="container-x grid md:grid-cols-2 gap-0 md:gap-0 relative">
          <div className="pr-0 md:pr-14 pb-12 md:pb-0">
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--mist)] mb-8">Before Trafy AI</div>
            <div className="flex flex-col gap-5">
              {before.map(item => (
                <div key={item} className="flex items-center gap-4">
                  <span className="font-mono text-lg text-[var(--ink-line)]">✕</span>
                  <span className="font-display text-xl md:text-2xl text-[var(--mist)]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 font-mono text-6xl md:text-7xl text-[var(--ink-line)]">03</div>
            <div className="font-mono text-xs text-[var(--mist)]">things to show a recruiter</div>
          </div>

          <div className="md:pl-14 md:border-l border-[var(--ink-line)] pt-12 md:pt-0">
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--amber)] mb-8">After Trafy AI</div>
            <div className="flex flex-col gap-5">
              {after.map(item => (
                <div key={item} className="flex items-start gap-4">
                  <span className="font-mono text-sm text-[var(--shipped)] mt-1">✓</span>
                  <span className="font-display text-xl md:text-2xl text-[var(--bone)]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 font-mono text-6xl md:text-7xl text-[var(--amber)]">63+</div>
            <div className="font-mono text-xs text-[var(--mist)]">proof points, all public, all yours</div>
          </div>
        </div>
      </div>
    </section>
  );
}
