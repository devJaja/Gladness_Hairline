import { useState, useEffect } from "react";
import Glad from "../assets/Glad.jpeg";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 2,
    minutes: 41,
    seconds: 21,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days--;
        } else {
          clearInterval(timer);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };
  const products = [
    {
      name: "Wig 1",
      image: "path-to-image1",
      originalPrice: "$199.82",
      salePrice: "$139.87",
      discount: "30%",
      shipping: "Ship In 24 Hours",
    },
    {
      name: "Wig 2",
      image: "path-to-image2",
      originalPrice: "$360.00",
      salePrice: "$108.00",
      discount: "70%",
    },
    {
      name: "Wig 3",
      image: "path-to-image3",
      originalPrice: "$141.07",
      salePrice: "$98.75",
      discount: "30%",
      shipping: "Ship In 24 Hours",
    },
    {
      name: "Wig 4",
      image: "path-to-image4",
      originalPrice: "$360.00",
      salePrice: "$108.00",
      discount: "70%",
    },
    {
      name: "Wig 5",
      image: "path-to-image5",
      originalPrice: "$201.07",
      salePrice: "$140.75",
      discount: "30%",
    },
  ];


  return (
    <div className="bg-neutral-50 h-auto min-h-auto px-4 py-10">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-[#4169E1]">FLASH SALE!</h1>
        <div className="flex items-center justify-center font-serif space-x-2">
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full text-2xl">
              {formatTime(timeLeft.days)}
            </div>
            <span className="text-xs mt-1">Days</span>
          </div>
          <span className="text-2xl font-bold">:</span>
          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full text-2xl">
              {formatTime(timeLeft.hours)}
            </div>
            <span className="text-xs mt-1">Hours</span>
          </div>
          <span className="text-2xl font-bold">:</span>
          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full text-2xl">
              {formatTime(timeLeft.minutes)}
            </div>
            <span className="text-xs mt-1">Minutes</span>
          </div>
          <span className="text-2xl font-bold">:</span>
          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full text-2xl">
              {formatTime(timeLeft.seconds)}
            </div>
            <span className="text-xs mt-1">Seconds</span>
          </div>
        </div>
        {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 rounded-lg shadow"
          >
            {/* Product Image */}
            <div className="relative">
              <img
                src={Glad}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {product.discount && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  -{product.discount}
                </div>
              )}
              {product.shipping && (
                <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  {product.shipping}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4 text-center">
              <div className="text-gray-700 font-semibold text-lg">
                {product.salePrice}
              </div>
              <div className="text-gray-400 line-through text-sm">
                {product.originalPrice}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-6 rounded-lg shadow">
          View More
        </button>
      </div>
      </div>
    </div>
  );
};

export default FlashSale;
