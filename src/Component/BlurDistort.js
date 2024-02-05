// BlurDistort.js
import React, { useState, useEffect } from 'react';
import './BlurDistort.css';

const BlurDistort = () => {
  const [blur, setBlur] = useState(0);
  const [distort, setDistort] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const mouseX = (clientX / innerWidth) * 2 - 1;
    const mouseY = -(clientY / innerHeight) * 2 + 1;

    setBlur(Math.abs(mouseX) * 10);
    setDistort(mouseY * 100);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="blur-distort-container" style={{ filter: `blur(${blur}px)`, transform: `translateY(${distort}px)` }}>
      {/* Your project content goes here */}
    </div>
  );
};

export default BlurDistort;
