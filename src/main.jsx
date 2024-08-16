import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Root from './Routes/Root';
import './index.scss'




const router = createHashRouter([


  {
    path: "/",
    element: (
      <Root />
    ),
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)