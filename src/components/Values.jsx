import React from "react";
import {
  FaHandshake,
  FaClock,
  FaEye,
  FaHeart,
  FaCog,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

const Values = () => {
  const coreValues = [
    {
      title: "Collaboration",
      description:
        "We believe in collaboration and work closely with our clients to achieve success.",
      icon: <FaHandshake size={24} />,
      backgroundColor: "#FFC947",
    },
    {
      title: "Reliability",
      description:
        "We prioritize reliability and ensure consistent delivery of quality solutions.",
      icon: <FaClock size={24} />,
      backgroundColor: "#6EC1E4",
    },
    {
      title: "Transparency",
      description:
        "We value transparency and maintain open communication throughout the project lifecycle.",
      icon: <FaEye size={24} />,
      backgroundColor: "#B271E6",
    },
    {
      title: "Quality Driven",
      description:
        "We are committed to delivering high-quality solutions that exceed client expectations.",
      icon: <FaHeart size={24} />,
      backgroundColor: "#FF6B6B",
    },
    {
      title: "Process",
      description:
        "We follow streamlined processes to ensure efficiency and effective project management.",
      icon: <FaCog size={24} />,
      backgroundColor: "#9FD356",
    },
    {
      title: "Innovation",
      description:
        "We foster innovation and leverage cutting-edge technologies to drive business growth.",
      icon: <FaLightbulb size={24} />,
      backgroundColor: "#FF8C00",
    },
    {
      title: "Initiative",
      description:
        "We take initiative and go the extra mile to deliver exceptional results for our clients.",
      icon: <FaRocket size={24} />,
      backgroundColor: "#F79E01",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-start bg-white rounded-lg p-8 shadow-2xl"
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full mr-6 p-3"
                style={{
                  backgroundColor: value.backgroundColor,
                  color: "#fff",
                }}
              >
                {value.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
