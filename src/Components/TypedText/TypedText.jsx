import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
    useEffect(() => {
        const options = {
            strings: [
                "Diseños originales",
                "Atención profesional",
                "Productos de primera calidad"
            ],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
            cursorChar: '', // Elimina el cursor visible
            showCursor: false // Oculta el cursor
        };

        const element = document.getElementById('typed-text');
        const typed = new Typed(element, options);

        // Limpia Typed.js al desmontar el componente
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='typed-container'>
            <div className='typed'>
                <h4>Sueños hechos realidad</h4>
                <h5 id="typed-text"></h5>     
            </div>
        </div >
    );
};

export default TypedText;
