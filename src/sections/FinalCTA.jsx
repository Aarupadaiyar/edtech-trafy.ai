export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-28 md:py-40 relative overflow-hidden border-b border-[var(--ink-line)]">
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--amber)]/10 via-transparent to-transparent pointer-events-none" />
      <div className="container-x relative text-center">
        <div className="eyebrow mb-6 justify-center flex">Cohort 04 · Applications Close Soon</div>
        <h2 className="font-display font-semibold text-5xl md:text-7xl leading-[0.98] max-w-4xl mx-auto">
          Build Your First AI Product This Week.
        </h2>
        <div className="mt-10">
          <a href="https://forms.gle/AJ2ujkYJBDRVKTug6" target="_blank" rel="noopener noreferrer" className="cursor-target inline-flex items-center gap-2 bg-[var(--amber)] text-[var(--ink)] font-display font-semibold px-9 py-5 rounded-full text-lg hover:brightness-110 transition">
            Join the Next Cohort
          </a>
        </div>
      </div>
    </section>
  );
}
