import React from "react";
import "./styles.css";
import Data from "./component/PokeCards";

export default function App() {
  return (
    <div className="App">
      <h1>2. Challenge: Loops</h1>
      {/**
        Burada pokemonların listesini oluşturun
      */}
      <Data />
    </div>
  );
}
