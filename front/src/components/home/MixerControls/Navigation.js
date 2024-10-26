import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-transparent text-white backdrop-transparent z-50">
      <Link
        to="/mood"
        className="flex items-center px-4 py-2 text-lg font-semibold bg-gray-800 bg-opacity-60 rounded-full shadow-lg hover:bg-opacity-80 transition"
      >
        ⬅️ Back to Mood Selection
      </Link>
    </nav>
  );
};

export default Navigation;



