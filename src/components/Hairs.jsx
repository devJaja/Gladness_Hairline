import Hair2 from "../assets/hair2.jpeg";
// import Glueless from "../assets/installation1.jpeg";
const Hairs = () => {
  const items = [
    { name: "Bye Bye knots", image: "path-to-image1", tag: "HOT" },
    { name: "Put On&Go Wig", image: "path-to-image2" },
    { name: "13x4 Pre-Everything", image: "path-to-image3" },
    { name: "Trendy Colored Wig", image: "path-to-image4" },
    { name: "Bundles&Closure", image: "path-to-image5" },
    { name: "Glueless Wigs", image: "path-to-image6" },
    { name: "V Part Wigs", image: "path-to-image7" },
    { name: "Glueless HD Lace", image: "path-to-image8" },
    { name: "Clearance Sale", image: "path-to-image9" },
    { name: "Fast Delivery", image: "path-to-image10", tag: "24 HRS" },
  ];

  return (
    <div className="h-auto min-h-auto bg-white p-6 mt-8 mb-4">
      {/* <div className="text-center text-2xl text-pink-600 font-bold mb-8">
        Subscribe now!
      </div> */}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hairs;
