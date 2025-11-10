"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "What services does Vorzium Innovations offer?",
    a: "We offer web development, AI integration, full-stack applications, UI/UX design, and project/assignment support tailored to your needs.",
  },
  {
    q: "How long does it take to complete a project?",
    a: "Timelines vary depending on project size, but most standard websites and applications are completed within 2–4 weeks.",
  },
  {
    q: "Do you provide ongoing support after project delivery?",
    a: "Yes. We offer maintenance, updates, performance enhancements, and long-term support based on your requirements.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "We primarily work with React, Next.js, Node, TypeScript, MongoDB, Tailwind, and modern AI tools.",
  },
  {
    q: "Can I hire you for small tasks or student projects?",
    a: "Absolutely! Whether it's a mini-project, assignment, or a full production app — we handle all scales.",
  },
];

const FAQPage = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* HERO */}
      <section className="relative h-[45vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F14] via-[#1A1D22] to-[#F8FAFC] opacity-90"></div>

        {/* Glow Lights */}
        <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full bottom-0 -right-10 animate-pulse"></div>

        <div className="relative z-10 px-6 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-white drop-shadow-xl">
            Frequently Asked Questions
          </h1>
          <div className="w-28 h-[3px] bg-blue-500 mx-auto mt-4 animate-width"></div>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-200">
            Everything you need to know about working with us — clear and
            simple.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 bg-gray-50"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-xl font-semibold text-gray-900">
                  {item.q}
                </span>

                <span
                  className={`text-blue-600 text-3xl font-bold transform transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === i ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 text-base leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ANIMATIONS */}
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
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes widthExpand {
          from {
            width: 0;
          }
          to {
            width: 110px;
          }
        }
        .animate-width {
          animation: widthExpand 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FAQPage;
