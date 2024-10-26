import React from "react";

const EffectControls = ({ effects, onAdjustEffect }) => {
  return (
    <div className="mb-8">
      <h3 className="text-3xl font-bold text-center mb-6 text-white">Audio Effects</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center bg-transparent rounded-xl p-6 w-96 shadow-lg hover:scale-105 transition-transform">
          <label className="block text-lg font-semibold text-center mb-4 text-white">
            Reverb: <span className="text-blue-400">{effects.reverb}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={effects.reverb}
            onChange={(e) => onAdjustEffect("reverb", e.target.value)}
            className="w-full h-1.5 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-800 rounded-lg appearance-none cursor-pointer focus:outline-none slider-thumb"
          />
        </div>

        <div className="flex flex-col items-center bg-transparent rounded-xl p-6 w-96 shadow-lg hover:scale-105 transition-transform">
          <label className="block text-lg font-semibold text-center mb-4 text-white">
            Bass Boost: <span className="text-yellow-400">{effects.bassBoost}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={effects.bassBoost}
            onChange={(e) => onAdjustEffect("bassBoost", e.target.value)}
            className="w-full h-1.5 bg-gradient-to-r from-yellow-200 via-orange-500 to-red-800 rounded-lg appearance-none cursor-pointer focus:outline-none slider-thumb"
          />
        </div>
      </div>
    </div>
  );
};

export default EffectControls;


