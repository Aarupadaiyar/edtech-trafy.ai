import { cohortInfo } from '../data/cohort';
import CohortCountdown from '../components/CohortCountdown';

export default function GetPricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 border-b border-[var(--line)] relative overflow-hidden bg-[var(--terracotta-soft)]">
      <div className="container-x relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="eyebrow mb-4 text-[var(--terracotta)]">Cohort Investment</div>
          <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.05] max-w-xl text-[var(--ink)]">
            Cohort Investment Shared on a Short Call.
          </h2>
          <p className="mt-5 text-[var(--charcoal)] max-w-md">
            Pricing depends on your batch and any active offers, so our team shares the exact
            number on a short call instead of a page. Here is what every seat includes.
          </p>
          <div className="mt-8 grid gap-3 font-mono text-xs text-[var(--charcoal)]">
            <span>✓ All 8 weeks, live and mentor led, Monday through Friday</span>
            <span>✓ Mentor review plus AI code review on every project you ship</span>
            <span>✓ Project certification and lifetime access to the builder community</span>
          </div>
        </div>

        <div className="max-w-md w-full mx-auto lg:mx-0 rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-8 md:p-10 text-center">
          <p className="font-mono text-xs text-[var(--lime-deep)] uppercase tracking-widest">
            Get your personalized plan and pricing.
          </p>
          <p className="mt-3 font-mono text-[11px] text-[var(--charcoal)]">
            {cohortInfo.cohortLabel} starts {cohortInfo.startDate}.
          </p>
          <div className="mt-4 flex justify-center">
            <CohortCountdown />
          </div>
          <a
            href="#get-pricing"
            className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-[var(--lime)] text-[var(--ink)] font-display font-semibold px-7 py-4 rounded-full hover:brightness-95 transition"
          >
            Get Pricing & Seat Availability
          </a>
        </div>
      </div>
    </section>
  );
}
