import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center">
            <Image src={logo} width={160} height={40} alt="Logo" />
          </Link>
          <p className="text-sm text-blue-200 leading-relaxed max-w-sm">
            We build modern, scalable and user-friendly digital solutions to help your business grow online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-lg font-semibold mb-5 text-white">Quick Links</p>
          <ul className="space-y-3 text-blue-200 text-sm">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-blue-300 transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-lg font-semibold mb-5 text-white">Services</p>
          <ul className="space-y-3 text-blue-200 text-sm">
            {["Web Development", "UI/UX Design", "SEO Optimization", "Digital Marketing"].map((service) => (
              <li key={service} className="transition-colors duration-300 hover:text-blue-300 cursor-default">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-lg font-semibold mb-5 text-white">Contact</p>
          <div className="space-y-4 text-blue-200 text-sm">
            <p className="flex items-center gap-3">
              <Phone size={16} /> +977 98XXXXXXXX
            </p>
            <p className="flex items-center gap-3">
              <Mail size={16} /> info@example.com
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={16} /> Kathmandu, Nepal
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 hover:scale-105 transition-all duration-300"
                aria-label="Social Media"
              >
                <Icon size={18} className="text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-blue-200">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;