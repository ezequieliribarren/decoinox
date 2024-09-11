import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Función para cerrar el menú después de seleccionar una opción
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const top = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="up-navbar">
                <Link to="/" onClick={closeMenu}>
                    <img src="images/logo.png" alt="Logo" />
                </Link>
                <div>
                    <img className='logo-texto-up' src="images/logo-text.png" alt="Logo" />
                </div>

            </div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <button
                        className={`navbar-toggler ms-auto`} // Move the button to the right
                        type="button"
                        onClick={toggleMenu}
                        style={{ backgroundColor: '#CBBFB1', borderColor: '#CBBFB1' }}
                    >
                        {isMenuOpen ? 'X' : '☰'} {/* Toggle between "X" and "☰" */}
                    </button>

                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className='nav-item'>
                                <Link className='inicio' to="/" onClick={() => { closeMenu(); top(); }}>
                                    Inicio
                                </Link>

                            </li>
                            <div className='logo-navbar d-none d-lg-block'>
                                <Link to="/" onClick={() => { closeMenu(); top(); }}>
                                    <img src="images/logo-text.jpeg" alt="Logo" />
                                </Link>
                            </div>
                            <div className='d-flex align-items-center links-navbar'>
                                <li className="nav-item">
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to="/#nosotros" onClick={closeMenu}>
                                        Nosotros
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Productos
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className='nav-link' to="/producto/cerramientos-de-piletas" onClick={closeMenu}>
                                                Cerramientos de piletas
                                            </Link>
                                            <Link className='nav-link' to="/producto/barandas-para-escaleras" onClick={closeMenu}>
                                                Barandas para escaleras
                                            </Link>
                                            <Link className='nav-link' to="/producto/pasamanos-para-interiores-y-exteriores" onClick={closeMenu}>
                                                Pasamanos para interiores y exteriores
                                            </Link>
                                            <Link className='nav-link' to="/producto/rejillas-de-desagüe-para-duchas" onClick={closeMenu}>
                                                Rejillas de desagüe para duchas
                                            </Link>
                                            <Link className='nav-link' to="/producto/revestimiento-de-acero-inoxidable" onClick={closeMenu}>
                                                Revestimiento de acero inoxidable
                                            </Link>
                                            <Link className='nav-link' to="/producto/chapas-decorativas" onClick={closeMenu}>
                                                Chapas decorativas
                                            </Link>
                                            <Link className='nav-link' to="/producto/zócalos-en-acero-inoxidable" onClick={closeMenu}>
                                                Zócalos en acero inoxidable
                                            </Link>
                                            <Link className='nav-link' to="/producto/rejillas-de-desagüe-pluvial" onClick={closeMenu}>
                                                Rejillas de desagüe pluvial
                                            </Link>
                                            <Link className='nav-link' to="/producto/rejillas-de-ventilación" onClick={closeMenu}>
                                                Rejillas de ventilación
                                            </Link>
                                            <Link className='nav-link' to="/producto/pasamanos-y-barandas-doble-homologado" onClick={closeMenu}>
                                                Pasamanos y barandas doble homologado
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link contacto-navbar' to="#contacto" onClick={closeMenu}>
                                        CONTACTO
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
