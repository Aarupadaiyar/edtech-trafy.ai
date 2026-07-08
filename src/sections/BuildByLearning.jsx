import { Video, Hammer, Rocket, ClipboardCheck } from 'lucide-react';
import CardSwap, { Card } from '../components/CardSwap';

const steps = [
  { tag: '01', title: 'Live Session', icon: Video, body: 'A one hour live class with your mentor, every weekday. Real time, not a recording queue.' },
  { tag: '02', title: 'Apply Same Day', icon: Hammer, body: 'What you learn in the session, you ship the same day, not weeks later in a separate module.' },
  { tag: '03', title: 'Weekly Project', icon: Rocket, body: 'Five live sessions build toward one major project, due by the weekend.' },
  { tag: '04', title: 'Mentor Review', icon: ClipboardCheck, body: 'Your mentor and AI code review flag what a hiring engineer would flag, before you move on.' }
];

export default function BuildByLearning() {
  return (
    <section data-splash-zone className="py-24 md:py-32 border-b border-[var(--ink-line)] overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="eyebrow mb-4">How The Cohort Works</div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl leading-[1.05]">
              Live sessions. Same day builds.
            </h2>
            <p className="mt-6 text-[var(--mist)] text-lg max-w-md leading-relaxed">
              This isn't a self paced video library. Every weekday, you're live with a mentor, then
              you immediately apply it, so the lesson turns into a shipped project before the day ends.
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

          <div className="relative h-[360px] md:h-[400px]">
            <CardSwap cardDistance={50} verticalDistance={56} delay={1000} pauseOnHover width={380} height={280} skewAmount={4}>
              {steps.map(s => (
                <Card key={s.tag}>
                  <div className="h-full w-full flex flex-col justify-between p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[var(--amber)]">{s.tag}</span>
                      <span className="w-2 h-2 rounded-full bg-[var(--shipped)]" />
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/25 flex items-center justify-center">
                      <s.icon className="w-7 h-7 text-[#d7d9dd]" strokeWidth={1.75} />
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
