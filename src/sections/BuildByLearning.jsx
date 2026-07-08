import CardSwap, { Card } from '../components/CardSwap';

const steps = [
  { tag: '01', title: 'Build', body: 'Every day. Before any theory, there is a project brief open in your editor.' },
  { tag: '02', title: 'Learn', body: "Exactly what today's project requires — nothing ahead of need, nothing wasted." },
  { tag: '03', title: 'Improve', body: 'Your AI mentor reviews the build — code quality, structure, and what a hiring engineer would flag.' },
  { tag: '04', title: 'Repeat', body: 'Until building stops feeling like an event and starts feeling like a default.' }
];

export default function BuildByLearning() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--ink-line)] overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow mb-4">Our Philosophy</div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl leading-[1.05]">
              Build by Learning<span className="align-super text-lg">™</span>
            </h2>
            <p className="mt-6 text-[var(--mist)] text-lg max-w-md leading-relaxed">
              We flipped the classroom upside down. Theory doesn't come first —
              it shows up exactly when a project demands it, then gets locked in
              by shipping something real.
            </p>
            <div className="mt-10 hidden lg:flex flex-col gap-3 font-mono text-sm text-[var(--mist)]">
              {steps.map(s => (
                <div key={s.tag} className="flex items-center gap-3">
                  <span className="text-[var(--amber)]">{s.tag}</span>
                  <span className="w-6 h-px bg-[var(--ink-line)]" />
                  <span>{s.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[440px] md:h-[500px]">
            <CardSwap cardDistance={50} verticalDistance={56} delay={4200} pauseOnHover width={380} height={280} skewAmount={4}>
              {steps.map(s => (
                <Card key={s.tag}>
                  <div className="h-full w-full flex flex-col justify-between p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[var(--amber)]">{s.tag}</span>
                      <span className="w-2 h-2 rounded-full bg-[var(--shipped)]" />
                    </div>
                    <div>
                      <h3 className="font-display text-3xl mb-3">{s.title}</h3>
                      <p className="text-[var(--mist)] text-sm leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
