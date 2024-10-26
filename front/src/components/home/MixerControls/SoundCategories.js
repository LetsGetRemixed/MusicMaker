// components/SoundCategories.js
import React from "react";

const SoundCategories = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex gap-4 justify-center p-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-5 py-3 rounded-full font-semibold text-lg shadow-md transition-transform transform hover:scale-105 ${
            selectedCategory === category
              ? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg"
              : "bg-gray-800 hover:bg-gray-700 text-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default SoundCategories;

