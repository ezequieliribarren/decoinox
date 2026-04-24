import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { getAssetPath } from '../../utils/getAssetPath';

const Carousel = () => {
  // Configuración de Slick Carousel
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <div className="desktop">
        <Slider {...settings} className='slider-desktop'>
          <div className="carousel-item">
            <img src={getAssetPath('images/1.png')} alt="Imagen 1" />
          </div>
          <div className="carousel-item">
            <img src={getAssetPath('images/2.png')} alt="Imagen 2" />
          </div>
          <div className="carousel-item">
            <img src={getAssetPath('images/3.png')} alt="Imagen 3" />
          </div>
        </Slider>
      </div>
      
      <div className="cel">
        <Slider {...settings} className='slider-cel'>
          <div className="carousel-item">
            <img src={getAssetPath('images/4.png')} alt="Imagen 4" />
          </div>
          <div className="carousel-item">
            <img src={getAssetPath('images/5.png')} alt="Imagen 5" />
          </div>
          <div className="carousel-item">
            <img src={getAssetPath('images/6.png')} alt="Imagen 6" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
