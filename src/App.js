import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Support from "./components/Support";
import AllInOne from "./components/AllInOne";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
