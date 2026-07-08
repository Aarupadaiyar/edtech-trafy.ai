export default function CTAStrip({
  label = "Get pricing & seats",
  sublabel = 'Takes 30 seconds. Admissions calls within 24 hours.'
}) {
  return (
    <div className="py-10 md:py-12 border-b border-[var(--ink-line)]">
      <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <div className="font-display text-lg md:text-xl">{sublabel}</div>
        </div>
        <a
          href="#get-pricing"
          className="shrink-0 inline-flex items-center gap-2 bg-[var(--amber)] text-[var(--ink)] font-display font-semibold px-6 py-3 rounded-full hover:brightness-110 transition"
        >
          {label} →
        </a>
      </div>
    </div>
  );
}
