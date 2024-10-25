// components/PlayStopControls.js
import React from "react";

const PlayStopControls = ({ onPlayAll, onStopAll }) => {
  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={onPlayAll}
        className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
      >
        Play All
      </button>
      <button
        onClick={onStopAll}
        className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
      >
        Stop All
      </button>
    </div>
  );
};

export default PlayStopControls;
