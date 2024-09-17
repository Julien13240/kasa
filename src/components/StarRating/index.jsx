import React from 'react';
import './starRating.scss';
import fullStar from '../../assets/images/fullStar.png';
import emptyStar from '../../assets/images/emptyStar.png';


const StarRating = ({ rating }) => {
  const maxStars = 5;
  const stars = [];
  const ratingValue = parseInt(rating);


  for (let i = 0; i < maxStars; i++) {
    if (i < ratingValue) {
      stars.push(fullStar)

    } else {
      stars.push(emptyStar)
    }
  }
  return (
    <div>
      {stars.map((star, index) => {
        return (
          <img className="star" src={star} alt={""} key={index} />

        )
      }
      )}
    </div>
  )

};

export default StarRating;
