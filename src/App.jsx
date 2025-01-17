import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landing";
import Footer from "./components/Footer";
// import Signup from "./components/signup";
// import curtains from "/curtains.gif";  // Assuming this is in your public folder
// import { useState, useEffect } from "react";
import { useRef, useEffect } from "react";
import EventsRegisterPage from "./pages/EventsRegisterPage.jsx";

import Deck from "./components/Deck";
import Merchandise from "./pages/Merchandise";
import Team from "./components/Team";
import AboutPage from "./components/About";

import Sponsorships from "./pages/Sponsorships";
import Events2 from "./pages/Events2";
import sound from "/sound1.mp3";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Play the audio when the app loads
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.warn("Audio autoplay prevented by the browser:", err);
        });
      }
    };

      // Start playing audio on load
      playAudio();

      // Add event listeners for user interactions to start audio
      window.addEventListener("click", playAudio);
      window.addEventListener("mousemove", playAudio);
  
      return () => {
        window.removeEventListener("click", playAudio);
        window.removeEventListener("mousemove", playAudio);
      };
    }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/events2" element={<Events2 />} />
          <Route path="/sponsorships" element={<Sponsorships />} />
          <Route path="/legion" element={<Team />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<Deck />} />
          <Route path="/events/:category" element={<EventsRegisterPage />} />
        </Routes>
        <div className="z-10">
          <Footer />
        </div>
        <audio ref={audioRef} src={sound} loop />
      </Router>
    </div>
  );
}

export default App;
