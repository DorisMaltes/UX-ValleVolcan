import React from 'react';
import './Certification.css'; 
import moño from './assets/moño.png'

function Certificacion() {
  return (
    <div id="certificacion" className="section">
        <div className='tituloProceso'>
            <h1>CERTIFICACIÓN DEL</h1>
            <h1>PROCESSO DEL AGUA</h1>
        </div>
            <p className="subheading">Subheading to introduce testimonials</p>

        <div className="certification-content">
        <div className="certification-card">
          <h3>Trataquim S.A de C.V</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
          {/* Asumiendo que tienes una imagen para el moño */}
          <img src={moño} alt="Certification Ribbon" className="certification-ribbon" ></img>
        </div>
        
        <div className="certification-score">
          <div className="score-circle">99/100</div>
          <ul className="score-details">
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Certificacion;


