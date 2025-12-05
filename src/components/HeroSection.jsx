/* eslint-disable react-hooks/purity */
import React from "react";
import StatsSection from "./StatsSection";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-[#2A0019] text-white overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full  animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Badge */}
        <div className="mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium">
          BUILD FOR YOU
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-linear-to-r from-white to-[#A5C5DD] bg-clip-text text-transparent">
          Built for Creators.
          <br />
          Powered for Profit
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl">
          Create and sell courses, consulting services, and communities - with{" "}
          <span className="font-semibold text-white">Zero marketing cost</span>{" "}
          and a built-in sales network.
        </p>

        {/* animated elipse */}
        <div className="w-96 h-96 bg-[#ecd6c570] rounded-full blur-3xl absolute top-66 right-56 animate-[floatSlow_8s_ease-in-out_infinite]"></div>
        <div className="w-96 h-96 bg-[#ecd6c55b] rounded-full blur-3xl absolute top-66 left-56 animate-[floatSlowReverse_10s_ease-in-out_infinite]"></div>

        {/* Email CTA */}
        <div className="mt-10 flex justify-center px-4">
          <div className="flex flex-col sm:flex-row w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-full overflow-hidden shadow-2xl">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter Your Email Here"
              className="flex-1 px-6 sm:px-8 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none text-base sm:text-lg font-medium w-full"
            />

            {/* Button */}
            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 bg-linear-to-r from-purple-600 to-pink-600 font-bold text-white rounded-b-2xl sm:rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex flex-col items-center leading-tight">
              <span className="text-base sm:text-lg">Start for Free</span>
              <span className="text-[10px] sm:text-xs opacity-90">
                No credit card required
              </span>
            </button>
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-400">
          By proceeding you agree to our Platform Terms & Privacy Notice
        </p>
      </div>

      <StatsSection />
    </div>
  );
};

export default HeroSection;
