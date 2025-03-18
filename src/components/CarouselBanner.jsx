import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Gladhair from "../assets/gladhair.mp4";
import Hair from "../assets/Hair.mp4";
import Model from "../assets/new-arrival.jpg";
import Training from "../assets/styled-by-Glad.jpeg";
import Button from "./Button";

const slides = [
  {
    id: 1,
    content: (
      <div className="relative bg-[#4169E1] text-white h-[550px] flex flex-col md:flex-row items-center overflow-hidden p-4">
        <div className="flex flex-col justify-center text-center md:text-left pl-4 md:pl-8 space-y-4 z-10">
          <h1 className="text-4xl md:text-7xl font-bold italic">
            Welcome to{" "}
            <span className="block text-3xl md:text-5xl">
              GLADNESS HAIRLINE
            </span>
          </h1>
          <p className="text-sm md:text-lg">Queen of affordable Hairs</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium">
            Shop Now
          </button>
        </div>
        <div className="absolute right-0 bottom-0 h-full w-full md:w-1/2">
          <video
            src={Gladhair}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          ></video>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="relative bg-[#4169E1] h-auto md:h-full flex flex-col md:flex-row items-center justify-between md:gap-4 p-4">
        <div className="bg-white w-[90%] md:w-[400px] rounded-lg shadow-lg p-2 md:p-6">
          <img
            src={Training}
            alt=""
            className="h-full md:h-[300px] w-full object-cover rounded-md"
          />
          <p className="text-gray-600 mt-2 md:mt-4 text-xs md:text-base">
            Join our 1-Month intensive course and become a certified wig
            installation expert!
          </p>
          <p className="text-orange-500 font-bold mt-2 md:mt-4 text-sm md:text-lg">
            Cost: $100
          </p>
          <Button />
        </div>
        <div className="absolute right-4 md:right-20 top-1/2 transform -translate-y-1/2 hidden md:block">
          <img
            src={Model}
            alt="Model"
            className="h-[200px] md:h-[480px] rounded-full object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="relative bg-[#4169E1] h-[550px] flex flex-col md:flex-row items-center justify-between p-4">
        <div className="relative text-center md:text-left p-4 md:p-6">
          <h1 className="text-4xl md:text-5xl text-white font-bold italic mb-2">
            <span className="text-6xl md:text-8xl">New</span> Arrival
          </h1>
          <p className="text-white text-sm md:text-lg mb-4">
            Queen of Affordable Hairs
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 md:px-6 rounded-full font-semibold text-xs md:text-base">
            Shop Now
          </button>
        </div>
        <div className="absolute right-0 bottom-0 h-full w-full md:w-1/2">
          <video
            src={Hair}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          ></video>
        </div>
      </div>
    ),
  },
];

const CarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="flex-shrink-0 w-full h-full">
            {slide.content}
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 md:p-2 rounded-full shadow-lg"
      >
        <ChevronLeft size={20} md:size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 md:p-2 rounded-full shadow-lg"
      >
        <ChevronRight size={20} md:size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              currentSlide === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;
