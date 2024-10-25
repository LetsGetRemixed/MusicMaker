import { useRef, useEffect, useCallback } from "react";

const Sounds = ({ selectedSounds, playAll, stopAll, soundVolumes, effects, overallVolume }) => {
  const audioRefs = useRef({
    "Rain": "/Music/Calm/Rain.mp3",
    "Ocean Waves": "/Music/Calm/OceanWaves.mp3",
    "Wind Chimes": "/Music/Calm/WindChimes.mp3",
    "Soft Drum": "/Music/Calm/SoftDrum.mp3",
    "Smooth Synth": "/Music/Calm/SmoothSynth.mp3",
    "Chill Bass": "/Music/Calm/ChillBass.mp3",
  });

  const audioContext = useRef(null);
  const audioElements = useRef({});
  const masterGain = useRef(null);

  const initializeAudioContext = useCallback(() => {
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
      masterGain.current = audioContext.current.createGain();
      masterGain.current.gain.value = overallVolume / 100;
      masterGain.current.connect(audioContext.current.destination);
    }

    if (audioContext.current.state === "suspended") {
      audioContext.current.resume();
    }
  }, [overallVolume]);

  const setupAudioNodes = useCallback(() => {
    selectedSounds.forEach((sound) => {
      if (!audioElements.current[sound]) {
        const audio = new Audio(audioRefs.current[sound]);
        audio.loop = true; // Ensure the audio loops automatically
        const track = audioContext.current.createMediaElementSource(audio);
        const gainNode = audioContext.current.createGain();
        const bassBoost = audioContext.current.createBiquadFilter();
        bassBoost.type = "lowshelf";
        bassBoost.frequency.value = 200;
        bassBoost.gain.value = effects.bassBoost;
  
        const reverbGain = audioContext.current.createGain();
        reverbGain.gain.value = effects.reverb / 100;
  
        track.connect(gainNode);
        gainNode.connect(bassBoost);
        bassBoost.connect(reverbGain);
        reverbGain.connect(masterGain.current);
  
        audioElements.current[sound] = { audio, gainNode, bassBoost, reverbGain };
      }
    });

    // Remove any audio that is not in selectedSounds
    Object.keys(audioElements.current).forEach((sound) => {
      if (!selectedSounds.includes(sound)) {
        const { audio } = audioElements.current[sound];
        audio.pause();
        audio.currentTime = 0;
        delete audioElements.current[sound];
      }
    });
  }, [effects, selectedSounds]);

  useEffect(() => {
    if (playAll) {
      initializeAudioContext();
      setupAudioNodes();
      Object.values(audioElements.current).forEach(({ audio }) => {
        if (audio.paused) {
          audio.play().catch(() => {});
        }
      });
    }

    if (stopAll) {
      Object.values(audioElements.current).forEach(({ audio }) => {
        audio.pause();
        audio.currentTime = 0;
      });
    }
  }, [playAll, stopAll, initializeAudioContext, setupAudioNodes]);

  useEffect(() => {
    Object.values(audioElements.current).forEach(({ bassBoost, reverbGain }) => {
      bassBoost.gain.setValueAtTime(effects.bassBoost, audioContext.current.currentTime);
      reverbGain.gain.setValueAtTime(effects.reverb / 100, audioContext.current.currentTime);
    });
  }, [effects]);

  useEffect(() => {
    Object.entries(soundVolumes).forEach(([sound, volume]) => {
      if (audioElements.current[sound]) {
        audioElements.current[sound].gainNode.gain.setValueAtTime(volume / 100, audioContext.current.currentTime);
      }
    });
  }, [soundVolumes]);

  useEffect(() => {
    if (masterGain.current) {
      masterGain.current.gain.setValueAtTime(overallVolume / 100, audioContext.current.currentTime);
    }
  }, [overallVolume]);

  return null;
};

export default Sounds;













