// components/SoundButtons.js
import React from "react";

const SoundButtons = ({ sounds, selectedSounds, onAddOrRemoveSound }) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center p-8">
      {sounds.map((sound, index) => (
        <button
          key={index}
          onClick={() => onAddOrRemoveSound(sound)}
          className={`px-6 py-3 rounded-full font-semibold text-lg shadow-md transition-transform transform hover:scale-105 ${
            selectedSounds.includes(sound)
              ? "bg-gradient-to-r from-blue-500 to-indigo-700 text-white shadow-lg"
              : "bg-gray-800 hover:bg-gray-700 text-gray-200"
          }`}
        >
          {selectedSounds.includes(sound) ? `Remove ${sound}` : `Add ${sound}`}
        </button>
      ))}
    </div>
  );
};

export default SoundButtons;

