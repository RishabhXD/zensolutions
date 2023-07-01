import React from "react";
import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import Tabs from "../components/Tabs";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <AboutHero text={"About Us"} />
      <AboutSection />
      <Tabs />
      <div className="container mx-auto bg-blue-500 py-10 px-4 sm:px-6 lg:px-36 flex flex-col sm:flex-row items-center justify-between text-white">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mr-0 sm:mr-4 mb-4 sm:mb-0">
          Having Trouble Going Online?
        </p>
        <button className="bg-white text-blue-500 py-2 px-4 rounded-md">
          <Link to="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export default About;
