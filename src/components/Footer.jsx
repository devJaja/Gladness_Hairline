import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PayPalLogo from "../assets/paypall.png";
import VisaLogo from "../assets/visa.png";
import MasterCardLogo from "../assets/mastercard.png";
import {
    faFacebookF,
    faPinterest,
    faInstagram,
    faYoutube,
    faTwitter,
    faTiktok,
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      {/* Subscription Section */}
      <div className="text-center mb-6">
        <h2 className="text-lg font-semibold mb-2">
          To Subscribe, You Will Receive The Latest Discounts.
        </h2>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Email Address"
            className="w-72 p-2 rounded-l-lg text-gray-700"
          />
          <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-r-lg">
            →
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          By Clicking The Button, You Agree To Gladness Hairline{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          And{" "}
          <a href="#" className="underline">
            Terms Of Use
          </a>
          . <br /> You May Unsubscribe At Any Time. Reply HELP For Help Or STOP To Opt
          Out.
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mb-6">
  <a href="https://www.facebook.com/share/19pKHBQXhp/?mibextid=wwXIfr" className="text-white">
    <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
  </a>
  <a href="#" className="text-white">
    <FontAwesomeIcon icon={faPinterest} className="text-2xl" />
  </a>
  <a href="#" className="text-white">
    <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
  </a>
  <a href="#" className="text-white">
    <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
  </a>
  <a href="#" className="text-white">
    <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
  </a>
  <a href="#" className="text-white">
    <FontAwesomeIcon icon={faTiktok} className="text-2xl" />
  </a>
</div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm mb-6">
        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <ul>
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
          <h3 className="font-semibold mb-2">Customer Service</h3>
          <ul>
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
            <li>
              <a href="#" className="hover:underline">
                Klarna
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Coupon / Cash / Points</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Coupon
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cash
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Points
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Contact Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wholesale
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Customer Service</h3>
          <ul>
            <li>+234 (070) 424-21322</li>
            <li>Wholesale (earn money): +8615038958671</li>
            <li>WhatsApp (save money): +2347042421322</li>
            <li>
              <a href="mailto:julia@juliahair.com" className="hover:underline">
                @gladness_hairline.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="text-center">
        <h3 className="text-lg font-bold mb-4">Payment Methods</h3>
        <div className="flex justify-center items-center space-x-4">
          <img
            src={PayPalLogo}
            alt="PayPal"
            className="h-6 object-contain"
          />
          <img
            src={VisaLogo}
            alt="Visa"
            className="h-6 object-contain"
          />
          <img
            src={MasterCardLogo}
            alt="MasterCard"
            className="h-6 object-contain"
          />
          <div>
            <p>Account no.: 7042421322</p>
            <p>Name: Gladness Raymond</p>
            <p>Opay</p>
          </div>
          <div>
            <p>Account no.: 7042421322</p>
            <p>Name: Gladness Raymond</p>
            <p>GTbank</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 text-sm text-gray-400">
        ©2025 Glasness Hairline. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
