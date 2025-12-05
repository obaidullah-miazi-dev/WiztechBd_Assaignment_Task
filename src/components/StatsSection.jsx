import React from 'react';
import Marquee from 'react-fast-marquee';

const StatsSection = () => {
  return (
    <div className="relative backdrop-blur-2xl bg-[#2A0019]/5 rounded-3xl p-6 sm:p-8 md:p-12 max-w-7xl mx-auto shadow-2xl border border-white/50 mb-12 md:mb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8 md:mb-10">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
          Sell from day one - even with zero audience
        </h3>
        <button className="px-5 sm:px-6 py-2.5 sm:py-3 border border-white/30 rounded-full text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition whitespace-nowrap">
          Open calculator
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          {
            label: 'CO-SELLERS IN NETWORK',
            value: '21,500+',
            desc: 'People who can co-promote',
          },
          {
            label: 'EXPECTED BUYERS / MONTH',
            value: '86',
            desc: 'With zero personal audience',
          },
          {
            label: 'EST. MRR AT US$9/MO',
            value: 'US$774',
            desc: 'From membership sales',
          },
          {
            label: 'EARN W/O A PRODUCT',
            value: 'US$300',
            desc: 'Just by co-selling',
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300"
          >
            <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">
              {stat.label}
            </p>

            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3">
              <span>{stat.value}</span>
            </p>

            <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 mt-3">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Marquee Section */}
      <div className="mt-14 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-white/10">
        <div className="bg-linear-to-r from-amber-50 to-yellow-50 rounded-xl sm:rounded-2xl py-4 sm:py-5">
          <Marquee speed={70} gradient={false} pauseOnHover>
            <p className="text-sm sm:text-lg md:text-xl font-semibold text-amber-900 px-6 sm:px-12">
              Unlike Kajabi, Teachable, or Skool, GrowHubs helps you find and convert clients inside the platform so you can sell from day one.
            </p>
            <p className="text-sm sm:text-lg md:text-xl font-semibold text-amber-900 px-6 sm:px-12">
              Unlike Kajabi, Teachable, or Skool, GrowHubs helps you find and convert clients inside the platform so you can sell from day one.
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
