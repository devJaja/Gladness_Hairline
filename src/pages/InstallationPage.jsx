import { useNavigate } from "react-router-dom";

import Instl1 from "../assets/installation1.jpeg";
import Instl2 from "../assets/ceo_installation.jpeg";
import Instl3 from "../assets/installation2.jpeg";
const InstallationPage = () => {
  const navigate = useNavigate();
  
  const handleClick = (title) => {
    navigate(`/booking-form?title=${title}`);
  };

  const installations = [
    {
      title: "Basic Wig Installation",
      image: Instl1,
      price: "#12000",
      duration: "30 mins",
    },
    {
      title: "Custom Wig Installation",
      image: Instl2,
      price: "#15000",
      duration: "1 hour",
    },
    {
      title: "Premium Wig Styling & Installation",
      image: Instl3,
      price: "#20000",
      duration: "1.5 hours",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#4169E1]">
        Wig Installation Services
      </h1>

      {/* Preview Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {installations.map((installation, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 text-center"
          >
            <img
              src={installation.image}
              alt={installation.title}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">
              {installation.title}
            </h2>
            <p className="text-gray-600">{installation.duration}</p>
            <p className="text-green-500 font-semibold">{installation.price}</p>
            <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-lg hover:bg-blue-400" onClick={handleClick}>
              Book Now
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default InstallationPage;
