import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";
import Slider from "./Component/Slider";
import Feature_Reuse from "./Component/Feature-Reuse";
import Clients from "./Component/Clients";
import Logo from "./Component/Logo";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Card />
      <Slider />
      <Feature_Reuse />
      <Clients />
      <Logo />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
