import React from "react";
import AboutHero from "../components/AboutHero";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <div>
      <AboutHero text={"Contact Us"} />
      <div className="container mx-auto flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 justify-between lg:px-52">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
