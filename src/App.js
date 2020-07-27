import React from "react";
import DrumGrid from "./Components/DrumGrid";
import "./App.css";

const App = () => {
  let a = ["a", "b", 4];
  let b = { a: 4, b: "dsdf" };

  console.log(a);
  console.table(a);
  console.log(b);
  console.table(b);
  return (
    <div className="App" style={{ margin: 30 }}>
      Hello React!
      <DrumGrid></DrumGrid>
    </div>
  );
};

export default App;
