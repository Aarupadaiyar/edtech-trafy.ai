import LeadForm from '../components/LeadForm';
import CohortCountdown from '../components/CohortCountdown';

export default function FinalCTA() {
  return (
    <section id="get-pricing" className="py-24 md:py-32 relative overflow-hidden border-b border-[var(--paper)]/15 bg-[var(--ink)]">
      <div className="container-x relative text-center">
        <div className="flex justify-center font-mono text-[11px] md:text-xs uppercase tracking-widest mb-6">
          <CohortCountdown />
        </div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] max-w-3xl mx-auto text-[var(--paper)]">
          Your First Shipped Project Is 7 Days Away.
        </h2>
        <p className="mt-5 text-[var(--paper)]/70 max-w-lg mx-auto">
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
