import { useState } from 'react';
import { Link } from 'react-scroll';
import './App.css';
import './styles/tabletSize.css';
import './styles/pcSize.css';
import './styles/wideScreen.css';
import cv from './Components/archivo.pdf';

import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contacto from './paginas/Contacto';
import Habilidades from './paginas/Habilidades';
import Inicio from './paginas/Inicio';
import Proyectos from './paginas/Proyectos';



import uk from './img/uk.gif'
import spain from './img/spainGif.gif'

import logo from './img/brLogoTraYell.png'
import Footer from './Pages/Footer';
function App() {
  const [english, setEnglish] = useState(true)
  const [darkTheme, setDarkTheme] = useState(true)

  const [isVisible, setIsVisible] = useState(false)
  const showNavbar = () => {
    setIsVisible(!isVisible)
  }

  const [color, setColor] = useState(false);


  const colorChange = () => {
    if(window.scrollY >= 10) {
      setColor(true)
  }else{
      setColor(false)
  }
}

window.addEventListener('scroll', colorChange)
  

  return (
    <div className={darkTheme ? "dark-mode" : "light-mode"} id="header">

      {isVisible ?
        (
          <>
            <nav className={isVisible ? "linksMenu" : "links"} id='header'>

              <section className='navOptBtn'>
                <button className='darkModeBtn' onClick={() => setDarkTheme(!darkTheme)}>
                  {darkTheme ? <i class="fa-solid fa-sun" style={{color: "yellow"}}></i> : <i class="fa-solid fa-moon" style={{color: "purple"}}></i>}</button>

                <button className='xtrFtrFlg'  onClick={() => setEnglish(!english)}> <img className='flag' src={english? spain : uk} alt="" /> </button>

                <button className='nav-btn' onClick={showNavbar}>
                  <i style={{ color: "orange" }} class="fa-regular fa-circle-xmark"></i>
                </button>
              </section>

              <Link onClick={showNavbar} className='link' to='home' smooth={true} duration={2000}>{english ? "Home" : "Inicio"}</Link>
              <Link onClick={showNavbar} className='link' to='skills' smooth={true} duration={2000}>{english ? "Skills" : "Habilidades"}</Link>
              <Link onClick={showNavbar} className='link' to='projects' smooth={true} duration={2000}>{english ? "Projects" : "Proyectos"}</Link>
              <Link onClick={showNavbar} className='link' to='contact' smooth={true} duration={2000}>{english ? "Contact" : "Contacto"}</Link>
              <button onClick={showNavbar} className='cvHddnMenu'><a className='aTxt' download="Cv BrandonDeLaRosa" href={cv}> {english ? "Download CV" : "Descargar CV"}</a></button>
            </nav>

            <button className='nav-btn' onClick={showNavbar} >
              {/* <i  class="fa-solid fa-bars"></i> */}
            </button>
            
          </>
        )
        :
        (
          <>
            <nav className={isVisible ? "linksMenu" : "links"} id='header'>

              <Link style={{ cursor: "pointer" }} to='header' smooth={true} duration={2000}> <img className='logo' src={logo} alt="" /> </Link>


              <section className='linkFS'>
                <Link className='linkFullS' to='home' smooth={true} duration={500}>{english ? "Home" : "Inicio"}</Link>
                <Link className='linkFullS' to='skills' smooth={true} duration={1000}>{english ? "Skills" : "Habilidades"}</Link>
                <Link className='linkFullS' to='projects' smooth={true} duration={1500}>{english ? "Projects" : "Proyectos"}</Link>
                <Link className='linkFullS' to='contact' smooth={true} duration={2000}>{english ? "Contact" : "Contacto"}</Link>
                <button className='cv'><a className='aTxt' download="Cv BrandonDeLaRosa" href={cv}> {english ? "Download CV" : "Descargar CV"}</a></button>
              </section>
            </nav>

            <button className='nav-btn' onClick={showNavbar}>
              <i class="fa-solid fa-bars"></i>
              {/* <img className='fa-bars' src={menu} alt="" /> */}
            </button>
          </>
        )
      }


      <section className={color ? 'colorChangeContainer' : "colorChange"}>
        {isVisible ?
          (
            <>
              <Link className='bckToHdr' to="header" smooth={true} duration={1000}><i class="fa-regular fa-hand-point-up"></i></Link>
            </>
          )
          :
          (
            <>
              <div className='langTheme'>
                <button className='darkModeBtn' onClick={() => setDarkTheme(!darkTheme)}>
                  {darkTheme ? <i class="fa-solid fa-sun" style={{ color: "yellow" }}></i> : <i class="fa-solid fa-moon" style={{ color: "purple" }}></i>}</button>
                <button className='xtrFtrFlg' onClick={() => setEnglish(!english)}> <img className='flag' src={english ? spain : uk} alt="" /> </button>
              </div>

              <Link className='bckToHdr' to="header" smooth={true} duration={1000}><i class="fa-regular fa-hand-point-up"></i></Link>
            </>
          )
        }
      </section> 

      {english ? <Home /> : <Inicio />}
      {english ? <Skills  lang={english}/> : <Habilidades lang={english} />}
      {english ? <Projects /> : <Proyectos />}
      {english ? <Contact /> : <Contacto />}
      <Footer/>  
    </div>
  )
}

export default App;

// style={{ color: darkTheme ? "white" : "black" }}
// npm i typewriter-effect   