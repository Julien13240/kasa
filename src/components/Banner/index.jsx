import React from "react";

import "./banner.scss"

function Banner({ image, texte, greyscale }) {
  /** On récupère la propriété greyscale passée par le parent et 
    on retourne le filtre overlay uniquement si greyscale est vraie*/
  const renderOverlay = () => {
    if (greyscale) {
      return (
        <div className="banner-sombre"></div>
      )
    }

  }
  return (

    <div className="banner">

      <img className="banner-img" src={image} alt="Bannière" />
      {renderOverlay()}
      <span className="banner-txt">{texte}</span>
    </div>
  );
}

export default Banner;