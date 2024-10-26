import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full p-4 bg-transparent text-white">
      <div className="flex justify-between items-center">
        <Link
          to="/mood"
          className="flex items-center px-6 py-3 text-lg font-semibold bg-gray-800 bg-opacity-60 rounded-full shadow-lg hover:bg-opacity-80 transition md:mb-6"
        >
          ⬅️ Back to Mood Selection
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;




