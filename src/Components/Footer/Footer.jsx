import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {

    return (
        <footer >
            <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-4 redes-logo-footer">
                    <div className="row">
                        <div className='col-sm-6 contenedor-logo-footer'>
                            <img className='logo-footer' src="images/logo-footer.png" alt="Footer" />
                        </div>
                        <div className='col-sm-6 redes-footer'>
                            <a href="mailto:info@decoinox.com.ar">
                                <img src="images/mail.png" alt="Mail Baires Flights" />
                                <h3>info@decoinox.com.ar</h3>
                            </a>
                            <a href="https://www.instagram.com/"><img src="images/ig.png" alt="Instagram Baires Flights" /> <h3>@decoinox</h3></a>
                            <a href="https://wa.me/+5491123645019?text=Hola,%20estoy%20en%20la%20página%20de%Decoinox%20y%20quiero%20pedir%20más%20información"><img src="images/whatsapp.png" alt="Whatsapp" /><h3>+54 9 11 2364-5019</h3></a>
                        </div>
                    </div>

                </div>
                <div className="col-lg-8">
                    <div className="row links-footer">
                        <div className="col-md-2"><Link><h4>Nosotros</h4></Link></div>
                        <div className="col-md-3">
                            <Link><h4>Productos</h4></Link>
                            <Link><h5 className='first-h5'>Carramientos de piletas</h5></Link>
                            <Link><h5>Barandas para escaleras</h5></Link>
                            <Link><h5>Pasamanos para interiores y exteriores </h5></Link>
                            <Link><h5>Pasamanos y barandas doble homologado</h5></Link>
                        </div>
                        <div className="col-md-3" style={{ marginTop: "4rem" }}>
                            <Link><h5>Revestimiento de acero inoxidable</h5></Link>
                            <Link><h5>Chapas decorativas</h5></Link>
                            <Link><h5>Rejillas de desagüe para duchas</h5></Link>
                            <Link><h5>Rejillas de desagüe pluvial</h5></Link>
                        </div>
                        <div className="col-md-3" style={{ marginTop: "4rem" }}>
                            <Link><h5>Rejillas de ventilación</h5></Link>
                            <Link><h5>Zócalos en acero inoxidable</h5></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5">
                <div className="line">

                </div>
            </div>

            <div className="row mt-3">
                <div className='d-flex justify-content-center copy'>
                    <h5><a href="https://versadigital.com.ar/">Diseñado y Desarrollado por <strong>Versa Digital</strong></a></h5>
                </div>

            </div>
            </div>

        </footer>
    )
}

export default Footer