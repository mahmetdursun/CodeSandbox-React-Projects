import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [text, setText] = useState([]);
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  const handleClick = (e) => {
    e.preventDefault();
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setText(data));
  };
  return (
    <div className="App">
      <h1>Game of Thrones Kitapları</h1>
      <h2>API'den liste alın ve görüntüleyin</h2>

      {/* Fetch data  API */}
      <div>
        <button onClick={handleClick} className="fetch-button">
          Fetch Data
        </button>
        <br />
      </div>

      {/* API'den gelen veriyi gösterin */}

      {/* Her kitap için aşağıdaki JSX'i kullanın*/}
      <div className="books">
        {text.map((item, index) => {
          return (
            <div className="book" key={item.name}>
              <h3>Book Number: {index}</h3>
              <h2>Book Name: {item.name}</h2>
              <div className="details">
                <p>👨: Author/Authors: {item.authors}</p>
                <p>📖: Number of pages: {item.numberOfPages}</p>
                <p>🏘️: Book Country: {item.country}</p>
                <p>⏰: Release date: {item.released}</p>
              </div>
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
