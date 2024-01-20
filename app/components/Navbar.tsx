"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="grid grid-cols-8 bg-black items-center justify-around  ">
        {/* Logo */}
        <div className=" col-span-2 rounded-r-full  whitespace-nowrap p-6 text-black bg-white">
          <a href="/">
            {/* <img src="/logo.png" alt="Logo" className="w-full" /> */}
            HELLO FROM NMIT
          </a>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white uppercase hover:text-gray-300 focus:outline-none focus:text-gray-300"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 8H5V6h14v2zm0 4H5v-2h14v2zm0 4H5v-2h14v2z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                </svg>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu items */}

        {/* Desktop menu */}
        <div className="hidden px-5 rounded-l-full text-sm col-span-6  items-center justify-center gap-5 bg-black md:flex">
          <div>
            <a
              href="#"
              className="text-white uppercase hover:text-gray-300 font-medium"
            >
              HOME
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-white uppercase hover:text-gray-300 font-medium"
            >
              ABOUT-US
            </a>
          </div>
          <div>
            {/* HOMEABOUT US SERVICESPROJECTSCLIENTSCONTACT US */}
            <a
              href="#"
              className="text-white uppercase hover:text-gray-300 font-medium"
            >
              Services
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-white  uppercase hover:text-gray-300 font-medium"
            >
              Projects
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-white  uppercase hover:text-gray-300 font-medium"
            >
              Clients
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-white  uppercase hover:text-gray-300 font-medium"
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <motion.div
          whileInView={{}}
          className="md:hidden transition delay-500  duration-1000 ease-in-out w-full mt-4"
        >
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a
                href="#"
                className="text-white uppercase hover:text-gray-300 font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white uppercase hover:text-gray-300 font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white uppercase hover:text-gray-300 font-medium"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white uppercase hover:text-gray-300 font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
