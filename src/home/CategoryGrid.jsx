const categories = [
  "Dog Food 🐶",
  "Cat Food 🐱",
  "Bird Food 🐦",
  "Rabbit Food 🐰",
  "Fish Food 🐠",
];

const CategoryGrid = () => (
  <div className="py-16 bg-white">
    <h2 className="text-3xl font-bold text-center text-green-900 mb-10 font-[Poppins]">
      Shop by Category
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto px-4">
      {categories.map((c) => (
        <div
          key={c}
          className="bg-green-50 rounded-xl p-6 text-center hover:bg-green-100 hover:scale-105 transition cursor-pointer"
        >
          <p className="font-semibold text-green-800">{c}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CategoryGrid;
