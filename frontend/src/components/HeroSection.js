// src/components/HeroSection.js

import React from 'react';
import { MessageCircle, ArrowRight } from 'react-feather';

function HeroSection() {
  const whatsappLink = "https://wa.me/14155238886?text=Hi+Jobsta";

  return (
    <section className="min-h-[90vh] bg-white flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto space-y-10">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
          Find Jobs on <span className="text-[#25D366]">WhatsApp</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Get personalized job alerts delivered straight to your phone.
          No apps, no hassle — just opportunities.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1da851] text-white py-3 px-6 rounded-full text-lg font-semibold flex items-center gap-2 transition duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Start on WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#how-it-works"
            className="border border-[#25D366] text-[#25D366] py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#25D366]/10 transition duration-300"
          >
            Learn How It Works
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 pt-10 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
            <span>100% Free</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
            <span>No App Required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
            <span>Made for SA Youth</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;