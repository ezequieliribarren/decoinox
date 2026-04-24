import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../../productos';
import Slider from 'react-slick';
import Layout from '../../Layout/Layout';
import Contacto from '../Contacto/Contacto';
import Whatsapp from '../Whatsapp/Whatsapp';
import { Helmet } from 'react-helmet';
import { getAssetPath } from '../../utils/getAssetPath';

const ProductoDetaill = () => {
  const { title } = useParams();
  const [scrollY, setScrollY] = useState(0);
  const [animated, setAnimated] = useState(false);

  const producto = productos.find(p => p.slug === title);

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  const images = [producto.img1, producto.img2, producto.img3, producto.img4, producto.img5, producto.img6];
  const modelos = producto.modelos || {};

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 4, centerMode: false }},
      { breakpoint: 1000, settings: { slidesToShow: 3, centerMode: false }},
      { breakpoint: 760, settings: { slidesToShow: 2, centerMode: false }},
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: false }},
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 200 && !animated) {
        setAnimated(true);
        setScrollY(currentScrollY);
      } else if (animated) {
        setScrollY(Math.min(currentScrollY, 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);

  // Extraer texto plano de la descripción (opcional para SEO)
  const descripcionLimpia = producto.descripcion.replace(/<[^>]*>?/gm, '').substring(0, 160);

  return (
    <>
      <Helmet>
        <title>{producto.titulo} | Soluciones Inox</title>
        <meta name="description" content={descripcionLimpia || "Producto de acero inoxidable de alta calidad"} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${producto.titulo} | Soluciones Inox`} />
        <meta property="og:description" content={descripcionLimpia || "Producto de acero inoxidable de alta calidad"} />
        <meta property="og:image" content={producto.img1} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://www.solucionesinox.com/producto/${producto.slug}`} />
        <link rel="canonical" href={`https://www.solucionesinox.com/producto/${producto.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${producto.titulo} | Soluciones-Inox`} />
        <meta name="twitter:description" content={descripcionLimpia || "Producto de acero inoxidable de alta calidad"} />
        <meta name="twitter:image" content={producto.img1} />
      </Helmet>

      <Layout>
        <section id='producto-detalle'>
          <Whatsapp />
          <div className="container-fluid p-4 header-description">
            <div className="row header-producto">
              {images.map((image, index) => (
                <div className="col-2" key={index}>
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
                  <h1>{producto.titulo}</h1>
                </div>
                <div className="line"></div>
                <div className='row description-down'>
                  <div className='col-md-8 description-p'>
                    <p dangerouslySetInnerHTML={{ __html: producto.descripcion }}></p>
                  </div>
                  <div className='col-md-4 description-button'>
                    <button className="button-1">
                      <span className='description-button-span'><img src={getAssetPath('images/reloj.png')} alt="" /></span>
                      Rápida instalación
                    </button>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                {Object.keys(modelos).map((modeloKey, index) => {
                  const modelo = modelos[modeloKey];
                  return (
                    <div className={`row modelo-${index + 1}`} key={modeloKey}>
                      <h2>{modelo.nombre}</h2>
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
                          <a target='_blank' href="https://api.whatsapp.com/send/?phone=%2B5491123645019&text=Hola%2C+estoy+en+la+p%C3%A1gina+de+Soluciones-Inox+y+quiero+pedir+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0">CONSULTAR</a>
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
    </>
  );
};

export default ProductoDetaill;
