import React, { useState } from 'react';
import './App.css';
import logo from './Assetes/logo.png';
import Main from './Component/Main';
import SideBtn from './Component/SideBtn';
import CustomCursor from './Component/CustomCursor';
// import Cursor from './Component/Cursor';
// import BlurDistort from './Component/BlurDistort';

const App = () => {
  const [isSidebtnClicked, setSidebtnClicked] = useState(false);

  const handleSidebtnClick = (event) => {
    event.preventDefault(); 
    setSidebtnClicked(!isSidebtnClicked);
  };
  return (
    <>
    <CustomCursor/>
    {/* <Cursor/> */}
    {/* <BlurDistort/> */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu-bar" onClick={handleSidebtnClick}>
        <i className={`fa-solid ${isSidebtnClicked ? 'fa-x' : 'fa-bars'}`}></i>
      </div>

      {isSidebtnClicked && <SideBtn />}

      <Main />
    </>
  );
};

export default App;
