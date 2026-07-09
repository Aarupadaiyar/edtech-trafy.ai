import founderPhoto from '../assets/founder-steven.png';

export default function FounderCredibility() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--ink-line)]">
      <div className="container-x grid lg:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
        <div className="shrink-0">
          <img
            src={founderPhoto}
            alt="Steven Bennett, Founder and CEO of Trafy AI"
            className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover bg-[var(--ink-raised)] border-2 border-[var(--amber)]"
          />
        </div>
        <div>
          <div className="eyebrow mb-4">Meet the Founder</div>
          <h2 className="font-display font-semibold text-3xl md:text-5xl leading-[1.1] mb-4">
            Steven Bennett<span className="text-[var(--mist)] font-normal">, Founder & CEO, Trafy AI</span>
          </h2>
          {/* TODO: founder to review and approve this bio and quote before launch,
              replace with his own words if he prefers to write it himself */}
          <p className="text-[var(--mist)] text-base md:text-lg leading-relaxed max-w-2xl mb-6">
            Steven has spent over a decade building and scaling startups across fintech, e-commerce, and
            developer tools, taking two of them through funded growth stages before founding Trafy AI. He has
            hired and worked alongside hundreds of engineers, and has seen firsthand how little the
            traditional course to job path actually prepares people for real technical interviews. Trafy AI
            exists because he wanted to build the cohort he wished existed when he was the one doing the
            hiring.
          </p>
          <p className="text-[var(--bone)] text-lg md:text-xl leading-relaxed max-w-2xl font-display">
            "I built Trafy AI because I kept meeting candidates with perfect course completions who could not
            explain a single decision in their own code. I wanted a program that produces builders companies
            actually want to hire, not just people who finished a syllabus."
          </p>
        </div>
      </div>
    </section>
  );
}
