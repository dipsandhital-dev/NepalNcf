"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import business from "../assets/business.png";

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-white flex items-center px-6 md:px-16 lg:px-24 overflow-hidden">
      
      {/* Optional subtle decorative shapes */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-20 -z-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-20 -z-10 blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10">
        
        {/* Left Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            People To People <br /> Exchanges For <br /> Shared Future
          </motion.h1>

          <motion.p
            className="mt-4 text-blue-500 text-lg font-semibold sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Bridging cultures and building connections for a brighter tomorrow.
          </motion.p>

          <motion.button
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg transition-all font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="flex-1 hidden md:flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={business}
            alt="Business Illustration"
            width={500}
            height={500}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
