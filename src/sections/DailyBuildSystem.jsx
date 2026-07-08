import FlowingMenu from '../components/FlowingMenu';

const items = [
  { link: '#', text: 'Attend', image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'Apply', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'Ship', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'Review', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop' }
];

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
    <section className="py-24 md:py-32 border-b border-[var(--ink-line)]">
      <div className="container-x">
        <div className="eyebrow mb-4">The Weekly Rhythm</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          One live session. Every weekday.
        </h2>
        <p className="mt-5 text-[var(--mist)] max-w-xl">
          Monday to Friday, you're live with your mentor for an hour. The weekend is for shipping the week's
          major project and getting it reviewed.
        </p>

        <div className="mt-14 h-[420px] md:h-[520px]">
          <FlowingMenu items={items} speed={12} />
        </div>

        <div className="mt-16 grid grid-cols-7 gap-2 md:gap-3 font-mono text-center">
          {rhythm.map(r => (
            <div
              key={r.day}
              className={`rounded-lg border px-1 py-4 md:py-5 ${r.label === 'Major Project' ? 'border-[var(--amber)] bg-[var(--amber)]/10' : 'border-[var(--ink-line)]'}`}
            >
              <div className="text-[10px] md:text-xs text-[var(--mist)] uppercase">{r.day}</div>
              <div className={`text-[10px] md:text-xs mt-2 leading-tight ${r.label === 'Major Project' ? 'text-[var(--amber)]' : 'text-[var(--bone)]'}`}>
                {r.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
