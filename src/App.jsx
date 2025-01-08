import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landing";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Landingpage />
      <Footer />
    </>
  );
}

export default App;
