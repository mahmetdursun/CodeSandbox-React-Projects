import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/**
 Giriş alanında karakter olmadığında Submit butonunu devre dışı bırakın.
  En az bir karakter olduğunda Submit butonunu etkinleştirin 
  (butonun devre dışı bırakılmasını kaldırın).
  
**/

function App() {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type="text" onChange={onChange} value={text} />
      <button disabled={!text}>Submit</button>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
