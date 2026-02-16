import { Link } from "react-router-dom";
import { FaInstagram, FaPaw } from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Offers", path: "/offer" },
  { name: "Cart", path: "/cart" },
  { name: "Login", path: "/login" },
];

const categories = [
  { name: "Dog Food", path: "/category/dog" },
  { name: "Cat Food", path: "/category/cat" },
  { name: "Bird Food", path: "/category/bird" },
  { name: "Rabbit Food", path: "/category/rabbit" },
  { name: "Fish Food", path: "/category/fish" },
];

const socialLinks = {
  instagram: "https://www.instagram.com/petbite.store", // 🔁 backend se aa sakta hai
};

export const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaPaw className="text-lime-400 text-2xl" />
            <h2 className="text-xl font-bold">PetBite</h2>
          </div>
          <p className="text-sm text-gray-200">
            Healthy & nutritious food for pets.
            Because every life deserves love & care 🐾
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lime-300">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-lime-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4 text-lime-300">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            {categories.map((cat) => (
              <li key={cat.name}>
                <Link to={cat.path} className="hover:text-lime-300">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold mb-4 text-lime-300">Contact</h3>
          <p className="text-sm text-gray-200 mb-2">📍 India</p>
          <p className="text-sm text-gray-200 mb-4">
            📧 support@petbite.com
          </p>

          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-lime-300"
          >
            <FaInstagram size={18} />
            Instagram
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-green-800 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} PetBite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
