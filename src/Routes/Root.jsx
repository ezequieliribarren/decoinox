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
        <title>Especialistas en acero inoxidable | Decoinox</title>
        <meta name="description" content="En Decoinox somos especialistas en acero inoxidable. Ofrecemos productos de alta calidad con rápida instalación y atención personalizada." />
        <meta name="keywords" content="acero inoxidable, especialistas, productos de acero, instalaciones, Decoinox" />

        {/* Open Graph (Facebook) */}
        <meta property="og:title" content="Especialistas en acero inoxidable | Decoinox" />
        <meta property="og:description" content="Conocé nuestros productos de acero inoxidable. Calidad garantizada y rápida instalación." />
        <meta property="og:image" content="https://decoinox.com/images/home-og.jpg" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://decoinox.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Especialistas en acero inoxidable | Decoinox" />
        <meta name="twitter:description" content="En Decoinox vas a encontrar la más alta calidad en productos de acero inoxidable." />
        <meta name="twitter:image" content="https://decoinox.com/images/home-og.jpg" />

        {/* Canonical URL (opcional pero recomendado) */}
        <link rel="canonical" href="https://decoinox.com/" />
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
