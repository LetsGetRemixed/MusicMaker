import React, { useState } from "react";

const PlayArea = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center">Your Mix</h2>
      <div className="text-center mt-6">
        <button
          onClick={togglePlay}
          className={`px-6 py-3 rounded-full transition ${
            isPlaying ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </section>
  );
};

export default PlayArea;
