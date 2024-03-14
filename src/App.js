import React, { useState } from "react";
import Intro from "./components/Intro";
import PostJob from "./components/PostJob";
import About from "./components/About";
import Credits from "./components/Credits";
import NavBar from "./components/NavBar";
import OpenPositions from "./components/OpenPositions";

import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
  const [positions, setPositions] = useState([]);

  const updatePositions = (newPosition) => {
    setPositions((prevPositions) => [...prevPositions, newPosition]);
  };

  return (
    <div className="App">
      <NavBar />
      <div id="content">
        <Intro />
        <About />
        <PostJob updatePositions={updatePositions} />
        <OpenPositions positions={positions} />
        <Credits />
      </div>
    </div>
  );
}

export default App;
