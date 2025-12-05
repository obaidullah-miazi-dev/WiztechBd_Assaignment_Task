import React from 'react';
import Marquee from 'react-fast-marquee';

const StatsSection = () => {
  return (
    <div className="relative backdrop-blur-2xl bg-[#2A0019]/5 rounded-3xl p-8 md:p-12 max-w-7xl mx-auto shadow-2xl border border-white/50 mb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Sell from day one - even with zero audience
        </h3>
        <button className="px-6 py-3 border border-white/30 rounded-full text-white text-sm font-medium hover:bg-white/10 transition whitespace-nowrap">
          Open calculator
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
          >
            <p className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">
              {stat.label}
            </p>
            <p className="text-4xl md:text-5xl font-extrabold text-white mt-3">
             
                <span className="">{stat.value}</span>
              
              
            </p>
            <p className="text-xs md:text-sm text-gray-400 mt-3">{stat.desc}</p>
          </div>
        ))}
      </div>

      

     
      <div className="mt-20 pt-8 border-t border-white/10">
        <div className="bg-linear-to-r from-amber-50 to-yellow-50 rounded-2xl py-5">
          <Marquee speed={70} gradient={false} pauseOnHover>
            <p className="text-lg md:text-xl font-semibold text-amber-900 px-12">
              Unlike Kajabi, Teachable, or Skool, GrowHubs helps you find and convert clients inside the platform so you can sell from day one.
            </p>
            <p className="text-lg md:text-xl font-semibold text-amber-900 px-12">
              Unlike Kajabi, Teachable, or Skool, GrowHubs helps you find and convert clients inside the platform so you can sell from day one.
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;