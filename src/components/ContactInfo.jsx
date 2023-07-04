import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-start space-y-4 p-10">
      <h2 className="text-3xl text-blue-500">Get in Touch</h2>
      <div className="flex items-center">
        <div className="bg-blue-500 text-white rounded-full p-4">
          <FaEnvelope size={20} />
        </div>
        <span className="ml-3 text-xl">info@example.com</span>
      </div>
      <div className="flex items-center">
        <div className="bg-green-500 text-white rounded-full p-4">
          <FaMapMarkerAlt size={20} />
        </div>
        <span className="ml-3 text-xl">123 Main St, City, Country</span>
      </div>
      <div className="flex items-center">
        <div className="bg-yellow-500 text-white rounded-full p-4">
          <FaPhone size={20} />
        </div>
        <span className="ml-3 text-xl">+1 234 567 890</span>
      </div>
      <div className="flex items-center">
        <div className="bg-red-500 text-white rounded-full p-4">
          <FaClock size={20} />
        </div>
        <span className="ml-3 text-xl">Monday - Friday: 9am - 5pm</span>
      </div>
    </div>
  );
};

export default ContactInfo;
