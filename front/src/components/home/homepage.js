import React from 'react';
import HeroSection from './Hero';
import MoodSelection from './MoodSelection';
import MixerControls from './MixerControls';
import PlayArea from './PlayArea';

const Home = () => {
  return (
    <div className="font-rale">
      <div>
        <HeroSection />
        
        <PlayArea />
      </div>
    </div>
  );
};
export default Home;
