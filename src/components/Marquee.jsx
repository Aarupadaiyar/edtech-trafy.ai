import './Marquee.css';

export default function Marquee({ items, speed = 32, tone = 'muted' }) {
  const track = [...items, ...items];

  return (
    <div className="marquee-viewport">
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {track.map((item, i) => (
          <div className="marquee-item" key={`${item.name}-${i}`}>
            {item.src ? (
              <img src={item.src} alt={item.name} loading="lazy" className={tone === 'muted' ? 'marquee-item-img--muted' : ''} />
            ) : (
              <span className="marquee-item-text">{item.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
