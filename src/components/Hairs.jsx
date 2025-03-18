import Hair2 from "../assets/hair2.jpeg";
import BackButton from "./BackButton";

const Hairs = () => {
  const items = [
    {
      name: "Bye Bye knots",
      image: "path-to-image1",
      tag: "HOT",
      price: "$120",
    },
    { name: "Put On&Go Wig", image: "path-to-image2", price: "$150" },
    { name: "13x4 Pre-Everything", image: "path-to-image3", price: "$180" },
    { name: "Trendy Colored Wig", image: "path-to-image4", price: "$200" },
    { name: "Bundles&Closure", image: "path-to-image5", price: "$90" },
    { name: "Glueless Wigs", image: "path-to-image6", price: "$170" },
    { name: "V Part Wigs", image: "path-to-image7", price: "$140" },
    { name: "Glueless HD Lace", image: "path-to-image8", price: "$210" },
    { name: "Clearance Sale", image: "path-to-image9", price: "$80" },
    {
      name: "Fast Delivery",
      image: "path-to-image10",
      tag: "24 HRS",
      price: "$160",
    },
  ];

  const addToCart = (item) => {
    console.log(`Added ${item.name} to cart`);
    // Implement actual cart logic here
  };

  return (
    <div className="h-auto min-h-auto bg-white p-6 mt-8 mb-4">
      <BackButton />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 md:w-[240px] md:h-[240px] rounded-full overflow-hidden border border-gray-200 shadow">
              <img
                src={Hair2}
                className="w-full h-full object-cover"
                alt={item.name}
              />
            </div>
            {item.tag && (
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl">
                {item.tag}
              </div>
            )}
            <div className="mt-2 text-gray-700 font-medium text-sm md:text-base">
              {item.name}
            </div>
            <div className="text-gray-500 text-xs md:text-sm">{item.price}</div>
            <button
              className="mt-2 px-4 py-1 bg-[#4169E1] text-white rounded hover:bg-white hover:text-[#4169E1] transition"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hairs;
