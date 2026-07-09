const rhythm = [
  { day: 'Mon', label: 'Live Session' },
  { day: 'Tue', label: 'Live Session' },
  { day: 'Wed', label: 'Live Session' },
  { day: 'Thu', label: 'Live Session' },
  { day: 'Fri', label: 'Live Session' },
  { day: 'Sat', label: 'Major Project' },
  { day: 'Sun', label: 'Mentor Review' }
];

export default function DailyBuildSystem() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--line)] bg-[var(--espresso)]">
      <div className="container-x">
        <div className="eyebrow mb-4 text-[var(--lime)]">The Weekly Rhythm</div>
        <h2 className="font-display font-medium text-4xl md:text-6xl max-w-3xl leading-[1.05] text-[var(--paper)]">
          5 Live Sessions a Week. 1 Shipped Project Every Weekend.
        </h2>
        <p className="mt-5 text-[var(--paper)]/70 max-w-xl">
          Monday to Friday, you're live with your mentor for an hour. The weekend is for shipping the week's
          major project and getting it reviewed.
        </p>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block mt-20 relative">
          <div className="absolute left-0 right-0 top-2 h-px bg-[var(--paper)]/15" />
          <div className="relative grid grid-cols-7">
            {rhythm.map(r => {
              const isMajor = r.label === 'Major Project';
              return (
                <div key={r.day} className="flex flex-col items-center text-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      isMajor ? 'bg-[var(--lime)] border-[var(--lime)]' : 'bg-[var(--espresso)] border-[var(--paper)]/40'
                    }`}
                  />
                  <div className="mt-5 font-mono text-xs uppercase tracking-wide text-[var(--paper)]/55">{r.day}</div>
                  <div
                    className={`mt-2 font-display text-sm leading-tight ${
                      isMajor ? 'text-[var(--lime)] font-medium' : 'text-[var(--paper)]'
                    }`}
                  >
                    {r.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden mt-16 flex flex-col">
          {rhythm.map((r, i) => {
            const isMajor = r.label === 'Major Project';
            const isLast = i === rhythm.length - 1;
            return (
              <div key={r.day} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 ${
                      isMajor ? 'bg-[var(--lime)] border-[var(--lime)]' : 'bg-[var(--espresso)] border-[var(--paper)]/40'
                    }`}
                  />
                  {!isLast && <div className="w-px flex-1 bg-[var(--paper)]/15 my-1" />}
                </div>
                <div className={isLast ? '' : 'pb-7'}>
                  <div className="font-mono text-xs uppercase tracking-wide text-[var(--paper)]/55">{r.day}</div>
                  <div
                    className={`mt-1 font-display text-sm ${
                      isMajor ? 'text-[var(--lime)] font-medium' : 'text-[var(--paper)]'
                    }`}
                  >
                    {r.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
