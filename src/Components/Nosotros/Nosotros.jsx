import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagenesData from '../../nosotros.json';

const Nosotros = () => {
    const settings = {
        centerMode: true,
        centerPadding: '120px',
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section id='nosotros'>
            <div className="container contenedor-nosotros">
                <div className="row description nosotros">
                    <div className="col-md-4 img-nosotros">
                        <img className='img-nosotros-img' src="images/nosotros/logo-nosotros.png" alt="Decoinox" />
                    </div>
                    <div className="col-md-8">
                        <h2>Conocenos</h2>
                        <h3>Somos Decoinox,</h3>
                        <p >una empresa dedicada a convertir <strong>sueños</strong> en <strong>realidad</strong> utilizando productos de primera
                            calidad, diseños originales y atención profesional.</p>
                        <p>Nuestros trabajos en acero inoxidable y vidrio templado suman detalles de categoría que potencian
                            la belleza de cualquier diseño, en armonía con el ambiente, ya que se mimetizan con todos los
                            espacios dando seguridad, calidad y durabilidad.</p>
                        <p>Nuestro equipo de profesionales cuenta con más de 20 años de experiencia en el mercado y
                            atienden de manera personalizada a cada cliente ofreciendo todas sus habilidades para que sus
                            sueños cobren vida.
                        </p>
                        <p><strong>Porque para nosotros cada cliente es único.</strong></p>
                    </div>
                </div>
                <div className="row">
                    <Slider className='slider-nosotros' {...settings}>
                        {imagenesData.imagenes.map((imagen, index) => (
                            <div className='item-slider-nosotros' key={index}>
                                <img src={imagen.url} alt={`Imagen ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Nosotros;
