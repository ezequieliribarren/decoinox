import React from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../../productos';

const Productos = () => {
  return (
    <section id='productos'>
      <h2>Nuestros Productos</h2>
      <div className="gallery">
        {productos.map((producto) => {
          // Reemplazar espacios por guiones en el título
          const slug = producto.titulo.replace(/\s+/g, '-').toLowerCase();
          
          return (
            <div className="card" key={producto.id}>
              <Link to={`/producto/${encodeURIComponent(slug)}`} className="card-link">
                <img src={producto.imagen} alt={producto.titulo} className="card-image" />
                <h3>{producto.titulo} <br /><span className='ver-mas-producto'>+</span></h3>
                <p className="card-description">
                  {producto.descripcion}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Productos;
