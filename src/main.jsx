import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Root from './Routes/Root';
import './index.scss'
import ProductoDetaill from './Components/ProductoDetail/ProductoDetail';
import MensajeEnviado from './Components/MensajeEnviado/MensajeEnviado'
import MensajeError from './Components/ErrorMail/ErrorMail'




const router = createHashRouter([

  {
    path: "/",
    element: (
      <Root />
    ),
  },
  {
    path: "/producto/:title",
    element: (
      <ProductoDetaill />
    ),
  },

  {
    path: "/enviado",
    element: <MensajeEnviado />
  },
  {
    path: "/error",
    element: <MensajeError/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
