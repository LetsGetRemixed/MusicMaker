// components/PlayStopControls.js
import React from "react";

const PlayStopControls = ({ onPlayAll, onStopAll }) => {
  return (
    <div className="flex gap-6 mt-8 justify-center">
      <button
        onClick={onPlayAll}
        className="px-8 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-green-600 focus:ring-4 focus:ring-green-300"
      >
        ▶ Play All
      </button>
      <button
        onClick={onStopAll}
        className="px-8 py-3 bg-red-500 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-red-600 focus:ring-4 focus:ring-red-300"
      >
        ■ Stop All
      </button>
    </div>
  );
};

export default PlayStopControls;

