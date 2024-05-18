import { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const clear = () => {
    setText("");
  };

  return (
    <>
      <div className="App">
        <label>
          {" "}
          ad:
          <input type="text" onChange={handleChange} value={text} />
          <h1>{text}</h1>
          <button onClick={clear}>sil</button>
        </label>
      </div>
    </>
  );
}
