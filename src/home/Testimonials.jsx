const Testimonials = () => {
  const reviews = [
    {
      name: "Riya Sharma",
      text: "My dog absolutely loves the food! The quality is amazing and delivery was super fast.",
    },
    {
      name: "Aman Verma",
      text: "Best quality pet products I’ve ever purchased. Highly recommended for pet parents.",
    },
    {
      name: "Sneha Kapoor",
      text: "Fast delivery & great care. Customer support was very helpful and responsive.",
    },
  ];

  return (
    <div className="py-16 bg-white px-4">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-900 mb-12 font-[Poppins]">
        What Pet Parents Say
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-green-50 p-6 rounded-xl text-center 
                       shadow-sm hover:shadow-md 
                       transition duration-300"
          >
            {/* Stars */}
            <div className="text-yellow-500 text-lg mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            {/* Review Text */}
            <p className="text-gray-700 mb-4 text-sm md:text-base">
              {review.text}
            </p>

            {/* Name */}
            <h4 className="font-semibold text-green-900">
              {review.name}
            </h4>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Testimonials;
