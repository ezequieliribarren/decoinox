import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import Carousel from '../Components/Carousel/Carousel';
import Contacto from '../Components/Contacto/Contacto';
import Productos from '../Components/Productos/Productos';
import Nosotros from '../Components/Nosotros/Nosotros';
import TypedText from '../Components/TypedText/TypedText';
import Whatsapp from '../Components/Whatsapp/Whatsapp';
import Redes from '../Components/Redes/Redes';
import { Helmet } from 'react-helmet';

const Root = () => {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Soluciones Inox | Cerramientos, barandas y pasamanos de acero inoxidable</title>
        <meta name="description" content="Soluciones Inox: especialistas en acero inoxidable y vidrio templado. Cerramientos de piletas, barandas, pasamanos, rejillas, revestimientos y chapas decorativas con rápida instalación. Pedí tu presupuesto." />
        <meta name="keywords" content="Soluciones Inox, acero inoxidable, cerramientos de piletas, barandas de acero inoxidable, pasamanos, rejillas de desagüe, revestimientos de acero inoxidable, chapas decorativas, vidrio templado, Argentina" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook) */}
        <meta property="og:site_name" content="Soluciones Inox" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Soluciones Inox | Especialistas en acero inoxidable" />
        <meta property="og:description" content="Cerramientos de piletas, barandas, pasamanos, rejillas y revestimientos en acero inoxidable. Calidad garantizada y rápida instalación." />
        <meta property="og:image" content="https://solucionesinox.com.ar/images/1.png" />
        <meta property="og:url" content="https://solucionesinox.com.ar/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soluciones Inox | Especialistas en acero inoxidable" />
        <meta name="twitter:description" content="En Soluciones Inox vas a encontrar la más alta calidad en productos de acero inoxidable y vidrio templado." />
        <meta name="twitter:image" content="https://solucionesinox.com.ar/images/1.png" />

        <link rel="canonical" href="https://solucionesinox.com.ar/" />

        {/* Datos estructurados */}
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Soluciones Inox',
          url: 'https://solucionesinox.com.ar/',
          logo: 'https://solucionesinox.com.ar/images/logo-soluciones.png',
          image: 'https://solucionesinox.com.ar/images/1.png',
          description: 'Especialistas en acero inoxidable y vidrio templado: cerramientos de piletas, barandas, pasamanos, rejillas, revestimientos y chapas decorativas.',
          email: 'solucionesinox.arg@gmail.com',
          telephone: '+54 9 11 2364-5019',
          areaServed: 'AR',
          sameAs: ['https://www.instagram.com/solucionesinox.arg/']
        })}</script>
      </Helmet>

      <Layout>
        <Redes />
        <Whatsapp />
        <div style={{ position: 'relative' }}>
          <Carousel />
          <TypedText />
        </div>
        <main>
          <Productos />
          <Nosotros />
          <Contacto />
        </main>
      </Layout>
    </>
  );
};

export default Root;
