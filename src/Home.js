import React from 'react';
import './Home.css'; 
import garrafon from './assets/garrafones.png';

function Home() {
  return (
    <div id="home" className="hero-section">
      <div className="hero-content">
        <p>PURIFICADORA</p>
        <p>VALLE DEL VOLCÁN</p>
        <p>Productos de Agua Purificada y Agua Desionizada.</p>
      </div>
      
      <div className="hero-image">
        {/* Put the path to your image here */}
        <img src={garrafon} alt="Glass of Water" />
      </div>
    </div>
  );
}


export default Home;
