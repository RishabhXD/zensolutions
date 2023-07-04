import React from "react";

const AboutHero = ({text}) => {
  return (
    <section class="bg-white text-white border-b mb-10">
      <div class="mx-auto max-w-screen-xl px-4 pt-32 pb-10 lg:flex lg:h-[40vh] lg:items-center">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-xl font-bold text-transparent sm:text-5xl">
            {text}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
