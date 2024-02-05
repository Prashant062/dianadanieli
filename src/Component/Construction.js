import React, { useState } from 'react';
import main1 from '../Assetes/main1.jpg';
import Designer from './Designer';

const Proetots = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const imageStyle = {
    backgroundImage: `url(${hovered ? 'new-image.jpg' : main1})`,
    // Add other styles as needed
  };

  const headingStyle = {
    color: hovered ? 'red' : 'white',
    // Add other styles as needed
  };

  return (
    <>
      <section className="projects title-anchor" style={{ backgroundColor: '#131316', height: '85rem' }}>
        <div
          className="main-container"
          style={{ height: '50rem', backgroundColor: '#131316', width: '100vw' }}
        >
          <div
            className="img"
            style={{
              ...imageStyle,
              height: '40rem',
              width: '50rem',
              zIndex: '101',
              backgroundPosition: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              top: '6rem',
              backgroundColor: '#131316',
              position: 'relative',
              left: '33.5rem',
            }}
          >
            <div
              className="note s-t-custom visible"
              style={{
                color: '#9c9c9f',
                position: 'relative',
                right: '25rem',
                height: '40rem',
                width: '70rem',
                fontSize: 'small',
              }}
            >
              <div
                className="s-t-custom visible"
                style={{ position: 'relative', top: '5rem', height: '7rem' }}
              >
                <i style={{ position: 'absolute', top: '2rem' }} className="fa-solid fa-chevron-right"></i>
                <a
                  href="/"
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    textDecoration: 'none',
                    left: '6.5rem',
                    width: '45rem',
                  }}
                  className="ln item cursor-interactive no-parse line-active"
                  data-copy=".t"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                >
                  <div className="arrow"></div>
                  <div is="lt-appear" className="t">
                    <font>
                      <h2 style={{ ...headingStyle }}>Diana Danieli Home office on Plyushchikha</h2>
                    </font>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Designer />
      </section>
    </>
  );
};

export default Proetots;
