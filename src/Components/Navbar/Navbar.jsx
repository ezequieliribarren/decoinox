import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
    return (
        <div>
            <div className="up-navbar">
                <img src="images/logo.png" alt="Logo" />
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
                                <img src="images/logo-text.png" alt="Logo" />
                            </div>
                            <div className='d-flex align-items-center links-navbar'>
                                <li className="nav-item">
                                    <Link className='nav-link'>
                                        Nosotros
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link'>
                                        Productos
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link contacto-navbar'>
                                        CONTACTO
                                    </Link>
                                </li>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar