import React from 'react';
import './Proceso.css'; // Asegúrate de que el archivo CSS está vinculado
import Vaso from './assets/vaso.png'

function Proceso() {
  return (
    <div id="proceso" className="section">
        <div className='tituloProceso'>
            <h1>PROCESO DE</h1>
            <h1>PURIFICACIÓN</h1>
        </div>
      
      <p>Subtítulo para presentar el proceso de purificación</p>
      <div className="process-container">
        <div className="step">Paso 1 Nombre Descripción</div>
        <div className="step">Paso 2 Nombre Descripción</div>
        <div className="step">Paso 3 Nombre Descripción</div>
        <div className="step">Paso 4 Nombre Descripción</div>
        <div className="step">Paso 5 Nombre Descripción</div>
        <div className="step">Paso 6 Nombre Descripción</div>
        <div className="process-image">
          {/* Asumiendo que tienes una imagen circular del proceso */}
          <img src={Vaso} alt="Proceso de Purificación" className="rotating" />
        </div>
      </div>
    </div>
  );
}

export default Proceso;
