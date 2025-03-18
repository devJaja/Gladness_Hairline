import Socials from "./Socials";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center md:min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-8 shadow-lg flex">
        {/* Login Section */}
        <div className="w-1/2 pr-4 border-r">
          <h2 className="text-xl font-semibold mb-4">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border mb-2"
          />
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot your password?
          </a>
          <button className="w-full bg-black text-white py-2 mt-3">
            LOGIN
          </button>

          {/* Social Login */}
          <Socials />
        </div>

        {/* Signup Section */}
        <div className="w-1/2 pl-4 flex flex-col items-center justify-center">
          <p className="mb-2">
            Not a member?{" "}
            <a href="#" className="font-semibold text-black">
              Join US
            </a>
          </p>
          <button
            className="bg-black text-white py-2 px-6"
            onClick={() => navigate("/register")}
          >
            CREATE AN ACCOUNT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
