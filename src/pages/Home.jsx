import React from "react";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import WhyZensolutions from "../components/WhyZensoltuions";
import Values from "../components/Values";

const Home = () => {
  return (
    <div>
      <>
        <Hero />
        <OurServices />
        <WhyZensolutions />
        <Values />
      </>
    </div>
  );
};

export default Home;
