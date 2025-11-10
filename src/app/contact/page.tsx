"use client";

import React from "react";
import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] text-gray-900">
      {/* HERO */}
      <section className="relative h-[45vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F]"></div>

        {/* Soft Floating Lights */}
        <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full -bottom-10 -right-10 animate-pulse"></div>

        <div className="relative z-10 px-6 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-white drop-shadow-xl">
            Contact Us
          </h1>
          <div className="w-24 h-[3px] bg-blue-500 mx-auto mt-4 animate-width"></div>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-200">
            Let’s collaborate and bring your ideas into reality with precision
            and creativity.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-8 animate-slideUp">
            <h2 className="text-3xl font-semibold text-blue-900">
              Reach Out Anytime
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              We're here to discuss your project, answer questions, or
              brainstorm ideas. Every great product begins with a conversation.
            </p>

            <div className="space-y-5">
              <p className="flex items-center gap-3 text-gray-700 text-lg">
                <MdEmail className="text-blue-600 text-2xl" />{" "}
                support@vorzium.com
              </p>
              <p className="flex items-center gap-3 text-gray-700 text-lg">
                <MdPhone className="text-blue-600 text-2xl" /> +94 77 123 4567
              </p>
              <p className="flex items-center gap-3 text-gray-700 text-lg">
                <MdLocationPin className="text-blue-600 text-2xl" /> Chilaw, Sri
                Lanka
              </p>
            </div>

            <button className="px-7 py-3 bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 hover:shadow-xl transition-all duration-300">
              Chat With Us
            </button>
          </div>

          {/* RIGHT — GLASS FORM */}
          <form className="bg-white/60 backdrop-blur-md shadow-2xl border border-gray-200 p-8 rounded-2xl space-y-6 animate-slideUp delay-200">
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Your Message</label>
              <textarea
                rows={4}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>

            <button className="w-full py-3 bg-blue-600 text-white rounded-md text-lg font-medium shadow-md hover:bg-blue-700 hover:shadow-xl transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ANIMATION STYLES */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.9s ease-out forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }

        @keyframes widthExpand {
          from {
            width: 0;
          }
          to {
            width: 100px;
          }
        }
        .animate-width {
          animation: widthExpand 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
