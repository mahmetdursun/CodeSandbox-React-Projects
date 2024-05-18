import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [keys, setKeys] = useState([]);
  function onKeyPress(e) {
    console.log(e);
    const keyPressed = e.key;
    setKeys([...keys, keyPressed]);
  }
  return (
    <div className="App">
      <h5>Karakter Tipi: {keys}</h5>
      <div>
        <input placeholder="buraya yazın" onKeyDown={onKeyPress} />
      </div>
    </div>
  );
}
