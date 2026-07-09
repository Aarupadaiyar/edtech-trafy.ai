import { useState } from 'react';
import { curriculum, finalDeliverables } from '../data/curriculum';

function Row({ week, isOpen, onToggle }) {
  return (
    <div className="border-b border-[var(--ink-line)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <div className="flex items-center gap-5 min-w-0">
          <span className="font-mono text-xs text-[var(--amber)] shrink-0">WK.{String(week.week).padStart(2, '0')}</span>
          <span className="font-display text-lg md:text-2xl truncate group-hover:text-[var(--amber)] transition-colors">{week.title}</span>
        </div>
        <span className={`font-mono text-lg shrink-0 transition-transform ${isOpen ? 'rotate-45 text-[var(--amber)]' : 'text-[var(--mist)]'}`}>+</span>
      </button>

      <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'} overflow-hidden`}>
        <div className="min-h-0 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--mist)] mb-3">Topics</div>
            <div className="flex flex-wrap gap-1.5">
              {week.concepts.map(c => (
                <span key={c} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-[var(--ink-line)] text-[var(--mist)]">{c}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--mist)] mb-3">Projects</div>
            <ul className="text-sm text-[var(--bone)] space-y-1.5">
              {week.micro.slice(0, 3).map(p => <li key={p} className="text-[var(--mist)]">· {p}</li>)}
              <li className="text-[var(--bone)] pt-1">→ {week.major.name}</li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--mist)] mb-3">Outcome</div>
            <p className="text-sm text-[var(--mist)] leading-relaxed">{week.outcome}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Curriculum() {
  const [open, setOpen] = useState(0);
  return (
    <section id="curriculum" className="py-24 md:py-32 border-b border-[var(--ink-line)]">
      <div className="container-x">
        <div className="eyebrow mb-4">Full Curriculum</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          Every week, logged like a build.
        </h2>
        <p className="mt-5 text-[var(--mist)] max-w-xl">
          Expand a week to see the topic stack, projects, and what it proves by the end.
        </p>

        <div className="mt-14">
          {curriculum.map((week, i) => (
            <Row key={week.week} week={week} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>

        <div className="mt-20 rounded-2xl border-2 border-[var(--amber)] bg-[var(--ink-raised)] p-8 md:p-10">
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--amber)] mb-6">Final Deliverables for Graduation Day</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {finalDeliverables.map(d => (
              <div key={d.label}>
                <div className="font-display text-lg mb-1">{d.label}</div>
                <div className="text-sm text-[var(--mist)]">{d.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
