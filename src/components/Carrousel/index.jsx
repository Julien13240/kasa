import React, { useState } from 'react';

import leftArrow from "../../assets/images/leftArrow.png"
import rightArrow from "../../assets/images/rightArrow.png"

import "./carrousel.scss";

const Carousel = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  // Fonction pour revenir à l'image précédente
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev-button" onClick={prevImage}><img src={leftArrow} alt="" /></button>
      <img className="carousel-image" src={pictures[currentImageIndex]} alt={`logement img ${currentImageIndex + 1}`} />
      <button className="carousel-button next-button" onClick={nextImage}><img src={rightArrow} alt="" /></button>
    </div>
  );
};

export default Carousel;
