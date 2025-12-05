import { useState } from "react";

const SidebarFilters = () => {
  const [priceRange, setPriceRange] = useState(70000);

  return (
    <div className="w-full lg:w-80 bg-white rounded-2xl shadow-lg p-6 h-fit">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Filters</h2>

      {/* Rent Budget */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-3">
          <span>Rent Budget</span>
          <span className="font-semibold">${priceRange.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="800"
          max="200000"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-800"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>$800</span>
          <span>$200,000+</span>
        </div>
      </div>

      {/* Suburb */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-700 mb-4">Suburb</h3>
        <div className="space-y-3">
          {["Echelon Drive, Orakei", "St Heliers, Glen Innes", "Echelon Drive, Glenmore"].map((item) => (
            <label key={item} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-purple-800 rounded focus:ring-purple-500" />
              <span className="text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-700 mb-4">Property Type</h3>
        <div className="space-y-y-3">
          {["House", "Apartment", "Town House", "Villa", "Acreage"].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-purple-800 rounded" />
              <span className="text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-4">Amenities</h3>
        <div className="space-y-3">
          {["Pet Friendly", "Parking", "Private Pool", "Garden"].map((amenity) => (
            <label key={amenity} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-purple-800 rounded" />
              <span className="text-gray-700">{amenity}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters;