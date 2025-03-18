import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const navigate = useNavigate();
  return (
    <div className="w-40 bg-white shadow-md rounded-lg p-2">
      <button
        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={() => navigate("/login")}
      >
        Log in
      </button>
      <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
        Register
      </button>
    </div>
  );
};

export default UserDropdown;
