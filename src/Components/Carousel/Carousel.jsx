import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="images/1.png" className="d-block w-100 desktop" alt="" />
        </div>
        <div className="carousel-item">
          <img src="images/2.png" className="d-block w-100 desktop" alt="" />
        </div>
        <div className="carousel-item">
          <img src="images/3.png" className="d-block w-100 desktop" alt="" />
        </div>
        <div className="carousel-item">
          <img src="images/4.png" className="d-block w-100 cel" alt="" />
        </div>
        <div className="carousel-item">
          <img src="images/5.png" className="d-block w-100 cel" alt="" />
        </div>
        <div className="carousel-item">
          <img src="images/6.png" className="d-block w-100 cel" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
