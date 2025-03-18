import { useNavigate } from "react-router-dom"; // Corrected import
import curly from "../assets/human-hair.jpg";
import wavy from "../assets/hair1.jpeg";
import straight from "../assets/bundle&closure.png";

const collections = [
  {
    name: "Human hair",
    image: curly,
    path: "/human-hair",
  },
  {
    name: "Glueless hair",
    image: straight,
    path: "/glueless-hair",
  },
  {
    name: "Hair blend",
    image: wavy,
    path: "/hair-blend",
  },
];

const WigCollection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center space-y-6 py-10 px-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Hair Categories
      </h2>

      {/* Responsive Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {collections.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate(item.path)}
          >
            {/* Image Container - Responsive Sizes */}
            <div className="w-full max-w-[18rem] h-[24rem] md:max-w-[22rem] md:h-[28rem] rounded-[50%] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <p
              className="mt-3 text-lg font-semibold text-center"
              onClick={() => navigate(item.path)}
            >
              {item.name} →
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WigCollection;
