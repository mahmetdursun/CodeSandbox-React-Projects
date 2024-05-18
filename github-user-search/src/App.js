import { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (text) => {
    const url = `https://api.github.com/search/users?q=${text}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.items);
        setText("");
      });
  };

  return (
    <div className="App">
      <div>
        <h1 className="h1">GitHub Kullanıcı Ara</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(text);
          }}
        >
          <input
            type="text"
            placeholder="Arama yap"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Ara</button>
        </form>
        {users.length > 0 && (
          <div className="users">
            {users.map((item) => (
              <div className="user" key={item.id}>
                <div>
                  <img src={item.avatar_url} alt="avatar" />
                </div>
                <div>
                  <a
                    href={item.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.login}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
