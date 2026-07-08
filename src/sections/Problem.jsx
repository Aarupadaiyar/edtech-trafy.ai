import BorderGlow from '../components/BorderGlow';
import PixelCard from '../components/PixelCard';

const traditional = ['Watch Videos', 'Take Notes', 'Pass Quiz', 'Forget Everything'];
const trafy = ['Build Daily', 'Ship Weekly', 'Receive Feedback', 'Graduate With Portfolio'];

function StepList({ steps, active }) {
  return (
    <div className="flex flex-col">
      {steps.map((step, i) => (
        <div key={step}>
          <div className="flex items-center gap-4">
            <span className={`font-mono text-xs w-8 shrink-0 ${active ? 'text-[#85a824]' : 'text-[var(--mist)]'}`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              className={`font-display text-xl md:text-2xl font-semibold ${active ? 'text-[#5a7d1a]' : 'text-[var(--mist)] line-through decoration-1'}`}
            >
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className="ml-[15px] my-2 h-8 w-px"
              style={{ background: active ? 'rgba(90,125,26,0.3)' : 'var(--ink-line)' }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function Problem() {
  return (
    <section data-splash-zone className="py-24 md:py-32 border-b border-[var(--ink-line)]">
      <div className="container-x">
        <div className="eyebrow mb-4">The Problem</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          Most AI courses end where the learning should begin.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--mist)] mb-4">Traditional Courses</div>
            <div className="relative rounded-2xl border border-[var(--ink-line)] bg-transparent p-8 md:p-10 h-full">
              <StepList steps={traditional} active={false} />
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--amber)] mb-4">Trafy AI</div>
            <BorderGlow
              glowColor="80 100 50"
              backgroundColor="#ffffff"
              borderRadius={16}
              glowRadius={36}
              glowIntensity={1.3}
              coneSpread={28}
              colors={['#b6eb30', '#d4ff5c', '#85a824']}
              className="flex-1 min-h-0 border-glow-card--brand"
            >
              <PixelCard variant="green" className="pixel-card--fill" gap={6} speed={35}>
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-center">
                  <StepList steps={trafy} active />
                </div>
              </PixelCard>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
}
