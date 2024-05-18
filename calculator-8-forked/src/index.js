import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [top, setTop] = useState(0);

  function onChange(e) {
    setText(e.target.value);
  }
  function inChange(e) {
    setText2(e.target.value);
  }
  function topChange() {
    setTop(+text + +text2);
  }

  return (
    <div className="App">
      <h1>İki Sayıyı Toplama</h1>

      <div className="number-inputs">
        <input
          type="number"
          className="input is-large"
          placeholder="0"
          value={text}
          onChange={onChange}
        />
        <input
          type="number"
          className="input is-large"
          placeholder="0"
          value={text2}
          onChange={inChange}
        />
      </div>

      <button onClick={topChange}>Topla!</button>

      <h2>{top}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
