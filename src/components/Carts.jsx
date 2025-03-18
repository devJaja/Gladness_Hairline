import Glad from "../assets/Glad.jpeg";

const Carts = () => {
  const products = [
    {
      name: "Wig 1",
      image: "path-to-image1",
      originalPrice: "$199.82",
      salePrice: "$139.87",
      discount: "30%",
      shipping: "Ship In 24 Hours",
    },
    {
      name: "Wig 2",
      image: "path-to-image2",
      originalPrice: "$360.00",
      salePrice: "$108.00",
      discount: "70%",
    },
    {
      name: "Wig 3",
      image: "path-to-image3",
      originalPrice: "$141.07",
      salePrice: "$98.75",
      discount: "30%",
      shipping: "Ship In 24 Hours",
    },
    {
      name: "Wig 4",
      image: "path-to-image4",
      originalPrice: "$360.00",
      salePrice: "$108.00",
      discount: "70%",
    },
    {
      name: "Wig 5",
      image: "path-to-image5",
      originalPrice: "$201.07",
      salePrice: "$140.75",
      discount: "30%",
    },
    {
      name: "Wig 6",
      image: "path-to-image6",
      originalPrice: "$220.50",
      salePrice: "$154.35",
      discount: "30%",
    },
    {
      name: "Wig 7",
      image: "path-to-image7",
      originalPrice: "$180.00",
      salePrice: "$126.00",
      discount: "30%",
      shipping: "Ship In 24 Hours",
    },
    {
      name: "Wig 8",
      image: "path-to-image8",
      originalPrice: "$300.00",
      salePrice: "$90.00",
      discount: "70%",
    },
    {
      name: "Wig 9",
      image: "path-to-image9",
      originalPrice: "$250.00",
      salePrice: "$175.00",
      discount: "30%",
    },
    {
      name: "Wig 10",
      image: "path-to-image10",
      originalPrice: "$275.00",
      salePrice: "$192.50",
      discount: "30%",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
      {products.map((product, index) => (
        <div
          key={index}
          className="relative bg-white border border-gray-200 rounded-lg shadow"
        >
          <div className="relative">
            <img
              src={Glad}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            {product.discount && (
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                -{product.discount}
              </div>
            )}
            {product.shipping && (
              <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                {product.shipping}
              </div>
            )}
          </div>

          <div className="p-4 text-center">
            <div className="text-gray-700 font-semibold text-lg">
              {product.salePrice}
            </div>
            <div className="text-gray-400 line-through text-sm">
              {product.originalPrice}
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carts;
