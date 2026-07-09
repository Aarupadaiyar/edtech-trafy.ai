const BG_CLASSES = {
  cream: 'bg-[var(--cream)]',
  paper: 'bg-[var(--paper)]'
};

export default function CTAStrip({
  label = 'Get pricing & seats',
  sublabel = 'Takes 30 seconds. Admissions calls within 24 hours.',
  bg = 'cream'
}) {
  return (
    <div className={`py-10 md:py-12 border-b border-[var(--line)] ${BG_CLASSES[bg] || BG_CLASSES.cream}`}>
      <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <div className="font-display text-lg md:text-xl text-[var(--ink)]">{sublabel}</div>
        </div>
        <a
          href="#get-pricing"
          className="shrink-0 inline-flex items-center gap-2 bg-[var(--lime)] text-[var(--ink)] font-display font-semibold px-6 py-3 rounded-full hover:brightness-95 transition"
        >
          {label} →
        </a>
      </div>
    </div>
  );
}
