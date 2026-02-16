const Testimonials = () => (
  <div className="py-16 bg-white">
    <h2 className="text-3xl font-bold text-center text-green-900 mb-10 font-[Poppins]">
      What Pet Parents Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {[
        "⭐️⭐️⭐️⭐️⭐️ My dog loves it!",
        "⭐️⭐️⭐️⭐️⭐️ Best quality food",
        "⭐️⭐️⭐️⭐️⭐️ Fast delivery & great care",
      ].map((r) => (
        <div key={r} className="bg-green-50 p-6 rounded-xl text-center">
          {r}
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
