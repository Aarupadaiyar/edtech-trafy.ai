import { useEffect, useState } from 'react';

/**
 * BuildLedger — a git-log / commit-rail timeline.
 * The site's signature structural device: every week is a "commit" on a build
 * rail, numbered like a log rather than a generic 01/02/03 stepper, because
 * the curriculum genuinely is a sequence of shipped commits.
 *
 * Note: the Framer "Helio UI Timeline" module supplied for this section is a
 * Framer code-component — it re-exports from Framer's own hosted runtime and
 * is not importable into a standalone Vite/React app. This component is a
 * custom equivalent built in Trafy AI's own visual language instead.
 */
export default function BuildLedger({ items, orientation = 'vertical', renderDetail }) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const isHorizontal = orientation === 'horizontal';

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 20);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className={isHorizontal ? 'flex flex-col gap-10' : 'grid md:grid-cols-[280px_1fr] gap-10 md:gap-16'}>
      <div className={isHorizontal ? 'flex overflow-x-auto gap-0 pb-4 -mx-2 px-2 snap-x' : 'relative'}>
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.key ?? i}
              onClick={() => setActive(i)}
              className={`cursor-target group relative text-left ${isHorizontal ? 'shrink-0 w-44 snap-start px-3' : 'flex items-stretch gap-4 w-full pb-8'}`}
            >
              {!isHorizontal && (
                <div className="flex flex-col items-center pt-1">
                  <span
                    className="w-3 h-3 rounded-full border-2 shrink-0 transition-colors"
                    style={{
                      borderColor: isActive ? 'var(--amber)' : 'var(--ink-line)',
                      background: isActive ? 'var(--amber)' : 'transparent'
                    }}
                  />
                  {i < items.length - 1 && <span className="w-px flex-1 mt-1" style={{ background: 'var(--ink-line)' }} />}
                </div>
              )}
              {isHorizontal && (
                <div className="flex items-center mb-3">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: isActive ? 'var(--amber)' : 'var(--ink-line)' }} />
                  {i < items.length - 1 && <span className="h-px flex-1 ml-2" style={{ background: 'var(--ink-line)' }} />}
                </div>
              )}
              <div className={isHorizontal ? '' : 'pt-0.5'}>
                <div className="font-mono text-[11px] tracking-wider" style={{ color: isActive ? 'var(--amber)' : 'var(--mist)' }}>
                  {item.tag}
                </div>
                <div
                  className="font-display text-lg mt-0.5 transition-colors"
                  style={{ color: isActive ? 'var(--bone)' : 'var(--mist)' }}
                >
                  {item.label}
                </div>
                {item.sub && <div className="text-xs text-[var(--mist)] mt-1">{item.sub}</div>}
              </div>
            </button>
          );
        })}
      </div>

      <div
        className={`min-h-[260px] transition-all duration-300 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
      >
        {renderDetail(items[active], active)}
      </div>
    </div>
  );
}
