import HeroSlider from "./HeroSlider";
import ThoughtSection from "./ThoughtSection";
import OfferStrip from "./OfferStrip";
import CategoryGrid from "./CategoryGrid";
import ProductGrid from "./ProductGrid";
import WhyChoose from "./WhyChoose";
import EmotionalBanner from "./EmotionalBanner";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";

import { productsData } from "../data/tempData";

const Home = () => {
  const handleAddToCart = (id) => {
    console.log("Add to cart:", id); // backend later
  };

  return (
    <>
      <HeroSlider />
      <ThoughtSection />
      <OfferStrip />
      <CategoryGrid />
      <ProductGrid products={productsData} onAddToCart={handleAddToCart} />
      <WhyChoose />
      <EmotionalBanner />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;
