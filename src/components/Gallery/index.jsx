import React from "react";
import { Link } from "react-router-dom";

import logement from "../../datas/logement.json";
import Card from "../Cards";

import "./gallery.scss"

const Gallery = () => {
  return (
    <div className="home_gallery">
      {logement.map((logement) => {
        return (
          <article className="logement" key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;