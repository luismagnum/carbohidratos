import { useState } from "react";
import Data from "./data.json";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Tabla from "./components/Tabla";
import Navbar from "./components/Navbar";

function App() {
  return(
    <div>
      <Navbar />
      <Hero />
      <Tabla/>
      <Footer />
    </div>
  );
}

export default App



