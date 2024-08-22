import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../../productos';
import Slider from 'react-slick'; // Importa el componente Slider
import Layout from '../../Layout/Layout';
import Contacto from '../Contacto/Contacto';

const ProductoDetaill = () => {
  const { title } = useParams();
  const [scrollY, setScrollY] = useState(0);
  const [animated, setAnimated] = useState(false);

  // Encuentra el producto basado en el título de la URL
  const producto = productos.find(p => p.slug === title);

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  // Arreglo de las imágenes del producto
  const images = [producto.img1, producto.img2, producto.img3, producto.img4];
  const modelos = producto.modelos || {};

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,  // Muestra dos imágenes completas y media
    slidesToScroll: 1,
    centerPadding: '150', // Ajusta el padding para mostrar la media imagen desde la derecha,
    arrows: true
  };

  // Desplazar la página hacia arriba cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0);  // Mueve el scroll al inicio de la página al cargar el componente
  }, []);

  // Actualiza el estado del scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 200 && !animated) {
        setAnimated(true);
        setScrollY(currentScrollY);
      } else if (animated) {
        setScrollY(Math.min(currentScrollY, 100)); // Limita el movimiento
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);

  return (
    <Layout>
      <section id='producto-detalle'>
        <div className="container-fluid p-4 header-description">
          <div className="row header-producto">
            {images.map((image, index) => (
              <div className="col-md-2" key={index}>
                <img src={image} alt={`Imagen ${index + 1} de ${producto.titulo}`} className="img-fluid" />
              </div>
            ))}
          </div>
          <div className="description-horizontal" style={{ transform: `translateY(${animated ? Math.min(scrollY / -0.6, 100) : 0}px)` }}>
            <div className="description-horizontal-description">
              <div className='description-slogan'>
                <h3>La más alta calidad</h3>
              </div>
              <div className='description-title'>
                <h2>{producto.titulo}</h2>
              </div>
              <div className="line"></div>
              <div className='row description-down'>
                <div className='col-md-6 description-p'>
                  <p>{producto.descripcion}</p>
                </div>
                <div className='col-md-6 description-button'>
                  <button className="button-1">
                    <span className='description-button-span'><img src="images/reloj.png" alt="" /></span>
                    Rápida instalación
                  </button>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              {/* Itera sobre los modelos y renderiza un componente para cada uno */}
              {Object.keys(modelos).map((modeloKey, index) => {
                const modelo = modelos[modeloKey];
                return (
                  <div className={`row modelo-${index + 1}`} key={modeloKey}>
                    <h3>{modelo.nombre}</h3>
                    <Slider {...settings} className='slider-model'>
                      {Object.values(modelo.imagenes).map((img, imgIndex) => (
                        <div key={imgIndex} className='item-slider'>
                          <img src={img} alt={`Modelo ${index + 1} - Imagen ${imgIndex + 1}`} className="img-fluid" />
                        </div>
                      ))}
                    </Slider>
                    <div className='row modelo-description'>
                      <div className="col-md-6 modelo-title">
                        <h3 className='h3-designe' dangerouslySetInnerHTML={{ __html: modelo.nombre2 }}></h3>
                      </div>
                      <div className="col-md-6 modelo-p">
                        <p className='p-modelo' dangerouslySetInnerHTML={{ __html: modelo.descripcion }}></p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Contacto />
    </Layout>
  );
};

export default ProductoDetaill;
