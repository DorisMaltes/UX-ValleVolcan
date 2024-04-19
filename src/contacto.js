import React from 'react';
import './Contacto.css'; // Make sure to create and link this CSS file

function Contacto() {
  return (
    <div id="contacto" className="section">
            <div className='tituloProceso'>
            <h1>CONTACTO DE LA</h1>
            <h1>EMPRESA</h1>
        </div>
      <div className="contact-info-card">
        {/* Content for the info card like address, phone, email, and social media icons */}
        <h2>Purificadora Valle del Volcán</h2>
        <p>Descripción...Lorem ipsum dolor sit amet consectetur.</p>
        <p>📍 12345678910</p>
        <p>📞 example@example.com</p>
        <div className="social-icons">
          {/* Insert social media icons here */}
        </div>
      </div>
      <div className="contact-form-container">
        <h2>Contáctanos</h2>
        <p>Descripción...Lorem ipsum dolor sit amet consectetur.</p>
        <form className="contact-form">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Teléfono" />
          <textarea placeholder="Comentarios"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
