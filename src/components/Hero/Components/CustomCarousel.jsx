import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // For carousel functionality
import '../Hero.css';
import carousel1 from '../../../assets/home/1.jpg';
import carousel2 from '../../../assets/home/2.jpg';
import carousel3 from '../../../assets/home/3.jpg';
import carousel4 from '../../../assets/home/4.jpg';
import carousel5 from '../../../assets/home/5.jpg';
import carousel6 from '../../../assets/ezhilmaran-galleryimg1.jpg';
import carousel7 from '../../../assets/ezhilmaran-galleryimg2.jpg';
import carousel8 from '../../../assets/ezhilmaran-galleryimg8.jpg';
import carousel9 from '../../../assets/ezhilmaran-galleryimg7.jpg';



const CustomCarousel = () => {
  useEffect(() => {
    const el = document.querySelector('#carouselExampleIndicators');
    if (el && window.bootstrap) {
      new window.bootstrap.Carousel(el, {
        interval: 3000,
        ride: 'carousel',
        pause: false,
      });
    }
  }, []);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      data-bs-pause="false"
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {[...Array(9)].map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Static Caption */}
      <div
        className="custom-caption d-none d-md-block"
        
      >
        <h1>Corporate Training That Transforms Through Gamified Learning</h1>
        <p>
          Unleashing the untapped power of people through gamified,
          experiential learning. Because real transformation begins where
          textbooks end.
        </p>
       
      </div>

      {/* Carousel Slides */}
      <div className="carousel-inner">
        {[carousel8, carousel6, carousel7, carousel9, carousel3, carousel1, carousel4, carousel5, carousel2].map((img, idx) => (
          <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
            <img src={img} className="d-block w-100" alt={`Slide ${idx + 1}`} />
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CustomCarousel;
