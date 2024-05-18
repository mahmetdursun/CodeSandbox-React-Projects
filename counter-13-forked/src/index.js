import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/**
'Arttır' butonuna tıklamak, sayaç sayısını bir artırmalıdır. `Azalt` bir azaltmalıdır.
**/

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h2>Sayı: {value}</h2>
      <button onClick={() => setValue((p) => p - 1)}>Azalt</button>
      <button onClick={() => setValue((p) => p + 1)}>Arttır</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
