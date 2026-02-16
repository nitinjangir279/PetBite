const WhyChoose = () => (
  <div className="py-20 bg-green-900 text-white">
    <h2 className="text-3xl font-bold text-center mb-12 font-[Poppins]">
      Why Choose PetBite?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
      {[
        "🌿 100% Healthy Ingredients",
        "🐾 Made for Every Animal",
        "🚚 Fast & Safe Delivery",
        "💚 Loved by Pet Parents",
      ].map((t) => (
        <div key={t} className="bg-green-800 p-6 rounded-xl text-center">
          {t}
        </div>
      ))}
    </div>
  </div>
);

export default WhyChoose;
