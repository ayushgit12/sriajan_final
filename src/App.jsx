import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landing";
import Footer from "./components/Footer";
// import Signup from "./components/signup";
// import curtains from "/curtains.gif"; // Assuming this is in your public folder
// import { useState, useEffect } from "react";

import Merchandise from "./pages/Merchandise";
import Team from "./components/Team";
import AboutPage from "./components/About";

function App() {
  // const [hasSeenCurtains, setHasSeenCurtains] = useState(false);

  // useEffect(() => {
  //   // Check if the curtains GIF has already been played
  //   const curtainsPlayed = localStorage.getItem("curtainsPlayed");
  //   if (!curtainsPlayed) {
  //     setHasSeenCurtains(true);
  //     localStorage.setItem("curtainsPlayed", "true"); // Mark as played
  //   }
  // }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/legion" element={<Team />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
