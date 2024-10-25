import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './MixerControls.css'; // Make sure to create and update this CSS file
import PlayArea from "./PlayArea";

const MixerControls = () => {
  const location = useLocation();
  const { mood } = location.state || {};

  // Define sound options based on mood categories
  const moodSoundOptions = {
    Calm: {
      Ambient: ["Rain", "Ocean Waves", "Wind Chimes"],
      Beats: ["Soft Drum", "Smooth Synth", "Chill Bass"],
      Nature: ["Birds Chirping", "Gentle Breeze", "River Stream"],
    },
    Energetic: {
      Ambient: ["High Energy Synth", "Electric Guitar", "Pumping Bass"],
      Beats: ["Upbeat Drum", "Claps", "Dance Rhythm"],
      Nature: ["Thunderstorm", "Wind", "Waves Crashing"],
    },
    Focus: {
      Ambient: ["White Noise", "Soft Piano", "Ambient Hum"],
      Beats: ["Soft Beats", "Bongo Taps", "Soft Bass"],
      Nature: ["Birds Chirping", "Rustling Leaves", "Water Drip"],
    }
  };

  const [selectedCategory, setSelectedCategory] = useState("Ambient");
  const [selectedSounds, setSelectedSounds] = useState([]);
  const [mixer, setMixer] = useState({ overallVolume: 50, soundLayers: {}, effects: { reverb: 0, bassBoost: 0 } });

  const addOrRemoveSound = (sound) => {
    if (selectedSounds.includes(sound)) {
      setSelectedSounds(selectedSounds.filter(s => s !== sound));
      setMixer(prev => {
        const { [sound]: _, ...remainingLayers } = prev.soundLayers;
        return { ...prev, soundLayers: remainingLayers };
      });
    } else {
      setSelectedSounds([...selectedSounds, sound]);
      setMixer(prev => ({
        ...prev,
        soundLayers: { ...prev.soundLayers, [sound]: { volume: 50 } }
      }));
    }
  };

  const adjustOverallVolume = (value) => {
    setMixer(prev => ({ ...prev, overallVolume: value }));
  };

  const adjustSoundVolume = (sound, value) => {
    setMixer(prev => ({
      ...prev,
      soundLayers: { ...prev.soundLayers, [sound]: { volume: value } }
    }));
  };

  const adjustEffect = (effect, value) => {
    setMixer(prev => ({
      ...prev,
      effects: { ...prev.effects, [effect]: value }
    }));
  };

  const renderSoundButtons = () => {
    const sounds = moodSoundOptions[mood][selectedCategory];
    return sounds.map((sound, index) => (
      <button
        key={index}
        onClick={() => addOrRemoveSound(sound)}
        className={`px-4 py-2 rounded-full transition ${
          selectedSounds.includes(sound) ? "bg-blue-500 text-white" : "bg-gray-700 hover:bg-gray-600 text-gray-200"
        }`}
      >
        {selectedSounds.includes(sound) ? `Remove ${sound}` : `Add ${sound}`}
      </button>
    ));
  };

  return (
    <section className="min-h-screen p-8 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-4">Mixer Controls - {mood} Mood</h2>
      
      <div className="mb-8">
        <label className="block mb-2 text-lg">Overall Volume</label>
        <input
          type="range"
          min="0"
          max="100"
          value={mixer.overallVolume}
          onChange={(e) => adjustOverallVolume(e.target.value)}
          className="slider"
        />
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Sound Categories</h3>
        <div className="flex gap-4">
          {["Ambient", "Beats", "Nature"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-button ${
                selectedCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Available Sounds - {selectedCategory}</h3>
        <div className="flex gap-4 flex-wrap">{renderSoundButtons()}</div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Sound Layers</h3>
        {Object.keys(mixer.soundLayers).map((sound) => (
          <div key={sound} className="mb-4">
            <label className="block mb-2 text-lg">{sound} Volume</label>
            <input
              type="range"
              min="0"
              max="100"
              value={mixer.soundLayers[sound].volume}
              onChange={(e) => adjustSoundVolume(sound, e.target.value)}
              className="slider"
            />
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Audio Effects</h3>
        <div>
          <label className="block mb-2 text-lg">Reverb</label>
          <input
            type="range"
            min="0"
            max="100"
            value={mixer.effects.reverb}
            onChange={(e) => adjustEffect("reverb", e.target.value)}
            className="slider"
          />
        </div>
        <div>
          <label className="block mb-2 text-lg">Bass Boost</label>
          <input
            type="range"
            min="0"
            max="100"
            value={mixer.effects.bassBoost}
            onChange={(e) => adjustEffect("bassBoost", e.target.value)}
            className="slider"
          />
        </div>
      </div>
      <PlayArea />
    </section>
  );
};

export default MixerControls;


