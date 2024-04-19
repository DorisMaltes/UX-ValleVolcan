import React from 'react';
import './App.css';
import logo from './assets/logoValle.png';

import Servicios from './Servicios';
import Certificacion from './Certificacion';
import Contacto from './contacto';
import Proceso from './proceso';
import Home from './Home';
import Footer from './Footer';

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <section className="svg-background">
        <nav className="navbar">
          <img src={logo} alt="Logotipo" className="navbar-logo" />
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('proceso')}>Proceso de purificación</button>
          <button onClick={() => scrollToSection('certificacion')}>Certificación</button>
          <button onClick={() => scrollToSection('servicios')}>Productos y Servicios</button>
          <button onClick={() => scrollToSection('contacto')}>Contacto</button>
        </nav> 
          <Home/>
          <Proceso/>
      </section>

      <section className="svg-background">
        
      </section>

      <Certificacion />
      <Servicios />
      <Contacto/>
      
      <Footer />
      
    </div>
  );
}

export default App;