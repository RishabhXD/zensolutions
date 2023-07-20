import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { DiHtml5, DiCss3, DiJavascript, DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

const WebDev = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="md:px-32 px-5 mx-auto md:flex md:items-center md:justify-around mb-8">
        <div className="md:w-1/2">
          <div className="mb-4">
            <h1 className="text-md font-medium">
              <span className="text-purple-500">Web Development</span>
            </h1>
            <p className="text-gray-700 text-xl">
              One stop for all your web development needs
            </p>
          </div>
          <p className="text-gray-700">
            We offer services that deliver customized solutions to our clients.
            Our team of web developers uses the latest technologies and tools to
            create dynamic, responsive, and scalable web applications that help
            businesses achieve their goals.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/assets/web_dev.png"
            alt="Web Development"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mb-8">
        <Link
          to="/contact"
          className="flex items-center text-blue-500 hover:text-blue-600 transition duration-300"
        >
          <span>Ready to start a project?</span>
          <AiOutlineArrowRight className="ml-2 text-lg" />
        </Link>
      </div>
      <div className="md:flex md:items-center md:justify-center">
        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-4">Frontend</h2>
          <div className="flex items-center justify-center">
            <DiHtml5 className="text-5xl text-red-500 mr-4" />
            <DiCss3 className="text-5xl text-blue-500 mr-4" />
            <DiJavascript className="text-5xl text-yellow-500 mr-4" />
            <DiReact className="text-5xl text-blue-400 mr-4" />
            <TbBrandNextjs className="text-5xl text-black mr-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
