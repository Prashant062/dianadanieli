// CustomCursor.js

import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleLinkHover = () => {
    setHovered(true);
  };

  const handleLinkLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (<>
         <div
        className={`cursor-dot-outline ${hovered ? 'hover' : ''}`}
        style={{ left: position.x, top: position.y }}
      ></div>
      <div
        className={`cursor-dot ${hovered ? 'hover' : ''}`}
        style={{ left: position.x, top: position.y }}
      ></div>

      {/* Optional: Include a link or button inside the custom cursor */}
      <a href="/" onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
      </a>
      </>
  );
};

export default CustomCursor;
