import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
    return (
        <>
            <div className="up-navbar">
                <Link to="/">
                    <img src="images/logo.png" alt="Logo" />
                </Link>

            </div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div className='redes-navbar'>
                                <a href=""><img src="images/ig.png" alt="Instagram" /></a>
                                <a href=""><img src="images/mail.png" alt="Mail" /></a>
                            </div>
                            <div className='logo-navbar'>
                                <Link to="/">
                                    <img src="images/logo-text.png" alt="Logo" />
                                </Link>
                            </div>
                            <div className='d-flex align-items-center links-navbar'>
                                <li className="nav-item">
                                    <Link className='nav-link' to="#nosotros">
                                        Nosotros
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Productos
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to="/producto/cerramientos-de-piletas">
                                                Cerramientos de piletas
                                            </Link>
                                            <Link to="/producto/barandas-para-escaleras">
                                                Barandas para escaleras
                                            </Link>
                                            <Link to="/producto/pasamanos-para-interiores-y-exteriores">
                                                Pasamanos para interiores y exteriores
                                            </Link>
                                            <Link to="/producto/rejillas-de-desagüe-para-duchas">
                                               Rejillas de desagüe para duchas
                                            </Link>
                                            <Link to="/producto/cerramientos-de-piletas">
                                                Cerramientos de piletas
                                            </Link>
                                            <Link to="/producto/cerramientos-de-piletas">
                                                Cerramientos de piletas
                                            </Link>
                                            <Link to="/producto/cerramientos-de-piletas">
                                                Cerramientos de piletas
                                            </Link>
                                            <Link to="/producto/cerramientos-de-piletas">
                                                Cerramientos de piletas
                                            </Link>
                                            <Link to="/producto/cerramientos-de-piletas">
                                                Cerramientos de piletas
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link contacto-navbar' to="#contacto">
                                        CONTACTO
                                    </Link>
                                </li>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar