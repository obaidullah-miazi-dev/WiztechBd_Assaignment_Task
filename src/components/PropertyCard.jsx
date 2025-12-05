import { useState } from "react";

const PropertyCard = ({ property }) => {
  const {
    title,
    price_per_week,
    location,
    bedrooms,
    bathrooms,
    area_sqft,
    images,
  } = property;

  const [open, setOpen] = useState(false);

  return (
    <>
     
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
      >
        <img
          src={images[0]}
          alt={title}
          className="w-full h-56 object-cover"
        />

        <div className="p-4">
          <div className="flex gap-4 text-sm text-gray-500 mb-2">
            <span>🛏 Bed-{bedrooms}</span>
            <span>🛁 Bathroom-{bathrooms}</span>
            <span>📐 {area_sqft} sqft</span>
          </div>

          <h2 className="text-lg font-semibold">{title}</h2>

          <div className="flex gap-5 items-center mt-3">
            <p className="text-xl font-bold text-black">${price_per_week} <span className="text-sm text-gray-500">/week</span></p>
            
          <p className="text-sm text-gray-400 mt-1">{location}</p>
          </div>

        </div>
      </div>

      {/* custom MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl max-w-3xl w-full p-5 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-lg font-bold"
            >
              ✖
            </button>

            <h2 className="text-xl font-semibold mb-4">{title}</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="w-full h-40 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyCard;
