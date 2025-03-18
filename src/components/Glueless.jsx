import curly from "../assets/hair2.jpeg";
import straight from "../assets/bundle&closure.png";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";

const collections = [
  {
    name: "T frontal",
    image: curly,
  },
  {
    name: "U frontal",
    image: straight,
  },
];

const Glueless = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center space-y-8 py-10 px-4">
      <BackButton />
      <h2 className="text-xl md:text-2xl font-semibold text-center">
        Glueless Wigs Available
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {collections.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-full max-w-[14rem] h-[18rem] sm:max-w-[16rem] sm:h-[22rem] lg:max-w-[18rem] lg:h-[24rem] rounded-[50%] overflow-hidden"
              onClick={() => navigate("/hairs")}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Name */}
            <button
              className="mt-4 text-sm md:text-base font-medium text-center"
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

export default Glueless;
