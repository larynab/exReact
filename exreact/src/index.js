import React from "react";
import ReactDOM from "react-dom";
import NasaList from "./components/NasaList"

import "./index.css";

function App() {
  return (
    <div className="App">
      <h2>we need to see the space pics!</h2>
      <NasaList />
    </div>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


