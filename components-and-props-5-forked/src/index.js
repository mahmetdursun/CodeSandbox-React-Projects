import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

// Alt bileşen olan Statcard bileşenini burada oluşturun
function StatCard(props) {
  const { icon, label, number } = props;
  return (
    // bileşeni burada tanımlayın
    <div className="stat-card">
      <div className="stat-line">
        <span>
          {icon} {label}
        </span>
      </div>
      <p>{number}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2>React Bileşenlerini ve Propları kullanma</h2>
      <StatCard icon="🎈" label="Points" number="2000" />
      <StatCard icon="🧨" label="Lightnings" number="3584" />
      <StatCard icon="🎨" label="Shakas" number="4947" />
      <StatCard icon="🎃" label="Diamonds" number="89657" />
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
