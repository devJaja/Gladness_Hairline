import { useNavigate } from "react-router-dom"

const Button = () => {
    const navigate = useNavigate();
  return (
    <button
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 font-semibold mt-8"
        onClick={() => navigate("/class-form")} // Updated navigation
        >
        Register
    </button>
  )
}

export default Button
