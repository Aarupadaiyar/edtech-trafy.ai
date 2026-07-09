import { Video, Hammer, Rocket, ClipboardCheck } from 'lucide-react';

const steps = [
  { tag: '01', title: 'Live Session', icon: Video, body: 'A one hour live class with your mentor, every weekday. Real time, not a recording queue.' },
  { tag: '02', title: 'Apply Same Day', icon: Hammer, body: 'What you learn in the session, you ship the same day, not weeks later in a separate module.' },
  { tag: '03', title: 'Weekly Project', icon: Rocket, body: 'Five live sessions build toward one major project, due by the weekend.' },
  { tag: '04', title: 'Mentor Review', icon: ClipboardCheck, body: 'Your mentor and AI code review flag what a hiring engineer would flag, before you move on.' }
];

export default function BuildByLearning() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--ink-line)]">
      <div className="container-x">
        <div className="eyebrow mb-4">How The Cohort Works</div>
        <h2 className="font-display font-semibold text-4xl md:text-5xl leading-[1.05] max-w-xl">
          Live sessions. Same day builds.
        </h2>
        <p className="mt-6 text-[var(--mist)] text-lg max-w-md leading-relaxed">
          This isn't a self paced video library. Every weekday, you're live with a mentor, then
          you immediately apply it, so the lesson turns into a shipped project before the day ends.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-4 md:gap-5">
          {steps.map(s => (
            <div
              key={s.tag}
              className="rounded-2xl border-2 border-[var(--amber)] bg-[var(--ink-raised)] p-6 md:p-7 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[var(--amber)]">{s.tag}</span>
                <span className="w-2 h-2 rounded-full bg-[var(--shipped)]" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/25 flex items-center justify-center">
                <s.icon className="w-6 h-6 text-[#d7d9dd]" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl mb-2">{s.title}</h3>
                <p className="text-[var(--mist)] text-sm leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
