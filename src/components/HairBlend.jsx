import { useNavigate } from "react-router-dom";
import curly from "../assets/hair2.jpeg";
import wavy from "../assets/hair1.jpeg";
import straight from "../assets/bundle&closure.png";

const collections = [
  {
    name: "Bouncy hair",
    image: curly,
    path: "/bouncy-hair",
  },
  {
    name: "Curly hair",
    image: straight,
    path: "/hairs",
  },
  {
    name: "Straight blend",
    image: wavy,
    path: "/hairs",
  },
  {
    name: "Wavy blend",
    image: curly,
    path: "/hairs",
  },
];

const HairBlend = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center space-y-6 py-10 px-4">
      <button
        onClick={() => navigate(-1)}
        className="self-start px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg shadow-md transition duration-200"
      >
        ← Back
      </button>

      <h2 className="text-xl md:text-2xl font-semibold text-center">
        Blend Hair Available
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {collections.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            onClick={() => navigate(item.path)}
          >
            <div className="w-full max-w-[14rem] h-[18rem] md:max-w-[16rem] md:h-[22rem] lg:max-w-[18rem] lg:h-[24rem] rounded-[50%] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <button
              className="mt-2 text-sm md:text-base font-medium text-center"
              onClick={() => navigate(item.path)}
            >
              {item.name} →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HairBlend;
