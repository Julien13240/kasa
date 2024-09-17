import React from "react";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import imgHomeBanner from "../../assets/images/homeBanner.png";
import "./home.scss"

const Home = () => {
  return (
    <div className="home">

      <main>
        <Banner greyscale={true} texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        <Gallery />
      </main>

    </div>
  );
};

export default Home;