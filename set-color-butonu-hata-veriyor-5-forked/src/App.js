import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("blue");
  const green = () => {
    if (color === "blue") {
      setColor("green");
    } else {
      setColor("blue");
    }
  };
  return (
    <div>
      <div style={{ color }}>
        <h1>Rengi ayarlamak için butona tıklayın</h1>
        <button style={{ fontSize: "20px" }} onClick={green}>
          Set color
        </button>
      </div>
    </div>
  );
}
