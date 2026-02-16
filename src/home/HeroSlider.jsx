import { useEffect, useState } from "react";
import slide1 from "../assets/slides/slide1.jpg";
import slide2 from "../assets/slides/slide2.jpg";
import slide3 from "../assets/slides/slide3.jpg";
import slide4 from "../assets/slides/slide4.jpg";
import slide5 from "../assets/slides/slide5.jpg";
import slide6 from "../assets/slides/slide6.jpg";

const slides = [
  { image: slide1, title: "Small Paws, Big Energy 🐿️", desc: "Nutritious food that keeps every tiny life active & happy" },
  { image: slide2, title: "Pure Food for Peaceful Wings 🕊️", desc: "Balanced grains for strength, flight & calm" },
  { image: slide3, title: "Because Every Cat Deserves Royal Care 🐱", desc: "Delicious nutrition crafted for curious minds" },
  { image: slide4, title: "Gentle Food for Gentle Hearts 🐰", desc: "Fresh, natural meals for a healthy hop" },
  { image: slide5, title: "They Trust You. Feed Them Right. 🐾", desc: "Love, care & nutrition — in every bite" },
  { image: slide6, title: "More Than Food. It’s Care. 💚", desc: "Because animals are family, not just pets" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      3500
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.image}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-20 text-center px-4">
        <div className="text-white max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 font-[Poppins]">
            {slides[current].title}
          </h1>
          <p className="text-gray-200 font-[Montserrat]">
            {slides[current].desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
