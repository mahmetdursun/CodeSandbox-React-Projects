import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

/**
 * Verilerimiz users-data.js'den geliyor
 * -----------------------------
 */
import users from "./users-data";

/**
 * Verileri görüntülediğimiz React bileşenimiz
 * -----------------------------
 */
function App() {
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Array üzerinde yineleme yapın ve verileri görüntüleyin</h2>
      </div>

      {/* Array üzerinde yineleme yapın ve verileri görüntüleyin */}
      <div className="users">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.location}</p>
              <p>{user.car}</p>
            </div>
          );
        })}
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
