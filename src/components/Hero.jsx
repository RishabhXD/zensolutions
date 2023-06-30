import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white text-primary py-40 px-12">
      <div className="md:w-1/2 md:mr-12">
        <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
          <span className="bg-gradient-to-r text-transparent text-left bg-clip-text from-purple-500 to-pink-500">
            Transforming Businesses <br /> with IT Solutions and Consultancy
          </span>
        </h1>
        <p className="text-lg mb-8 text-gray-600 text-center md:text-left">
          We deliver exceptional IT services, including web development,
          automation, UI/UX, content writing, and quality assurance, driving
          business success through innovative solutions
        </p>
        <Link to="/contact" className="flex justify-center md:justify-start">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-pink-500 transform transition-all hover:scale-110">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src="/assets/hero.png" alt="Hero" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
