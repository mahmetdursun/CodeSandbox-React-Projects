import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const handleClick = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <input value={text} type="text" onChange={handleClick} />
      <div className="cards">
        {pokemons
          .filter((item) => item.name.includes(text))
          .map((item) => (
            <CardItem name={item.name} sprite={item.sprite} key={item.name} />
          ))}
      </div>
    </div>
  );
}
