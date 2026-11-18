import React, { useState } from 'react';
import { getAssetPath } from '../../utils/getAssetPath';

const Whatsapp = () => {
  const [hover, setHover] = useState(false);

  return (
    <a
      className='contenedor-whatsapp'
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '35px',
        width: '270.5px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        zIndex: 1111,
        textDecoration: 'none' // Para evitar subrayado en el texto
      }}
      href='https://api.whatsapp.com/send/?phone=%2B5491123645019&text=Hola%2C+estoy+en+la+p%C3%A1gina+de+Soluciones+Inox+y+quiero+pedir+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0'
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div 
        className='contenedor-h4-whatsapp' 
        style={{ 
          color: '#fff', 
          marginRight: '10px', 
          backgroundColor: 'black', 
          borderRadius: '10px', 
          padding: '10px',
          opacity: hover ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <h4 className='h4-whatsapp'>¿Cómo podemos ayudarte? Escribinos por WhatsApp</h4>
      </div>
      <div className='img-whatsapp'
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={getAssetPath('images/wp2.png')}
          alt="Contactar a Soluciones Inox por WhatsApp"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            transition: 'filter 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
            filter: hover ? 'brightness(1.35) saturate(1.2)' : 'brightness(1)',
            transform: hover ? 'scale(1.08)' : 'scale(1)',
            boxShadow: hover ? '0 0 18px rgba(37, 211, 102, 0.8)' : '0 0 8px rgba(37, 211, 102, 0.35)',
          }}
        />
      </div>
    </a>
  );
};

export default Whatsapp;
