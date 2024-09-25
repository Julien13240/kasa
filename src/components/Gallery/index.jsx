import React from "react";
import { Link } from "react-router-dom";

import logement from "../../datas/logement.json";
import Card from "../Cards";

import "./gallery.scss"

const Gallery = () => {
  return (
    <div className="home_gallery">
      {/* Pour chaque objet dans le tableau logement, on crée un élément article qui représente un logement unique. Chaque article a une clé unique basée sur l'ID du logement. */}
      {logement.map((logement) => {
        return (
          <article className="logement" key={logement.id}>
            {/* Chaque logement est cliquable et redirige vers une page spécifique au logement grâce à l'ID dans l'URL. */}
            <Link to={`/logement/${logement.id}`}>
              {/* Composant qui affiche l'image de couverture du logement et son titre. */}
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;