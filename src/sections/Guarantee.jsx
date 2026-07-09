// TODO(founder/legal): confirm the real guarantee policy and wording before
// launch. This is a placeholder that needs sign off.
export default function Guarantee() {
  return (
    <section className="py-16 md:py-20 border-b border-[var(--line)] bg-[var(--cream)]">
      <div className="container-x">
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--lime)]/15 border border-[var(--lime-deep)]/40 flex items-center justify-center font-display text-xl text-[var(--lime-deep)]">
            ✓
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--lime-deep)] mb-2">The Ship It Guarantee</div>
            <p className="font-display text-xl md:text-2xl leading-snug text-[var(--ink)]">
              Don't ship your first project in 2 weeks? We'll work with you 1:1, live, until you do.
            </p>
            {/* TODO: replace with the confirmed guarantee policy wording */}
            <p className="text-sm text-[var(--charcoal)] mt-2">Full terms shared on your admissions call.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
