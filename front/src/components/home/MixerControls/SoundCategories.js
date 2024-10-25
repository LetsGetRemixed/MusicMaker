// components/SoundCategories.js
import React from "react";

const SoundCategories = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex gap-4 p-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`category-button ${selectedCategory === category ? "active" : ""}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default SoundCategories;
