export default function Footer() {
  return (
    <footer className="bg-[var(--cream)] text-[var(--charcoal)] py-14 md:py-16 pb-28 md:pb-16">
      <div className="container-x flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="font-display font-semibold text-lg mb-2 text-[var(--ink)]">
            TrafyAI
          </div>
          <p className="text-sm text-[var(--mist)] max-w-xs">
            We don't teach AI. We build AI engineers, one shipped project at a time.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-widest text-[var(--mist)]">
          <a href="#curriculum" className="hover:text-[var(--ink)] transition-colors">Curriculum</a>
          <a href="#projects" className="hover:text-[var(--ink)] transition-colors">Projects</a>
          <a href="#faq" className="hover:text-[var(--ink)] transition-colors">FAQ</a>
          <a href="https://www.trafy.ai/" className="hover:text-[var(--ink)] transition-colors">trafyai.com ↗</a>
        </div>
      </div>
      <div className="container-x mt-10 pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row justify-between gap-3 font-mono text-[11px] text-[var(--mist)]">
        <span>© {new Date().getFullYear()} Trafy AI. All rights reserved.</span>
        <span>Live cohort. Real mentors. Real proof.</span>
      </div>
    </footer>
  );
}
