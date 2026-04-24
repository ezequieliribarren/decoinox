import React from 'react';
import { getAssetPath } from '../../utils/getAssetPath';

const Redes = () => {
    return (
        <div className='redes-call-action'>
            <div>
                <a href="https://www.instagram.com/decoinox.arg/" target="_blank" rel="noopener noreferrer">
                    <img src={getAssetPath('images/ig.png')} alt="Instagram" />
                </a>
            </div>
            <div>
                <a href="mailto:info@decoinox.com.ar">
                    <img src={getAssetPath('images/mail.png')} alt="Email" />
                </a>
            </div>
            <div>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={getAssetPath('images/yt.png')} alt="Youtube" />
                </a>
            </div>
        </div>
    );
}

export default Redes;
