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

        {/* Email CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="flex w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden shadow-2xl">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter Your Email Here"
              className="flex-1 px-8 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg font-medium"
            />

            {/* Button */}
            <button className="px-10 py-3 bg-linear-to-r from-purple-600 to-pink-600 font-bold text-white rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex flex-col items-center leading-tight">
              <span className="text-lg">Start for Free</span>
              <span className="text-xs opacity-90">
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
