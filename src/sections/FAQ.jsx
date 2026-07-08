import { useEffect, useState } from 'react';
import { faqs } from '../data/faq';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  // Inject FAQPage structured data for SEO once, client-side.
  useEffect(() => {
    const existing = document.getElementById('faq-schema');
    if (existing) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    });
    document.head.appendChild(script);
  }, []);

  return (
    <section id="faq" className="py-24 md:py-32 border-b border-[var(--ink-line)]">
      <div className="container-x">
        <div className="eyebrow mb-4">FAQ</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          Questions builders actually ask.
        </h2>

        <div className="mt-14 max-w-3xl">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-[var(--ink-line)]">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-display text-lg md:text-xl">{f.q}</span>
                  <span className={`font-mono text-lg shrink-0 transition-transform ${isOpen ? 'rotate-45 text-[var(--amber)]' : 'text-[var(--mist)]'}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'} overflow-hidden`}>
                  <p className="min-h-0 text-[var(--mist)] leading-relaxed max-w-2xl">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
