import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Servicios.css'
import coche from './assets/cocheServicio.png'

function TestimonialsCarousel() {
  // Configuración para el carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // Personaliza las flechas del carrusel
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'blue' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'blue' }}
        onClick={onClick}
      />
    );
  }

  return (
    <div>
      <Slider {...settings}>

        <div className="testimonial">
            <div class="delivery-card">
                <div class="delivery-info">
                    <h2>Servicio a Domicilio</h2>
                    <p>We will deliver water to your home for 1 hour to anywhere in the city. Just fill the delivery form.</p>
                    <div class="delivery-details">
                    <div class="detail">
                        <span class="icon"> 🚚</span>
                        <span> FREE DELIVERY</span>
                    </div>
                    <div class="detail">
                    <span class="icon">📆</span>
                        <span> 7 DAYS A WEEK</span>
                    </div>
                    <div class="detail">
                        <span class="icon">⏰</span>
                        <span> 8:00 – 23:00</span>
                    </div>
                    </div>
                </div>
                <div class="delivery-image">
                    <img src={coche} alt="Delivery Van" />
                </div>
            </div>

        </div>
        
        <div className="testimonial">
        <h3>Proceso de Purificación del Agua</h3>
          <p>Tenemos un riguroso sistema de purificación del agua certificado por Trataquim S.A de C.V</p>
          <p>El café que preparan es el mejor que he probado.</p>
        </div>

        <div className="testimonial">
          <h3>Rellenado de Garrafones</h3>
          <p>Barista</p>
          <p>El café que preparan es el mejor que he probado.</p>
        </div>

        <div className="testimonial">
          <h3>Servicio A Domicilio</h3>
          <p>Haremos entrega de garrafones a su domicilio en cualquier parte de cholula.</p>
          <p>El café que preparan es el mejor que he probado.</p>
        </div>

        <div className="testimonial">
          <h3>Botellas Personalizadas</h3>
          <p>Barista</p>
          <p>El café que preparan es el mejor que he probado.</p>
        </div>

        <div className="testimonial">
          <h3>Dispensador Automatico</h3>
          <p>Barista</p> 
          <p>El café que preparan es el mejor que he probado.</p>
        </div>

        <div className="testimonial">
          <h3>Servicio A Empresas</h3>
          <p>Barista</p>
          <p>El café que preparan es el mejor que he probado.</p>
        </div>

        {/* aqui iran los servicios que ofre aga valle del volcán */}
      </Slider>
      
    </div>
    
  );
}

function Servicios() {
  return (
    <div id="servicios" className="section">
      <div className='tituloProceso'>
            <h1>NUESTROS</h1>
            <h1>SERVICIOS</h1>
        </div>
      <p className='paddingxd'>Descripción de los servicios que ofrecemos...</p>

      <div className='carruselLOL'>
        <TestimonialsCarousel />
      </div>
      
    </div>
  );
}

export default Servicios;
