import React from "react";
import { FaCode, FaRobot, FaPalette, FaPen, FaCheck } from "react-icons/fa";

const OurServices = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We create stunning websites using the latest technologies and best practices.",
      icon: <FaCode fontSize={24} />,
      backgroundColor: "#ffcc66",
      learnMoreLink: "#",
    },
    {
      title: "Automation",
      description:
        "We automate repetitive tasks and streamline processes to improve efficiency.",
      icon: <FaRobot fontSize={24} />,
      backgroundColor: "#66ccff",
      learnMoreLink: "#",
    },
    {
      title: "UI/UX Design",
      description:
        "We design intuitive and visually appealing user interfaces for seamless user experiences.",
      icon: <FaPalette fontSize={24} />,
      backgroundColor: "#ff6699",
      learnMoreLink: "#",
    },
    {
      title: "Content Writing",
      description:
        "We craft engaging and persuasive content to captivate your target audience.",
      icon: <FaPen fontSize={24} />,
      backgroundColor: "#99cc66",
      learnMoreLink: "#",
    },
    {
      title: "Quality Assurance",
      description:
        "We ensure the highest level of quality and performance through rigorous testing and analysis.",
      icon: <FaCheck fontSize={24} />,
      backgroundColor: "#6666ff",
      learnMoreLink: "#",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8 bg-gradient-to-r text-transparent bg-clip-text from-purple-500 to-pink-500">
          Our Services
        </h2>
        <hr className="w-20 mx-auto border-t-2 border-purple-500 mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-lg p-8 shadow-2xl hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: service.backgroundColor }}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>
              <a
                href={service.learnMoreLink}
                className="text-primary font-semibold hover:text-primary-light hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
