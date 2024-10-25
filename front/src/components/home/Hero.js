import React from "react";
import { useNavigate } from "react-router-dom";
import './Hero.css'; // Make sure this file exists and is updated

const Hero = () => {

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/mood"); // Navigate to the Mood page
      };
      return (
        <header className="hero-section text-center flex flex-col items-center justify-center min-h-screen">
          <h1 className="title text-5xl md:text-6xl font-extrabold px-4">
            Mood Music
          </h1>
          <p className="mt-4 text-lg md:text-xl px-6 max-w-2xl">
            Craft the perfect ambient mix and find your moment of peace.
          </p>
          <button 
            onClick={handleGetStarted} 
            className="mt-8 px-8 py-3 custom-button"
          >
            Get Started
          </button>
        </header>
      );
    };
    
    export default Hero;



