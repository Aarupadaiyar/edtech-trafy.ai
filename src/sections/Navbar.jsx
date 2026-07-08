const links = [
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#projects', label: 'Projects' },
  { href: '#faq', label: 'FAQ' }
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[var(--ink-line)] bg-[var(--ink)]/80 backdrop-blur-md">
      <div className="container-x flex items-center justify-between h-16 md:h-18">
        <a href="#top" className="cursor-target font-display font-semibold text-lg tracking-tight">
          Trafy<span className="text-[var(--amber)]">AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-[var(--mist)]">
          {links.map(l => (
            <a key={l.href} href={l.href} className="cursor-target hover:text-[var(--amber)] transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#final-cta" className="cursor-target font-mono text-xs px-4 py-2 rounded-full border border-[var(--amber)] text-[var(--amber)] hover:bg-[var(--amber)] hover:text-[var(--ink)] transition">
          Join Cohort
        </a>
      </div>
    </header>
  );
}
