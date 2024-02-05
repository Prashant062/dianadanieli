import React, { useState } from 'react';
import './About.css'
const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showImage = (index) => {
    setCurrentIndex(index);
  };

  const buttons = [
    { key: 0, name: 'Button 1' },
    { key: 1, name: 'Button 2' },
    { key: 2, name: 'Button 3' },
  ];

  return (
    <div className="look-btn" id="button-container">
      {buttons.map((button, i) => (
        <button
          key={button.key}
          onClick={() => showImage(i)}
          className={`button ${i === currentIndex ? 'active' : ''}`}
          style={{ left: `${(i - currentIndex) * 100}px` }}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default About;
