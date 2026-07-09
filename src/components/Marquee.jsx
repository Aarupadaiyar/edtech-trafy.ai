import { useState } from 'react';
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
      loading="lazy"
      onError={() => setFailed(true)}
      className={tone === 'muted' ? 'marquee-item-img--muted' : ''}
    />
  );
}

export default function Marquee({ items, speed = 32, tone = 'muted' }) {
  const track = [...items, ...items];

  return (
    <div className="marquee-viewport">
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {track.map((item, i) => (
          <div className="marquee-item" key={`${item.name}-${i}`}>
            <MarqueeLogo item={item} tone={tone} />
          </div>
        ))}
      </div>
    </div>
  );
}
