import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaWhatsapp } from "react-icons/fa";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16 lg:px-24">
      {/* Subscription Section */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Subscribe to Receive the Latest Discounts!
        </h2>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-80 p-3 rounded-l-lg text-gray-700 focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-r-lg text-lg">
            →
          </button>
        </div>
        <p className="text-sm text-gray-400 mt-3 leading-relaxed">
          By subscribing, you agree to Gladness Hairline’s{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Terms of Use
          </a>
          . You may unsubscribe at any time.
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://www.facebook.com/share/19pKHBQXhp/?mibextid=wwXIfr"
          className="text-white hover:text-blue-400"
        >
          <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
        </a>
        <a href="https://wa.me/message/R7Q6PQE3WCETP1" className="text-white">
          <FaWhatsapp className="text-2xl text-green-500" />
        </a>
        <a
          href="https://www.instagram.com/gladness_hairline_"
          className="text-white hover:text-pink-400"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        </a>
        <a href="#" className="text-white hover:text-red-400">
          <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
        </a>
        <a href="#" className="text-white hover:text-blue-300">
          <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <FontAwesomeIcon icon={faTiktok} className="text-2xl" />
        </a>
      </div>

      {/* Footer Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left max-w-5xl mx-auto mb-10">
        <div>
          <h3 className="font-semibold text-lg mb-3">About Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Usage
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Shipment & Payment
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help & FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li>+234 (070) 424-21322</li>
            <li>Wholesale: +8615038958671</li>
            <li>WhatsApp: +2347042421322</li>
            <li>
              <a
                href="https://www.instagram.com/gladness_hairline_"
                className="hover:underline"
              >
                @gladness_hairline.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold mb-4">Payment Methods</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
          <div className="border p-4 rounded-lg bg-gray-800">
            <p className="text-sm text-gray-300">Account No.: 7042421322</p>
            <p className="text-sm text-gray-300">Name: Gladness Raymond</p>
            <p className="font-semibold">Opay</p>
          </div>
          <div className="border p-4 rounded-lg bg-gray-800">
            <p className="text-sm text-gray-300">Account No.: 7042421322</p>
            <p className="text-sm text-gray-300">Name: Gladness Raymond</p>
            <p className="font-semibold">GTBank</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © 2025 Gladness Hairline. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
