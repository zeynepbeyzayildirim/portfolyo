import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { NavBarHeader } from "./components/NavBarHeader.js";
import Banner from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Language_Ceritificate } from "./components/Language-Ceritificate";
import { Footer } from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ReactAudioPlayer from "react-audio-player";
import soundUrl from "./assets/sounds/soundback.mp3"


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
    {loading ? (
      <div className="loader">
        <div className="spinner"></div>
      </div>
    ) : (
    <div className="App">    
        <NavBarHeader />
        <Banner />
        <Skills />
        <Projects />
        <Experience />
        <Language_Ceritificate />
        <Footer />
    </div>
    )}
  </div>)}
export default App;
