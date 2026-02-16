const ProductGrid = ({ products, onAddToCart }) => (
  <div className="py-16 bg-gray-50">
    <h2 className="text-3xl font-bold text-center text-green-900 mb-10 font-[Poppins]">
      Popular Pet Food
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
      {products.map((p) => (
        <div key={p._id} className="bg-white rounded-xl shadow overflow-hidden">
          <img src={p.image} className="h-52 w-full object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-sm font-semibold text-green-800">{p.name}</h3>
            <p className="font-bold text-green-900 mt-1">₹{p.price}</p>

            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={() => onAddToCart(p._id)}
                className="bg-green-900 text-white text-xs px-4 py-2 rounded"
              >
                Add to Cart
              </button>
              <button className="border border-green-900 text-green-900 text-xs px-4 py-2 rounded">
                View More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductGrid;
