"use client";

import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side - Company Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Vorzium Innovations</h2>
          <p className="text-gray-400 max-w-sm">
            Turning ideas into interactive, high-performing digital experiences.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-500 transition">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">Services</h3>
          <a href="/home" className="text-gray-400 hover:text-white transition">
            Home
          </a>
          <a
            href="/about"
            className="text-gray-400 hover:text-white transition"
          >
            About Us
          </a>
          <a
            href="/services"
            className="text-gray-400 hover:text-white transition"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-gray-400 hover:text-white transition"
          >
            Contact Us
          </a>
        </div>

        {/* Right Side - Contact & CTA */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-gray-400">Email: hello@vorzium.com</p>
          <p className="text-gray-400">Phone: +94 123 456 789</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition text-white font-semibold cursor-pointer">
            Let’s Work Together
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © 2025 Vorzium Innovations. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
