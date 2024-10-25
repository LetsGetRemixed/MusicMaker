import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './MixerControls.css'; 
import Sounds from "./Sounds";
import SoundCategories from "./SoundCategories";
import SoundButtons from "./SoundButton";
import VolumeControls from "./VolumeControls";
import EffectControls from "./EffectControls";
import PlayStopControls from "./PlayStopControls";

const MixerControls = () => {
  const location = useLocation();
  const { mood } = location.state || {};

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
  const [soundVolumes, setSoundVolumes] = useState({});
  const [mixer, setMixer] = useState({ overallVolume: 50, effects: { reverb: 5, bassBoost: 5 } });
  const [playAll, setPlayAll] = useState(false);
  const [stopAll, setStopAll] = useState(false);

  const addOrRemoveSound = (sound) => {
    if (selectedSounds.includes(sound)) {
      // Remove sound and stop playback (handled in Sounds.js)
      setSelectedSounds(selectedSounds.filter(s => s !== sound));
      const { [sound]: _, ...remaining } = soundVolumes;
      setSoundVolumes(remaining);
    } else {
      // Add new sound and set default volume
      setSelectedSounds([...selectedSounds, sound]);
      setSoundVolumes((prev) => ({ ...prev, [sound]: 50 }));
    }
  };

  const adjustOverallVolume = (value) => {
    setMixer((prev) => ({ ...prev, overallVolume: value }));
  };

  const adjustSoundVolume = (sound, value) => {
    setSoundVolumes((prev) => ({
      ...prev,
      [sound]: value,
    }));
  };

  const adjustEffect = (effect, value) => {
    setMixer((prev) => ({
      ...prev,
      effects: { ...prev.effects, [effect]: value }
    }));
  };

  const handlePlayAll = () => {
    console.log("Play All button clicked"); // Log when play is triggered
    setPlayAll(true);
    setStopAll(false);
  };
  
  const handleStopAll = () => {
    console.log("Stop All button clicked"); // Log when stop is triggered
    setPlayAll(false);
    setStopAll(true);
  };

  const categories = ["Ambient", "Beats", "Nature"];
  const sounds = moodSoundOptions[mood][selectedCategory];

  return (
    <section className="min-h-screen p-8 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-4">Mixer Controls - {mood} Mood</h2>

      <VolumeControls
        overallVolume={mixer.overallVolume}
        onAdjustOverallVolume={adjustOverallVolume}
        soundVolumes={soundVolumes}
        onAdjustSoundVolume={adjustSoundVolume}
        selectedSounds={selectedSounds}
      />

      <SoundCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <SoundButtons
        sounds={sounds}
        selectedSounds={selectedSounds}
        onAddOrRemoveSound={addOrRemoveSound}
      />

      <EffectControls
        effects={mixer.effects}
        onAdjustEffect={adjustEffect}
      />

      <PlayStopControls
        onPlayAll={handlePlayAll}
        onStopAll={handleStopAll}
      />

      <Sounds
        selectedSounds={selectedSounds}
        playAll={playAll}
        stopAll={stopAll}
        soundVolumes={soundVolumes}
        effects={mixer.effects}
        overallVolume={mixer.overallVolume}
      />
    </section>
  );
};

export default MixerControls;





