import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landing";
import Footer from "./components/Footer";
import Merchandise from "./pages/Merchandise";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/merchandise" element={<Merchandise />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
