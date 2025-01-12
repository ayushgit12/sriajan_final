import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landing";
import Footer from "./components/Footer";
import Signup from "./components/signup";

import Merchandise from "./pages/Merchandise";
import Sponsorships from "./pages/Sponsorships";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/sponsorships" element={<Sponsorships />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
