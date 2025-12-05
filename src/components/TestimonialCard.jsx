import React from "react";
import { FaPlay } from "react-icons/fa";
const TestimonialCard = () => {
  return (
    <div className="w-[700px] mx-5 bg-white rounded-3xl shadow-md p-6 flex items-center space-x-6">
      <div className="w-[300px] h-[350px] rounded-xl overflow-hidden relative">
        <img
          src='https://images.unsplash.com/photo-1758876204763-5b346b174d0e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt="thumbnail"
          className="w-full h-full object-cover"
        />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 w-14 h-14 rounded-full flex items-center justify-center text-2xl">
            <FaPlay />
          </div>
        </button>
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" className="rounded-full w-16 h-16" />
            <div className="">
              <h3 className="font-bold text-lg">IvaRyan</h3>
              <p className="text-sm text-gray-500">
                Marketing manager at{" "}
                <span className="font-semibold">Adobe</span>
              </p>
            </div>
          </div>

          <div className="flex space-x-1 text-yellow-400 text-xl">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="text-[#6A4F15]">★</span>
            <span className="text-[#6A4F15]">★</span>
          </div>
        </div>

        <div className="flex space-x-2 mt-3">
          <span className="px-3 py-1  border text-gray-600 text-xs rounded-full">
            Content Creator
          </span>
          <span className="px-3 py-1  border text-gray-600 text-xs rounded-full">
            Youtuber
          </span>
          <span className="px-3 py-1  border text-gray-600 text-xs rounded-full">
            Growth Expert
          </span>
        </div>

        <p className="mt-4 text-md leading-relaxed">
          I recently had the opportunity to use the platform, and I must say,
          the feature that allows you to set your own commission is a game
          changer!
        </p>

        <h3 className="font-extrabold text-3xl mt-4">$2M</h3>
        <p className="text-xs text-gray-500 -mt-1">EARNED IN HELENUIL</p>
      </div>
    </div>
  );
};

export default TestimonialCard;