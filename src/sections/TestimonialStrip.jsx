import { testimonials } from '../data/testimonials';

// Generic, blurred stock photos, used purely as decorative avatars since we
// don't have real headshots yet. Blurred so they don't misrepresent anyone's
// actual likeness.
const avatarPhotos = [
  'https://i.pravatar.cc/150?img=12',
  'https://i.pravatar.cc/150?img=33',
  'https://i.pravatar.cc/150?img=47'
];

export default function TestimonialStrip() {
  return (
    <section className="py-16 md:py-20 border-b border-[var(--ink-line)]">
      <div className="container-x mb-8">
        <div className="eyebrow mb-4">Where Builders Land</div>
        <h2 className="font-display font-semibold text-3xl md:text-4xl max-w-2xl leading-[1.1]">
          Real people. Real offers.
        </h2>
      </div>

      <div className="container-x flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory md:overflow-visible -mx-6 px-6 md:mx-0 md:px-0">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="shrink-0 w-[85vw] sm:w-[360px] md:w-auto snap-start rounded-2xl border border-[var(--ink-line)] bg-[var(--ink-raised)] p-6 md:p-7 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-[var(--amber)] overflow-hidden shrink-0">
                <img
                  src={avatarPhotos[i % avatarPhotos.length]}
                  alt=""
                  className="w-full h-full object-cover scale-110 blur-[2px]"
                />
              </div>
              <div className="min-w-0">
                <div className="font-display text-base truncate">{t.name}</div>
                <div className="font-mono text-[11px] text-[var(--mist)] truncate">
                  {t.role} @ {t.company}
                </div>
              </div>
            </div>

            <div className="font-display text-4xl md:text-5xl text-[var(--amber)] leading-none mb-5">
              {t.package}
            </div>

            <p className="text-sm text-[var(--bone)] leading-relaxed">"{t.quote}"</p>
          </div>
        ))}
      </div>

      <div className="container-x mt-6">
        <p className="font-mono text-[11px] text-[var(--mist)]">
          Individual results vary based on prior experience, role, and market conditions.
        </p>
      </div>
    </section>
  );
}
