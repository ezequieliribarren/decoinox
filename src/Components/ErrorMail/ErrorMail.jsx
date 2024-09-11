import React, { useState, useEffect } from 'react';

const MensajeError = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://decoinox.com.ar/';
    }, 5000);

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000); // Actualiza cada 1 segundo

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='enviado'>
      <div className='enviadoBlank'>
        <h2>¡UPS, HA OCURRIDO UN ERROR!</h2>
        <h3>Por favor, vuelve a intentarlo más tarde</h3>
        <h3>Serás redirigido hacia la página principal en {countdown} segundos...</h3>
      </div>
    </div>
  );
};

export default MensajeError;