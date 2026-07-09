import { useState } from 'react';
import { projects } from '../data/projects';

export default function Projects() {
  const [openIdx, setOpenIdx] = useState(null);
  const opened = openIdx !== null ? projects[openIdx] : null;

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-[var(--line)] bg-[var(--cream)]">
      <div className="container-x">
        <div className="eyebrow mb-4 text-[var(--charcoal)]">What You'll Ship</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05] text-[var(--ink)]">
          Ship 8 Production Projects in 8 Weeks.
        </h2>
        <p className="mt-5 text-[var(--charcoal)] max-w-xl">
          One major build every week, from an AI assistant in week one to a production grade
          system by week seven. Click a project to see the full breakdown.
        </p>
      </div>

      <div className="mt-14 container-x">
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0">
          {projects.map((project, i) => (
            <button
              key={project.id}
              onClick={() => setOpenIdx(i)}
              className="text-left shrink-0 w-[280px] snap-start rounded-2xl border border-[var(--line)] bg-[var(--paper)] overflow-hidden hover:border-[var(--ink)] transition"
            >
              <div className="h-36 w-full overflow-hidden bg-[var(--navy-soft)]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="font-mono text-[11px] text-[var(--mist)] mb-2">{project.week}</div>
                <h3 className="font-display text-lg text-[var(--ink)] mb-3 leading-snug">{project.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[var(--terracotta-soft)] text-[var(--terracotta)] uppercase tracking-wide">
                    {project.difficulty}
                  </span>
                  {project.stack.slice(0, 2).map(t => (
                    <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-[var(--line)] text-[var(--charcoal)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {opened && (
        <div
          className="fixed inset-0 z-[80] flex items-end md:items-center justify-center bg-[var(--ink)]/70 backdrop-blur-sm p-4"
          onClick={() => setOpenIdx(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-[var(--line)] bg-[var(--paper)] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="h-40 w-full overflow-hidden">
              <img src={opened.image} alt={opened.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-7 md:p-9">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[var(--lime-deep)]">{opened.week} · {opened.difficulty}</span>
                <button onClick={() => setOpenIdx(null)} className="font-mono text-xs text-[var(--mist)] hover:text-[var(--ink)]">close ✕</button>
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-3 text-[var(--ink)]">{opened.title}</h3>
              <p className="text-[var(--charcoal)] text-sm leading-relaxed mb-6">{opened.description}</p>

              <div className="grid sm:grid-cols-3 gap-6 font-mono text-xs">
                <div>
                  <div className="text-[var(--mist)] uppercase tracking-widest mb-2">Time</div>
                  <div className="text-[var(--ink)]">{opened.time}</div>
                </div>
                <div>
                  <div className="text-[var(--mist)] uppercase tracking-widest mb-2">Tech Stack</div>
                  <div className="flex flex-wrap gap-1.5">
                    {opened.stack.map(t => <span key={t} className="px-2 py-0.5 rounded-full border border-[var(--line)] text-[var(--charcoal)]">{t}</span>)}
                  </div>
                </div>
                <div>
                  <div className="text-[var(--mist)] uppercase tracking-widest mb-2">Skills Unlocked</div>
                  <div className="flex flex-wrap gap-1.5">
                    {opened.skills.map(t => <span key={t} className="px-2 py-0.5 rounded-full bg-[var(--navy-soft)] text-[var(--navy)]">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
