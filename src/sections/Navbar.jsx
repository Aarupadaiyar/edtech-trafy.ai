import GooeyNav from '../components/GooeyNav';

const links = [
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#projects', label: 'Projects' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' }
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur-md overflow-hidden">
      <div className="container-x flex items-center justify-between h-16 md:h-18">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight text-[var(--ink)]">
          TrafyAI
        </a>
        <div className="hidden md:block" style={{ height: '44px' }}>
          <GooeyNav items={links} />
        </div>
        <a href="#get-pricing" className="font-mono text-xs px-4 py-2 rounded-full border border-[var(--lime-deep)] text-[var(--lime-deep)] hover:bg-[var(--lime)] hover:border-[var(--lime)] hover:text-[var(--ink)] transition">
          Get Pricing
        </a>
      </div>
    </header>
  );
}
