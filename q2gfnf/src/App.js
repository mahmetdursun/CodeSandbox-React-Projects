import { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");

  const click = (e) => {
    setText(e.target.value);
  };

  const remove = () => {
    setText("");
  };

  const add = () => {
    setImg(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    );
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input onChange={click} value={text}></input>
      <h2>{text}</h2>

      <button onClick={remove}>sil</button>
      <button onClick={add}>ekle</button>
      <img src={img} />
    </div>
  );
}
