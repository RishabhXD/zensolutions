import React from "react";
import { FaAward, FaUsers, FaLightbulb } from "react-icons/fa";

const WhyZensolutions = () => {
  const cards = [
    {
      title: "Quality",
      description:
        "We deliver high-quality solutions that meet the needs and expectations of our clients.",
      icon: <FaAward size={48} className="text-white" />,
      iconBackground: "#ffcc66",
    },
    {
      title: "Expert Team",
      description:
        "Our team of experienced professionals is dedicated to providing top-notch IT services.",
      icon: <FaUsers size={48} className="text-white" />,
      iconBackground: "#66ccff",
    },
    {
      title: "Innovation",
      description:
        "We constantly strive for innovation, bringing creative ideas to drive business success.",
      icon: <FaLightbulb size={48} className="text-white" />,
      iconBackground: "#ff6699",
    },
  ];

  return (
    <div className="bg-purple-100 py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-purple-700 mb-8">
          Why Zensolutions
        </h2>
        <hr className="w-20 mx-auto border-t-2 border-purple-500 mb-8" />

        <p className="text-center text-gray-600 mb-8">
          Transforming businesses with innovative IT solutions and consultancy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-lg p-8 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: card.iconBackground }}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyZensolutions;
