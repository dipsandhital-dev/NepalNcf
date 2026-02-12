import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <section className="w-full flex flex-2  h-10 sm:h-16 items-center justify-between bg-blue-500 lg:px-10 px-15 "  id="home">
      <div className=" flex items-center w-auto gap-10">
        <Link href="#" className=" flex items-center gap-3  ">
          {" "}
          <Mail size={20} color="white" />
          <span className="font-medium text-white text-sm ">
            {" "}
            info@nepalncf.org
          </span>
        </Link>

        <Link href="#" className=" flex items-center gap-3  ">
          {" "}
          <Phone size={20} color="white" />
          <span className="font-medium text-white text-sm ">
            {" "}
            +977 1 4234567
          </span>
        </Link>
      </div>

      <div className="flex items-center w-auto gap-10">
        <Link href="#" className="flex items-center  gap-3">
          <Facebook size={20} color="white" />
          <Twitter size={20} color="white" />
          <Instagram size={20} color="white" />
        </Link>
      </div>
    </section>
  );
};

export default TopBar;
