import { useState } from 'react';
import CircularGallery from '../components/CircularGallery';
import { projects } from '../data/projects';

const galleryItems = projects.map(p => ({ image: p.image, text: p.text }));

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [openIdx, setOpenIdx] = useState(null);
  const active = projects[activeIdx];
  const opened = openIdx !== null ? projects[openIdx] : null;

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-[var(--ink-line)]">
      <div className="container-x">
        <div className="eyebrow mb-4">What You'll Ship</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          Eight projects. Eight proofs you can build.
        </h2>
        <p className="mt-5 text-[var(--mist)] max-w-xl">
          Drag to browse, click a project to open its details.
        </p>
      </div>

      <div className="mt-14 h-[420px] md:h-[520px] relative">
        <CircularGallery
          items={galleryItems}
          bend={2.4}
          textColor="#eeeeee"
          borderRadius={0.05}
          onActiveChange={setActiveIdx}
          onItemSelect={setOpenIdx}
        />
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] text-[var(--mist)]">
          {active.week} · {active.title} — click to open
        </div>
      </div>

      {opened && (
        <div
          className="fixed inset-0 z-[80] flex items-end md:items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setOpenIdx(null)}
        >
          <div
            className="cursor-target w-full max-w-2xl rounded-2xl border border-[var(--ink-line)] bg-[var(--ink-raised)] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="h-48 md:h-56 w-full overflow-hidden">
              <img src={opened.image} alt={opened.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-7 md:p-9">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[var(--amber)]">{opened.week} · {opened.difficulty}</span>
                <button onClick={() => setOpenIdx(null)} className="cursor-target font-mono text-xs text-[var(--mist)] hover:text-[var(--bone)]">close ✕</button>
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-3">{opened.title}</h3>
              <p className="text-[var(--mist)] text-sm leading-relaxed mb-6">{opened.description}</p>

              <div className="grid sm:grid-cols-3 gap-6 font-mono text-xs">
                <div>
                  <div className="text-[var(--mist)] uppercase tracking-widest mb-2">Time</div>
                  <div className="text-[var(--bone)]">{opened.time}</div>
                </div>
                <div>
                  <div className="text-[var(--mist)] uppercase tracking-widest mb-2">Tech Stack</div>
                  <div className="flex flex-wrap gap-1.5">
                    {opened.stack.map(t => <span key={t} className="px-2 py-0.5 rounded-full border border-[var(--ink-line)]">{t}</span>)}
                  </div>
                </div>
                <div>
                  <div className="text-[var(--mist)] uppercase tracking-widest mb-2">Skills Unlocked</div>
                  <div className="flex flex-wrap gap-1.5">
                    {opened.skills.map(t => <span key={t} className="px-2 py-0.5 rounded-full bg-[var(--ink)] border border-[var(--circuit)]/40 text-[var(--circuit)]">{t}</span>)}
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
