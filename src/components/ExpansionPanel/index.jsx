import React, { useState } from "react";

import "./panel.scss";

const ExpansionPanel = ({ title, content }) => {
  // Utilisation du hook useState pour gérer l'état d'ouverture/fermeture du panneau
  const [isOpen, setIsOpen] = useState(false);
  // Initialise un état isOpen à false (panneau fermé par défaut).

  // Fonction qui bascule l'état du panneau (ouvert/fermé)
  const toggleExpansionPanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="expansionPanel">
      <div className="expansionPanel-header" onClick={toggleExpansionPanel}>
        <h3>{title}</h3>

        <span className={`arrow ${isOpen ? "" : "open"}`}></span>
      </div>
      {isOpen && ( // Le contenu n'est affiché que si isOpen est vrai.
        <div className="expansionPanel-content">
          {/* Si le contenu est une chaîne, il est affiché dans un paragraphe, sinon il est rendu comme une liste (<ul>). */}
          {typeof content === "string" ? <p>{content}</p> : <ul>{content}</ul>}
        </div>
      )}
    </div>
  );
};

export default ExpansionPanel;
