import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landing";
import Footer from "./components/Footer";
import Signup from "./components/signup";
import curtains from "/curtains.gif";  // Assuming this is in your public folder
import { useState, useEffect } from "react";

function App() {
  const [hasSeenCurtains, setHasSeenCurtains] = useState(false);

  useEffect(() => {
    // Check if the curtains GIF has already been played
    const curtainsPlayed = localStorage.getItem('curtainsPlayed');
    if (!curtainsPlayed) {
      setHasSeenCurtains(true);
      localStorage.setItem('curtainsPlayed', 'true'); // Mark as played
    }
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {/* {hasSeenCurtains && (
          <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', zIndex: '9999' }}>
            <img
              src={curtains}
              alt="Curtains"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        )} */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
