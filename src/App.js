import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Highlights from "./Components/Highlights";
import Sponsor from "./Components/Sponsor";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Sponsor />
      <Footer />
    </div>
  );
}

export default App;
