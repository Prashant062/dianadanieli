import React, { useState, useEffect } from 'react';
import person1 from '../Assetes/person1.jpg';
import person2 from '../Assetes/person2.jpg';
import person3 from '../Assetes/person3.jpg';
import person4 from '../Assetes/person4.jpg';
import person5 from '../Assetes/person5.jpg';
import person6 from '../Assetes/person6.jpg';
import './Designer.css'; // Adjust the path accordingly


const personData = [
    {
        key: 1,
        name: 'Suren Meliksetyan',
        image: person1,
        title: "WITHatRen MelAndToWitheTIn",
        desc: "RATTOOVODANDTELB OTDELA GRAFANDHEWITHTOOGO DANDHATHNA AND RETOLAMS"
    },
    {
        key: 2,
        name: 'Evgeny Farewell',
        image: person2,
        title: "EVGenAndth PROschAth",
        desc: "ARXANDTETOTOR"
    },
    {
        key: 3,
        name: 'Victor Naumenko',
        image: person3,
        title: "INAndToTOR NAatmenToO",
        desc: "NAHALBNANDTO WITHTOLIRNOGO PROANDHVODWITHTVA"
    },
    {
        key: 4,
        name: 'Andrey Gurov',
        image: person4,
        title: "AndReth GatROV",
        desc: "ARXANDTETOTOR"
    },
    {
        key: 5,
        name: " Marina Tikhonova",
        image: person5,
        title: "MARAndnA TAndXOnOVA",
        desc: "POMOSCHNANDTO RATTOOVODANDTELI"
    },
    {
        key: 6,
        name: 'Alexey Andreev',
        image: person6,
        title: "AleToWitheth AndReeV",
        desc: "NAHALBNANDTO MEBELBNOGO PROANDHVODWITHTVA"
    },
];

const Designer = () => {
    const [selectedPerson, setSelectedPerson] = useState(0);
    const [isHidden, setIsHidden] = useState(false);
  
    const handleArrowClick = (direction) => {
      setIsHidden(true);
      setTimeout(() => {
        if (direction === 'up') {
          setSelectedPerson((prev) => (prev - 1 + personData.length) % personData.length);
        } else if (direction === 'down') {
          setSelectedPerson((prev) => (prev + 1) % personData.length);
        }
        setIsHidden(false);
      }, 500); // Adjust the timeout to match your transition duration
    };
  
    const handleGroupClick = (personKey) => {
      setIsHidden(true);
      setTimeout(() => {
        setSelectedPerson(personKey - 1);
        setIsHidden(false);
      }, 500); // Adjust the timeout to match your transition duration
    };
  
    useEffect(() => {
      setIsHidden(false); // Show the initial content without animation
    }, []);
  
    const currentPerson = personData[selectedPerson];
  
    return (
      <>
        <div
          className={`img ${isHidden ? 'flip-out-hor-bottom' : 'flip-in-hor-bottom'}`}
          style={{
            backgroundImage: `url(${currentPerson.image})`,
            height: '33rem',
            width: '72rem',
            zIndex: '101',
            backgroundPosition: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            position: 'absolute',
            left: '12rem',
          }}
        >
                <div className="note s-t-custom visible" style={{ color: '#9c9c9f', position: 'relative', height: '3rem', width: '7rem', fontSize: 'small' }}>
                    <div className="up-down-icon" style={{ width: '2.5rem' }}>
                        <div className="up" onClick={() => handleArrowClick('up')} style={{ cursor:'pointer', height: '2rem', width: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid white ', borderRadius: '50%', margin: '10px' }}>
                            <i className="fa-solid fa-chevron-up"></i>
                        </div>
                        <div className="down" onClick={() => handleArrowClick('down')} style={{ cursor:'pointer',height: '2rem', width: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid white ', borderRadius: '50%', margin: '10px' }}>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="title-para" style={{ width: '40rem', position: 'relative', top: '10rem' }}>
                        <h3>{currentPerson.title}</h3>
                        <p style={{ width: '30rem', position: 'relative', left: '5rem' }}>{currentPerson.desc}</p>
                    </div>
                    <div className="group" style={{ position: 'relative', left: '55rem', cursor: 'pointer' }}>
          {personData.map((person) => (
            <div
              key={person.key}
              className={`nm item s-t up visible cursor-interactive ${person.key === selectedPerson + 1 ? 'active' : ''}`}
              onClick={() => handleGroupClick(person.key)}
              style={{ color: person.key === selectedPerson + 1 ? 'white' : '#9c9c9f' }}
            >
              {person.name}
            </div>
          ))}
        </div>
                </div>
            </div>
        </>
    )
}

export default Designer
