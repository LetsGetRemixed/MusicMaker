// Sounds.js
import { useRef, useEffect } from "react";

const Sounds = ({ selectedSounds, overallVolume, soundVolumes, effects }) => {
  const audioRefs = useRef({
    "Rain": "/Music/Calm/Rain.mp3",
    "Ocean Waves": "/Music/Calm/OceanWaves.mp3",
    "Wind Chimes": "/Music/Calm/WindChimes.mp3",
    "Soft Drum": "/Music/Calm/SoftDrum.mp3",
    "Smooth Synth": "/Music/Calm/SmoothSynth.mp3",
    "Chill Bass": "/Music/Calm/ChillBass.mp3",
  });

  const audioContexts = useRef({});
  const gainNodes = useRef({});
  const reverbNodes = useRef({});
  const bassBoostNodes = useRef({});

  useEffect(() => {
    selectedSounds.forEach((sound) => {
      if (!audioContexts.current[sound]) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const audio = new Audio(audioRefs.current[sound]);
        const source = audioContext.createMediaElementSource(audio);
        const gainNode = audioContext.createGain();
        const reverbNode = audioContext.createGain(); // Placeholder for reverb effect
        const bassBoostNode = audioContext.createBiquadFilter();
        bassBoostNode.type = "lowshelf";
        bassBoostNode.frequency.value = 200; // Frequency for bass boost
        bassBoostNode.gain.value = 0; // Default to no bass boost

        source.connect(gainNode);
        gainNode.connect(bassBoostNode);
        bassBoostNode.connect(reverbNode); // Connect reverb node here
        reverbNode.connect(audioContext.destination);

        audio.loop = true; // Loop the audio
        audioContexts.current[sound] = { audio, audioContext, gainNode, reverbNode, bassBoostNode };
        gainNodes.current[sound] = gainNode;
        reverbNodes.current[sound] = reverbNode;
        bassBoostNodes.current[sound] = bassBoostNode;
      }
    });

    return () => {
      Object.values(audioContexts.current).forEach(({ audio }) => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, [selectedSounds]);

  useEffect(() => {
    // Apply overall volume control
    Object.values(gainNodes.current).forEach((gainNode) => {
      gainNode.gain.value = overallVolume / 100;
    });
  }, [overallVolume]);

  useEffect(() => {
    // Adjust individual sound volumes
    Object.entries(soundVolumes).forEach(([sound, volume]) => {
      if (gainNodes.current[sound]) {
        gainNodes.current[sound].gain.value = volume / 100;
      }
    });
  }, [soundVolumes]);

  useEffect(() => {
    // Adjust reverb effect based on effects.reverb
    Object.values(reverbNodes.current).forEach((reverbNode) => {
      reverbNode.gain.value = effects.reverb / 100;
    });

    // Adjust bass boost based on effects.bassBoost
    Object.values(bassBoostNodes.current).forEach((bassBoostNode) => {
      bassBoostNode.gain.value = effects.bassBoost;
    });
  }, [effects]);

  const playSound = (sound) => {
    if (audioContexts.current[sound]) {
      audioContexts.current[sound].audio.play();
    }
  };

  const stopSound = (sound) => {
    if (audioContexts.current[sound]) {
      audioContexts.current[sound].audio.pause();
      audioContexts.current[sound].audio.currentTime = 0;
    }
  };

  useEffect(() => {
    selectedSounds.forEach((sound) => playSound(sound));
  }, [selectedSounds]);

  return null;
};

export default Sounds;



