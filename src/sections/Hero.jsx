import { useEffect, useState } from 'react';
import { cohortInfo } from '../data/cohort';
import { testimonials } from '../data/testimonials';
import CohortCountdown from '../components/CohortCountdown';

const proofCompanies = [
  { name: 'Amazon', slug: null },
  { name: 'Meta', slug: 'meta' },
  { name: 'Uber', slug: 'uber' },
  { name: 'Google', slug: 'google' }
];

export default function Hero() {
  const [featuredIdx, setFeaturedIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFeaturedIdx(i => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const featured = testimonials[featuredIdx];

  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)] via-[var(--paper)] to-[var(--paper)]" />

      <div className="container-x relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-10 items-center">
          <div>
            <div className="eyebrow mb-6 flex items-center gap-3 text-[var(--charcoal)]">
              <span className="w-6 h-px bg-[var(--lime-deep)]" />
              {cohortInfo.cohortLabel} · APPLICATIONS OPEN
            </div>

            <h1 className="font-display font-semibold text-[11vw] leading-[0.95] sm:text-6xl md:text-[5vw] md:leading-[0.98] tracking-tight text-[var(--ink)]">
              Become a FAANG AI Engineer in 60 Days.
            </h1>

            <p className="mt-8 max-w-xl text-lg text-[var(--charcoal)] leading-relaxed">
              Learn and build with 12 production grade AI tools. Ship 8 real projects. Walk into
              interviews with proof, not a certificate.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#get-pricing" className="inline-flex items-center gap-2 bg-[var(--lime)] text-[var(--ink)] font-display font-semibold px-7 py-4 rounded-full hover:brightness-95 transition">
                Get Cohort Details
              </a>
              <a href="#curriculum" className="font-mono text-sm text-[var(--charcoal)] hover:text-[var(--ink)] transition underline underline-offset-4 decoration-[var(--line)] hover:decoration-[var(--ink)]">
                Checkout the curriculum →
              </a>
            </div>

            <div className="mt-16 md:mt-20 grid grid-cols-3 max-w-lg font-mono text-sm">
              <div>
                <div className="text-2xl text-[var(--ink)] font-display">48</div>
                <div className="text-[var(--mist)] text-xs mt-1">apps built</div>
              </div>
              <div>
                <div className="text-2xl text-[var(--ink)] font-display">08</div>
                <div className="text-[var(--mist)] text-xs mt-1">major projects</div>
              </div>
              <div>
                <div className="text-2xl text-[var(--ink)] font-display">01</div>
                <div className="text-[var(--mist)] text-xs mt-1">portfolio, live</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-[var(--espresso)] p-6 md:p-8 shadow-[0_30px_70px_-20px_rgba(20,20,15,0.4)]">
            <CohortCountdown />

            <div key={featuredIdx} className="mt-7 pt-6 border-t border-[var(--paper)]/15 animate-[fadeIn_0.5s_ease]">
              <p className="font-display text-lg leading-snug text-[var(--paper)] min-h-[5.5rem]">
                "{featured.quote}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 shrink-0 rounded-full bg-[var(--lime)]/15 flex items-center justify-center font-display text-sm text-[var(--lime)]">
                  {featured.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--paper)]">{featured.name}</div>
                  <div className="font-mono text-xs text-[var(--paper)]/55">{featured.role}, {featured.company} · {featured.package}</div>
                </div>
              </div>
            </div>

            <div className="mt-7 pt-6 border-t border-[var(--paper)]/15 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--paper)]/50">Learners now at</span>
              <div className="flex items-center gap-3">
                {proofCompanies.map(c =>
                  c.slug ? (
                    <img
                      key={c.name}
                      src={`https://cdn.simpleicons.org/${c.slug}/F6F3EA`}
                      alt={c.name}
                      className="h-4 w-auto opacity-70"
                      loading="lazy"
                    />
                  ) : (
                    <span key={c.name} className="font-display text-sm font-medium text-[var(--paper)] opacity-70">
                      {c.name}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
