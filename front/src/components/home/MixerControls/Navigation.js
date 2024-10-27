import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ onStopAll }) => {
  const handleStopAndNavigate = async () => {
    await onStopAll(); // Ensure sounds stop first
    // After sounds are stopped, redirect to moods
    document.getElementById("navigate-link").click();
  };

  return (
    <nav className="w-full p-4 bg-transparent text-white">
      <div className="flex justify-between items-center">
        <button
          onClick={handleStopAndNavigate}
          className="flex items-center px-6 py-3 text-lg font-semibold bg-gray-800 bg-opacity-60 rounded-full shadow-lg hover:bg-opacity-80 transition md:mb-6"
        >
          ⬅️ Back to Mood Selection
        </button>
        {/* Hidden link for navigation */}
        <Link
          id="navigate-link"
          to="/mood"
          style={{ display: "none" }}
        ></Link>
      </div>
    </nav>
  );
};

export default Navigation;





