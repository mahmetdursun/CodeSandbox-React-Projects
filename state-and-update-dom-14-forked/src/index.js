import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  // KODUNUZ  BURADA OLACAK
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };
  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Inputtan Verileri Güncelleme</h2>
      </div>

      {/* Verileri Göster */}
      <div className="input-display">
        <p>İsmi Göster: {name} </p>
        <p>Yaşı Göster: {age} </p>
      </div>

      {/* Kullanıcı Girdilerini Toplayın */}
      <div className="inputs">
        {/* isim input */}
        <div className="field">
          <label className="label">İsmi: </label>
          <input
            className="input"
            value={name}
            onChange={handleName}
            type="text"
            placeholder="Namık"
          />
        </div>

        {/* yaş input */}
        <div className="field">
          <label className="label">Yaşı: </label>
          <input
            className="input"
            value={age}
            onChange={handleAge}
            type="number"
            placeholder="28"
          />
        </div>
      </div>
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
