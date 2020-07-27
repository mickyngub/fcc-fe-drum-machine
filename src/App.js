import React from "react";
import DrumGrid from "./Components/DrumGrid";
import "./App.css";

const App = () => {
  return (
    <div id="drum-machine" className="App" style={{ margin: 30 }}>
      <DrumGrid></DrumGrid>
    </div>
  );
};

export default App;
