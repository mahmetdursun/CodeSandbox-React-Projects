import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
    if (e.target.value === "açıl susam açıl") {
      alert("Geçebilirsiniz");
    }
  };

  return (
    <div className="App">
      <h2>Gizli kelime nedir?</h2>
      <input
        type="text"
        placeholder="süper gizli bilgi"
        value={text}
        onChange={handleInput}
      />
      <p>
        İpucu: <strong>açıl susam açıl</strong>
      </p>
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
