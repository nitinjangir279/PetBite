const Newsletter = () => {
  return (
    <div className="py-16 bg-gray-100 text-center px-4">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-green-900 font-[Poppins]">
        Stay Connected With PetBite
      </h2>

      <p className="text-gray-600 mt-2 mb-6">
        Get pet care tips & exclusive offers
      </p>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-xl mx-auto">
        
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 px-4 py-2 border border-gray-300 
                     rounded-md sm:rounded-l-md sm:rounded-r-none
                     focus:outline-none focus:ring-2 focus:ring-green-700"
        />

        <button
          className="w-full sm:w-auto bg-green-900 text-white 
                     px-6 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none
                     hover:bg-green-800 transition duration-300"
        >
          Subscribe
        </button>

      </div>
    </div>
  );
};

export default Newsletter;
