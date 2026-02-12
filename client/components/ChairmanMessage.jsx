"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import chairmanImg from "../assets/charriman.png";

const ChairmanMessage = () => {
  return (
    <section className="w-full min-h-[90vh] bg-[#2b7fff] flex items-center px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white space-y-6"
        >
          <span className="inline-block px-4 py-1 text-sm bg-white/20 rounded-full tracking-wide">
            Leadership Message
          </span>

          <p className="text-3xl  text-[#ffde59]  md:text-4xl font-bold leading-tight">
            Message from the Chairman
          </p>

          <div className="h-1 w-20 bg-white rounded-full"></div>

          <p className="text-white/90 leading-relaxed text-base md:text-lg">
            Welcome to the Nepal-China Exchange Forum (NCEF), dedicated to
            strengthening cultural, educational, and economic ties between
            Nepal and China under the guidance of Honorable Former Prime
            Minister Jhala Nath Khanal.
          </p>

          <p className="text-white/90 leading-relaxed text-base md:text-lg">
            Through cultural festivals, business exchanges, and joint research
            initiatives, we aim to foster mutual respect, understanding, and
            collaboration. Join us in building lasting bonds for a brighter
            future of shared success.
          </p>

          <div className="pt-4">
            <p className="font-semibold text-lg">
              Chairman
            </p>
            <p className="font-bold text-xl">
              Ramesh Poduel
            </p>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <Image
              src={chairmanImg}
              alt="Chairman"
              className="relative w-full max-w-llg"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
