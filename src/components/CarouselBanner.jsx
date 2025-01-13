import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Ensure this is imported
import { ChevronLeft, ChevronRight } from "lucide-react";
import Gladhair from "../assets/gladhair.mp4";
import Hair from "../assets/Hair.mp4";
import Model from "../assets/new-arrival.jpg";
import Training from "../assets/Training.jpg";
import Button from "./Button";

const slides = [
  {
    id: 1,
    content: (
      <div className="relative bg-[#4169E1] text-white h-[550px] flex items-center overflow-hidden p-4">
        <div className="flex flex-col justify-center pl-8 space-y-4 z-10">
          <h1 className="text-7xl font-bold italic">
            Welcome to <span className="block text-5xl">GLADNESS HAIRLINE</span>
          </h1>
          <p className="text-lg">Queen of affordable Hairs</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium">
            Shop Now
          </button>
        </div>
        <div className="absolute right-0 bottom-0 h-full w-1/2">
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
      <div className="relative bg-[#4169E1] h-[550px] gap-4 flex items-center">
        <div className="bg-white w-[400px] rounded-lg shadow-lg ml-20 p-6">
          <img src={Training} alt="" className="h-[300px]" />
          <p className="text-gray-600 mt-4">
            Join our 1-Month intensive course and become a certified wig
            installation expert!
          </p>
          <p className="text-orange-500 font-bold mt-4">Cost: $100</p>
          <Button/>
            
        </div>
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
          <img
            src={Model}
            alt="Model"
            className="h-[480px] rounded-full object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="relative bg-[#4169E1] h-[550px] flex items-center">
        <div className="relative text-center ml-6 p-6">
          <h1 className="text-5xl text-white font-bold italic mb-2">
            <span className="text-8xl">New</span> Arrival
          </h1>
          <p className="text-white text-lg mb-4">Queen of Affordable Hairs</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full font-semibold">
            Shop Now
          </button>
        </div>
        <div className="absolute right-0 bottom-0 h-full w-1/2">
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;
