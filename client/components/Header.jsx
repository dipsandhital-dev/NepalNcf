"use client";

import Image from "next/image";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.png";

const links = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Objectives", path: "objective" },
  { name: "Contact", path: "contact" },
];

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 ">

        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={100} height={50} className="object-contain" />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="hidden md:flex gap-10 items-center font-medium text-gray-700">
            {links.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80} // to account for sticky header
                  className="cursor-pointer hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Donate
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            {/* Hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
