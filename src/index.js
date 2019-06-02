import React from "react";
import ReactDOM from "react-dom";
//import SoundButton from "./SoundButton";
import Container from "./Container";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
