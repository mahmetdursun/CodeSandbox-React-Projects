//Sıfırdan bir react uygulaması oluşturun.
//Bir h1 başlığı göstermelidir.
//Sırasız bir liste  (madde işaretleri) göstermelidir.
//3 liste elemanı içermelidir.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
