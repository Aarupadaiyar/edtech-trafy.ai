import { useEffect, useRef, useState } from 'react';
import './Marquee.css';

function MarqueeLogo({ item, tone }) {
  const [failed, setFailed] = useState(false);

  if (!item.src || failed) {
    return <span className="marquee-item-text">{item.name}</span>;
  }

  return (
    <img
      src={item.src}
      alt={item.name}
      onError={() => setFailed(true)}
      className={tone === 'muted' ? 'marquee-item-img--muted' : ''}
    />
  );
}

function MarqueeSet({ items, tone, setRef }) {
  return (
    <div className="marquee-set" ref={setRef}>
      {items.map(item => (
        <div className="marquee-item" key={item.name}>
          <MarqueeLogo item={item} tone={tone} />
        </div>
      ))}
    </div>
  );
}

export default function Marquee({ items, speed = 32, tone = 'muted' }) {
  const viewportRef = useRef(null);
  const firstSetRef = useRef(null);
  const secondSetRef = useRef(null);
  const [copies, setCopies] = useState(2);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    function measure() {
      const viewport = viewportRef.current;
      const first = firstSetRef.current;
      const second = secondSetRef.current;
      if (!viewport || !first || !second) return;

      const gap = parseFloat(getComputedStyle(viewport.firstElementChild).gap || '0');
      const setSpan = second.getBoundingClientRect().left - first.getBoundingClientRect().left || first.getBoundingClientRect().width + gap;
      if (setSpan <= 0) return;

      const viewportWidth = viewport.offsetWidth;
      const needed = Math.max(2, Math.ceil(viewportWidth / setSpan) + 1);

      setDistance(setSpan);
      setCopies(prev => (prev === needed ? prev : needed));
    }

    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    if (firstSetRef.current) ro.observe(firstSetRef.current);
    return () => ro.disconnect();
  }, [items]);

  const sets = Array.from({ length: copies });

  return (
    <div className="marquee-viewport" ref={viewportRef}>
      <div
        className="marquee-track"
        style={{
          animationDuration: `${speed}s`,
          '--marquee-distance': distance ? `${distance}px` : undefined
        }}
      >
        {sets.map((_, i) => (
          <MarqueeSet
            key={i}
            items={items}
            tone={tone}
            setRef={i === 0 ? firstSetRef : i === 1 ? secondSetRef : undefined}
          />
        ))}
      </div>
    </div>
  );
}
