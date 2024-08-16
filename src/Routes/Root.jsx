import React from 'react'
import Layout from '../Layout/Layout'
import Carousel from '../Components/Carousel/Carousel'
import Contacto from '../Components/Contacto/Contacto'


const Root = () => {
  return (
    <Layout>
      <Carousel />
      <main>

<Contacto/>
      </main>
    </Layout>
  )
}

export default Root