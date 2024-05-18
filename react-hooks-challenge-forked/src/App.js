import "./styles.css";
import { useState } from "react";

let i = 0;
export default function App() {
  const [list, setList] = useState([]);

  const add = () => {
    setList([...list, i++]);
  };

  return (
    <div className="App">
      <button onClick={add}>Add</button>
      {list.map((val, index) => (
        <button onClick={add} key={index}>
          {val}
        </button>
      ))}
    </div>
  );
}
