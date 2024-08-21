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
                <div className= "card-title">
                  <h3>{producto.titulo}</h3>
                </div>
                    
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
