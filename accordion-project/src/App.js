import React, { useState } from "react";
import data from "./Page";
import "./styles.css";

export default function App() {
  const [text, setText] = useState([]);

  const handleClick = (id) => {
    if (text.includes(id)) {
      setText(text.filter((item) => item !== id));
    } else {
      setText([...text, id]);
    }
  };

  return (
    <div className="diiv">
      <h1>SSS/Accordion</h1>
      <h2>Konular</h2>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          {text.includes(item.id) ? <p>{item.information}</p> : ""}
          <button onClick={() => handleClick(item.id)}>
            {text.includes(item.id) ? "-" : "+"}
          </button>
        </div>
      ))}
    </div>
  );
}
