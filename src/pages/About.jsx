import React from "react";
import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import Tabs from "../components/Tabs";

const About = () => {
  return (
    <div>
      <AboutHero text={"About Us"} />
      <AboutSection />
      <Tabs />
    </div>
  );
};

export default About;
