"use client";

import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F] animate-pulse-slow"></div>
        <div className="relative z-10 px-4 mt-25 md:mt-0">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400 animate-gradient">
            DEFINING DIGITAL ELEGANCE
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-300 to-white mb-4 md:mb-4">
            Vorzium Innovations transforms creativity into intelligent
            experiences — where technology meets artistry.
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-15 lg:py-15">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-[290px] sm:w-[350px] md:w-[420px] aspect-[4/5]">
                <Image
                  src="/about1.jpg"
                  alt="Our Journey"
                  fill
                  className="rounded-xl object-cover transition-all duration-500"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">
                Our Journey
              </h2>
              <div className="h-1 w-28 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
                Born from a passion for design and technology, Vorzium began as
                a small collective of dreamers. Our mission has always been
                simple — to innovate with purpose, crafting experiences that
                inspire and empower.
              </p>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Today, we stand as a creative force that merges aesthetics with
                intelligence, building products that define the next generation
                of digital excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">
                Our Mission
              </h2>
              <div className="h-1 w-28 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
                At Vorzium, we believe in the power of transformation — where
                every project becomes an opportunity to build something
                meaningful, functional, and beautiful.
              </p>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                From AI integrations to full-stack development, our goal is to
                redefine what’s possible and create experiences that truly
                connect people and technology.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-[290px] sm:w-[350px] md:w-[420px] aspect-[4/5]">
                <Image
                  src="/about2.jpg"
                  alt="Our Mission"
                  fill
                  className="rounded-xl object-cover transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand / Partners Section */}
      <section className="bg-[#1d283a]  py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#a8b1ce]">
            The techs we use
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto my-4 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Modern tools and technologies that shape our digital craftsmanship.
          </p>
        </div>

        {/* Logos slider */}
        <div className="relative overflow-hidden group py-10 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex items-center w-max animate-scroll-x2">
            {[
              "icon1.png",
              "icon2.png",
              "icon3.png",
              "icon4.png",
              "icon5.png",
              "icon6.png",
              "icon7.png",
              "icon8.png",
            ].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 
             w-32 sm:w-44 md:w-56 lg:w-64 
             mx-1 sm:mx-1 md:mx-7 
             flex justify-center items-center"
              >
                <Image
                  src={`/${logo}`}
                  alt={`Partner ${i}`}
                  width={60}
                  height={60}
                  className="object-contain opacity-100  hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
