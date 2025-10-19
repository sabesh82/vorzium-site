"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdOutlineWeb, MdAutoAwesome, MdBrush } from "react-icons/md";

const useScrollAnimation = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

const ServicesPage = () => {
  const heroAnim = useScrollAnimation(0.1);
  const serviceAnim = useScrollAnimation(0.2);
  const processAnim = useScrollAnimation(0.2);
  const ctaAnim = useScrollAnimation(0.2);

  const services = [
    {
      icon: <MdAutoAwesome className="text-blue-200 text-6xl" />,
      title: "AI Integration",
      desc: "Bring intelligence to your systems with automation, predictive analytics, and smart features.",
    },
    {
      icon: <MdOutlineWeb className="text-blue-200 text-6xl" />,
      title: "Projects & Assignments",
      desc: "Stunning, user-centered interfaces designed to convert and engage your audience effortlessly.",
    },
    {
      icon: <MdBrush className="text-blue-200 text-6xl" />,
      title: "Web Development",
      desc: "Responsive, high-performing websites built with modern technologies for speed and scalability.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroAnim.ref}
        className={`relative text-center py-24 px-6 bg-gradient-to-b from-[#112240] to-[#0A192F] text-white overflow-hidden transition-all duration-700 ${
          heroAnim.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0  opacity-10 bg-cover bg-center"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4 tracking-tight animate-fadeIn">
            Redefining Digital Experiences
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-lg">
            We transform your ideas into digital realities — combining
            technology, design, and innovation to help your brand stand out.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={serviceAnim.ref}
        className={`max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 transition-all duration-700 ${
          serviceAnim.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {services.map((s, i) => (
          <div
            key={i}
            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer h-80"
          >
            {/* Background Image */}
            <img
              src={`/service${i + 1}.jpg`}
              alt={s.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25 flex flex-col justify-end px-4 pb-6 transition-all duration-500 group-hover:bg-black/50">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-6">
                {/* Icon */}
                <div className="text-5xl mb-2">{s.icon}</div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-white mb-1">
                  {s.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Process Section */}
      <section
        ref={processAnim.ref}
        className={`bg-white py-20 transition-all duration-700 ${
          processAnim.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-950 mb-3">
            Our Workflow
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Every project begins with understanding your goals — and ends with a
            solution that exceeds them.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6">
          {[
            {
              step: "Plan",
              desc: "We listen, brainstorm, and strategize your vision.",
            },
            {
              step: "Build",
              desc: "We craft your idea using modern, scalable technologies.",
            },
            {
              step: "Launch",
              desc: "We refine, test, and deliver a flawless digital product.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-blue-50 border border-blue-200 rounded-xl p-6 w-72 text-center shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-950 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-md">
                {index + 1}
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mt-6">
                {item.step}
              </h4>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section
        ref={ctaAnim.ref}
        className={`bg-blue-950 text-white text-center py-20 px-6 transition-all duration-700 ${
          ctaAnim.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-semibold mb-4 animate-fadeIn">
          Let’s Build Something Amazing
        </h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-8 text-lg animate-fadeInSlow">
          Whether it’s a full-stack app or a smart web solution — we’re ready to
          bring your ideas to life.
        </p>
        <button className="px-8 py-3 bg-white text-blue-950 font-semibold rounded-full text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 cursor-pointer">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default ServicesPage;
