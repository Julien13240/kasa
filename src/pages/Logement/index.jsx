import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

import StarRating from '../../components/StarRating';
import DataLogement from "../../datas/logement.json";
import Carousel from "../../components/Carrousel";
import ExpansionPanel from "../../components/ExpansionPanel";

import "./logement.scss";

const PageDataLogement = () => {
  const { rentID } = useParams(); // On récupère l'ID du logemnent depuis les paramètres d'URL /logement/{rentID}
  const myRent = DataLogement.find(logement => logement.id === rentID); // Ne pas utiliser les accolades est un raccourci permettant 
  // de ne pas utiliser return ( puisqu'il n'y a qu'un seul parametre d'input)

  if (!myRent) {
    return <Navigate to="../Error" />;
  }
  const hostNames = myRent.host.name.split(' ');
  return (
    <div>


      <main>
        <Carousel pictures={myRent.pictures} />

        <div className="middleBlock">
          <div className="middleLeftBlock">
            <h1>{myRent.title}</h1>
            <p>{myRent.location}</p>
            <div className="tags">
              {myRent.tags.map((tag, index) => (
                <div className="tag" key={index}>{tag}</div>
              ))}
            </div>
          </div>

          <div className="middleRightBlock">
            <div className="hostNameAndPicture">
              <div>
                {hostNames.map((hostName, index) => (
                  <div className="hostName" key={index}>{hostName}</div>
                ))}
              </div>
              <div className="hostImg">
                <img src={myRent.host.picture} alt="host" />
              </div>
            </div>
            <div className="rating">
              <StarRating rating={myRent.rating} />
            </div>
          </div>
        </div>

        <div className="backBlock">
          <div className="leftExpansionPanel">
            <ExpansionPanel title="Description" content={myRent.description} />
          </div>
          <div className="rightExpansionPanel">
            <ExpansionPanel
              title="Équipements"
              content={myRent.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            />
          </div>
        </div>
      </main>


    </div>
  );
};

export default PageDataLogement;
