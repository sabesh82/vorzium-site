"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const links = [
    { href: "/home", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/faq", label: "FAQ" },
  ];

  const [activeLink, setActiveLink] = useState("/home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-5 px-2 text-white transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between h-16 rounded-xl backdrop-blur-2xl shadow-lg shadow-black/10">
        {/*left side*/}
        <div className="flex items-center gap-1.5">
          <div className="relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12">
            <Image
              src="/logo.jpeg"
              alt="Vorzium Innovations logo"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <p className="font-semibold text-lg md:text-2xl">
            Vorzium Innovations
          </p>
        </div>

        {/*mobile menu button*/}
        <button
          className="md:hidden transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>

        {/*navlinks*/}
        <div className="items-center gap-5 hidden md:flex">
          {links.map((link, key) => (
            <Link
              href={link.href}
              key={key}
              onClick={() => setActiveLink(link.href)}
            >
              <span
                className={`cursor-pointer text-lg relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                  hover:after:w-full after:bg-blue-500 after:transition-all ${
                    activeLink === link.href
                      ? "text-blue-500 after:w-full"
                      : "text-white"
                  } transition-colors duration-300`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        <button className="px-3.5 py-2 border rounded-xl cursor-pointer hidden md:flex hover:bg-gray-100 hover:text-black transition duration-150">
          For Enquiry
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 items-center mt-3 animate-slideDown backdrop-blur-2xl transition-all duration-500 rounded-xl">
          {links.map((link, key) => (
            <Link
              href={link.href}
              key={key}
              onClick={() => {
                setIsMenuOpen(false);
                setActiveLink(link.href);
              }}
              className={`${
                activeLink === link.href
                  ? "text-blue-600 font-semibold"
                  : "text-gray-200 hover:text-blue-400"
              } transition-colors duration-200`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
