import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1: Logo and About Us */}
          <div>
            <div className="text-2xl font-bold mb-4 text-purple-600">
              <img src="./assets/logo.png" alt="logo" className="w-24" />
            </div>
            <p>Transforming businesses</p>
          </div>

          {/* Section 2: Our Services */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-purple-600">
              Our Services
            </h2>
            <ul>
              <li>
                <Link
                  to="/services/web-development"
                  className="hover:text-purple-600 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/automation"
                  className="hover:text-purple-600 transition-colors"
                >
                  Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ui-ux-design"
                  className="hover:text-purple-600 transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/content-writing"
                  className="hover:text-purple-600 transition-colors"
                >
                  Content Writing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/quality-assurance"
                  className="hover:text-purple-600 transition-colors"
                >
                  Quality Assurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Quick Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-purple-600">
              Quick Links
            </h2>
            <ul>
              <li>
                <Link
                  to="/"
                  className="hover:text-purple-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-purple-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-purple-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 4: Our Location */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-purple-600">
              Our Location
            </h2>
            <p>New Delhi, India</p>

            {/* Social media links */}
            <div className="flex mt-4">
              <a href="https://www.facebook.com">
                <FaFacebook
                  className="text-gray-600 hover:text-purple-600 transition-colors mr-4"
                  style={{ transition: "transform 0.3s" }}
                  fontSize={24}
                />
              </a>
              <a href="https://www.twitter.com">
                <FaTwitter
                  className="text-gray-600 hover:text-purple-600 transition-colors  mr-4"
                  style={{ transition: "transform 0.3s" }}
                  fontSize={24}
                />
              </a>
              <a href="https://www.instagram.com">
                <FaInstagram
                  className="text-gray-600 hover:text-purple-600 transition-colors  mr-4"
                  style={{ transition: "transform 0.3s" }}
                  fontSize={24}
                />
              </a>
              <a href="https://www.linkedin.com">
                <FaLinkedin
                  className="text-gray-600 hover:text-purple-600 transition-colors "
                  style={{ transition: "transform 0.3s" }}
                  fontSize={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
