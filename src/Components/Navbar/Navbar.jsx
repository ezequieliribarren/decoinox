import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { getAssetPath } from '../../utils/getAssetPath';

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
                    <img src={getAssetPath('images/logo-soluciones.png')} alt="Logo Soluciones Inox" />
                </Link>
                <div>
                    <img className='logo-texto-up' src={getAssetPath('images/logo-soluciones.png')} alt="Logo Soluciones Inox" />
                </div>

            </div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <button
                        className={`navbar-toggler ms-auto`}
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Abrir o cerrar menú de navegación"
                        aria-controls="navbarSupportedContent"
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
                            </div>
                            <div className='d-flex align-items-center links-navbar'>
                                <li className="nav-item">
                                </li>
                                <li className="nav-item">
                                    <HashLink className='nav-link' smooth to="/#nosotros" onClick={closeMenu}>
                                        Nosotros
                                    </HashLink>
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
                                    <HashLink className='nav-link contacto-navbar' smooth to="/#contacto" onClick={closeMenu}>
                                        CONTACTO
                                    </HashLink>
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
