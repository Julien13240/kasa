import React from "react";

import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";

import imgAboutBanner from "../../assets/images/aboutBanner.png";
import DataCollapseJson from "../../datas/collapse.json"

import "./about.scss"



const About = () => {

  return (

    <div className="">

      <main>
        {/* Affiche une bannière avec l'image imgAboutBanner, avec l'option greyscale désactivée (couleur normale). */}
        <Banner greyscale={false} image={imgAboutBanner} />
        {DataCollapseJson.map(collapseData => ( //Boucle sur un tableau DataCollapseJson qui contient les données pour chaque section "collapse" (titre et contenu).
          <Collapse title={collapseData.title} content={collapseData.content} /> //Pour chaque entrée dans DataCollapseJson, on affiche un composant Collapse avec un titre et du contenu dynamiquement générés.
        ))}

      </main>

    </div>

  );
};

export default About;