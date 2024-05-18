import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

//   Tüm Child  bileşen içeriğini Parent bileşen içinde gösterin.
//   Yalnızca aşağıdaki Parent  Bileşene kod ekleyin

function Child() {
  return <div>children content</div>;
}

// Kodu sadece buraya ekleyin

function Parent(props) {
  return (
    <div>
      <h3>Parent Component</h3>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
