"use client";

import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F] animate-pulse-slow"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400 animate-gradient">
            DEFINING DIGITAL ELEGANCE
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-300 to-white">
            Vorzium Innovations transforms creativity into intelligent
            experiences — where technology meets artistry.
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-[280px] sm:w-[340px] md:w-[400px] aspect-[4/5]">
                <Image
                  src="/about/about1.jpg"
                  alt="Our Journey"
                  fill
                  className="rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
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
              <div className="relative w-[280px] sm:w-[340px] md:w-[400px] aspect-[4/5]">
                <Image
                  src="/about/about2.jpg"
                  alt="Our Mission"
                  fill
                  className="rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand / Partners Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-blue-900">
            Our Trusted Partners
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            We collaborate with leading global brands, startups, and visionaries
            who share our passion for quality and innovation.
          </p>
        </div>

        <div className="relative overflow-hidden group py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex items-center w-max animate-scroll-x">
            {["logo1.png", "logo2.png", "logo3.png", "logo4.png"].map(
              (logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-64 mx-8 flex justify-center items-center"
                >
                  <Image
                    src={`/logos/${logo}`}
                    alt={`Partner ${i}`}
                    width={200}
                    height={100}
                    className="object-contain transition-transform duration-300 hover:scale-110 hover:opacity-90 cursor-pointer"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
