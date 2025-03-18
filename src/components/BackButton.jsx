import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="self-start px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg shadow-md transition duration-200"
    >
      ← Back
    </button>
  );
};

export default BackButton;
