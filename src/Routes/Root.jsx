import React, { useEffect } from 'react';
import Layout from '../Layout/Layout'
import Carousel from '../Components/Carousel/Carousel'
import Contacto from '../Components/Contacto/Contacto'
import Productos from '../Components/Productos/Productos'
import Nosotros from '../Components/Nosotros/Nosotros'
import TypedText from '../Components/TypedText/TypedText'
import { productos } from '../productos'; // Ajusta la ruta si es necesario
import Whatsapp from '../Components/Whatsapp/Whatsapp'
import Redes from '../Components/Redes/Redes'




const Root = () => {

    // Desplazar la página hacia arriba cuando se monta el componente
    useEffect(() => {
      window.scrollTo(0, 0);  // Mueve el scroll al inicio de la página al cargar el componente
    }, []);

  return (
    <Layout>
      <Redes/>
      <Whatsapp/>
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
  )
}

export default Root