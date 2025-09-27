// src/components/HowItWorks.js

import React from 'react';
import { MousePointer, MessageSquare, Bell } from 'react-feather';

const steps = [
  {
    number: "01",
    icon: <MousePointer className="w-6 h-6 text-[#25D366]" />,
    title: "Click to Start",
    description: "One click opens WhatsApp with Jobsta",
  },
  {
    number: "02",
    icon: <MessageSquare className="w-6 h-6 text-[#25D366]" />,
    title: "Tell Us About You",
    description: "Answer simple questions about your skills",
  },
  {
    number: "03",
    icon: <Bell className="w-6 h-6 text-[#25D366]" />,
    title: "Get Matched Jobs",
    description: "Receive weekly opportunities that fit you",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#25D366] font-semibold mb-2">Simple Process</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">How It Works</h2>
          <p className="text-gray-600 text-lg">
            Getting your dream job has never been this easy.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Icon & Number */}
              <div className="flex items-center justify-center w-12 h-12 bg-[#25D366]/10 rounded-full mb-4 mx-auto">
                {step.icon}
              </div>

              {/* Number */}
              <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;