import './Marquee.css';

export default function Marquee({ items, speed = 32 }) {
  const track = [...items, ...items];

  return (
    <div className="marquee-viewport">
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {track.map((item, i) => (
          <div className="marquee-pill" key={`${item.name}-${i}`}>
            {item.src ? (
              <img src={item.src} alt={item.name} loading="lazy" />
            ) : (
              <span className="marquee-pill-text">{item.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
