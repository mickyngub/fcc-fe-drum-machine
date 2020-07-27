import React from "react";
import DrumGrid from "./Components/DrumGrid";
import "./App.css";

const App = () => {
  return (
    <div id="drum-machine" className="App" style={{ margin: 30 }}>
      Hello React!
      <DrumGrid></DrumGrid>
      <div id="Heater-1" className="drum-pad">
        <audio
          className="clip"
          id="Q"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        ></audio>
        testing
      </div>
    </div>
  );
};

export default App;
