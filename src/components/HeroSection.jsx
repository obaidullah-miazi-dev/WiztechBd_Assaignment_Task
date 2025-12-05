import React from "react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen pt-56 bg-[#2A0019] text-white overflow-hidden">
      
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
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="email"
            placeholder="Enter Your Email Here"
            className="px-8 py-4 w-full sm:w-96 bg-white/10 backdrop-blur-md border border-white/20 rounded-full placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
          />
          <button className="px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition transform">
            Start for Free
            <span className="block text-xs font-normal mt-1">
              No credit card Required
            </span>
          </button>
        </div>

        <p className="mt-4 text-xs text-gray-400">
          By proceeding you agree to our Platform Terms & Privacy Notice
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
