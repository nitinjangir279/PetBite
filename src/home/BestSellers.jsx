import React from 'react'

export const BestSellers = () => {
  return (
    <div>{/* for best */}
 <div className="py-16 bg-white">
  <h2 className="text-3xl font-bold text-center text-green-900 mb-10 font-[Poppins]">
    Shop by Category
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto px-4">
    {[
      { name: "Dog Food 🐶" },
      { name: "Cat Food 🐱" },
      { name: "Bird Food 🐦" },
      { name: "Rabbit Food 🐰" },
      { name: "Fish Food 🐠" },
    ].map((cat, i) => (
      <div
        key={i}
        className="bg-green-50 rounded-xl p-6 text-center
                   hover:bg-green-100 hover:scale-105
                   transition cursor-pointer"
      >
        <p className="font-semibold text-green-800">{cat.name}</p>
      </div>
    ))}
  </div>
</div></div>
  )
}
