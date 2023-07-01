import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 container lg:px-36 sm:px-12 md:px-12">
      <div className="mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-16">
          <h3 className="text-lg text-gray-500 mb-2">About Us</h3>
          <h2 className="text-3xl font-bold mb-4 text-purple-600">
            ZenSolutions
          </h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            consequat justo et metus porta, a venenatis mi consectetur. Fusce
            tempus ante mi, in consectetur est lobortis vel. Sed semper urna
            eget sem ultricies pharetra.
          </p>
          <p>
            Donec vel mauris nulla. Cras eu mi a neque tempus rhoncus eget ut
            dolor. Curabitur iaculis aliquet turpis, sit amet venenatis nisl
            aliquet at. Sed consectetur dolor a arcu tincidunt mattis.
          </p>
        </div>
        <div className="md:w-1/2 sm:w-full ">
          <img
            src="./assets/about.png"
            alt="About Us"
            className="w-full h-auto md:max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
