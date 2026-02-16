const Newsletter = () => (
  <div className="py-16 bg-gray-100 text-center">
    <h2 className="text-2xl font-bold text-green-900 font-[Poppins]">
      Stay Connected With PetBite
    </h2>
    <p className="text-gray-600 mb-6">
      Get pet care tips & exclusive offers
    </p>

    <div className="flex justify-center gap-2">
      <input className="px-4 py-2 border rounded-l" placeholder="Enter your email" />
      <button className="bg-green-900 text-white px-6 rounded-r">
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;
