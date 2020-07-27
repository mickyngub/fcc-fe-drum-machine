import React, { useRef, useState, useEffect, useCallback } from "react";
import Grid from "@material-ui/core/Grid";

const DrumGrid = () => {
  const [text, setText] = useState("");
  const keyPressHandler = useCallback((event) => {
    let { key } = event;
    key = key.toUpperCase();
    console.log(key);
    switch (key) {
      case "Q":
        setText("Heater-1");
        playSoundQ();
        break;
      case "W":
        setText("Heater-2");
        playSoundW();
        break;
      case "E":
        setText("Heater-3");
        playSoundE();
        break;
      case "A":
        setText("Heater-4");
        playSoundA();
        break;
      case "S":
        setText("Open-HH");
        playSoundS();
        break;
      case "D":
        setText("Kick n hat");
        playSoundD();
        break;
      case "Z":
        setText("Closed HH");
        playSoundZ();
        break;
      case "X":
        setText("Snare");
        playSoundX();
        break;
      case "C":
        setText("Clap");
        playSoundC();
        break;
      default:
        break;
    }
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", keyPressHandler);
    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  }, [keyPressHandler]);
  let audioQ = useRef();
  let audioW = useRef();
  let audioE = useRef();
  let audioA = useRef();
  let audioS = useRef();
  let audioD = useRef();
  let audioZ = useRef();
  let audioX = useRef();
  let audioC = useRef();

  const playSoundQ = () => {
    console.log(audioQ.current);
    audioQ.current.play();
  };
  const playSoundW = () => {
    console.log(audioW.current);
    audioW.current.play();
  };
  const playSoundE = () => {
    console.log(audioE.current);
    audioE.current.play();
  };
  const playSoundA = () => {
    console.log(audioA.current);
    audioA.current.play();
  };
  const playSoundS = () => {
    console.log(audioS.current);
    audioS.current.play();
  };
  const playSoundD = () => {
    console.log(audioD.current);
    audioD.current.play();
  };
  const playSoundZ = () => {
    console.log(audioZ.current);
    audioZ.current.play();
  };
  const playSoundX = () => {
    console.log(audioX.current);
    audioX.current.play();
  };
  const playSoundC = () => {
    console.log(audioC.current);
    audioC.current.play();
  };
  return (
    <div id="display">
      {text && text}
      <Grid container spacing={3} style={{ marginTop: 20 }}>
        <Grid
          item
          xs
          id="Heater1"
          className="drum-pad"
          style={{ backgroundColor: "steelblue", margin: 10 }}
          onClick={playSoundQ}
        >
          <p>Q</p>
          <audio
            id="Q"
            ref={audioQ}
            className="clip"
            type="audio/mp3"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          ></audio>
        </Grid>
        <Grid
          item
          xs
          id="Heater2"
          className="drum-pad"
          style={{ backgroundColor: "steelblue", margin: 10 }}
          onClick={playSoundW}
        >
          <audio
            ref={audioW}
            className="clip"
            id="W"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          ></audio>
          W
        </Grid>
        <Grid
          item
          xs
          id="Heater3"
          className="drum-pad"
          style={{ backgroundColor: "steelblue", margin: 10 }}
          onClick={playSoundE}
        >
          <audio
            ref={audioE}
            className="clip"
            id="E"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          ></audio>
          E
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid
          item
          xs
          id="Heater4"
          className="drum-pad"
          style={{ backgroundColor: "pink", margin: 10 }}
          onClick={playSoundA}
        >
          <audio
            ref={audioA}
            className="clip"
            id="A"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          ></audio>
          A
        </Grid>
        <Grid
          item
          xs
          id="Clap"
          className="drum-pad"
          style={{ backgroundColor: "pink", margin: 10 }}
          onClick={playSoundS}
        >
          <audio
            ref={audioS}
            className="clip"
            id="S"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          ></audio>
          S
        </Grid>
        <Grid
          item
          xs
          id="Open-HH"
          className="drum-pad"
          style={{ backgroundColor: "pink", margin: 10 }}
          onClick={playSoundD}
        >
          <audio
            ref={audioD}
            className="clip"
            id="D"
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          ></audio>
          D
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid
          item
          xs
          id="Kick-n'-Hat"
          className="drum-pad"
          style={{ backgroundColor: "yellow", margin: 10 }}
          onClick={playSoundZ}
        >
          <audio
            ref={audioZ}
            className="clip"
            id="Z"
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          ></audio>
          Z
        </Grid>
        <Grid
          item
          xs
          id="Kick"
          className="drum-pad"
          style={{ backgroundColor: "yellow", margin: 10 }}
          onClick={playSoundX}
        >
          <audio
            ref={audioX}
            className="clip"
            id="X"
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          ></audio>
          X
        </Grid>
        <Grid
          item
          xs
          id="Closed-HH"
          className="drum-pad"
          style={{ backgroundColor: "yellow", margin: 10 }}
          onClick={playSoundC}
        >
          <audio
            ref={audioC}
            className="clip"
            id="C"
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          ></audio>
          C
        </Grid>
      </Grid>
      {text && <h1>{text}</h1>}
    </div>
  );
};

export default DrumGrid;
