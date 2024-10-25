import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './MoodSelection.css'; // Make sure this file exists and is updated

const MoodSelection = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const navigate = useNavigate();

  // Define gradient classes and comments for each mood
  const moodData = {
    Calm: {
      gradient: "bg-calm-gradient",
      comment: "You chose Calm. Relax, breathe, and unwind."
    },
    Energetic: {
      gradient: "bg-energetic-gradient",
      comment: "You chose Energetic. Get ready to move and groove!"
    },
    Focus: {
      gradient: "bg-focus-gradient",
      comment: "You chose Focus. Let’s zone in and get productive."
    },
    Happy: {
      gradient: "bg-happy-gradient",
      comment: "You chose Happy. Spread smiles and feel the joy!"
    },
    Sad: {
      gradient: "bg-sad-gradient",
      comment: "You chose Sad. It’s okay to feel blue; let’s play a soothing mix."
    }
  };

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleNavigateToMixer = () => {
    if (selectedMood) {
      navigate("/mixer", { state: { mood: selectedMood } });
    }
  };

  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center text-center transition-colors duration-500 ${
        selectedMood ? moodData[selectedMood].gradient : "bg-default-gradient"
      }`}
    >
      <h2 className="text-5xl font-bold text-with-shadow mb-8">
        How Do You Feel Today?
      </h2>
      <div className="flex flex-wrap justify-center mt-6 gap-4">
        {Object.keys(moodData).map((mood, index) => (
          <button
            key={index}
            onClick={() => handleMoodSelect(mood)}
            className={`mood-button ${selectedMood === mood ? "active" : ""}`}
          >
            {mood}
          </button>
        ))}
      </div>

      {/* Show the comment based on the selected mood */}
      {selectedMood && (
        <p className="mt-8 text-xl text-with-shadow font-semibold bg-overlay px-4 py-2 rounded-lg">
          {moodData[selectedMood].comment}
        </p>
      )}

      {/* Show the "Choose Your Sounds" button after selecting a mood */}
      {selectedMood && (
        <button onClick={handleNavigateToMixer} className="mt-6 px-8 py-3 custom-action-button">
          Choose Your Sounds
        </button>
      )}
    </section>
  );
};

export default MoodSelection;




