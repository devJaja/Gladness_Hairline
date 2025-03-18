import { useNavigate } from "react-router-dom";
import bouncy from "../assets/bouncy-hair.jpg";
import curly from "../assets/curly-hair.jpg";
import wavy from "../assets/hair1.jpeg";
import straight from "../assets/bundle&closure.png";
import BackButton from "./BackButton";

const collections = [
  {
    name: "Bouncy hair",
    image: bouncy,
  },
  {
    name: "Curly hair",
    image: curly,
  },
  {
    name: "Straight blend",
    image: wavy,
  },
  {
    name: "Wavy",
    image: straight,
  },
];

const HumanHair = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center space-y-6 py-10 px-4">
      <BackButton />
      <h2 className="text-xl md:text-2xl font-semibold text-center">
        Human Hair Available
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {collections.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-full max-w-[14rem] h-[18rem] md:max-w-[16rem] md:h-[22rem] lg:max-w-[18rem] lg:h-[24rem] rounded-[50%] overflow-hidden"
              onClick={() => navigate("/hairs")}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <button
              className="mt-2 text-sm md:text-base font-medium text-center cursor-pointed "
              onClick={() => navigate("/hairs")}
            >
              {item.name} →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HumanHair;
