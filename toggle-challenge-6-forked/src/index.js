import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
/**
   Butonu işlevsel hale getirin
   Butona  her tıklandığında 'Toggle Change' dizesini değiştirmeli (göstermeli/gizlemelidir)

**/
function App() {
  const [text, setText] = useState("Toggle Challenge");
  const handleClick = () => {
    if (text === "Toggle Challenge") {
      setText("");
    } else {
      setText("Toggle Challenge");
    }
  };

  const [text2, setText2] = useState("Toggle Challenge");
  const handleClick2 = () => {
    if (text2 === "Toggle Challenge") {
      setText2("");
    } else {
      setText2("Toggle Challenge");
    }
  };

  return (
    <>
      <div>{text2}</div>
      <button onClick={handleClick2}>Hide Element Below</button>
      <div>{text}</div>
      <button onClick={handleClick}>Hide Element Below</button>
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
