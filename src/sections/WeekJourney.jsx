import BuildLedger from '../components/BuildLedger';
import { curriculum } from '../data/curriculum';

const items = curriculum.map(w => ({
  key: w.week,
  tag: `WK.${String(w.week).padStart(2, '0')}`,
  label: w.title,
  sub: w.mission
}));

export default function WeekJourney() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--ink-line)]">
      <div className="container-x">
        <div className="eyebrow mb-4">The Journey</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          Eight weeks. Eight missions. One engineer.
        </h2>
        <p className="mt-5 text-[var(--mist)] max-w-xl">
          Click a week on the build rail to see what ships that week.
        </p>

        <div className="mt-16">
          <BuildLedger
            items={items}
            renderDetail={(item, i) => {
              const w = curriculum[i];
              return (
                <div className="rounded-2xl border border-[var(--ink-line)] bg-[var(--ink-raised)] p-8 md:p-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
                    <h3 className="font-display text-2xl md:text-3xl">{w.title}</h3>
                    <span className="font-mono text-xs text-[var(--amber)]">{w.mission}</span>
                  </div>
                  <p className="text-[var(--mist)] mb-8">{w.goal}</p>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--mist)] mb-3">Weekend Build</div>
                      <div className="font-display text-xl mb-1">{w.major.name}</div>
                      <div className="text-sm text-[var(--mist)] mb-3">{w.major.subtitle}</div>
                      <div className="flex flex-wrap gap-2">
                        {w.major.features.slice(0, 4).map(f => (
                          <span key={f} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-[var(--ink-line)] text-[var(--mist)]">{f}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--mist)] mb-3">Skills Unlocked</div>
                      <div className="flex flex-wrap gap-2">
                        {w.skills.map(s => (
                          <span key={s} className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-[var(--ink)] border border-[var(--circuit)]/40 text-[var(--circuit)]">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    </section>
  );
}
