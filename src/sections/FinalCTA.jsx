import LeadForm from '../components/LeadForm';
import CohortCountdown from '../components/CohortCountdown';
import { cohortInfo } from '../data/cohort';

export default function FinalCTA() {
  return (
    <section id="get-pricing" className="py-24 md:py-32 relative overflow-hidden border-b border-[var(--ink-line)]">
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--amber)]/10 via-transparent to-transparent pointer-events-none" />
      <div className="container-x relative text-center">
        <div className="inline-flex items-center gap-x-3 gap-y-1 flex-wrap justify-center font-mono text-[11px] md:text-xs uppercase tracking-widest mb-6">
          <CohortCountdown className="text-[var(--amber)]" />
          <span className="text-[var(--ink-line)]">•</span>
          <span className="text-[var(--mist)]">Only {cohortInfo.seatsRemaining} of {cohortInfo.seatsTotal} seats left</span>
        </div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] max-w-3xl mx-auto">
          Build your first AI product this week.
        </h2>
        <p className="mt-5 text-[var(--mist)] max-w-lg mx-auto">
          Live, mentor led, starting soon. Fill in your details below and we will call with pricing and seat
          availability.
        </p>
        <div className="mt-10 max-w-md mx-auto text-left">
          <LeadForm source="final-cta" />
        </div>
      </div>
    </section>
  );
}
