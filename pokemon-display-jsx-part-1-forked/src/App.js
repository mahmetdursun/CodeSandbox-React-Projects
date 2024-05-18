import React from "react";
import "./styles.css";
import { mockPokemonData } from "./mock/pokeData";
import { Card } from "./component/PokerCard";

export default function App() {
  return (
    <div className="App">
      <h1>{Card}</h1>
      <h2>{mockPokemonData.name}</h2>
      <img src={mockPokemonData.sprites.front_default} alt="asdsda" />
      <img src={mockPokemonData.sprites.front_shiny} alt="asdsda" />
      <br />
      <a href={mockPokemonData.video}>Charizard's greatest video</a>
    </div>
  );
}
