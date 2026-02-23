import { useEffect, useState } from "react";
import axios from "axios";

export const Offer = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (pageNumber) => {
    const res = await axios.get(
      `http://localhost:5000/api/offers?page=${pageNumber}&limit=9`
    );
    setProducts(res.data.products);
    setTotalPages(res.data.totalPages);
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const addToCart = async (product) => {
    await axios.post("http://localhost:5000/api/cart", {
      productId: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    alert("Product added to cart");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-green-800">
        Special Offers
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-3">
              {product.name}
            </h2>
            <p className="text-green-600 font-bold">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Prev
        </button>

        <span className="font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Offer;
