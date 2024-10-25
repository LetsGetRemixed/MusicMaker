// components/VolumeControls.js
import React from "react";

const VolumeControls = ({ overallVolume, onAdjustOverallVolume, soundVolumes, onAdjustSoundVolume, selectedSounds }) => {
  return (
    <>
      <div className="mb-8">
        <label className="block mb-2 text-lg">Overall Volume</label>
        <input
          type="range"
          min="0"
          max="100"
          value={overallVolume}
          onChange={(e) => onAdjustOverallVolume(e.target.value)}
          className="slider"
        />
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Sound Layers</h3>
        {selectedSounds.map((sound) => (
          <div key={sound} className="mb-4">
            <label className="block mb-2 text-lg">{sound} Volume</label>
            <input
              type="range"
              min="0"
              max="100"
              value={soundVolumes[sound] || 50}
              onChange={(e) => onAdjustSoundVolume(sound, e.target.value)}
              className="slider"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default VolumeControls;
