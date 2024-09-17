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
        <Banner greyscale={false} image={imgAboutBanner} />
        {DataCollapseJson.map(collapseData => (
          <Collapse title={collapseData.title} content={collapseData.content} />
        ))}

      </main>

    </div>

  );
};

export default About;