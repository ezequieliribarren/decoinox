import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../../productos';
import Slider from 'react-slick'; // Importa el componente Slider
import Layout from '../../Layout/Layout'


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
  const images = [producto.img1, producto.img2, producto.img3, producto.img4, producto.img4, producto.img4];
  const modelos = producto.modelos || {};

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,  // Muestra dos imágenes completas y media
    slidesToScroll: 1,
    centerPadding: '150', // Ajusta el padding para mostrar la media imagen desde la derecha,
    arrows: 'true'
  };


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
          <div className="description-horizontal" style={{ transform: `translateY(${animated ? Math.min(scrollY / -0.4, 100) : 0}px)` }}>
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
            </div><div className="container-fluid">
              <div className="row modelo-1">
                <h3>{producto.modelos['modelo-1'].nombre}</h3>
                <Slider {...settings} className='slider-model'>
                  {modelos["modelo-1"] && Object.values(modelos["modelo-1"]).slice(1).map((img, index) => (
                    <div key={index} className='item-slider'>
                      <img src={img} alt={`Modelo 1 - Imagen ${index + 1}`} className="img-fluid" />
                    </div>
                  ))}
                </Slider>
                <div className='row modelo-description'>
                  <div className="col-md-6 modelo-title">
                    <h3 className='h3-designe' dangerouslySetInnerHTML={{ __html: producto.modelos['modelo-1'].nombre2 }}></h3>
                  </div>
                  <div className="col-md-6">
                    <p className='p-modelo' dangerouslySetInnerHTML={{ __html: producto.modelos['modelo-1'].descripcion }}></p>
                  </div>
                </div>
              </div>

              {/* Slider para modelo-2 */}
              <div className="row modelo-2">
                <h3>{producto.modelos['modelo-2'].nombre}</h3>
                <Slider {...settings} className='slider-model'>
                  {modelos["modelo-2"] && Object.values(modelos["modelo-2"]).slice(1).map((img, index) => (
                    <div key={index} className='item-slider'>
                      <img src={img} alt={`Modelo 2 - Imagen ${index + 1}`} className="img-fluid" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>

  );
};

export default ProductoDetaill;
