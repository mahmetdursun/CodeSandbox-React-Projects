import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React, { useState, useEffect } from "react";

function GitHubUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data); // set users  state
      });
  }, []); // boş dizi çünkü yalnızca bir kez çalıştırıyoruz
  return (
    <div className="section">
      {users.map((user) => {
        return (
          <div key={user.id} className="card">
            <h5>{user.login}</h5>
          </div>
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GitHubUsers />
  </StrictMode>
);
