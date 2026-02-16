import { useEffect, useState } from "react";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";


const slides = [
  {
    image: slide1, // 🐿️ Squirrel
    title: "Small Paws, Big Energy 🐿️",
    desc: "Nutritious food that keeps every tiny life active & happy",
  },
  {
    image: slide2, // 🕊️ Pigeon
    title: "Pure Food for Peaceful Wings 🕊️",
    desc: "Balanced grains for strength, flight & calm",
  },
  {
    image: slide3, // 🐱 Cat
    title: "Because Every Cat Deserves Royal Care 🐱",
    desc: "Delicious nutrition crafted for curious minds",
  },
  {
    image: slide4, // 🐰 Rabbit
    title: "Gentle Food for Gentle Hearts 🐰",
    desc: "Fresh, natural meals for a healthy hop",
  },
  {
    image: slide5, // 🐱 Cat looking at you
    title: "They Trust You. Feed Them Right. 🐾",
    desc: "Love, care & nutrition — in every bite",
  },
  {
    image: slide6, // 💭 Brand thought
    title: "More Than Food. It’s Care. 💚",
    desc: "Because animals are family, not just pets",
  },
];

export const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500); // 3.5 sec

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt="slide"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-end justify-center text-center px-4 pb-20">
  <div className="text-white max-w-2xl">

    <h1
      className="text-3xl md:text-5xl font-extrabold mb-4
                 tracking-wide font-[Poppins]"
    >
      {slides[current].title}
    </h1>

    <p
      className="text-base md:text-lg text-gray-200
                 font-light font-[Montserrat]"
    >
      {slides[current].desc}
    </p>

  </div>
</div>

     
    </div>
    <div className="w-full py-16 bg-green-50 flex justify-center items-center">
  <div className="text-center max-w-3xl px-4">

    <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 font-[Poppins] mb-3">
      More Than Food,
      <span className="text-lime-500"> It’s Love & Care</span>
    </h2>

    <div className="w-24 h-1 bg-lime-400 mx-auto mb-4 rounded-full"></div>

    <p className="text-base md:text-lg text-gray-700 font-[Montserrat]">
      Because every small life deserves healthy meals,
      gentle care, and a heart full of love 🐾
    </p>

  </div>
</div>
 

 {/* Offer  */}
<div className="bg-green-900 text-white text-center py-4">
  <p className="font-semibold">
    🎉 Flat 20% OFF on All Pet Food – Limited Time Only!
  </p>
</div>


 {/* for best */}
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
</div>
{/* Products kuch kuch  */}


<div className="py-16 bg-gray-50">
  <h2 className="text-3xl font-bold text-center text-green-900 mb-10 font-[Poppins]">
    Popular Pet Food
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">

    {[
      {
        name: "Premium Dog Food",
        price: "₹599",
        img: "https://images.unsplash.com/photo-1601758176175-45914394491b",
      },
      {
        name: "Healthy Cat Food",
        price: "₹549",
        img: "https://images.unsplash.com/photo-1596854307943-279e29c90c14",
      },
      {
        name: "Bird Seed Mix",
        price: "₹299",
        img: "https://images.unsplash.com/photo-1552728089-57bdde30beb3",
      },
      {
        name: "Rabbit Food Pellets",
        price: "₹349",
        img: "https://images.unsplash.com/photo-1548767797-d8c844163c4c",
      },
      {
        name: "Fish Food Flakes",
        price: "₹199",
        img: "https://images.unsplash.com/photo-1544551763-ced8a7e8b7b8",
      },
      {
        name: "Organic Dog Treats",
        price: "₹399",
        img: "https://images.unsplash.com/photo-1583511655936-41fdd63a4c92",
      },
      {
        name: "Cat Dry Food",
        price: "₹499",
        img: "https://images.unsplash.com/photo-1604908177522-4026f6dba9c2",
      },
      {
        name: "Nut Mix for Birds",
        price: "₹279",
        img: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
      },
    ].map((product, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
      >
        {/* Image */}
        <img
          src={product.img}
          alt={product.name}
          className="h-52 w-full object-cover"
        />

        {/* Content */}
        <div className="p-4 text-center">
          <h3 className="font-semibold text-green-800 text-sm">
            {product.name}
          </h3>

          <p className="text-green-900 font-bold mt-1">
            {product.price}
          </p>

          <div className="flex justify-center gap-3 mt-4">
            <button className="bg-green-900 text-white text-xs px-4 py-2 rounded hover:bg-green-800">
              Add to Cart
            </button>

            <button className="border border-green-900 text-green-900 text-xs px-4 py-2 rounded hover:bg-green-50">
              View More
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


{/* Why choose ous */}

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
    ].map((text, i) => (
      <div
        key={i}
        className="bg-green-800 rounded-xl p-6 text-center"
      >
        <p className="font-medium">{text}</p>
      </div>
    ))}
  </div>
</div>

{/* Best seling  */}

<div className="py-16 bg-gray-50">
  <h2 className="text-3xl font-bold text-center text-green-900 mb-10 font-[Poppins]">
    Best Sellers
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
    {[1, 2, 3, 4].map((_, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow p-4 text-center"
      >
        <div className="h-32 bg-gray-200 rounded mb-4"></div>
        <h3 className="font-semibold text-green-800">
          Premium Pet Food
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          Healthy & Nutritious
        </p>
        <p className="font-bold text-green-900">₹499</p>
      </div>
    ))}
  </div>
</div>

{/* Emotional Care  */}

<div className="py-20 bg-lime-100 text-center px-4">
  <h2 className="text-3xl md:text-4xl font-bold text-green-900 font-[Poppins] mb-4">
    Every Bowl You Fill Is an Act of Love 🐾
  </h2>
  <p className="text-gray-700 max-w-2xl mx-auto">
    Nutrition is not just food — it’s care, trust, and responsibility.
  </p>
</div>
{/* Customer love and trust  */}

<div className="py-16 bg-white">
  <h2 className="text-3xl font-bold text-center text-green-900 mb-10 font-[Poppins]">
    What Pet Parents Say
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
    {[
      "⭐️⭐️⭐️⭐️⭐️ My dog loves it!",
      "⭐️⭐️⭐️⭐️⭐️ Best quality food",
      "⭐️⭐️⭐️⭐️⭐️ Fast delivery & great care",
    ].map((review, i) => (
      <div
        key={i}
        className="bg-green-50 rounded-xl p-6 text-center"
      >
        <p className="text-green-800">{review}</p>
      </div>
    ))}
  </div>
</div>


{/* NewsLetter */}

<div className="py-16 bg-gray-100 text-center px-4">
  <h2 className="text-2xl font-bold text-green-900 mb-4 font-[Poppins]">
    Stay Connected With PetBite
  </h2>
  <p className="text-gray-600 mb-6">
    Get pet care tips & exclusive offers
  </p>

  <div className="flex justify-center gap-2">
    <input
      type="email"
      placeholder="Enter your email"
      className="px-4 py-2 rounded-l border outline-none"
    />
    <button className="bg-green-900 text-white px-6 rounded-r">
      Subscribe
    </button>
  </div>
</div>



    </>
  );
};

export default Home;
