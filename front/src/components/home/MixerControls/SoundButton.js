// components/SoundButtons.js
import React from "react";

const SoundButtons = ({ sounds, selectedSounds, onAddOrRemoveSound }) => {
  return (
    <div className="flex gap-4 flex-wrap p-10">
      {sounds.map((sound, index) => (
        <button
          key={index}
          onClick={() => onAddOrRemoveSound(sound)}
          className={`px-4 py-2 rounded-full transition ${
            selectedSounds.includes(sound) ? "bg-blue-500 text-white" : "bg-gray-700 hover:bg-gray-600 text-gray-200"
          }`}
        >
          {selectedSounds.includes(sound) ? `Remove ${sound}` : `Add ${sound}`}
        </button>
      ))}
    </div>
  );
};

export default SoundButtons;
