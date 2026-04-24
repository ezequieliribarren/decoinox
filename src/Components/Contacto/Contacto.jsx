import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../../utils/getAssetPath';

const sendEmailEndpoint = `${import.meta.env.BASE_URL}send-email.php`;

const Contacto = () => {
    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = {
            consult_name: form.current.consult_name.value,
            user_email: form.current.user_email.value,
            consult_tel: form.current.consult_tel.value,
            consult_message: form.current.consult_message.value
        };

        try {
            const response = await fetch(sendEmailEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                form.current.reset();
                navigate('/enviado');
            } else {
                navigate('/error');
            }
        } catch (error) {
            console.error('Error:', error);
            navigate('/error');
        }
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
                        <a href="mailto:info@solucionesinox.com.ar">
                            <img src={getAssetPath('images/mail-2.png')} alt="Mail Baires Flights" />
                            <h3>info@solucionesinox.com.ar</h3>
                        </a>
                        <a href="https://www.instagram.com/decoinox.arg" target="_blank" rel="noopener noreferrer"><img src={getAssetPath('images/ig-2.png')} alt="Instagram de Soluciones-Inox" /> <h3>@decoinox.arg</h3></a>
                        <a href="https://wa.me/+5491123645019?text=Hola,%20estoy%20en%20la%20p%C3%A1gina%20de%20Soluciones-Inox%20y%20quiero%20pedir%20m%C3%A1s%20informaci%C3%B3n" target="_blank" rel="noopener noreferrer"><img src={getAssetPath('images/wp-2.png')} alt="Whatsapp de Decoinox" /><h3>+54 9 11 2364-5019</h3></a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Contacto
