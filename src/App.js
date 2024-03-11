import React from "react";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import About from "./components/About";
import Credits from "./components/Credits";
import NavBar from "./components/NavBar";
import OpenPositions from "./components/OpenPositions";

import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Footer></Footer>
        <OpenPositions></OpenPositions>
        
        <Credits></Credits>
      </div>
    </div>
  );
}

export default App;
