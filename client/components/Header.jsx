"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react"; // Lucide icons
import logo from "../assets/logo.png";

const links = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Objectives", path: "objective" },
  { name: "Contact", path: "contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="hidden md:flex gap-10 items-center font-medium text-gray-700">
            {links.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  className="cursor-pointer hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}

            {/* Quick Meet Button */}
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
              >
                Quick Meet
              </ScrollLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md absolute w-full left-0 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "top-full" : "-top-[500px]"
        }`}
      >
        <ul className="flex flex-col gap-4 p-6 font-medium text-gray-700">
          {links.map((link, index) => (
            <li key={index}>
              <ScrollLink
                to={link.path}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onClick={() => setMobileMenuOpen(false)}
                className="cursor-pointer hover:text-blue-500 transition-colors block"
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}

          {/* Quick Meet Button for Mobile */}
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition text-center block cursor-pointer"
            >
              Quick Meet
            </ScrollLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
