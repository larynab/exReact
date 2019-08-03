import React from "react";
import ReactDOM from "react-dom";
import NasaList from "./components/NasaList"
import DoggoList from "./components/DoggoList"
import styled from 'styled-components';
import "./index.css";

const AppDiv = styled.div`

align-items: center;
margin: 0 auto;
text-align: center;
background: grey;
`

function App() {
  return (
    <AppDiv className="App">
      {/* <h2>we need to see the space pics!</h2> */}
      <DoggoList />
      <NasaList />

    </AppDiv>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


