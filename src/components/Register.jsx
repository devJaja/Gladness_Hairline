import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import Socials from "./Socials";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";

const Register = () => {
  const navigate = useNavigate();
  const [phoneCode, setPhoneCode] = useState({
    label: "+1 (USA)",
    value: "+1",
  });
  const [phoneOptions, setPhoneOptions] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  // Fetch country codes
  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countries = response.data
          .filter((country) => country.idd?.root)
          .map((country) => ({
            label: `${country.idd.root}${
              country.idd.suffixes ? country.idd.suffixes[0] : ""
            } (${country.name.common})`,
            value: `${country.idd.root}${
              country.idd.suffixes ? country.idd.suffixes[0] : ""
            }`,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));

        setPhoneOptions(countries);
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };

    fetchCountryCodes();
  }, []);

  return (
    <div className="flex justify-center items-center md:min-h-screen bg-gray-50 md:gap-20">
      <BackButton />
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-center text-2xl font-bold mb-4">CREATE ACCOUNT</h2>

        {/* Input Fields */}
        <form className="space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="* Email Address"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-blue-500"
          />

          {/* Phone Number */}
          <div className="flex space-x-2">
            <Select
              options={phoneOptions}
              value={phoneCode}
              onChange={(selected) => setPhoneCode(selected)}
              className="w-1/3"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-blue-500"
            />
          </div>

          {/* Password */}
          <input
            type="password"
            placeholder="* Password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-blue-500"
          />

          {/* Checkbox */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="mt-1"
              required
            />
            <p className="text-sm text-gray-600">
              I consent to receiving a varying number of marketing messages via
              email and SMS. Message and data rates may apply. You may
              unsubscribe at any time. Reply HELP for help or STOP to opt out.
            </p>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800">
            CREATE ACCOUNT
          </button>

          {/* Terms & Conditions */}
          <p className="text-xs text-center text-gray-600 mt-2">
            By clicking register button, I agree to Gladness Hairline{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 underline">
              Terms of Use
            </a>
            .
          </p>
        </form>
        <Socials />
      </div>
      <div className="w-1/3 pl-4 flex flex-col items-center justify-center">
        <p className="mb-2">
          <a href="#" className="font-semibold text-black">
            Back to Customer Login
          </a>
        </p>
        <button
          className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800"
          onClick={() => navigate("/login")}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Register;
