const companies = [
  "Google",
  "Meta",
  "Amazon",
  "Microsoft",
  "Apple",
  "Netflix",
  "OpenAI",
  "NVIDIA",
  "Tesla",
  "Stripe",
  "Uber",
  "Airbnb",
];

export default function CompanyMarquee() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
          The caliber of teams Trafy talent is built for
        </p>
      </div>

      <div className="mt-7 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16">
          {[...companies, ...companies].map((c, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-white/50 transition-colors hover:text-white/80 sm:text-3xl"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-7 text-center text-[11px] text-white/25">
        Illustrative: reflects the hiring bar our assessments are calibrated to, not a list of confirmed employers.
      </p>
    </section>
  );
}
