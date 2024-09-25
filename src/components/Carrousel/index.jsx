import React, { useState } from 'react';

import leftArrow from "../../assets/images/leftArrow.png"
import rightArrow from "../../assets/images/rightArrow.png"

import "./carrousel.scss";

const Carousel = ({ pictures }) => {
  // Utilisation de useState pour gérer l'index de l'image actuellement affichée dans le carrousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    // Fonction qui permet de passer à l'image suivante en augmentant l'index de l'image actuelle. Si l'index atteint la fin du tableau pictures, il revient à 0 grâce au % pictures.length.
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  // Fonction pour revenir à l'image précédente
  const prevImage = () => {
    // Fonction qui permet de revenir à l'image précédente. Si on est à la première image (index 0), l'index revient à la dernière image dans le tableau.
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
