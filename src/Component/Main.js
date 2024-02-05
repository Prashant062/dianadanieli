// src/App.js
import React, { useState } from 'react';
import './Main.css';
import Design from '../Assetes/design.jpg';
import Furniture from '../Assetes/furniture.jpg';
import Column from '../Assetes/Column.jpg';
import glavnaya from '../Assetes/glavnaya_na_sajt.jpg';
import textLogo from '../Assetes/text-logo.svg';
import redColler from '../Assetes/red-coller.jpeg';
import Proetots from './Proetots';


const images = [Design, Furniture, Column];
const image = [
  {
    name: "DESIGN", style: {
      color: 'white', background: 'BLACK',
    }
  },
  {
    name: "FURNITURE", style: {
      color: 'white', background: 'BLACK', 
    }
  },
  {
    name: "CONSTRUCTION", style: {
      color: 'white', background: 'BLACK', 
    }
  },
];
const heading = [
  { heading1: 'DAndhAthn', heading2: 'AndnTeRbeRov' },

  { heading1: 'AndnTeRbeRov', heading2: 'mebelAnd' },
  { heading1: 'TOOmPleToWithnOe', heading2: 'WithTROAndTelbWithTVO' },

];
function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showImage = (index) => {
    setCurrentIndex(index);
  };
  const totalImages = images.length;

  return (
    <>
      <div className="main-container">
        <div className="image-counter">
          {currentIndex + 1}/{totalImages}
        </div>
        <div className="carousel">
          <div className="heading-container">
            <h1>{heading[currentIndex].heading1}</h1>
            <h1>{heading[currentIndex].heading2}</h1>
          </div>
          <div className="image-container" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className={`image`} style={{ backgroundImage: `url(${image})` }}></div>
            ))}
          </div>
        </div>
        <div className="look-btn">
  <button
    key={0}
    onClick={() => showImage(0)}
    className={`button ${0 === currentIndex ? 'active' : ''}`}
    style={image[0].style}
  >
    {image[0].name}
  </button>

  <button
    key={1}
    onClick={() => showImage(1)}
    className={`button ${1 === currentIndex ? 'active' : ''}`}
    style={image[1].style}
  >
    {image[1].name}
  </button>

  <button
    key={2}
    onClick={() => showImage(2)}
    className={`button ${2 === currentIndex ? 'active' : ''}`}
    style={image[2].style}
  >
    {image[2].name}
  </button>
</div>

        <section class="make" style={{ position: 'absolute', top: "50rem", left: '10rem', width: '65rem', height: '8rem' }}   >
          <div class="wrapper">
            <div class="l" style={{ width: '50%' }}>
              <h1 is="hd-small" class="s-t-custom visible" style={{ verticalAlign: "inherit", color: 'white', width: '20rem' }}><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Turnkey projects</font></font></h1>
            </div>
            <div class="r" style={{ width: '50%', height: "8rem", position: 'relative', left: '50%', bottom: "3rem" }}>
              <split-text class="tx"><p style={{ color: '#9c9c9f' }}><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>From a design project of any complexity to implementation. </font><font style={{ verticalAlign: "inherit" }}>We create turnkey interiors: we prepare design documentation, carry out construction and finishing work, and decorate.</font></font></p></split-text>
            </div>
          </div>
        </section>
      </div>
      <section class="office bright" style={{ height: '90%' }}>
        <div className="img" style={{
          backgroundImage: `url(${glavnaya})`, height: '44rem', width: '50rem', zIndex: '101',
          backgroundPosition: "cover",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          position: 'relative',
          bottom: '8em',
          left: "29rem"

        }}>
          <div class="note s-t-custom visible"
            style={{
              color: '#9c9c9f',
              position: 'relative',
              right: '14rem',
              top: '30rem',
              height: '3rem', width: '7rem', fontSize: "small"
            }}>
            Central office in Moscow
          </div>
        </div>
        <div class="r" style={{ height: '15rem', position: 'relative', bottom: '10rem' }}>
          <split-text class="tx"><p style={{ color: '#9c9c9f', height: '10rem', width: "28rem", position: 'relative', left: "40rem", fontSize: "small", }}><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>The office on Plyushchikha is a living space that embodies our approach to design. </font><font style={{ verticalAlign: "inherit" }}>Here you will see and feel how Diana Danieli Home specialists create the atmosphere of the room, meet the team personally and make sure that we constantly monitor the latest trends in design and provide an individual approach to each project.</font></font></p></split-text>
        </div>
      </section>
      <Proetots />
      <section className='footer' style={{ height: '30rem'}}>
        <div className="footer-container" style={{ height: '20rem', position: 'relative', top: '10rem', width: '65rem', left: '12rem' }}>
          <div className="text-logo" style={{height:'2.5rem', width:'13rem'}}>
       <img style={{height:'2rem'}} src={textLogo} alt="" />
          </div>
        

        <div className="footer-address" style={{width:'60%',height:'5rem', position:'relative',left:'25rem'}}>
          <div className="number" style={{width:'50%', position:'relative',top:'15%'}}>
+7(495) 150-18-56
          </div>
          <div className="email" style={{width:'50%', position:'relative', top:'28%',}}>
info@dianadanieli.com
          </div>
          <div className="address" style={{width:'50%', position:'absolute', left:'50%',bottom:'50%'}}>
          119121 Moscow
          </div>
          <div className="adress2"  style={{width:'50%', position:'absolute', left:'50%',bottom:'0%'}}>
         
1st Neopalimovsky Lane, 15/7
          </div>
        </div>
        <div className="text-logo" style={{height:'5rem', width:'13rem', position:'absolute', left:'80%', top:'70%'}}>
       <img style={{height:'4rem'}} src={redColler} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
