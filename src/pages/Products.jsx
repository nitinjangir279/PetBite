import { useState, useEffect } from "react";
import axios from "axios";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("dog");

  // Fetch from backend, which calls external API
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/external-products?q=${searchQuery}`
      );
      setProducts(res.data);
    } catch (error) {
      console.log("Error fetching external products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Pet Food Products</h2>

      {/* Search Field */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search pets / food..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 w-64 mr-2"
        />
        <button
          onClick={fetchProducts}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-md p-4 bg-white"
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded"
              />
            ) : (
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                No Image
              </div>
            )}
            <h3 className="font-bold mt-2 text-lg">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.brand}</p>
            <p className="text-sm text-gray-600">{item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
