import { useState } from 'react';
import './GooeyNav.css';

const GooeyNav = ({ items, initialActiveIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  return (
    <div className="gooey-nav-container">
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index} className={activeIndex === index ? 'active' : ''}>
              <a href={item.href} onClick={() => setActiveIndex(index)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default GooeyNav;
