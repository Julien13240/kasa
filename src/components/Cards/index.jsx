import React from 'react';

import "./card.scss"

function Card({image, title}) {
    return (
      <div className="card">
        <img src={image} alt={title} className="card-img" />
        <div className="card-overlay"></div>

        <h2 className="card-title">{title}</h2>
      </div>
    );
}

export default Card;