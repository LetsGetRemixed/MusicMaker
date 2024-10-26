import React from "react";

const VolumeControls = ({ overallVolume, onAdjustOverallVolume, soundVolumes, onAdjustSoundVolume, selectedSounds }) => {
  return (
    <>
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-center mb-6 text-white">Volume</h3>
        <div className="flex flex-col items-center md:flex-row md:justify-around">
          <div className="flex flex-col items-center bg-transparent rounded-xl p-6 w-96 shadow-lg hover:scale-105 transition-transform">
            <label className="block text-lg font-semibold text-center mb-4 text-white">
              Overall Volume: <span className="text-orange-400">{overallVolume}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={overallVolume}
              onChange={(e) => onAdjustOverallVolume(e.target.value)}
              className="w-full h-1.5 bg-gradient-to-r from-green-500 via-orange-500 to-red-500 rounded-lg appearance-none cursor-pointer focus:outline-none slider-thumb"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-3xl font-bold text-center mb-6 text-white">Sound Layers</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {selectedSounds.map((sound) => (
            <div
              key={sound}
              className="flex flex-col items-center bg-transparent rounded-xl p-6 w-96 shadow-lg hover:scale-105 transition-transform"
            >
              <label className="block text-lg font-semibold text-center mb-4 text-white">
                {sound} Volume: <span className="text-blue-400">{soundVolumes[sound] || 50}%</span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={soundVolumes[sound] || 50}
                onChange={(e) => onAdjustSoundVolume(sound, e.target.value)}
                className="w-full h-1.5 bg-gradient-to-r from-gray-700 via-blue-500 to-gray-700 rounded-lg appearance-none cursor-pointer focus:outline-none slider-thumb"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VolumeControls;



