import PropertyCard from "./PropertyCard";

const Properties = ({ properties }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Property — Showing results (6)
        </h2>
        <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
          <option>Low to High</option>
          <option>High to Low</option>
          <option>Newest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination is here */}
      <div className="flex justify-center items-center gap-3 mt-12">
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">&lt; Previous</button>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
          <button
            key={n}
            className={`px-4 py-2 rounded-lg ${n === 1 ? "bg-[#6C0443] text-white" : "border hover:bg-gray-100"}`}
          >
            {n}
          </button>
        ))}
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">Next &gt;</button>
      </div>
    </div>
  );
};

export default Properties;