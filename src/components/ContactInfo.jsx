import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-start space-y-4 p-10">
      <h2 className="text-5xl font-medium">
        <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
          Get in Touch with Us
        </span>
      </h2>

      <p className="text-lg py-5 rounded">
        Feel free to reach out to us for any inquiries.
      </p>

      <div className="flex items-center">
        <div className="bg-blue-500 text-white rounded-full p-4">
          <FaEnvelope size={20} />
        </div>
        <div className="ml-3">
          <h4 className="text-lg font-medium text-green-500">Email:</h4>
          <span className="text-lg">zensolutions@gmail.com</span>
        </div>
      </div>
      {/* <div className="flex items-center">
        <div className="bg-green-500 text-white rounded-full p-4">
          <FaMapMarkerAlt size={20} />
        </div>
        <div className="ml-3">
          <h4 className="text-lg font-medium text-blue-500">Location:</h4>
          <span className="text-lg">New Delhi, India</span>
        </div>
      </div> */}
      <div className="flex items-center">
        <div className="bg-yellow-500 text-white rounded-full p-4">
          <FaPhone size={20} />
        </div>
        <div className="ml-3">
          <h4 className="text-lg font-medium text-yellow-500">Phone:</h4>
          <span className="text-lg">+91 72899 38894</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-red-500 text-white rounded-full p-4">
          <FaClock size={20} />
        </div>
        <div className="ml-3">
          <h4 className="text-lg font-medium text-red-500">Business Hours:</h4>
          <span className="text-lg">Monday - Friday: 9AM - 5PM</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
