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
  const [defaultImg,setDefaultImg] = useState(images[0])

  return (
    <>
     
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
      >
        <img
          src={images[0]}
          alt={title}
          className="w-full h-76 object-cover"
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
        <div className="fixed inset-0 bg-transparent bg-opacity-40 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full relative p-6">

        <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-lg font-bold"
            >
              ✖
            </button>

        <div className="w-full h-96 md:h-112 mb-4">
          <img
            src={defaultImg}
            className="w-full h-full object-cover rounded-2xl shadow-inner"
          />
        </div>

        <div className="flex gap-3 overflow-x-auto py-2">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setDefaultImg(img)}
              className={`w-28 h-20 object-cover rounded-xl cursor-pointer border-3 ${
                defaultImg === img
                  ? "border-[#9d5781]"
                  : "border-gray-200 hover:border-[#9d5781]"
              } transition`}
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
