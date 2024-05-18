import { useState, useEffect } from "react";
import "./styles.css";

const url = "https://type.fit/api/quotes";

export default function App() {
  const [text, setText] = useState({});

  const getQuote = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setText(data[Math.floor(Math.random() * data.length)]);
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  const handleClick = () => {
    getQuote();
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Yeni Alıntı 🕵️‍♀️</button>
      <div className="text">
        <h1>{text?.text}</h1>
        <h2>{text?.author}</h2>
      </div>
    </div>
  );
}
