import { useState } from "react";
import Data from "./data.json";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Tabla from "./components/Tabla";

function App() {
  return(
    <div>
      <Hero />
      <Tabla/>
      <Footer />
    </div>
  );
}

export default App



