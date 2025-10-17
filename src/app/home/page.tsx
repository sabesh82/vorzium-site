"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { MdKeyboardArrowRight } from "react-icons/md";

const Page = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("services-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visible = Math.max(0, windowHeight - rect.top);
      setScrollOffset(visible / 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex flex-col w-full">
      {/*section one*/}
      <div className="bg-[url('/home1.jpg')] bg-cover bg-center h-[100vh] w-full relative rounded-b-2xl">
        <div
          className={`text-white/50 mt-36 w-full max-w-7xl mx-auto px-4 relative transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-center sm:text-left text-lg sm:text-xl">
            WELCOME TO VORZIUM INNOVATION !!
          </p>

          <div className="relative">
            {/* Background Image */}
            <div
              className={`mt-7 absolute h-48 w-[280px] sm:h-100 sm:w-200 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 transition-opacity duration-1000 delay-200 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src="/bg-3.jpg"
                alt="home background image"
                fill
                className="w-full bg-cover rounded-lg border border-white/20"
              />
            </div>

            {/* Overlay Image */}
            <div
              className={`z-20 absolute top-25 sm:top-25 left-[60%] -translate-x-1/2 sm:left-70 sm:translate-x-0 border-4 border-white w-32 h-32 sm:w-[380px] sm:h-[380px] transition-opacity duration-1000 delay-400 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src="/bg-2.jpg"
                alt="home background img"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Block */}
            <div
              className={`z-30 absolute top-56 sm:top-70 left-4 sm:left-140 text-white w-[90%] sm:w-auto text-center sm:text-left transition-opacity duration-1000 delay-600 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex flex-col space-y-2 mt-2 md:mt-0">
                <p className="text-xl sm:text-4xl font-semibold bg-linear-to-r from-gray-800 via-blue-700 to-gray-900 p-2 rounded border-white border">
                  Your destination for technical excellence!
                </p>
                <p className="mt-2 sm:ml-20 text-sm sm:text-base">
                  We turn your ideas into digital realities — blending
                  precision, creativity, and cutting-edge technology to deliver
                  solutions that inspire, perform, and last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*section two*/}
      <div className="flex flex-col items-center justify-center mt-20 w-full max-w-7xl mx-auto px-4">
        <h1 className="text-5xl custom-metallic-text1 animate-fadeDown">
          Our Services
        </h1>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-15">
          <div className="animate-fadeUp delay-100">
            <Card
              image="/service4.jpg"
              title="Website development"
              description="Crafting modern, responsive, and high-performing websites for businesses."
              variant="elevated"
              size="lg"
              className="border border-gray-200 transition-transform duration-500 ease-out hover:scale-101 hover:animate-bounceSoft"
            />
          </div>

          <div className="animate-fadeUp delay-200">
            <Card
              image="/service2.jpg"
              title="Full-Stack Applications"
              description="Building scalable, efficient, and feature-rich full-stack web applications."
              variant="elevated"
              size="lg"
              className="border border-gray-200 transition-transform duration-500 ease-out hover:scale-101 hover:animate-bounceSoft"
            />
          </div>

          <div className="animate-fadeUp delay-300">
            <Card
              image="service1.jpg"
              title="Projects & Assignments"
              description="Delivering tailored academic and professional projects with precision."
              variant="elevated"
              size="lg"
              className="border border-gray-200 transition-transform duration-500 ease-out hover:scale-101 hover:animate-bounceSoft"
            />
          </div>
        </div>
      </div>

      {/*third section*/}
      <div
        id="services-section"
        className="w-full bg-gray-100 h-auto lg:h-[100vh] mt-20 overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-around mt-10 lg:mt-15 gap-10">
          {/* Left side */}
          <div className="flex flex-col sm:flex-row lg:flex-row items-center lg:items-start lg:ml-20 gap-6 lg:gap-0.5">
            {/* Card 1 */}
            <div
              className="flex flex-col h-auto lg:h-100 w-[90%] sm:w-72 lg:w-65 bg-blue-950 rounded-2xl overflow-hidden transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(${-scrollOffset * 0.2}px)`,
              }}
            >
              <img
                src="/service3.jpg"
                alt=""
                className="h-45 w-full object-cover"
              />
              <p className="text-center mt-2.5 text-white text-xl lg:text-2xl font-bold">
                Best Innovation
              </p>
              <p className="text-center text-gray-400 text-sm lg:text-md">
                Cutting-edge creative solutions.
              </p>
              <button className="flex items-center gap-1 justify-center mt-6 lg:mt-22 mb-4 text-white font-semibold text-base lg:text-xl cursor-pointer hover:text-gray-300 transition">
                Check Now
                <MdKeyboardArrowRight className="size-5 lg:size-6" />
              </button>
            </div>

            {/* Card 2 */}
            <div
              className="flex flex-col h-auto lg:h-95 w-[90%] sm:w-72 lg:w-65 bg-blue-950 rounded-2xl overflow-hidden lg:mt-15 transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(${scrollOffset * 0.2}px)`,
              }}
            >
              <img
                src="/service5.jpg"
                alt=""
                className="h-45 w-full object-cover"
              />
              <p className="text-center mt-2.5 text-white text-xl lg:text-2xl font-bold">
                AI Excellence
              </p>
              <p className="text-center text-gray-400 text-sm lg:text-md">
                Intelligent Automation Solutions
              </p>
              <button className="flex items-center gap-1 justify-center mt-6 lg:mt-18 mb-4 text-white font-semibold text-base lg:text-xl cursor-pointer hover:text-gray-300 transition">
                Check Now
                <MdKeyboardArrowRight className="size-5 lg:size-6" />
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-10 px-2 w-full lg:w-auto">
            <h1 className="text-2xl lg:text-4xl">
              Let's Build{" "}
              <span className="text-3xl lg:text-6xl font-semibold underline text-blue-950">
                Your Vision
              </span>
            </h1>
            <p className="mt-5 text-gray-900 text-lg lg:text-xl text-justify max-w-[90%] lg:max-w-none">
              Turn your ideas into interactive, high-performing digital
              experiences. Whether you need a sleek portfolio site, a business
              web app, or a student project, we'll shape your concept into a
              product that works beautifully on every screen. Schedule a quick
              chat today — let's bring your idea to life!
            </p>

            <button className="flex justify-center lg:justify-start mt-10 p-2 border border-gray-400 w-40 rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300 transition-transform duration-150 text-base lg:text-lg mb-5">
              Check Availability
            </button>
          </div>
        </div>
      </div>

      {/*forth section*/}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-25 w-full max-w-7xl mx-auto px-4">
        {/*left side*/}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl">
            Where{" "}
            <span className="font-bold text-5xl md:text-6xl text-blue-950">
              we
            </span>{" "}
            are?
          </h1>
          <p className="text-lg md:text-xl mt-10 text-justify">
            We’re proudly based in Chilaw, in the heart of Sri Lanka’s
            northwestern region. Our workspace blends creativity and technology,
            allowing us to craft solutions that connect innovation with
            real-world impact. With easy access and strong digital connectivity,
            we’re positioned to collaborate seamlessly with clients across the
            globe
            <br></br>
            <br></br> At our Chilaw base, we thrive on ideas and teamwork. It’s
            where strategy meets design, and concepts turn into experiences.
            Whether you’re nearby or oceans away, we ensure every project feels
            close — built on clear communication, trust, and forward-thinking
            collaboration.
          </p>

          <button className="mt-5 p-2 flex justify-center md:justify-start border border-gray-400 bg-gray-200 w-27 rounded-3xl hover:bg-gray-300 cursor-pointer text-lg">
            Contact Us
          </button>
        </div>
        {/*right side*/}
        <img
          src="/map.jpeg"
          alt=""
          className="h-80 md:h-150 ml-5 md:ml-5 mt-3 md:mt-0"
        />
      </div>
    </section>
  );
};

export default Page;
