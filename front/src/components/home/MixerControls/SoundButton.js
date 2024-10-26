import React from "react";

const SoundButtons = ({ sounds, selectedSounds, onAddOrRemoveSound, selectedCategory }) => {
  return (
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-white mb-6">
        {selectedCategory}{selectedCategory && !selectedCategory.endsWith('s') ? ' Sounds' : ''}
      </h3>
      <div className="flex gap-4 flex-wrap justify-center p-8">
        {sounds.map((sound, index) => (
          <button
            key={index}
            onClick={() => onAddOrRemoveSound(sound)}
            className={`px-6 py-3 rounded-full font-semibold w-60 text-lg shadow-md transition-transform transform hover:scale-105 ${
              selectedSounds.includes(sound)
                ? "bg-gradient-to-r from-blue-500 to-indigo-700 text-white shadow-lg"
                : "bg-gray-700 hover:bg-gray-600 text-gray-200"
            }`}
          >
            {selectedSounds.includes(sound) ? `Remove ${sound}` : `Add ${sound}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SoundButtons;





