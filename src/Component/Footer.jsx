import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useState } from "react";
function Footer() {
  const [email, setEmail] = useState("");
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with email: ${email}`);
    setEmail("");
  };
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-3xl font-bold bg-linear-to-r from-cyan-400 via-magenta-400 to-yellow-400 bg-clip-text text-transparent mb-4">
              Pradeep Furniture
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for high-quality custom furniture.
              Bringing your creative visions to life since 2020.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-magenta-400 transition-colors duration-300"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Products</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Kitchen
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-magenta-400 transition-colors duration-300"
                >
                  Wardrobe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Windows
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Door
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-magenta-400 transition-colors duration-300"
                >
                  Tv Cabinet
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Fall Ceiling
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-magenta-400 transition-colors duration-300"
                >
                  How It Works
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Quality Promise
                </a>
              </li>
              
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Get the latest templates and special offers delivered to your
              inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                required
              />
              <button
                type="submit"
                className="w-full bg-linear-to-r from-cyan-500 to-magenta-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6 space-y-2">
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <span>+91 9528836338</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <span>pradeepfurniture@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span>Agra, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Pradeep Furniture. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-magenta-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
