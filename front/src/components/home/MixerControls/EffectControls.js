// components/EffectControls.js
import React from "react";

const EffectControls = ({ effects, onAdjustEffect }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Audio Effects</h3>
      <div className="mb-4">
        <label className="block mb-2 text-lg">Reverb</label>
        <input
          type="range"
          min="0"
          max="100"
          value={effects.reverb}
          onChange={(e) => onAdjustEffect("reverb", e.target.value)}
          className="slider"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-lg">Bass Boost</label>
        <input
          type="range"
          min="0"
          max="100"
          value={effects.bassBoost}
          onChange={(e) => onAdjustEffect("bassBoost", e.target.value)}
          className="slider"
        />
      </div>
    </div>
  );
};

export default EffectControls;
