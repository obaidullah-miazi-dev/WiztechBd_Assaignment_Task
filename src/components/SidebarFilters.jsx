import { BiChevronDown } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";

const SidebarFilters = () => {
  return (
    <div className="w-full max-w-sm bg-gray-50 rounded-3xl overflow-hidden font-sans">
      {/* Top Tabs */}
      <div className="flex border items-center rounded-2xl mx-5 border-gray-400 py-1">
        <div className="flex-1 py-4 text-center text-gray-500 text-sm font-medium">
          Property Preference
        </div>
        <div className="flex-1 text-center  text-sm font-semibold ">
          <p className="bg-gray-200 py-3 flex  items-center justify-center gap-2 mr-2 rounded-xl">
           <FaHistory /> Reset Filter
          </p>
        </div>
      </div>

      <div className="p-5 space-y-5">
        {/* Rent Budget */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-semibold text-gray-800">Rent Budget</h3>
            <BiChevronDown className="w-5 h-5 text-gray-400" />
          </div>

         
          <div className="relative h-2 bg-gray-200 rounded-full mb-6">
            <div className="absolute h-full left-[5%] right-[10%] bg-[#6C0443] rounded-full"></div>
            <div className="absolute w-5 h-5 bg-[#6C0443] rounded-full -top-1.5 left-[5%] shadow-md"></div>
            <div className="absolute w-5 h-5 bg-[#6C0443] rounded-full -top-1.5 right-[10%] shadow-md"></div>
          </div>

          {/* Min Max Boxes */}
          <div className="flex justify-between gap-4">
            <div className="flex-1 bg-gray-100 rounded-xl py-3 text-center">
              <p className="text-xs text-gray-500">Minimum</p>
              <p className="text-lg font-bold text-gray-800">$300</p>
            </div>
            <div className="flex-1 bg-gray-100 rounded-xl py-3 text-center">
              <p className="text-xs text-gray-500">Maximum</p>
              <p className="text-lg font-bold text-gray-800">$70000</p>
            </div>
          </div>
        </div>

        {/* Suburb */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-semibold text-gray-800">Suburb</h3>
            <BiChevronDown className="w-5 h-5 text-gray-400" />
          </div>

          <div className="space-y-4">
            <label className="flex items-center gap-4">
              <div className="w-5 h-5 border-2 border-gray-300 rounded-md"></div>
              <span className="text-gray-700">Eshelby Drive, Cranbrook</span>
            </label>
            <label className="flex items-center gap-4">
              <div className="w-5 h-5 border-2 border-gray-300 rounded-md"></div>
              <span className="text-gray-700">2-6 Eshelby Dr, Cranmovale</span>
            </label>
            <label className="flex items-center gap-4">
              <div className="relative">
                <div className="w-5 h-5 bg-[#6C0443] rounded-md flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <span className="text-[#6C0443] font-medium">59/3 Eshelby Drive Cannovale</span>
            </label>
          </div>
        </div>

        {/* Property Type */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-semibold text-gray-800">Property Type</h3>
            <BiChevronDown className="w-5 h-5 text-gray-400" />
          </div>

          <div className="space-y-4">
            {["House", "Land", "Apartment"].map((item) => (
              <label key={item} className="flex items-center gap-4">
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md"></div>
                <span className="text-gray-700">{item}</span>
              </label>
            ))}
            {["Town House", "Villa", "Acreage"].map((item) => (
              <label key={item} className="flex items-center gap-4">
                <div className="w-5 h-5 bg-[#6C0443] rounded-md flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#6C0443] font-medium">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-semibold text-gray-800">Amenities</h3>
            <BiChevronDown className="w-5 h-5 text-gray-400" />
          </div>

          <div className="space-y-4">
            {["Pet-friendly", "Parking"].map((item) => (
              <label key={item} className="flex items-center gap-4">
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md"></div>
                <span className="text-gray-700">{item}</span>
              </label>
            ))}
            <label className="flex items-center gap-4">
              <div className="w-5 h-5 bg-[#6C0443] rounded-md flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[#6C0443] font-medium">Private Pool</span>
            </label>
          </div>

          <button className="text-[#6C0443] text-sm font-medium mt-3">
            see more
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters;