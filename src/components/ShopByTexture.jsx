import Glad from "../assets/Glad.jpeg";
import CeoInstallation from "../assets/V pad-wig.webp";
import Hair1 from "../assets/hair1.jpeg";
import Hair2 from "../assets/hair2.jpeg";
import { useNavigate } from "react-router-dom";

const hairTextures = [
  { name: "Straight Hair", image: Hair1, path: "/carts" },
  { name: "Wavy Hair", image: CeoInstallation, path: "/hairs" },
  { name: "Curly Hair", image: Glad, path: "/carts" },
  { name: "Textured", image: Hair2, path: "/wig-collection" },
];

const ShopByTexture = () => {
  const navigate = useNavigate();

  return (
    <div className="relative p-6 text-center">
      <h2 className="text-3xl font-semibold">
        <span className="bg-blue-600 text-white px-2">SHOP</span> BY TEXTURE
      </h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {hairTextures.map((texture, index) => (
          <div
            key={index}
            className="relative group overflow-hidden cursor-pointer"
            onClick={() => texture.path && navigate(texture.path)}
          >
            <img
              src={texture.image}
              alt={texture.name}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg bg-black bg-opacity-40">
              {texture.name.toUpperCase()}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute top-1/3 right-0 transform translate-x-2/4 rotate-90 bg-pink-500 text-white font-bold px-4 py-2 rounded-lg">
        20% OFF
      </div>
    </div>
  );
};

export default ShopByTexture;
