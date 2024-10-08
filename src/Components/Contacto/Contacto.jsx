import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contacto = () => {
    const form = useRef();


     const sendEmail = (e) => {
         e.preventDefault();

         emailjs
             .sendForm('service_dp0w1cp', 'template_i5m2i5e', form.current, 'A-hewqe9Gnv4X1ALr')
             .then((result) => {
                 window.location.href = "#/enviado"
             }, (error) => {
                window.location.href = "#/error"
             });
     };

    return (
        <section id='contacto' className='p-5'>
            <h2 className='text-center'>Contactanos</h2>
            <div className='container-fluid '>
                <div className="row">
                    <div className='col-lg-7 contenedor-formulario'>
                        <form id="contactForm" ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label htmlFor="Nombre">Nombre</label>
                                <input type="text" id="nombre" name='consult_name' required placeholder="Tu nombre" />
                            </div>
                            <div className="form-group email-celular">
                                <div>
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" id="email" name='user_email' required placeholder="ejemplo@gmail.com" />
                                </div>
                                <div>
                                    <label htmlFor="Celular">Celular</label>
                                    <input type="tel" id="tel" name="consult_tel" required placeholder="11-2222-3333" />
                                </div>

                            </div>
                            <div className="form-group">
                                <label htmlFor="Dejanos tu mensaje">Dejanos tu mensaje</label>
                                <textarea id="mensaje" name="consult_message" required placeholder="Escribí aquí tu mensaje..."></textarea>
                            </div>
                            <button className='button-2' type="submit" value="Enviar">ENVIAR</button>
                        </form>
                    </div>
                    <div className='col-lg-5 redes-contacto'>
                        <a href="mailto:info@decoinox.com.ar">
                            <img src="images/mail-2.png" alt="Mail Baires Flights" />
                            <h3>info@decoinox.com.ar</h3>
                        </a>
                        <a href="https://www.instagram.com/decoinox.arg"><img src="images/ig-2.png" alt="Instagram Baires Flights" /> <h3>@decoinox.arg</h3></a>
                        <a href="https://wa.me/+5491123645019?text=Hola,%20estoy%20en%20la%20página%20de%Decoinox%20y%20quiero%20pedir%20más%20información"><img src="images/wp-2.png" alt="Whatsapp" /><h3>+54 9 11 2364-5019</h3></a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Contacto