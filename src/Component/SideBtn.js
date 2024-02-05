import './SideBtn.css';
import redColler from '../Assetes/red-coller.jpeg';
const SideBtn = () => {
   
    return (
        <>
        <div className="menubar-container">
        <div className="text-logo" style={{height:'4rem', width:'13.5rem'}}>
       <h5>DIANA DANIELI HOME</h5>
       <p style={{border:'2px solid back', position:'relative',left:'1rem',bottom:'0.5rem',fontSize:'small'}}>DESIGN&FURNITURE</p>
          </div>
          <div className="about-section">
            <a href="/">ABOUT COMPANY</a>
          </div>
           <div className="dfc-container">
            <a href="/">DESIGN</a>
            <a href="/">FURNITURE</a>
            <a href="/">CONSTRUCTION</a>
           </div>
         <div className="pro-cont">
            PROJECT
         </div>
         <div className="contact-cont">
                       CONTACT
         </div>
         <div className="contact-info">
            <div className="line" style={{border:'2px solid red', width:'30px',marginBottom:'1.5rem'}}></div>
         <div className="number" style={{width:'100%', position:'relative',top:'15%',marginBottom:'.5rem'}}>
+7(495) 150-18-56
          </div>
          <div className="email" style={{width:'50%', position:'relative', top:'28%',marginBottom:'.5rem'}}>
info@dianadanieli.com
          </div>
         </div>

         <div className="copyRight">
            <a href="/">@ DIANA DANIELI HOME, 1995-2023</a>
          </div>

          <div className="text-logo" style={{height:'4rem', width:'13rem', position:'absolute', left:'90%', top:'85%'}}>
       <img style={{height:'3rem'}} src={redColler} alt="" />
          </div>
        </div>
        </>
    );
};

export default SideBtn;
