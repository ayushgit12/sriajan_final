import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landing";
import Footer from "./components/Footer";
// import Signup from "./components/signup";
// import curtains from "/curtains.gif";  // Assuming this is in your public folder
// import { useState, useEffect } from "react";
import Deck from "./components/Deck";
import Merchandise from "./pages/Merchandise";
import Team from "./components/Team";
import AboutPage from "./components/About";

import Sponsorships from "./pages/Sponsorships";
import Events2 from "./pages/Events2";
function App() {
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
        </Routes>
        <div className="z-10">
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
