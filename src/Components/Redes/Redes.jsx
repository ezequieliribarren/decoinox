import React from 'react';

const Redes = () => {
    return (
        <div className='redes-call-action'>
            <div>
                <a href="https://www.instagram.com/decoinox_arg/" target="_blank" rel="noopener noreferrer">
                    <img src="images/ig.png" alt="Instagram" />
                </a>
            </div>
            <div>
                <a href="mailto:info@decoinox.com.ar">
                    <img src="images/mail.png" alt="Email" />
                </a>
            </div>
            <div>
                <a href="https://api.whatsapp.com/send/?phone=%2B5491123645019&text=Hola%2C+estoy+en+la+p%C3%A1gina+de+Decoinox+y+quiero+pedir+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    <img src="images/whatsapp.png" alt="WhatsApp" />
                </a>
            </div>
        </div>
    );
}

export default Redes;
