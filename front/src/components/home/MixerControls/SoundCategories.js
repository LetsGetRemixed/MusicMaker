import React from "react";

const SoundCategories = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-white mb-4">Select Sound Category</h3>
      <div className="flex gap-6 justify-center p-4 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-6 py-4 rounded-full font-bold text-xl tracking-wide transition-transform transform hover:scale-105 border-2 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white border-transparent shadow-2xl"
                : "bg-gray-700 text-gray-300 border-gray-500 hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SoundCategories;


