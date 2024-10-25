
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/homepage';
import MoodSelection from './components/home/MoodSelection';

import MixerControls from './components/home/MixerControls/MixerControls';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mood" element={<MoodSelection />} />
        <Route path="/mixer" element={<MixerControls />} />
      
      </Routes>
    </Router>
  );
}
export default App;