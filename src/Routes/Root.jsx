import React from 'react'
import Layout from '../Layout/Layout'
import Carousel from '../Components/Carousel/Carousel'
import Contacto from '../Components/Contacto/Contacto'
import Productos from '../Components/Productos/Productos'
import Nosotros from '../Components/Nosotros/Nosotros'
import TypedText from '../Components/TypedText/TypedText'
import { productos } from '../productos'; // Ajusta la ruta si es necesario



const Root = () => {
  const titles = productos.map(producto => producto.titulo);

  return (
    <Layout>
      <div style={{ position: 'relative' }}>
        <Carousel />
        <TypedText titles={titles} />
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