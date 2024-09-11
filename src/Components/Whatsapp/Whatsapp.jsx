import React, { useState } from 'react';

const Whatsapp = () => {
  const [hover, setHover] = useState(false);

  // Get the current hour
  const currentHour = new Date().getHours();

  // Display the component only if the current time is between 8 AM and 7 PM
  if (currentHour < 8 || currentHour > 19) {
    return null;
  }

  return (
    <div
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
      }}
      onClick={() => window.location.href = 'https://api.whatsapp.com/send/?phone=%2B5491123645019&text=Hola%2C+estoy+en+la+p%C3%A1gina+de+Decoinox+y+quiero+pedir+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0'}
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
        <h4 className='h4-whatsapp'>Estamos en línea ¿Cómo podemos ayudarte?</h4>
      </div>
      <div className='img-whatsapp'
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={hover ? 'images/wp2.png' : 'images/wp.png'}
          alt="WhatsApp"
          style={{
            width: '60px',
            height: '60px',
            transition: '0.3s',
          }}
        />
      </div>
    </div>
  );
};

export default Whatsapp;
