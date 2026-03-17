import React from "react";
import logo from "../assets/logo.svg";
import { Mail, Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-[#17428b] from-gray-900 to-gray-800 text-white py-6 px-4 md:px-10 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <img
            src={logo}
            alt="Media Academy Logo"
            className="h-12 w-auto mb-2 mx-auto"
          />
          <h2 className="text-2xl font-semibold mx-auto">Media Academy</h2>
          <p className="text-lg opacity-75">Empowering Digital Learning</p>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left mt-10">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-md opacity-75">info@entrepreneurshipnetwork.net</p>
          <h3 className="text-lg font-semibold mt-2">Corporate Address</h3>
          <p className="text-md opacity-75">India Accelerator</p>
          <p className="text-md opacity-75">Noida 201301, UP, India</p>
        </div>

        {/* Social Media Links (Mail & LinkedIn) */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="mailto:info@entrepreneurshipnetwork.net"
            className="hover:text-yellow-400 transition "
          >
            <Mail size={25} />
          </a>
          <a
            href="https://www.linkedin.com/company/the-entrepreneurship-network/posts/?feedView=all"
            className="hover:text-yellow-600 transition"
          >
            <Linkedin size={25} />
          </a>
        </div>
      </div>

      {/* bottom Section */}
      <div className="text-sm opacity-75 mt-6 border-t border-white pt-4">
        © {new Date().getFullYear()} Media Academy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
