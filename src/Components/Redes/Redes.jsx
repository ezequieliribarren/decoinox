import React from 'react';
import { getAssetPath } from '../../utils/getAssetPath';

const Redes = () => {
    return (
        <div className='redes-call-action'>
            <div>
                <a href="https://www.instagram.com/solucionesinox.arg/" target="_blank" rel="noopener noreferrer">
                    <img src={getAssetPath('images/ig.png')} alt="Instagram de Soluciones Inox" />
                </a>
            </div>
            <div>
                <a href="mailto:info@solucionesinox.com.ar">
                    <img src={getAssetPath('images/mail.png')} alt="Email de Soluciones Inox" />
                </a>
            </div>
            <div>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={getAssetPath('images/yt.png')} alt="YouTube de Soluciones Inox" />
                </a>
            </div>
        </div>
    );
}

export default Redes;
