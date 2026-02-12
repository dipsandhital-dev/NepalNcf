"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-[90vh] bg-gradient-to-b from-white to-blue-50 flex items-center px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-200 rounded-3xl blur-2xl opacity-40"></div>
            <Image
              src={aboutImage}
              alt="About NCEF"
              className="relative w-full max-w-md  hover:scale-105 transition duration-500"
              priority
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8 text-center lg:text-left"
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
            Who We Are
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            About <span className="text-blue-500">NCEF</span>
          </h1>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            The Nepal-China Exchange Forum (NCEF) aims to strengthen cultural,
            educational, and business relationships between Nepal and China by
            promoting people-to-people connections and fostering mutual
            understanding.
          </p>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Inspired by the vision of Honorable Former Prime Minister Jhala Nath
            Khanal, NCEF seeks to complement strong political ties through
            sustainable development, cultural exchange, and economic
            cooperation—creating lasting goodwill and partnerships.
          </p>

        
        </motion.div>
      </div>
    </section>
  );
};

export default About;
