import React, { useState } from "react";
import { HiSparkles, HiOutlineArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function CTASection() {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto max-w-4xl px-4 text-center space-y-12">
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            Ready to Find Your{" "}
            <span className="block text-[#25D366]">Dream Job?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of South Africans who've already found success.  
            Your next opportunity is just a WhatsApp message away.
          </p>
        </div>

        {/* Get Started Button */}
        <button
          onClick={() => setShowOptions(true)}
          className="bg-[#25D366] text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#1da851] transition duration-300 mx-auto"
        >
          <HiSparkles className="w-5 h-5" />
          Get Started
          <HiOutlineArrowRight className="w-5 h-5" />
        </button>

        {/* Modal */}
        {showOptions && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300">
            <div className="bg-white p-8 rounded-2xl w-full max-w-md text-center shadow-2xl space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900">Continue With</h3>

              <div className="space-y-4">
                <button
                  onClick={() => {
                    window.open("https://wa.me/27678044796?text=Hi+Jobsta", "_blank");
                    setShowOptions(false);
                  }}
                  className="w-full bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1da851] transition"
                >
                  WhatsApp
                </button>

                <button
                  onClick={() => {
                    navigate("/signup");
                    setShowOptions(false);
                  }}
                  className="w-full bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
                >
                  Website Form
                </button>
              </div>

              <button
                onClick={() => setShowOptions(false)}
                className="text-sm text-gray-500 hover:underline"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Trust Badge */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Active Now
          </div>
          <span>•</span>
          <span>Join 10,000+ users</span>
          <span>•</span>
          <span>100% Free</span>
        </div>
      </div>
    </section>
  );
}

export default CTASection;