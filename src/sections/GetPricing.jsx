import { cohortInfo } from '../data/cohort';

export default function GetPricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 border-b border-[var(--ink-line)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--amber)]/8 via-transparent to-transparent pointer-events-none" />
      <div className="container-x relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="eyebrow mb-4">Cohort Investment</div>
          <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.05] max-w-xl">
            Cohort investment shared on a short call.
          </h2>
          <p className="mt-5 text-[var(--mist)] max-w-md">
            Pricing depends on your batch and any active offers, so our team shares the exact
            number on a short call instead of a page. Here is what every seat includes.
          </p>
          <div className="mt-8 grid gap-3 font-mono text-xs text-[var(--mist)]">
            <span>✓ All 8 weeks, live and mentor led, Monday through Friday</span>
            <span>✓ Mentor review plus AI code review on every project you ship</span>
            <span>✓ Project certification and lifetime access to the builder community</span>
          </div>
        </div>

        <div className="max-w-md w-full mx-auto lg:mx-0 rounded-2xl border-2 border-[var(--amber)] bg-[var(--ink-raised)] p-8 md:p-10 text-center">
          <p className="font-mono text-xs text-[var(--amber)] uppercase tracking-widest">
            Get your personalized plan and pricing.
          </p>
          <p className="mt-3 font-mono text-[11px] text-[var(--mist)]">
            {cohortInfo.cohortLabel} starts {cohortInfo.startDate}. Only {cohortInfo.seatsRemaining} of{' '}
            {cohortInfo.seatsTotal} seats remain.
          </p>
          <a
            href="#get-pricing"
            className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-[var(--amber)] text-[#0a0b0e] font-display font-semibold px-7 py-4 rounded-full hover:brightness-110 transition"
          >
            Get Pricing & Seat Availability
          </a>
        </div>
      </div>
    </section>
  );
}
